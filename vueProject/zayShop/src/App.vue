<template>
  <div id="app">
      <navbar></navbar>
      <admin></admin>           <!-----admin----->
      <slider :images="images" >  <!--slider-->
        </slider>
        <router-view></router-view>
        
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Admin from './components/Admin.vue'
import Slider from './components/Slider.vue'


export default {
  components:{
    'navbar': Navbar,
    'slider': Slider,
    'admin': Admin,
  },
  name: 'App',
  data(){
    return{
      
      
      images: [
           require('../src/image/lamp.png'),
           require('../src/image/shoes.png'),
           require('../src/image/perfiom.png')
        ]
      } 
    }
  ,
  
  
}

</script>
    

<style>

 
 
</style>
