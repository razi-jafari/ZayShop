<template>
  <div id="app" >
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/shop">Shop</router-link>
      </div>
      
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#nav{
  background-color: rgb(251, 251, 251);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  padding: 25px;
  box-sizing: border-box;
}
.wrapper{
  display: flex;
  direction: rtl;
}
</style>
