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
            <p class="text-sm font-semibold"  >Already have an account? <router-link :to="{name: 'login' }" class="text-blue-600 cursor-pointer hover:underline" >Login</router-link> </p>
          </form>
      
      </div>
  
  </div>

</template>

<script>
import { ref } from 'vue';
import {auth} from '../firebase/config'

export default {
  setup(){
    let name = ref('');
    let email = ref('');
    let password = ref('');
    let error = ref('')
    let Signup = async() => {
        try {
          let response = await auth.createUserWithEmailAndPassword(email.value,password.value)
          if(!response){
            throw new Error('Could not create new User')
          }
        } catch (err) {
          error.value = err.message
          console.log(error.value);
        }
    }

    return {name, email, password, Signup}
  }
};
</script>

<style></style>
