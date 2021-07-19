import firebase from "~/plugins/firebase";
console.log("middleware auth 発火");
const middleware = ({ route, store, redirect }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (!store.user && user) {
      // stateにuserが入っていない状態ではない が ログイン状態
      store.commit("getData", { uid: user.uid, email: user.email });
      store.commit("switchLogin");
    }
    if (!user && route.name !== "signin") {
      redirect("/signin");
    }

    console.log(!user);
    console.log(route.name !== "signin");
    console.log(!user && route.name !== "signin");
    console.log("check point B");
  });
};
export default middleware;
