import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import ResourceCategory from "./Pages/LibraryResources/ResourceCategory";
const { VITE_FIREBASE_API_KEY, VITE_FIREBASE_APP_ID } = import.meta.env;

const EXTERNAL_RESOURCES = "external_resources";
const INTERNAL_RESOURCES = "internal_resources";
const RESOURCE_CATEGORIES = "resource_categories";
const AUTHORS = "authors";
const ISLANDS = "islands";

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
const database = getFirestore(app);

const fetchResouceCategories = async () => {
  const snapshot = await getDocs(collection(database, RESOURCE_CATEGORIES));
  const resourceCategories = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return resourceCategories;
};

//added addDoc here//
const addResource = async (data) => {
  try {
    const categoryRef = doc(database, RESOURCE_CATEGORIES, data.category);
    data.category = categoryRef;
    const docRef = await addDoc(collection(database, EXTERNAL_RESOURCES), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const fetchResouceCategoryByName = async (categoryName) => {
  const q = query(
    collection(database, RESOURCE_CATEGORIES),
    where("name", "==", categoryName)
  );
  const snapshot = await getDocs(q);
  const resourceCategoryDocument = snapshot.docs[0];
  const resourceCategory = {
    id: resourceCategoryDocument.id,
    ...resourceCategoryDocument.data(),
  };
  return resourceCategory;
};

const fetchExternalResources = async () => {
  const q = query(
    collection(database, EXTERNAL_RESOURCES),
    );
  const snapshot = await getDocs(q);
  const externalResources = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return externalResources;
};

const fetchExternalResourcesByCategoryId = async (categoryId) => {
  const categoryRef = doc(database, RESOURCE_CATEGORIES, categoryId);
  const q = query(
    collection(database, EXTERNAL_RESOURCES),
    where("category", "==", categoryRef),
    orderBy("title", "asc")
  );
  const snapshot = await getDocs(q);
  const externalResources = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return externalResources;
};

const deleteExternalResourceById = async (resourceId) => {
  await deleteDoc(doc(database, EXTERNAL_RESOURCES, resourceId));
};

const fetchInternalResources = async () => {
  const snapshot = await getDocs(collection(database, INTERNAL_RESOURCES));
  const internalResources = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  for (const internalResource of internalResources) {
    const authors = await getAuthorsForInternalResource(internalResource);
    internalResource.author = authors;
  }
  return internalResources;
};

const getAuthorsForInternalResource = async (internalResource) => {
  const authorPromises = internalResource.author.map((authId) => {
    return getDoc(authId);
  });

  const authorDocs = await Promise.all(authorPromises);
  const authors = authorDocs.map((authorDoc) => {
    return { id: authorDoc.id, ...authorDoc.data() };
  });
  return authors;
};

const fetchAuthors = async () => {
  const snapshot = await getDocs(collection(database, AUTHORS));
  const authors = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return authors;
};

const fetchIslands = async () => {
  const snapshot = await getDocs(collection(database, ISLANDS));
  const islands = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return islands;
};

export default {
  fetchResouceCategories,
  fetchResouceCategoryByName,
  fetchExternalResources,
  fetchExternalResourcesByCategoryId,
  deleteExternalResourceById,
  fetchInternalResources,
  addResource,
  fetchAuthors,
  fetchIslands,
};
