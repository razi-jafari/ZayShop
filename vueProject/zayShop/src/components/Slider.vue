<template>
  <div class="slider-style relative">
  <div  class="wrapper-slider flex items-center justify-end bg-slidergray">
    <img v-for="(image,index) in images" :key="image" :index="index"
    v-show="visibleSlide === index" :src="image" class="mr-48">
  </div>

   <button v-on:click="prev" class="prev absolute left-8 top-1/2">
     <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 20 20"><path d="M14 5l-5 5l5 5l-1 2l-7-7l7-7z" fill="#59ab6e"/></svg>
   </button>
   <button v-on:click="next" class="next absolute right-8 top-1/2">
     <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="4em" height="4em" viewBox="0 0 20 20"><path d="M6 15l5-5l-5-5l1-2l7 7l-7 7z" fill="#59ab6e"/></svg>
   </button>
      <div class="w-full -mt-12">
        <div class="w-32 m-auto">
          <span :class="{ active: isSelected}" @click="isSelected = !isSelected" class="dot dot1 w-8 h-1 mx-1 bg-slidergreen inline-block"></span>
          <span class="dot w-8 h-1 mx-1 bg-slidergreen inline-block "></span>
          <span class="dot w-8 h-1 mx-1 bg-slidergreen inline-block "></span>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Slider',
 props: {
   images: {
     type: Array,
     required: true
   }
 },
  data(){
      return{
        visibleSlide : 0,
        isSelected: false,
      }
  },
  computed:{
    slidLen(){
      return this.images.length
    }
  },
  methods: {
    next(){
        if (this.visibleSlide >= this.slidLen - 1){
            this.visibleSlide = 0
        }else{
          this.visibleSlide ++
        }
    },
    prev(){
        
       if(this.visibleSlide <= 0){
            this.visibleSlide = this.slidLen - 1
       }else{
         this.visibleSlide --
       }
        
    },
    
  }
}
</script>

<style>
  .wrapper-slider{
        height: 550px !important;
  }
  img{
        width: 300px;
        height: 450px !important;
    }
  .dot{
    height: 2rem;
    text-align: center;
  }
  .dot1.active{
    background-color: #b3d3bb;
  }
</style>
