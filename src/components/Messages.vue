<template>
    <div class="chat-form">
        
        <div class="messages">
        
            <div class="single-message" v-for="message in FormatMessage" :key="message.id" >
                
                <span class="user" >{{ message.user }}</span>
                <div class="flex space-x-2 items-center pt-1" >
                    <span class="message" >{{ message.message }}</span>
                    <span class="time">{{message.created_at}} ago </span>
                </div>
            
            </div>

    </div>
    </div>
</template>

<script>
    import { db } from '@/firebase/config';
    import { computed, ref } from 'vue'
    import { formatDistanceToNow } from "date-fns";

    export default {
        setup(){
            
            let messages = ref([])
            
            // fetch data from firebase
            db.collection('conversations').orderBy('created_at').onSnapshot( (snap)=>{
                let results = [];
                snap.docs.forEach( (doc)=>{
                    let document = {...doc.data(),id:doc.id}
                    if(doc.data().created_at){
                        results.push(document)
                    }
                } ) 
                messages.value = results
            } )


            // formate date and time
            let FormatMessage = computed( ()=>{
                return messages.value.map( (msg)=>{
                    let formatTime = formatDistanceToNow(msg.created_at.toDate())
                    return {...msg, created_at: formatTime}
                } )
            } )

            return {messages, FormatMessage}
        }
    }
</script>

<style>

</style>