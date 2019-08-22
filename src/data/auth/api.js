import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const signUpUser = ( payload )=>{
    return new Promise((resolve, reject)=>{
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user)=>{

            user = firebase.auth().currentUser;
            
            user.updateProfile({
                fullName: payload.fullname,
                phoneNumber : payload.phone_number
            })
            .then(user => resolve( user ))
            .catch(error => reject(error))

        })
        .catch(error => reject(error));
    });
}
export const loginUser = (payload)=>{
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
}

export const getCurrentUser = ()=>{
    return firebase.auth().currentUser;
}