import { ref } from "vue"
import {auth} from '../firebase/config'

let error = ref('')

let createAccount = async(name, email, password) => {
    try {
        let response = await auth.createUserWithEmailAndPassword(email,password)
        
        if(!response){
          throw new Error('Could not create new User')
        }  
        response.user.updateProfile({displayName:name})  
        return response;

      } catch (err) {
        error.value = err.message
      }
}

let UserSignup = () => {

    return {error, createAccount}

}

export default UserSignup;