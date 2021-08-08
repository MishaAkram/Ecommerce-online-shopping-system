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






## FEATURES

A Simple Shopping Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook. This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/). ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to *transpile* all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

- Code is rewritten with [React JS 17](https://reactjs.org/docs/getting-started.html) and [Node JS 14](https://nodejs.org/en/docs/)
- Latest features of JavaScript i.e. ES6, ES7 is used
- [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
- It is a Full Stack Application 
- All the user orders are saved in firebase realtime database. 
- Login as well as Logout feature is added.
- Error will be shown if the credentials are not correct.
- *for simplicity passwords are not encrypted*
- Detail of a specific product will be shown on clicking the corresponding item 
- Product item ca added to cart or wishlist
- Orders can be made after adding contact details.
- navigations can be done through navigation bar, advertisements or footer. 
- Login / Logout status are shown by the <i>login symbol</i> 


## INSTALLATION

Clone the repository:
```
git clone https://github.com/MishaAkram/Ecommerce-online-shopping-system.git
```
Navigate inside the directory:
```
cd Ecommerce-online-shopping-system
```
Install all the necessary dependecies
```
npm install
``` 
Now run the project
```
npm start
```
## SCREENSHOTS

Some screens of the application is given below for better understanding. 



<p> Home Screen <br/> 
 <img src="screenshots/Capture1.png" width="400px" title="Home screen"/>
 <img src="screenshots/Capture10.png" width="400px" title="Home screen"/>
 <img src="screenshots/Capture11.png" width="400px" title="Home screen"/>

</p>
 
 <p> Products Screen <br/> 
 <img src="screenshots/Capture2.png" width="400px" title="Products screen"/>
 <img src="screenshots/Capture12.png" width="400px" title="Products screen"/>
 <img src="screenshots/Capture13.png" width="400px" title="Products screen"/>
</p>

<p> submitting credentials <br/> 
 <img src="screenshots/Capture14.png" width="400px" title="After submitting credentials screen"/>
 <img src="screenshots/Capture4.png" width="400px" title="If credentials are not correct screen"/>
</p>


<p> Cart Screen <br/> 
 <img src="screenshots/Capture5.png" width="400px" title="Cart screen"/>
 <img src="screenshots/Capture16.png" width="400px" title="Cart screen"/>
</p>

<p> Wishlist <br/> 
 <img src="screenshots/Capture7.png" width="400px" title="Wishlist screen"/>
 <img src="screenshots/Capture15.png" width="400px" title="Wishlist screen"/>
</p>

<p> Details screen<br/> 
 <img src="screenshots/Capture17.png" width="400px" title="Details screen"/>
 <img src="screenshots/Capture18.png" width="400px" title="Details screen"/>

</p>

<p> Orders screen <br/> 
 <img src="screenshots/Capture19.png" width="400px" title="orders screen"/>
 <img src="screenshots/Capture20.png" width="400px" title="orders screen"/>
 <img src="screenshots/Capture21.png" width="400px" title="orders screen"/>
</p>

<p> Contact us screen <br/> 
 <img src="screenshots/Capture22.png" width="400px" title="contact us screen"/>
</p>

<p> About us <br/> 
 <img src="screenshots/Capture23.png" width="400px" title="About us screen"/>
</p>


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

<img style="display:'inline'" src="https://blog.alexdevero.com/wp-content/uploads/2015/03/sass-logo.jpg" width = "250" height = 100>
</div>
<br>



