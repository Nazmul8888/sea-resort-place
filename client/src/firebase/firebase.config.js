
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCl6HvTJTjcqozeTDS2UVeikIi5XIQpWyc",
  authDomain: "stay-vista-7bf1f.firebaseapp.com",
  projectId: "stay-vista-7bf1f",
  storageBucket: "stay-vista-7bf1f.appspot.com",
  messagingSenderId: "598678634100",
  appId: "1:598678634100:web:7b199429ad3b5eef0ddb21"

  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_strongBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_apiId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
