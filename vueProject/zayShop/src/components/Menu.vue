<template>
  <div id="menu" >
   <div class="container mx-auto wrapper">
     <div class="menu-icons">
    <font-awesome-icon :icon="['fas', 'search']" />
    <font-awesome-icon :icon="['fas', 'cart-plus']" />
    <font-awesome-icon :icon="['fas', 'user']" />

  </div>
  <div class=" wrapper-menu">
    <Home/>
    <About/>
    <Shop/>
    <Contact/>
  </div>
  
  </div>
    
   
  </div>
</template>

<script>
import Home from './Home.vue'
import About from './Contact.vue'
import Shop from './Shop.vue'
import Contact from './About.vue'

export default {
  name: 'Menu',
  components: {
    Home,
    About,
    Shop,
    Contact
  }
}
</script>

<style>
#menu{
  background-color: rgb(251, 251, 251);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  padding: 25px;
  box-sizing: border-box;
}
.wrapper{
  display: flex;
  direction: rtl;
}
.wrapper-menu{
  display: flex;
  margin: 0 auto;
  width: 400px;
  justify-content: space-between;
  font-family: vazir;
 

}
.menu-icons{
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100px;
  direction: ltr;
}
</style>
