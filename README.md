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
            - Redux, Redux-thunk:
                +, Redux: allow application level's state
                +, Redux-thunk: allow redux to make async requests
            - redux-devtools-extension:
                +, Allow us to access redux dev tool on the browser
                +, Without this, the redux dev tool won't recognize

        b. Packages Installation:
            - $ npm install --save react-bootstrap
            - $ npm install --save react-router-dom react-router-bootstrap
            - $ npm install --save axios
            - $ npm install --save redux react-redux redux-thunk
            - $ npm install --save redux-devtools-extension

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

    3. Redux Pattern:
        - Redux is a package that provide application state to work with
        - Contains:
            +, Reducer: having the central state, manipulate state and
                passing state down to Components
            +, Actions: object that represent the intention or command to change
                a piece of state in reducer
            +, Action Creator: function that will dispatch or fire off the
                Actions

        - Example:
            > Action Creator make request to backend, get back information
            > Action Creator dispatch info to Actions
            > Action give command to Reducer with an attached payload
            (contain the information fetched from backend)
            > Reducer will change state
            > state then will be passed down to any Component
            that need it

        https://drive.google.com/file/d/1Wpzv2-e3ilt1QwTfG9fb3yxwn0wi2YtG/view?usp=sharing

## IV. Commit Notes:

    2nd Commit:
        - Set up Front-end
        - Works on front-end home page and product details page
        - No backend implemented
        - Section 2: Starting the Front End

    3rd Commit (Section 3)
        - Setting basic backend
        - See server.js in server folder
        - Run $ npm start > to start the server
        - Section 3: video 10 and 11

    4th Commit: (Section 3)
        - Content:
            +, Fetching data from backend
            +, Setting up nodemon and concurrently,
            +, Setting up environment variable
            +, Enabling ES Modules in NodeJS
        - See front-end and back-end notes
        - Video from 12 - 15
        - Done Section 3
        (Wrong Commit title, but still applicable)

    5th Commit: (Section 4)
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

    6th Commit: (Section 4)
        - Creating routes to send valid data back to front-end
        - Fetching data from database (in front-end)
        - See ./server/routes/productRoutes.js

    7th Commit (Section 5)
        - Custom error handling:
            +, For not found route
            +, For invalid id in route /api/products/:id
        - See ./server/middleware/errorMiddleware.js
        - The functions are called in ./server/server.js
        - Expected output:
            +, Invalid route, should get back error json data
            +, /api/products/:id with id is invalid value,
                should also get back error json data

    8th Commit: (Section 5)
        - Setting up Redux store: (should follow exact commands,
            these are basic setup)
        - See ./client/src/store.js and setup in ./client/index.js

    9th Commit: (Section 5)
        - Setting up redux constant and actions
        - See the actions following this order:
            ./client/src/constants/productConstants.js
            ./client/src/reducers/productReducers.js
            ./client/src/store.js
            ./client/src/index.js
            ./client/src/actions/productActions.js

        - The action in productActions is not currently
            fire off yet, we just set it up in this commit
            > See next commit for how to fire it off

    10th Commit: (Section 5)
        - Dispatch a Redux Action to change state and accessing
            application level's state
        - Full cycle now complete
        - See files recommended in 9th Commit
        - See how to dispatch an action and accessing redux's state
             in ./client/src/screens/HomeScreen.js

    11st Commit: (Section 5)
        - Implement Redux for ProductScreen
        - See Redux implementation in this order:
            ./client/src/constants/productConstants.js
            ./client/src/reducers/productReducers.js
            ./client/src/store.js
            ./client/src/actions/productActions.js
        - See dispatch action and accessing redux state in:
            ./client/src/screens/ProductScreen.js

    12nd Commit: (Section 6)
        - Quantity Select (in Product Screen) & Add To Cart Button
        - See ./client/src/screens/ProductScreen:
            +, search 'product.countInStock' for Quantity Select
            +, Search 'addToCartHandler' for Add To Cart Button
            > See the link after hit addToCartHandler() to see how it works

    13rd Commit: (Section 6)
        - Cart Functionality:
            +, Add product to cart
            +, Delete product from cart
            +, Change amount of product in cart

        - Description:
            +, Add product to cart:
                > In productScreen, when hit 'Add To Cart'
                > Direct to a link that contain: productId and quantity
                > CartScreen.js extract those data, dispatch an action to
                    add product to cartItems (in Reducer)
            +,  Delete product from cart
                > CartScreen.js will call a function (removeFromCartHandler)
                    that will dispatch an action to delete the product
                    from cartItems (in Reducer)
            +, Change amount of product in cart
                > CartScreen.js will dispatch an addToCart() action that
                    will automatically update the amount of the existing
                    product in cartItems

        - See the following scripts:
            +, ./constants/cartConstants.js
            +, ./reducer/cartReducers.js
            +, ./actions/cartActions.js
            +, ./screens/ProductScreen.js
            +, ./screens/CartScreen.js

    14th Commit:
        - Basic Authentication
        - See ./server/server.js, look for '/api/users/login'
        - See ./server/routes/userRoutes.js
        - See ./server/controllers/userController.js
