<template>
  <div id="app" >
      <navbar></navbar>
      <div id="wrapper-menu" class="flex items-center justify-between">
        
        <div class="container mx-auto sm:w-2/4 md:w-2/4 flex justify-between ">
        <router-link to="/" class="">خانه</router-link>
        <router-link to="/about" class="">درباره ما</router-link>
        <router-link to="/contact" class="">تماس با ما</router-link>
        <router-link to="/shop" class="">فروشگاه</router-link>
        </div>
        <h1 class="text-emerald-500 text-center">hello</h1>
        <button type="button" >
          <font-awesome-icon :icon="['fas', 'align-justify']" />
        </button>
      </div>
      
        <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{
    'navbar': Navbar
  },
  name: 'App',
}
</script>
    Navbarpt>

<style>
#wrapper-menu{
  background-color: rgb(251, 251, 251);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  padding: 25px;
  box-sizing: border-box;
  
}
 
</style>
