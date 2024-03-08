# Svendeprøve 2024

## Setup

Tilføj .env i root folderen

```
# Port Number for server
SERVERPORT = 4000


# Database Credentials
DBHOST = 127.0.0.1
DBNAME = Tables
DBUSER = root
DBPASSWD = tsj85ptr

# Token keys ############

# Token Access Key
TOKEN_ACCESS_KEY = myprivatekey # SECRET STRING
TOKEN_ACCESS_EXPIRATION_SECS = 3600 # NUMBER OF EXPIRATION SECONDS: 1 HOUR

# Token Refresh Key
TOKEN_REFRESH_KEY = myprivaterefreshkey # SECRET STRING
TOKEN_REFRESH_EXPIRATION_SECS = 86400 # NUMBER OF EXPIRATION SECONDS: 1 DAY
```

## Startup

Instalere npm pakker fra root(ikke inde i server eller web)

```shell
npm i
```

kør projektet i dev også fra root

```shell
npm run dev
```

Kør projekt i production 

```shell
npm run deploy
```