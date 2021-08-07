# ECOMMERCE ONLINE SHOPPING SYSTEM
## DESCRIPTION
Online shopping is the process whereby consumers directly buy dresses or accessories from online shop, without an intermediary service, over the Internet using a web browser . It is a form of electronic commerce. An online shop, or web shop evokes the physical analogy of buying products or services in a shopping centre.

The Online Shopping System (OSS) for clothes is intended to provide complete solutions for customers through a single get way using the internet. It will enable customers to browse through the shop and purchase them online without having to visit the shop physically.

Ecommerce online shopping web based app with frontend implemented using React, backend and database using firebase realtime database and hosting on surge

## DEPLOYMENT
This app is hosted on surge.sh and can be accessed by entering the  following URL in Your Browser Installed On Your Pc
```
http://onlineshoppingstore.surge.sh/
```
## USER INTERFACES
- **Home Screen:**  This is the main navigation page. In this screen, page shows a menubar. Each button will redirect the user to a new link to pages of dresses, accessories, login, contact, home, orders, cart and wishlist.
- **Dresses Screen:** In this screen user can see a number of dresses and can view their respective details, add them to cart or to your wishlist.
- **Accessories Screen:** In this screen user can see a number of accessories, view their details, add them to cart or to their wishlist.
- **Details Screen:** User can view details of any item present in the product list, add item to cart or wishlist. 
- **Login:** User can login using credentials for procceding with their orders.
- **Cart:** It shows a list of selected items, user can increment or decrement quantity also delete items from their cart.
- **Wishlist:** It shows a list of selected items, that the user may buy in future, user can add it to their cart, view its detail or  remove it from wishlist.
- **Checkout:** Here user enter respective details for checkout.


## RELEVANT DOCUMENTS
Following are the required documents for the project.

 [Software Requirement Specifications Document](../main/SRS_SDT.pdf)

 [Testing Document](../main/Elegant%20Testing%20Document%20(2).pdf)

 [Deployment Document](../main/DEPLOYMENT%20DOCUMENT.pdf)

 [Design Document](../main/DESIGN%20DOCUMENT.pdf)

## DEVELOPMENT TOOLS

- Web app developed on Visual studio code with React, Javascript.
- Firebase used for SignIn Authentication, Realtime Database and Push and get orders details.
- Surge used for hosting the app.

<div float="left">
 <img style="display:'inline'" src = "https://logowik.com/content/uploads/images/visual-studio-code7642.jpg" width = "250" height = 100> 

<img style="display:'inline'"  src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" width = "250" height = 100> 

<img style="display:'inline'" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1XVtjEYPj0BoSZ9nrSBJ5nr319wO73dEcfD17BSzTf-m-q-rSZ9FGDO4yzzvd_AWQqo&usqp=CAU" width = "250" height = 100> 

<img style="display:'inline'" src="https://coursework.vschool.io/content/images/2017/12/surge_static_hosting.png" width = "250" height = 100>
<img style="display:'inline'" src="https://cdn.shopify.com/s/files/1/1509/1638/articles/sourcetree-transparent_grande_9cf2ca0c-c597-4bdc-875a-72530cfe175c_600x600_crop_center.png?v=1563480242" width = "250" height = 100>
</div>
<br>

# react-app-simple-chat-app

A Simple Chat Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/). 

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to *transpile* all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

Back end is implemented using [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the *Cloud* version of [MongoDB](https://docs.mongodb.com/) is used. Real time communication is done using [Socket.io](https://www.npmjs.com/package/socket.io)


For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

This is a *responsive web application* for viewing in both Mobile and Desktop.


## Features
- Code is rewritten with [React JS 17](https://reactjs.org/docs/getting-started.html) and [Node JS 15](https://nodejs.org/en/docs/)
- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
- ES8 `async/await` is used

<br/>

<ul>
 <li> This is Simple Chat Application </li>
 <li> It is a Full Stack Application </li>
</ul>

- All the user details, rooms and conversations are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This is a *free/ shared* account on [Atlas](https://www.mongodb.com/cloud/atlas). **So Please use it wisely** 

<ul>
 <li>Login as well as Logout feature is added </li>
 <li>Error will be shown if the credentials are not correct</li>
</ul>

  - *for simplicity passwords are not encrypted*

<ul>
 <li> Real time communication is supported using <a href="https://www.npmjs.com/package/socket.io">Socket.io</a>
 <li> Rooms with users are supported </li>
 <li> Conversation of a specific rooms will be shown on clicking the corresponding room</li>  
</ul>

  - *for mobile screen user can go to the rooms page by clicking the `<-` icon at the end of the screen*
  - Multiline message can be send by hitting `Ctrl + ENTER`
  - To send a message hit `ENTER` key

<ul>
 <li> Online / Offline status are shown by the <i>violet dot</i> </li>
 <li> Read / Unread status of conversation is supported
 <li> All the conversation are stored in the database i.e. <i>persistant</i>
 <li> All the timestamps are shown in <i>UTC</i> format to taken into cross browser differences
</ul>

## Installation

Clone the repository:
```
git clone https://github.com/anijitsahu/react-app-simple-chat-app.git
```
Navigate inside the directory:
```
cd react-app-simple-chat-app
```
Install all the necessary dependecies
```
npm install
``` 
Now run the server:
```
npm run server
```
## Screenshots

Some screens of the application is given below for better understanding. 



<p> Home Screen <br/> 
 <img src="screenshots/Capture1.png" width="400px" title="Login screen"/>
 <img src="screenshots/Capture2.png" width="400px" title="Entering credentials screen"/>

</p>
 
 <p> Entering credentials <br/> 
 <img src="screenshots/Capture2.png" width="400px" title="Entering credentials screen"/>
</p>

<p> After submitting credentials <br/> 
 <img src="screenshots/Capture3.png" width="400px" title="After submitting credentials screen"/>
</p>

<p> If credentials are not correct <br/> 
 <img src="screenshots/Capture4.png" width="400px" title="If credentials are not correct screen"/>
</p>

<p> After a successful login  <br/> 
 <img src="screenshots/Capture5.png" width="400px" title="After a successful login screen"/>
</p>

<p> When a new user joins <br/> 
 <img src="screenshots/Capture6.png" width="400px" title="When a new user joins screen"/>
</p>

<p> When a new user joins (2nd browser) <br/> 
 <img src="screenshots/Capture7.png" width="400px" title="When a new user joins (2nd browser) screen"/>
</p>

<p> Sender type some message <br/> 
 <img src="screenshots/Capture9.png" width="400px" title="Sender type some message screen"/>
</p>

<p> Receiver's room is updated <br/> 
 <img src="screenshots/Capture10.png" width="400px" title="Receiver's room is updated screen"/>
</p>

<p> Logout functionality <br/> 
 <img src="screenshots/Capture11.png" width="400px" title="Logout functionality screen"/>
</p>






