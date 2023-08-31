## Setup and Launch Instructions

1. Clone the repository or download the source code to your local machine.

2. Install all dependencies using npm (Node Package Manager) by running the following command:

   `npm install`

3. After the installation is complete, start the local development server by running the following
   command:

   `npm start`

4. Once the server is up and running, open your web browser and visit the
   [http://localhost:3000](http://localhost:3000) to access the website

5. Explore the website and interact with the various sections.

### Project Description

This repository contains a web application developed using Node.js and React that showcases a
cross-browser compatible website for displaying products. The project adheres to best practices and
implements the BEM methodology for styling. The application allows users to explore products, view
detailed information, and make orders. Here's an overview of the project's main features and
requirements:

### General Information and Requirements

- The website is built using Node.js and React. Avoid using pure HTML, CSS, and JS.

- The choice of the database is up to the developer's discretion. Consider factors such as
  advantages, disadvantages, scalability, etc. MongoDb is chosen.

- The website must be compatible with Chrome and Firefox browsers.

- BEM methodology should be followed for styling.

### Our Products Section

- The main page displays 8 products initially, with discounted items appearing first. Product
  descriptions and information are stored in the database. You need to retrieve and display this
  data on the webpage.

- Clicking the "Load More" button loads up to 16 products from the database, along with relevant
  information for each product. If a product has a discount, display it earlier and indicate the
  discount on the product (refer to the layout where the original price is struck through).

- When a user likes a product, they can click on it to open a modal window. The modal should provide
  detailed information about the product, both primary and additional. Users should also have the
  option to add a certain quantity of the product to their cart.

- After selecting the quantity and clicking the "Add to Cart" button, the cart icon in the
  navigation panel should update to reflect the number of items in the cart.

- If a user opens the modal window but decides not to order the product, they can close the modal by
  clicking outside its boundaries or using a functional close button.

- Once the modal is closed, all products should be available for browsing again. Users can also
  click the "Hide All" button to display only the first 8 products that are currently on discount.

- Users should have the ability to proceed to the cart and place their order. The cart should
  display product images, names, and discounted prices. The total cost of the order and the discount
  amount should update in real-time as users modify the cart.

- Users can adjust the quantity of a specific product or remove it from the cart entirely. Clicking
  the "Place Order" button opens a form that users need to fill out to confirm their order.

❌ Order information should be stored in the database for administrators to process.
