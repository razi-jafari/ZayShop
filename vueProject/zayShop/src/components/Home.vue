<template>
  <div class="nested-menue" >
   <div >
       خانه
       <h3>job: {{ job }}</h3>
       <p>name: {{ name }}</p>
       <p >{{methodname()}}</p>
  </div>
    
   
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      name: 'razi',
      job: 'ninja',
      greet: 'hello'
    }
  },
  methods:{
    methodname(){
      return this.greet + this.job
    }
  },
  
  
}
</script>

<style>
    @import '../assets/css/NestedMenu.css';
</style>
