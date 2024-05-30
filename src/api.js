import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const { VITE_FIREBASE_API_KEY, VITE_FIREBASE_APP_ID } = import.meta.env;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: "nohopapa-database.firebaseapp.com",
  projectId: "nohopapa-database",
  storageBucket: "nohopapa-database.appspot.com",
  messagingSenderId: "705215639158",
  appId: VITE_FIREBASE_APP_ID,
  measurementId: "G-DT4FFMDHKY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fetchResouceCategories = async () => {
    const database = getFirestore(app);
  
    const snapshot = await getDocs(collection(database, "resource_categories"));
    const resourceCategories = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return resourceCategories;
  };

const fetchExternalResources = async () => {
  const database = getFirestore(app);

  const snapshot = await getDocs(collection(database, "external_resources"));
  const externalResources = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return externalResources;
};

const fetchExternalResourcesByCategory = async (category) => {
  const database = getFirestore(app);
  const q = query(
    collection(database, "external_resources"),
    where("category", "==", category)
  );
  const snapshot = await getDocs(q);
  const externalResources = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return externalResources;
};

export default { fetchResouceCategories, fetchExternalResources, fetchExternalResourcesByCategory };
