# Simple Node k8s
Running simple node server using k8s

There's 2 server running
- main
- sub (api)

Main is public exposed.
Sub is internal service as an API.

## Prequisted
- Docker
- Kubernetes
- Nginx Ingress

## Setup
```bash
./setup.sh
```

## Run k8s
```bash
cd k8s
./up.sh

# Test
curl localhost:30001
```

## Stop k8s
```bash
cd k8s
./down.sh
```

## main
Available:
- / 
    - Landing
- /env
    - Show `process.env.message`
- /talk 
    - Fetch api from sub

## sub
Available:
- / 
    - Landing
- /env
    - Show `process.env.message`
- /api
    - Return json