<template>
  <div id="app">
    <span>
          <i class="fas fa-user-secret"></i>

    </span>
    <Navbar/>
    <Menu/>
    
  
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Menu
    
    
  }
}
</script>

<style>

</style>
