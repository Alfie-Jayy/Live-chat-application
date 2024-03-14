<template>
    <div class="main flex-col py-10">
        <Navbar></Navbar>
        <ChatBox></ChatBox>
    </div>
</template>

<script>
import ChatBox from '../components/ChatBox'
import Navbar from '../components/Navbar'
    export default {
    components: {
    ChatBox, Navbar },
        
    }
</script>

<style>

</style>