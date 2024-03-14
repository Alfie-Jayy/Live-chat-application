import { ref } from 'vue'
import {db} from '../firebase/config'
let GetCollection = (collection) => {

    let error = ref('')

    let AddDoc = async(newDoc) =>{
        try {
           await db.collection(collection).add(newDoc)
        } catch (err) {
            error.value = err.message
            console.log(error.value);
        }
    }

    return {error, AddDoc}
}

export default GetCollection