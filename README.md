# kubernetes_lke1

https://www.youtube.com/watch?v=-pTel5FojAQ

npx create-react-app client

mkdir ./server && cd server && npm init

npm i #npm install

w katalogu głównym:

docker-compose up --build

cd client

docker run -it -p 3000:3000 chriscanna/pern_client

docker push chriscanna/lke_pern

cd server

docker run -it -p 4002:5000 chriscanna/pern_server

>kubernetes

https://www.youtube.com/watch?v=OVVGwc90guo&t=14s

cd lke_pern

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.46.0/deploy/static/provider/cloud/deploy.yaml

kubectl create secret generic pgpassword --from-literal PGPASSWORD=1234test

kubectl apply -f k8s

kubectl get services 

kubectl get pods

kubectl delete -f k8s


#######################################################

https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

https://www.youtube.com/watch?v=JGtJj_nAA2s

export KUBECONFIG=test-kubeconfig.yaml

echo $KUBECONFIG

dziala tylko w jednym panelu tilix

kubectl get node

#https://helm.sh/docs/intro/install/

chmod 620 test-kubeconfig.yaml

helm repo add bitnami https://charts.bitnami.com/bitnami

helm search repo bitnami

cd sekret

#helm install mongodb --values ../test-mongodb.yaml bitnami/mongodb

kubectl get pod 

kubectl get all

kubectl get secret

#kubectl get secret mongodb -o yaml

#kubectl apply -f ../test-mongo-express.yaml

#<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
helm repo add stable https://kubernetes-charts.storage.googleapis.com/ #nie

helm repo add stable https://charts.helm.sh/stable/

helm install nginx-ingress stable/nginx-ingress --set controller.publishService.enabled=true #nie

helm uninstall nginx-ingress

helm repo remove stable

helm repo add nginx-stable https://helm.nginx.com/stable

helm repo update

helm install nginx-ingress nginx-stable/nginx-ingress --set controller.publishService.enabled=true #nie ma poda backend

helm uninstall nginx-ingress

helm repo remove nginx-stable
#<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>
#helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

helm repo update

helm install nginx-ingress ingress-nginx/ingress-nginx --set controller.publishService.enabled=true

kubectl get svc

#kubectl apply -f ../test-ingress.yaml

#Warning: extensions/v1beta1 Ingress is deprecated in v1.14+, unavailable in v1.22+; use networking.k8s.io/v1 Ingress

#kubectl scale --replicas=0 statefulset/mongodb

delete cluster, nodebalancer, vms, volumes in linode dashboard
