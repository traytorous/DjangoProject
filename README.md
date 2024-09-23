# DjangoProject

## Set up docker containers. This set's up the database and pdgadmn (use if neccessary)

docker-compose up -d -> Run docker container as daemon

## Debugging tips

### Network issues (DNS)
Run the command below if you are having network connectivity issues with docker container
'sudo mkdir /etc/docker-net-backup; sudo cp /etc/docker/daemon.json /etc/docker-net-backup;  sudo cp docker-configuration/daemon.json /etc/docker/;'

### error checking context: can't stat error
run the command sudo chown $(whoami) postgres -R 
