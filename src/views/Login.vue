<template>
    <div class="main">
        <div class="welcome-form" >
        <h2 class="form-title">Login</h2>
        <form class="space-y-10" @submit.prevent="Login">
            <div>
                <label class="label" >Email</label>
                <input class="input" type="text" v-model="email">
            </div>
            <div>
                <label class="label" >Password</label>
                <input class="input" type="password" v-model="password" >
            </div>
            
            <button class="btn" >Login</button>
            
            <div v-if="error" class="error">
              {{ error }}
            </div>
            
            <p class="text-sm font-semibold" >Don't you have an account? <router-link :to="{name: 'signup'}" class="route-link">Sing Up</router-link> </p>
        </form>
    </div>
    </div>
</template>

<script>
import UserLogin from '@/composables/UserLogin';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    export default {
        setup(){

            let email = ref('')
            let password = ref('')
            let router = useRouter()

            let {error, LoginAccount} = UserLogin()
            let Login = async() => {
                let response = await LoginAccount(email.value, password.value)
                if(response){
                    router.push({name: 'chatroom'})
                }
            }
            return {Login,email, password, error}
        }
    }
</script>

<style>

</style>