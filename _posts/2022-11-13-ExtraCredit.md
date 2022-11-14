---
toc: true
layout: post
comments: true
description: These are my Extra Credit homework notes.
categories: [APCSP]
title: AWS Deployment Guide Notes
---

Deployment: delivering the application so that it works on the internet web page.

to update/upgrade all packages on EC2, use command "sudo apt update; sudo apt upgrade"

to install Java Runtime Environment, use commands "sudo apt install default-jre" and "java -version"

to install Java Development Kit, use commands "sudo apt install default-jdk" and "javac -version"

to buid project, install Maven by using commands "sudo apt update", "sudo apt upgrade", "sudo apt install maven" and "mvn -version"

to Clone and Change Directory to project location, use commands "cd" and "git clone https://github.com/nighthawkcoders/spring_portfolio.git"

Maven Build and Jar package command: 
$ cd ~/spring_portfolio
$ ./mvnw package

If Maven fails, try this and repeat Maven command:
$ sudo apt install -y dos2unix
$ dos2unix ./mvnw
$ chmod +x ./mvnw

If Maven still fails, try this command:
$ sudo nano pom.xml

 - showed java version to be 17
 - had to correct it to 11

Run Java Application
$ cd ~/spring_portfolio
$ java -jar target/spring-0.0.1-SNAPSHOT.jar

At this point we will type ctrl+c as we will now run a Docker File to do this step

Edit Dockerfile:
$ nano Dockerfile

Didn't need to make any changes

Edit docker-compose.yml:
$ nano docker-compose.yml

Make sure I am in project directory:
$ cd ~/spring_portfolio/

install docker-compose:
$ sudo apt install docker-compose -y

Run docker-compose: 
$ sudo docker-compose up -d

Verifying Web Application via Docker commands:

$ docker-compose ps

$ docker ps

$ docker images

TTL for DNS = 5 mins (cloudns site)

To make a new domain on cloudns site, go to dashboard & register a new domain



Install Nginx on Ubuntu servers (not in my project directory)
$ sudo apt install nginx

Go to location of Nginx server configuration files
$ cd /etc/nginx/sites-available

Open editor to Create your own “Nginx server configuration”
$ sudo nano coolcodersjava

Nginx server configuration should show:
server {
    listen 80;
    listen [::]:80;
    server_name coolcodersjava.pw www.coolcodersjava.pw;

    location / {
        proxy_pass http://localhost:8085;
        # Simple requests
        if ($request_method ~* "(GET|POST)") {
                add_header "Access-Control-Allow-Origin"  *;
        }

        # Preflight requests
        if ($request_method = OPTIONS ) {
                add_header "Access-Control-Allow-Origin"  *;
                add_header "Access-Control-Allow-Methods" "GET, POST, OPTIONS, HEAD";
                add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Requested-With, Content-Type, Accept";
                return 200;
        }
    }
}

Activate/enabled Nginx server configuration:
nginx configuration file: coolcodersjava
$ sudo ln -s /etc/nginx/sites-available/coolcodersjava /etc/nginx/sites-enabled
$ sudo nginx -t

If there are no errors, restart NGINX so the server is an endpoint to the internet:
$ sudo systemctl restart nginx

Testing HTTP endpoint:
$ curl http://localhost:8085;

Testing unsecure HTTP endpoint on the internet. Go to a browser an type your DNS domain: http://coolcodersjava.pw

Certbot step:
$ sudo snap install core; sudo snap refresh core
$ sudo snap install --classic certbot
$ sudo ln -s /snap/bin/certbot /usr/bin/certbot
$ sudo certbot --nginx

$ crontab -e # edit crontab file

0 12 * * * /usr/bin/certbot renew --quiet # add this line to the file (runs renew daily)

Be in project directory:
$ cd ~/spring_portfolio/
$ docker-compose ps
$ docker ps
$ git status

Shutdown process and update source:
$ docker-compose kill

to update code:
$ git pull

Rebuild and Restart Web Application:
$ sudo docker-compose build --no-cache

Run docker-compose:
$ docker-compose up -d

Website should be up by now