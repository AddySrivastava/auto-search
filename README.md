# Auto-complete
## GitHub Repo
1. The repository can be clone using the following command
```bash
git clone https://github.com/Pacifier24/auto-search.git
```
## Server Side Installation
1. Auto complete app service is running on port 5000, in order to run the server side, run the following command in terminal
```bash 
cd server && npm run dev
``` 
2. Once the server side is up and running you can run the curl command to verify your results for autoComplete endpoint
```bash
curl --location --request POST 'http://localhost:5000/autoSearch/v1/api/getAutoSearch' \
--header 'Content-Type: application/json' \
--data-raw '{
    "searchTerm": "MAU"
}'
```

## Client Side Installation
1. Auto complete UI is running on port 3000, in order to run the client side, run the following command in terminal
```bash 
cd client && yarn start
``` 
2. Once the UI is up and running, navigate to localhost:3000 in browser and search for text in the search bar.


## Run app via docker
1. docker-compose.yml creates two docker images and run two separate containers
2. In order to run the app from the root repo path i.e auto-search, run the following command
```bash
docker-compose up --build
```
3. After this navigate to localhost:5000 and your app will be up and running.
4. You would see two separate containers/images when you run docker image command from terminal