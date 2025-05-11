# Shopping Cart Application
This was implemented as a submission for the React Course in the Odin Project
(full-stack JavaScript track). It's an SPA that fetches product data from 
[FakeStore API](https://fakestoreapi.com/docs) and displays it to the user. 
Each item has "Add to Cart" functionality, and the app maintains an item and
price count based on what the user adds to their cart. 

Link to project: (https://odin-shopping-cart-7v1cle8qq-christiankiernans-projects.vercel.app)

## How It's Made
**Tech used:** HTML, CSS, JavaScript, React
The app utilizes client-side routing to provide a homepage and a product page. 
The cart display on the navigation bar dynamically renders information based
on the number of items in the user's cart, and the running sum of the price
of all items in the cart. This functionality was a achieved by using React's
useOutletContext() hook. 

## Lessons Learned
The main goals of this project were to gain experience fetching and manipulating
data from an API, implemetning client side routing, and (more generally)
maintaining a well organized React project. The styling was intentionally done 
with vanilla CSS, to further develop CSS abilities. Overall, it was a great learning
experience. A couple things that I want to improve upon in future projects;
* Implement testing
* Implement CSS modules or a CSS Utility Framework

