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


        b. Package Installation:
            - $ npm install --save express
            - $ npm install -D nodemon concurrently
            - $ npm install --save dotenv

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
