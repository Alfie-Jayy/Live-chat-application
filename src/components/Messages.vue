<template>
    <div class="chat-form">
        
        <div class="messages" v-for="message in messages" :key="message.id">
        
            <div>
                
                <span class="user" >{{ message.user }}</span>
                <div class="flex space-x-2 items-center pt-1" >
                    <span class="message" >{{ message.message }}</span>
                    <span class="time" >{{message.created_at}}</span>
                </div>
            
            </div>

    </div>
    </div>
</template>

<script>
    import { db } from '@/firebase/config';
    import { ref } from 'vue'

    export default {
        setup(){
            
            let messages = ref([])
            
            db.collection('conversations').orderBy('created_at').onSnapshot( (snap)=>{
                let results = [];
                snap.docs.forEach( (doc)=>{
                    let document = {...doc.data(),id:doc.id}
                    results.push(document)
                } ) 
                messages.value = results
            } )

            return {messages}
        }
    }
</script>

<style>

</style>