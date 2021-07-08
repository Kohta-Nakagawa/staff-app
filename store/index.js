import { v4 as uuidv4 } from 'uuid';
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const gamesRef = db.collection('games')

export const actions = {
  addGame({ commit }, payload) {
    const game = {
      id: uuidv4(),
      title: payload.game.title,
      memo: payload.game.memo,
      instStaff: [],
      justInst: [],
      playCount:0,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    }

    return new Promise((resolve, reject) => {
      gamesRef.add(game)
      .then(ref => {
        resolve(true)
      })
      .catch(error => {
        console.error('An error occurred in addgame(): ', error)
        reject(error)
      })
    })
  }}