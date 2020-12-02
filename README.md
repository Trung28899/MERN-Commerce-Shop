## Running for development:

    - Front-end: $ npm run server (in root dir)
    - Back-end: $ npm run client (in root dir)
    - Both at the same time: $ npm run dev (in root dir)

## Notable Bugs:

    - Name in NavBar didn't change when update
        +, in /profile: after update name,
            updated name got send to backend, howevers,
            navbar doesn't display the updated name
        +, After update name, logout and log back in,
            the name in the text box is not the updated name
        > fixed in 21st commit, but might happen again

    - When add to cart a new product (with default quantity)
        > the product in cart wasn't count until we change the
            amount

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
            - Paypal docs:
                +, https://developer.paypal.com/docs/checkout/reference/customize-sdk/
                +, https://www.npmjs.com/package/react-paypal-button-v2

        b. Packages Installation:
            - $ npm install --save react-bootstrap
            - $ npm install --save react-router-dom react-router-bootstrap
            - $ npm install --save axios
            - $ npm install --save redux react-redux redux-thunk
            - $ npm install --save redux-devtools-extension
            - $ npm install --save react-paypal-button-v2

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

            - Json Web Token:
                +, Link: https://jwt.io/
                +, This package generate a token that allow app to authorize
                    users correctly and securely
                +, Here is how it works:
                    > user login, JWT will generate a token to send it to the
                        front-end
                    > after user login, the front-end will send a GET request
                        to get user's resource
                    > when this happens, front-end will send back the JWT token
                        to the back-end
                    > Back-end now will validate this request to return
                        user's resource (if token is valid) or return
                        and error (if token is invalid)

            - Multer: a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
                +, https://www.npmjs.com/package/multer

        b. Package Installation:
            - $ npm install --save express
            - $ npm install -D nodemon concurrently
            - $ npm install --save dotenv
            - $ npm install --save mongoose
            - $ npm install --save colors
            - $ npm install --save bcryptjs
            - $ npm install --save express-async-handler
            - $ npm install --save jsonwebtoken
            - $ npm install --save multer

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

    4. Authentication and Authorization:

        - Authentication: is the process of differentiating users and securely
            determine which user is using the application.

            Example: The process of login is the process of Authentication

        - Authorization: is the process of securly providing permission of certain
            resources to authenticated user

            Example: The process of getting user resources after logged in is the process of
                Authentication

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

    14th Commit: (Section 7)
        - Basic Authentication
        - See ./server/server.js, look for '/api/users/login'
        - See ./server/routes/userRoutes.js
        - See ./server/controllers/userController.js

    15th Commit: (Section 7)
        - Authorization process with the help of JWT (Json Web Token)
        - Read about: (4. Authentication and Authorization:) above
        - Read about: (- Json Web Token:) above

        - Code instruction:
            +, ./server/utils/generateToken.js: util function to generate
                an JWT
            +, ./server/server.js and ./server/routes/userRoutes.js to see routes
                configs
            +, When user send a POST request to '/api/users/login':
                > ./server/controllers/userController.js, authUser() will generate the
                    token to send to front-end
            +, After user login and get back the data (with JWT token), front-end
                will send a GET request with the token to backend ('/api/user/profile') to be
                authorized for user's resource
            +, When backend receive a GET request to ('/api/user/profile'):
                > See ./server/routes/userRoutes.js
                > 'protect' middleware in './server/middleware/authMiddleware.js' will be run first
                > then 'getUserProfile' in ./server/controllers/userController.js will be run next
                > both of these middleware will determine the response of the server to front-end

    16th Commit: (Section 7 - end)
        - User Registration and Password Encryption (Backend):
            +, Password Encryption:
                > See ./server/models/userModel under 'userSchema.pre'
            +, User Registration:
                > See ./server/controllers/userController under 'registerUser'
                > See ./server/routes/userRoutes.js

    17th Commit: (Section 8)
        - Setting up redux for user application level's state, See:
            > ./client/src/constants/userConstants.js
            > ./client/src/reducers/userReducers.js
            > ./client/src/store.js

    18th Commit (Section 8):
        - Implementing login screen:
            > Now able to login, display error if
                invalid email or password
            > Even if we reload page, user still logged in
                because the information is stored in local
                storage (in the browser)
        - For more details, see follow scripts:
            +, ./client/src/components/FormContainer.js
            +, ./client/src/screens/LoginScreen.js

    19th Commit (Section 8):
        - Show User in NavBar & Logout:
            > ./client/src/components/Header.js
            > ./client/src/actions/userAction.js

    20th Commit (Section 8):
        - User Register Reducer, Action & Screen:
            > ./client/src/constants/userConstants.js
            > ./client/src/reducers/userReducers.js
            > ./client/src/actions/userActions.js
            > ./client/src/screens/RegisterScreen.js

    21st Commit (Section 8):
        - User Profile Update (backend):
            > ./server/routes/userRoutes.js
            > ./server/controllers/userController.js

        - User Profile Update (frontend):
            > userConstants.js
            > userReducers.js
            > store.js
            > userAction.js
            > ProfileScreen.js

    22nd Commit (Section 9:
        - Creating Shipping Address & Save address to Redux
        - See files:
            > cartConstants.js
            > cartReducers.js
            > store.js
            > cartActions.js
            > ShippingScreen.js

    23rd Commit (Section 9):
        - Payment screen & checkout steps
        - See files:
            > ./clients/src/components/CheckoutSteps.js
            > cartConstants.js
            > cartReducers.js
            > store.js
            > cartActions.js
            > ./clients/src/screens/PaymentScreen.js

    24th Commit (Section 9):
        - Place order scren front end
            (viewing an order that has been ordered)
        - Create order front end and back end
            (returning order from backend)

        - Create Order Backend:
            > ./server/routes/orderRoutes.js
            > ./server/controllers/orderControllers.js
            > ./server/server.js

        - Create Order Front-end:
            > ./client/src/App.js
            > orderConstants.js
            > orderReducers.js
            > store.js
            > orderActions.js
            > ./client/src/screens/PlaceOrderScreen.js

    25th Commit (Section 10):
        - Get order details front end and back end:
        - Backend:
            > ./server/controllers/orderController.js
            > ./server/routes/orderRoutes.js
        - Frontend:
            > orderConstants.js
            > orderReducers.js
            > orderActions.js
            > stores.js
            > App.js
            > OrderScreen.js

    26th Commit (Section 10):
        - Update To Paid Backend
            (update order when the order is paid)
         - Order Pay Reducer & Action
        - Backend:
            > orderController.js
            > orderRoutes.js
        - Frontend:
            > orderConstants.js
            > orderReducers.js
            > orderActions.js
            > stores.js

    27th Commit (Section 10):
        - Implement Paypal buttons for order:
            > OrderScreen.js
        (Don't really understand this part, need to learn more)
        - Resources:
            > Paypal developer account trevortrinh28899
            > react-paypal-button-v2 (package in frontend)
        - See .env variable for PAYPAL in backend
        - Code:
            > ./client/src/screens/OrderScreen.js

    28th Commit (Section 10):
        - Show Orders On Profile
        - Order Reset (When logout, reset all the order details)
        - Backend:
            > orderController.js
        - Frontend:
            > orderConstants.js
            > orderReducers.js
            > orderActions.js
            > stores.js
            > ProfileScreen.js

            > userConstants.js
            > userReducer.js
            > userActions.js

    29th Commit (Section 11)
        - Admin User List (Frontend and Backend)
            (Getting all user information for admin user)
        - Login as admin > will see users option in drop down
            > hit it and will see all user in the system
        - Backend:
            > userRoutes.js, get route for '/'
            > ./server/middleware/authMiddleware.js, used both function
            > userController.js, under getUsers()
        - Frontend:
            > userConstants.js
            > userReducers.js
            > userAction.js
            > store.js
            > /components/Header.js
            > UserListScreen.js
            > App.js

    30th Commit (Section 11)
        - Admin Screen Access Security:
            +, not admin user > try to hit '/admin/userlist'
                > redirect to '/login' route
            +, admin user after logout, reset data in '/admin/userlist'
        - Frontend:
            > See logout in userAction.js
            > See useEffect() in UserListScreen.js

    31st Commit (Section 11):
        - Remove Users by ID
            (Admin only)
        - Backend:
            > userRoutes.js
            > userController.js, under deleteUser()
        - Frontend:
            +, Redux: userConstants.js > userReducers.js > store.js
            > userActions.js
            +, UserListScreen.js
                > now can login as admin and delete user

    32nd Commit (Section 11 end):
        - Get user and update user by ID
            (Admin only)
        - Backend:
            > userRoutes.js > userController.js, under
                getUserById() and updateUser()
        - Frontend:
            +, Redux: userConstants.js > userReducers.js > store.js
            > userActions.js
            +, UserListScreen.js
                > now can login as admin and update user information

    33rd Commit (Section 12):
        - Delete Product by ID
            (Admin only)
        - Backend:
            > productControllers.js > productRoutes.js
        - Front-end:
            > productConstants.js > productReducers.js > store.js > productActions.js
            > ProductListScreen.js
                > now admin can delete any product

    34th Commit (Section 12):
        - Create & Update Product
            (When admin hit create product > will create a dummy product
                then admin can update that product with new information)
        - Backend:
            > productController.js (createProduct() and updateProduct())
            > productRoutes.js
        - Frontend:
            > productConstants.js > productReducers.js > store.js
            > productActions.js > ProductListScreen.js (for creating products)
            > ProductEditScreen.js (for editting products)

    35th Commit (Section 12):
        - Uploading image from local machine
            (Being able to select and upload image
            from local machine and store it in mongodb)
        - Backend:
            > uploadRoutes.js > server.js
        - Frontend:
            > ProductEditScreen.js
