import { auth } from "@/firebase/config";
import { ref } from "vue"

let error = ref('');

let LoginAccount = async(email, password) => {
    try {
        let response = await auth.signInWithEmailAndPassword(email, password);
        if(!response){
            throw new Error ('Could not log in')
        }        
        return response
    } catch (err) {
        error.value = err.message
    }
}

let UserLogin=()=>{
    return {error, LoginAccount}
}

export default UserLogin