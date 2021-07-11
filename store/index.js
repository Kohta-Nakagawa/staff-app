import { v4 as uuidv4 } from "uuid";
import firebase from "~/plugins/firebase";

const db = firebase.firestore();
const gamesRef = db.collection("games");

export const state = () => ({
  user: {
    uid: "",
    email: "",
    login: false
  },
  games: [],
  game: {
    id: "",
    title: "",
    memo: ""
  }
});

export const actions = {
  login({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log("成功！");
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            commit("getData", { uid: user.uid, email: user.email });
            commit("switchLogin");
          }
        });
      })
      .catch(error => {
        alert(error);
      });
  },
  addGame({ commit }, payload) {
    const game = {
      id: uuidv4(),
      title: payload.game.title,
      memo: payload.game.memo,
      instStaff: [],
      justInst: [],
      playCount: 0,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    };

    return new Promise((resolve, reject) => {
      gamesRef
        .add(game)
        .then(ref => {
          resolve(true);
        })
        .catch(error => {
          console.error("An error occurred in addgame(): ", error);
          reject(error);
        });
    });
  },
  editGame({ commit }, payload) {
    return new Promise((resolve, reject) => {
      gamesRef
        .where("id", "==", payload.game.id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const game = {
              id: uuidv4(),
              title: payload.game.title,
              memo: payload.game.memo,
              updated_at: firebase.firestore.FieldValue.serverTimestamp()
            };

            gamesRef
              .doc(doc.id)
              .update(game)
              .then(ref => {
                resolve(true);
              })
              .catch(error => {
                console.error("An error occurred in editGame(): ", error);
                resolve(error);
              });
          });
        });
    });
  },
  deleteGame({ commit }, payload) {
    return new Promise((resolve, reject) => {
      gamesRef
        .where("id", "==", payload.id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            gamesRef
              .doc(doc.id)
              .delete()
              .then(ref => {
                resolve(true);
              })
              .catch(error => {
                console.error("An error occurred in deleteGame(): ", error);
                reject(error);
              });
          });
        });
    });
  },
  fetchGames({ commit }) {
    commit("initGames");

    return new Promise((resolve, reject) => {
      gamesRef
        .orderBy("created_at", "desc")
        .get()
        .then(res => {
          res.forEach(doc => {
            commit("addGames", doc.data());
            resolve(true);
          });
        })
        .catch(error => {
          console.error("An error occurred in fetchUsers(): ", error);
          reject(error);
        });
    });
  },
  fetchGame({ commit }, payload) {
    return new Promise((resolve, reject) => {
      gamesRef
        .where("id", "==", payload.id)
        .get()
        .then(res => {
          res.forEach(doc => {
            commit("addGame", doc.data());
            resolve(true);
          });
        })
        .catch(error => {
          console.error("An error occurred in fetchUsers(): ", error);
          reject(error);
        });
    });
  }
};

export const mutations = {
  getData(state, payload) {
    state.user.uid = payload.uid;
    state.user.email = payload.email;
  },
  switchLogin(state) {
    state.user.login = true;
  },
  initGames(state) {
    state.games = [];
  },

  addGames(state, games) {
    state.games.push(games);
  },
  addGame(state, game) {
    state.game = game;
  }
};

export const getters = {
  user: state => {
    return state.user;
  },
  getGames(state) {
    return state.games;
  },
  getGame(state) {
    return state.game;
  }
};
