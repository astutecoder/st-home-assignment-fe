# Product / Cart / Wishlist

This is a **React + TypeScript + Vite** application designed to showcase a product catalog. Users can view product cards, load more products on scroll, and manage their cart and wishlist via interactive drawers. The app features persistent state using localStorage, and the UI is styled with styled-components. It uses MobX for state management and react-waypoint for infinite scrolling.

## Features

- **Product Cards**: Displays product details such as title, image, price, and description.
- **Lazy Loading**: More products are automatically loaded as the user scrolls to the bottom of the page.
- **Persistent State**: The app's state, including the list of products, cart, and wishlist, is persisted in `localStorage`.
- **Cart and Wishlist**: Users can add products to their cart or wishlist.
- **Interactive Drawers**: A cart and wishlist drawer is available for easy management of selected products.
- **Styled Components**: All components are styled using `styled-components`.
- **State Management**: `MobX` is used for managing global app state.

## Technologies Used

- **React**: The framework for building the user interface.
- **TypeScript**: Provides static typing for improved development experience.
- **MobX**: Manages global state in a reactive manner.
- **React Waypoint**: Handles scroll detection to implement infinite scrolling.
- **Styled Components**: For CSS-in-JS styling of components.
- **localStorage**: For persisting user preferences, cart, and wishlist data across sessions.

## Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (preferably version 18.x or later)
- npm or yarn (package managers)

### Install Dependencies

1. Clone the repository:

   ```bash
   git clone https://github.com/astutecoder/st-home-assignment-fe.git
   cd st-home-assignment-fe
   ```

2. Install the dependencies:

   If you are using npm:

   ```bash
   npm install
   ```

   Or if you are using yarn:

   ```bash
   yarn install
   ```

### Running the App

To start the application locally, run:

```bash
npm run dev
```

Or if you are using yarn:

```bash
yarn dev
```

This will start the React development server and open the app in your default browser. You can now interact with the product catalog, cart, wishlist, and observe the infinite scrolling in action.

## Features in Detail

### 1. **Product Cards**:

Each product card displays:

- **Image**: A thumbnail image of the product.
- **Title**: The name of the product.
- **Price**: The price of the product.
- **Discount Label**: A ribon containing discount amount.
- **Add to Wishlist**: Button to add the product to wishlist.
- **Add to Cart**: Button to add the product to cart. Option to increase or decrease the quantity.
- **Quick View**: Quick view button to show large size images.

The product data is fetched from the `https://dummyjson.com/products` API.

### 2. **Lazy Loading**:

The app uses **React Waypoint** to detect when the user has scrolled near the bottom of the page. When this happens, it triggers the loading of additional products.

### 3. **Cart & Wishlist**:

The app includes drawers for both the **Cart** and **Wishlist**, allowing users to:

- View the number of items in both the cart and wishlist via icons in the header.
- Open and close the cart and wishlist drawers to view or manage the added products.

Each drawer displays the selected products, and users can remove items if needed.

### 4. **Persistent State**:

The application uses **localStorage** to persist the following information:

- Products
- Cart and wishlist items
- Page number for infinite scrolling

This ensures that the user's cart, wishlist, and product list remain intact even after a page refresh or session restart.

### 5. **MobX for State Management**:

The app’s state is managed using **MobX**:

- **Products Store**: Manages the list of products and handles loading more products.
- **Cart Store**: Tracks the products added to the cart and the count of items.
- **Wishlist Store**: Tracks the products added to the wishlist and the count of items.

### 6. **Styled Components**:

The UI components are styled using **styled-components**, providing a modular and maintainable way to handle styles directly within the component files.
