<template>
    <div class="chat-form">
        
        <div class="messages" ref="msgBox" >
        
            <div class="single-message" v-for="message in FormatMessage" :key="message.id">
                
                
                <span v-if="currentUser.displayName != message.user" class="user" >{{ message.user }}</span> <!-- username -->
                
                <div :class="{'authUser-msg': currentUser.displayName == message.user}" class="flex space-x-2 items-center pt-1" >  
                    <span class="message" >{{ message.message }}</span>                  
                    <span class="time">{{message.created_at}} ago </span>                    
                </div>
            
            </div>            
        
        </div>
    
    </div>
</template>

<script>
    import { auth, db } from '@/firebase/config';
    import { computed, ref, onUpdated } from 'vue'
    import { formatDistanceToNow } from "date-fns";


    export default {
        setup(){
            
            let currentUser = ref(auth.currentUser)
            let messages = ref([])
            let msgBox = ref(null)


            //auto scrolling
            onUpdated(() => {
                msgBox.value.scrollTop = msgBox.value.scrollHeight
            }),
            
            // fetch data from firebase
            db.collection('conversations').orderBy('created_at').onSnapshot( (snap)=>{
                let results = [];
                snap.docs.forEach( (doc)=>{
                    let document = {...doc.data(),id:doc.id}
                    if(doc.data().created_at ){
                        results.push(document)
                    }
                } ) 
                messages.value = results
            } )


            // format time
            let FormatMessage = computed( ()=>{
                return messages.value.map( (msg)=>{
                    let formatTime = formatDistanceToNow(msg.created_at.toDate())
                    return {...msg, created_at: formatTime}   
                               
                } )
            } )

            return {messages, FormatMessage, currentUser, msgBox}
        }
    }
</script>

<style>

</style>