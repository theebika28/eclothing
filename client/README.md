# StyleSphere - E-commerce Website

## Introduction
**StyleSphere** is a modern e-commerce platform built with React, Firebase, Razorpay, and Tailwind CSS. The platform allows users to browse clothing products, manage their cart, and complete transactions with an integrated Razorpay payment gateway. StyleSphere features Firebase for user authentication, Firestore for product and user data management, and Razorpay for seamless online payments.

The website is designed to offer a smooth user experience for both browsing and shopping, supporting features such as personalized user profiles, order history, cart management, and a secure checkout process.

## Features

### 1. **User Authentication**
StyleSphere uses **Firebase Authentication** to enable users to sign up, log in, and manage their accounts. Once logged in, users can access their profile page to view and update their information, including email and addresses.

### 2. **Product Catalog**
The platform allows users to view a dynamic collection of clothing products fetched from **Firebase Firestore**. Each product has a detailed page displaying product information like name, description, price, and color options. The catalog supports filtering and sorting to make shopping more efficient.

### 3. **Cart Management**
Users can add items to their cart, view the cart contents, update item quantities, and remove items. The **React Context API** is used for state management, making it easy to track and update the cart in real-time. The cart items are stored in **Firestore** to persist user data across sessions.

### 4. **Checkout & Payment**
Once users are ready to place an order, they can enter their shipping information, review the cart summary, and proceed to checkout. Payment is securely handled via **Razorpay**, a popular payment gateway. The platform supports **UPI payments** in the test environment, allowing users to complete their transactions quickly. 

After payment, users are redirected to the home page, and the cart is cleared. Order details are saved in Firestore under the user’s profile, where users can view their order history.

### 5. **Order History**
Users can view their past orders in the profile section of the website. The order history is stored in Firestore and includes details such as product names, quantities, total price, and shipping information.

## Tech Stack

- **Frontend**: 
  - React for building the UI.
  - Vite as the build tool for fast development and hot reloading.
  - Tailwind CSS for styling the application with a responsive and modern design.
  
- **Backend**: 
  - Firebase for Authentication, Firestore for database, and Firebase Hosting for deployment.
  
- **Payment Gateway**: 
  - Razorpay for handling secure payments and processing UPI payments.

## Installation Guide

### Prerequisites

Before running the project locally, ensure you have the following:

- **Node.js** (version 14 or higher)
- **Firebase account**: Set up Firebase for Authentication and Firestore.
- **Razorpay account**: Get your Razorpay API key for payment integration.

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stylesphere.git
   cd stylesphere