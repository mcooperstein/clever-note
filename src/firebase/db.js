import { db } from "./firebase";

// User API

export const doCreateUser = (id, email) =>
  db.ref(`users/${id}`).set({
    email
  });

export const getUser = id => db.ref(`users/${id}`).once("value");

export const yourNotebooks = id =>
  db.ref(`users/${id}/notebooks`).once("value");

export const onceGetUsers = () => db.ref("users").once("value");

export const addNotebook = (id, notebook) =>
  db.ref(`users/${id}/notebooks`).push({
    notebook
  });
