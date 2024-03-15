<template>

  <div class="main">
  
      <div class="welcome-form" >
    
        <h2 class="form-title">Sign Up</h2>
          
          <form class="space-y-10" @submit.prevent="Signup">
            <div>
              <label class="label">Username</label>
              <input type="text" class="input" v-model="name" />
            </div>
            <div>
              <label class="label">Email</label>
              <input class="input" type="email" v-model="email"  />
            </div>
            <div>
              <label class="label">Password</label>
              <input class="input" type="password"  v-model="password" />
            </div>
            <button class="btn" >Sign Up</button>

            <div v-if="error" class="error">
              {{ error }}
            </div>

            <p class="text-sm font-semibold">Already have an account? <router-link :to="{name: 'login' }" class="route-link" >Login</router-link> </p>
          </form>
      
      </div>
  
  </div>

</template>

<script>
import { ref } from 'vue';
import UserSignup from "../composables/UserSignup"
import {useRouter} from 'vue-router'

export default {
  setup(){
    let name = ref('');
    let email = ref('');
    let password = ref('');
    let router = useRouter()
    
    let{error, createAccount} = UserSignup()

    let Signup = async() => {
          
      let response = await createAccount(name.value, email.value, password.value)   
      
      if(response){
          router.push({name: 'chatroom'})
      }
    
    }

    return {error, name, email, password, Signup}
  }
};
</script>

<style></style>
