import { v4 as uuidv4 } from "uuid";
import firebase from "~/plugins/firebase";

const db = firebase.firestore();
const gamesRef = db.collection("games");
const usersRef = db.collection("users");

export const state = () => ({
  users: [],
  user: {
    uid: "",
    email: "",
    login: false,
    userName: null,
    instGame: []
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
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            commit("getData", {
              uid: user.uid,
              email: user.email
              // userName: user.userName
            });
            commit("switchLogin");
          }
        });
      })
      .catch(error => {
        alert(error);
      });
  },
  signout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  },
  fetchUsers({ commit }) {
    commit("initUsers");
    return new Promise((resolve, reject) => {
      usersRef
        .get()
        .then(res => {
          res.forEach(doc => {
            commit("addUsers", doc.data());
            resolve(true);
          });
        })
        .catch(error => {
          console.error("An error occurred in fetchUsers(): ", error);
          reject(error);
        });
    });
  },
  setUser({ commit }) {
    // commit("initUser");
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          let currentUser = user.uid;
          usersRef
            .get()
            .then(res => {
              res.forEach(doc => {
                if (doc.data().uid == currentUser) {
                  commit("setUserData", doc.data());
                  resolve(true);
                }
              });
            })
            .catch(error => {
              console.error("An error occurred in setUser(): ", error);
              reject(error);
            });
        } else {
          console.log("uidはnull");
        }
      });
    });
  },
  // addUser({ commit }, payload) {
  //   const user = {
  //     uid: payload.uid,
  //     email: payload.email,
  //     userName: payload.userName,
  //     instGame: [],
  //     updated_at: firebase.firestore.FieldValue.serverTimestamp()
  //   };

  //   return new Promise((resolve, reject) => {
  //     usersRef
  //       .add(user)
  //       .then(ref => {
  //         resolve(true);
  //         commit("addUserName", payload.userName);
  //       })
  //       .catch(error => {
  //         console.error("An error occurred in adduser(): ", error);
  //         reject(error);
  //       });
  //   });
  // },
  addGame({ commit }, payload) {
    const game = {
      id: uuidv4(),
      title: payload.game.title,
      memo: payload.game.memo,
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
  addInstGame({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      usersRef
        .where("uid", "==", state.user.uid)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            usersRef
              .doc(doc.id)
              .update({
                instGame: firebase.firestore.FieldValue.arrayUnion(payload.id)
              })
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
  delInstGame({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      usersRef
        .where("uid", "==", state.user.uid)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            usersRef
              .doc(doc.id)
              .update({
                instGame: firebase.firestore.FieldValue.arrayRemove(payload.id)
              })
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
    state.user.userName = payload.userName;
  },
  switchLogin(state) {
    state.user.login = true;
  },
  initUsers(state) {
    state.users = [];
  },
  initUser(state) {
    state.user = {
      uid: "",
      email: "",
      login: false,
      userName: null,
      instGame: []
    };
  },
  addUsers(state, users) {
    state.users.push(users);
  },
  addLoginUser(state, user) {
    state.user.push(user);
  },
  setUserData(state, userData) {
    state.user.userName = userData.userName;
    state.user.instGame = userData.instGame;
  },
  // addUserName(state, UserName) {
  //   state.user.userName = UserName;
  // },
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
  getUsers(state) {
    return state.users;
  },
  getUser(state) {
    return state.user;
  },
  getGames(state) {
    return state.games;
  },
  getGame(state) {
    return state.game;
  }
};
