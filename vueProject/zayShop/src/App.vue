<template>
  <div id="app" @click="isOpen = !isOpen">
      <navbar></navbar>
      <nav id="wrapper-menu" class="flex 2xl:items-center bg-dustywithe 2xl:justify-between px-8 md:block md:py-6" >
        <div class="block md:w-full " id="wrapper-humberger">
          <button type="button" class=" md:inline-flex md:active:border-gray-700 md:w-8  2xl:hidden justify-center"  id="humberger">
            <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1.75em" height="1.75em" viewBox="0 0 24 24"><g fill="fffff"><path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z" fill="#fffff"/><path d="M2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z" fill="#fffff"/><path d="M3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z" fill="#fffff"/></g></svg>
            </span>
          </button>
        </div>
        <div class="open" v-if="isOpen">
          <div  id="wrapper-sub-menu" class=" leading-10 2xl:hidden md:block md:flex text-lg 2xl:justify-between md:flex-col md:w-full md:pr-12">
            <router-link to="/" class="">خانه</router-link>
            <router-link to="/about" class="">درباره ما</router-link>
            <router-link to="/contact" class="">تماس با ما</router-link>
            <router-link to="/shop" class="">فروشگاه</router-link>
        </div>
        <div class="input-group  my-7 relative flex flex-wrap items-stretch md:w-full ">
         
              <input type="text" class="form-control w-10 mx-0 border-2 border-gray-200 pr-1.5 relative flex-auto   2xl:hidden md:block" placeholder="جستجو کنید ...">
          <div class="input-group-text md:flex 2xl:hidden mx-0 py-0.5 px-1 bg-gray-200 border-2 border-gray-300 rounded">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1em" height="1em" viewBox="0 0 24 24"><g fill="#626262"><path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1l8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5a6.75 6.75 0 0 1 0 13.5z"/></g></svg>
              </i>
          </div>
          <div class="flex wrapper-icon">
              
              <i class="2xl:hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1.5em" height="1.5em" viewBox="0 0 100 100"><circle cx="32.961" cy="81.02" r="5.889" fill="#626262"/><circle cx="74.309" cy="81.02" r="5.889" fill="#626262"/><path d="M73.513 55.216a3.443 3.443 0 0 0 3.11-1.978l.003.002l14.589-25.27l-.018-.01c.214-.449.344-.946.344-1.477a3.451 3.451 0 0 0-3.452-3.452H34.499v-6.488a3.451 3.451 0 0 0-3.452-3.452H12.186v.028c-.092-.008-.181-.028-.275-.028a3.44 3.44 0 0 0-3.41 3.035h-.042v3.452a3.451 3.451 0 0 0 3.452 3.452c.094 0 .183-.021.275-.028v.028h12.373v43.733h.001a3.45 3.45 0 0 0 3.451 3.442h59.256v-.085a3.433 3.433 0 0 0 3.185-2.922h.049v-.49l.002-.018l-.002-.018V63.67l.002-.018a3.44 3.44 0 0 0-3.236-3.429v-.022H34.498v-4.988h39.015z" fill="#626262"/></svg>
              </i>
              <i class="2xl:hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" fill="#626262"/></svg>
              </i>
          
          </div>
        </div>
        </div>
         
          <div class="desktop w-full flex py-7" >
          <div  id="wrapper-sub-menu" class="w-2/5 xl:w-1/2 flex justify-between mx-auto text-lg md:hidden">
            <router-link to="/" class="">خانه</router-link>
            <router-link to="/contact" class="">تماس با ما</router-link>
            <router-link to="/shop" class="">فروشگاه</router-link>
            <router-link to="/about" class="">درباره ما</router-link>
        </div>
          <div class="flex wrapper-icon w-1/6">
              <i class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1.25em" height="1.25em" viewBox="0 0 24 24"><g fill="#626262"><path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1l8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5a6.75 6.75 0 0 1 0 13.5z"/></g></svg>
              </i>
              <i class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1.5em" height="1.5em" viewBox="0 0 100 100"><circle cx="32.961" cy="81.02" r="5.889" fill="#626262"/><circle cx="74.309" cy="81.02" r="5.889" fill="#626262"/><path d="M73.513 55.216a3.443 3.443 0 0 0 3.11-1.978l.003.002l14.589-25.27l-.018-.01c.214-.449.344-.946.344-1.477a3.451 3.451 0 0 0-3.452-3.452H34.499v-6.488a3.451 3.451 0 0 0-3.452-3.452H12.186v.028c-.092-.008-.181-.028-.275-.028a3.44 3.44 0 0 0-3.41 3.035h-.042v3.452a3.451 3.451 0 0 0 3.452 3.452c.094 0 .183-.021.275-.028v.028h12.373v43.733h.001a3.45 3.45 0 0 0 3.451 3.442h59.256v-.085a3.433 3.433 0 0 0 3.185-2.922h.049v-.49l.002-.018l-.002-.018V63.67l.002-.018a3.44 3.44 0 0 0-3.236-3.429v-.022H34.498v-4.988h39.015z" fill="#626262"/></svg>
              </i>
              <i class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" fill="#626262"/></svg>
              </i>
          </div>
        
        </div>

      </nav>
      
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
  data(){
    return{
      isOpen: false
    }
  },
  // methods: {
  //   handleView(){
  //     return this.isOpen = window.innerWidth >= 768
  //   }v-if="isOpen"
  // },
  
}

</script>
    

<style>
#wrapper-menu{
  
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  
  box-sizing: border-box;
  
}
#wrapper-sub-menu{
  direction: rtl;
}


 #wrapper-humberger{
   direction: rtl;
 }
 .form-control{
   direction: rtl;
   width: 1%;
   border-right-style: hidden;
   
 }
 .input-group-text{
   border-left-style: hidden;
   
 }
 
 
</style>
