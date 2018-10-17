const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<br/><br/><br/><center><h1>Hi there from inside a Docker container!</h1></center>');
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
});
