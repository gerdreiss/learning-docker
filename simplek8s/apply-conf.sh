kubectl apply -f client-pod.yaml
kubectl apply -f client-node-port.yaml

echo access with http://$(minikube ip):31515/