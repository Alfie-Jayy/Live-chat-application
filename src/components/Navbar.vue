<template>
    <div class="chat-form">
        <div class="nav" v-if="user">
        <div class="navbar-title" >
            <h2 class="nav-user">{{ user.displayName }}</h2>
            <p class="nav-email">{{ user.email }}</p>
        </div>
        <div class="logout-btn" @click="Logout" >Logout</div>
    </div>
    </div>
</template>

<script>
    import {useRouter} from 'vue-router'
    import {auth} from '../firebase/config.js'  
    import CurrentUser from '@/composables/CurrentUser.js'  
    export default {
        
        setup() {

            let router = useRouter()
            
            let {user} = CurrentUser()
            
            let Logout = async() => {
                try {
                    await auth.signOut()
                    router.push('/')
                } catch (err) {
                    console.log(err.message);
                }
            }
            

            return {Logout, user}
        }
    }
</script>

<style>

</style>