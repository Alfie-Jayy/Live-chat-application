<template>
    <div class="main flex-col py-10">
        <Navbar></Navbar>
        <Messages></Messages>
        <ChatBox></ChatBox>
    </div>
</template>

<script>
import Messages from '../components/Messages'
import ChatBox from '../components/ChatBox'
import Navbar from '../components/Navbar'
    export default {
    components: {
    Messages,
    ChatBox, Navbar },
        
    }
</script>

<style>

</style>