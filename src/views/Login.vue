<template>
    <div class="main">
        <div class="welcome-form" >
        <h2 class="form-title">Login</h2>
        <form class="space-y-10">
            <div>
                <label class="label" >Email</label>
                <input class="input" type="text">
            </div>
            <div>
                <label class="label" >Password</label>
                <input class="input" type="text">
            </div>
            <button class="btn" >Login</button>
            <p class="text-sm font-semibold" >Don't you have an account? <router-link :to="{name: 'signup'}" class="route-link">Sing Up</router-link> </p>
        </form>
    </div>
    </div>
</template>

<script>
    export default {
            
    }
</script>

<style>

</style>