import firebase from "~/plugins/firebase";
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
  });
};
export default middleware;
