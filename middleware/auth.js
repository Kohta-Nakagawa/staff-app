import firebase from "~/plugins/firebase";
console.log("middleware auth 発火");
const middleware = ({ route, store, redirect }) => {
  firebase.auth().onAuthStateChanged(user => {
    console.log(!user);
    console.log(route.name);
    if (!user && route.name !== "signin") redirect("/signin");
  });
};
export default middleware;
