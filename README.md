## Running for development:

    - Front-end: $ npm run server (in root dir)
    - Back-end: $ npm run client (in root dir)
    - Both at the same time: $ npm run dev (in root dir)

## I. Front-end Explanation:

    1. Packages Used:
        a. Packages Name and Resources:
            - React Bootstrap:
                +, Link: https://react-bootstrap.github.io/getting-started/introduction
            - Material UI:
                +, Link: https://material-ui.com/getting-started/installation/
            - Bootswatch:
                +, Link: https://bootswatch.com/
                +, Using lux theme, downloaded bootstrap.min.css in ./client/src folder
                +, imported in index.js
            - fontawesome:
                +, Guide: go to (), search for font-awesome
                    > Copy the first Link Tag
                    > Copy it into ./client/public/index.html

        b. Packages Installation:
            - $ npm install --save react-bootstrap
            - $ npm install --save react-router-dom react-router-bootstrap
            - $ npm install --save axios

## II. Back-end Explanation:

    1. Packages Used:

        a. Package Name and Resources:
            - Nodemon: automatically restart server when there is a change in code
            - Concurrently:
                +, allow us to run server and client in one command, also restart both server when there is a change
                +, See "dev" in root package.json
                +, Now you can run "$ npm run dev" to run both
            - dotenv:
                +, Link: https://www.npmjs.com/package/dotenv
                +, package for environment variable
            - colors (npm install --save colors):
                +, Used to colorize our console error message in backend
            - Express Async Handler:
                +, This is a middleware to handle exceptions inside of
                async express routes and passing them to your express error
                handlers
                +, Link:
                https://www.npmjs.com/package/express-async-handler


        b. Package Installation:
            - $ npm install --save express
            - $ npm install -D nodemon concurrently
            - $ npm install --save dotenv
            - $ npm install --save mongoose
            - $ npm install --save colors
            - $ npm install --save bcryptjs
            - $ npm install --save express-async-handler

    2. Other Backend Notes:

        a. Using ES Modules in Node.js
            - ES Module: using import and export in Node.js
            - Has to update nodejs on machine to use ES Modules in Node.JS
                (only node.js version 14.6 and above has ES Module)
                +, $ sudo npm install -g n
                +, $ sudo n latest
            - Has to add "type": "module" in root package.json

## III. Other Notes (Core Concepts):

    1. Front-end & Back-end Workflow:
        See image here:
        https://drive.google.com/file/d/1z4aJ4LnU1G7uOMp4Px6vL9CZlOcv6hTT/view?usp=sharing

    2. Type of requests: GET, POST, PUT, DELETE
        a. GET:
            - GET request is used for fetching data
        b. POST:
            - POST request is used for adding data
        c. PUT:
            - PUT request is used for updating data
        d. DELETE:
            - DELETE request is used for deleting data

## IV. Commit Notes:

    2nd Commit:
        - Set up Front-end
        - Works on front-end home page and product details page
        - No backend implemented
        - Section 2: Starting the Front End

    3rd Commit
        - Setting basic backend
        - See server.js in server folder
        - Run $ npm start > to start the server
        - Section 3: video 10 and 11

    4th Commit
        - Content:
            +, Fetching data from backend
            +, Setting up nodemon and concurrently,
            +, Setting up environment variable
            +, Enabling ES Modules in NodeJS
        - See front-end and back-end notes
        - Video from 12 - 15
        - Done Section 3
        (Wrong Commit title, but still applicable)

    5th Commit:
        - Setting up MongoDB:
            +, See database connection script in ./server/config/db.js
            +, See .env file for connection string
        - Adding colors to console:
            +, Usage example in ./server/server.js under app.listen() in console.log()
        - Modeling data:
            +, See files in ./server/models folder
        - Implement Data Seeder:
            +, What is data seeder ? Importing or destroying all dummy data in .server/data/products.js
            and ./server/data/users.js to MongoDB
            +, See ./server/seeder.js
            +, See package.json for script configuration
            +, $ npm run data:import
                > importing all data to database
            +, $ npm run data:destroy
                > destroying all data in database

    6th Commit:
        - Creating routes to send valid data back to front-end
        - Fetching data from database (in front-end)
        - See ./server/routes/productRoutes.js
