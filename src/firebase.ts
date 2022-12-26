// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3bkpgtuM0rtrxmtDlKC3nvv-eYU76siA",
  authDomain: "portfolio-7864e.firebaseapp.com",
  projectId: "portfolio-7864e",
  storageBucket: "portfolio-7864e.appspot.com",
  messagingSenderId: "776413353336",
  appId: "1:776413353336:web:a5dccd9af3817e4181648d",
  measurementId: "G-1NPJTZ5YNR",
};

// Try Initialize Analytics
const initAnalytics = async () => {
  if (import.meta.env.MODE !== "development") {
    try {
      const { getAnalytics } = await import("firebase/analytics");
      getAnalytics(app);
    } catch {
      // Blocked by client
    }
  }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initAnalytics();

export { app };
