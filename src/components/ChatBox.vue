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
    
    export default {
        setup() {
            
            let message = ref(null)
            
            //Invoke Current User function
            let {user} = CurrentUser()

            // Send Message function
            let SendMessage = () => {
                let chat = {
                    message: message.value.trim(),
                    user: user.value.displayName,
                    created_at: timestamp()
                }
                console.log(chat);
                message.value = null
            }

            return {SendMessage, message}
        }
    }
</script>

<style>

</style>