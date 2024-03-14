<template>
    <div class="chatbox">
        <form>
            <textarea class="chat-area" rows="10" @keyup.enter="SendMessage" v-model="message" placeholder="Type message and hit Enter to send" ></textarea>
        </form>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import CurrentUser from '../composables/CurrentUser.js'
    import {timestamp} from '../firebase/config.js'
    import GetCollection from '@/composables/GetCollection.js';

    
    export default {
        setup() {
            
            let message = ref(null)
            
            //Invoke Composable functions   
            let {user} = CurrentUser()
            let {error, AddDoc} = GetCollection('conversations')

            // Send Message function
            let SendMessage = async() => {
                let chat = {
                    message: message.value.trim(),
                    user: user.value.displayName,
                    created_at: timestamp()
                }
                
                //here
                await AddDoc(chat)
                
                message.value = null
            }

            return {SendMessage, message}
        }
    }
</script>

<style>

</style>