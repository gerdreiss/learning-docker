const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    console.log('executing / request');
    client.get('visits', (err, visits) => {
        res.send('<br/><center><h1>Hello!</h1></center><br/><center><h2>Number of visits is ' + visits + '</h2></center>');
        client.set('visits', parseInt(visits) + 1);
    });
});

app.get('/hello', (req, res) => {
    console.log('executing /hello request');
    client.get('visits', (err, visits) => {
        res.send('<br/><br/><br/><center><h1>Hello from inside a Docker container</h1></center>');
        client.set('visits', parseInt(visits) + 1);
    });
});

app.get('/crash', (req, res) => {
    console.log('stopping the container without restarting');
    process.exit(0);
});

app.get('/crashnrestart', (req, res) => {
    console.log('stopping and restarting the container after an error');
    process.exit(1);
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});

