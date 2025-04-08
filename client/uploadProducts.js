// uploadProducts.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { readFile } from "fs/promises";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdBbOJaEPKm-X98VNqnseXLeGpFOIZkM0",
  authDomain: "clothing-ecommerce-633fb.firebaseapp.com",
  projectId: "clothing-ecommerce-633fb",
  storageBucket: "clothing-ecommerce-633fb.appspot.com",
  messagingSenderId: "257638692162",
  appId: "1:257638692162:web:8dcd2a35511d3c8f57c4db",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadProducts = async () => {
  try {
    const data = await readFile("./src/data/products.json", "utf-8");
    const products = JSON.parse(data);
    const collectionRef = collection(db, "products");

    for (const product of products) {
      await addDoc(collectionRef, product);
      console.log("✅ Uploaded:", product.ProductName);
    }
  } catch (error) {
    console.error("❌ Error uploading products:", error);
  }
};

uploadProducts();