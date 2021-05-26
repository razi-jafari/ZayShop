<template>
  <div id="nav-bar" >
   <div class="container mx-auto">
  
    <div class="sotial-network">
      <font-awesome-icon :icon="['fas', 'align-justify']" />
      <font-awesome-icon :icon="['fas', 'instagram']" />
    </div>

  </div>
    
   
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  
}
</script>

<style>
#nav-bar{
  background-color: rgb(53, 50, 50);
  padding: 7px;
  color: rgb(238, 238, 238);
}
</style>
