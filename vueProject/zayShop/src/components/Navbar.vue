<template>
  <div id="nav-bar" class="bg-darkgray md:hidden" >
   <div class="container mx-auto">
     <div class="w-full xl:w-full flex items-center justify-between">
       <div class="tell flex 2xl:w-3/5 xl:w-3/5 ">
       
       <div class="email-box relative left-20  items-center flex">
           <i>
         <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1em" height="1em" viewBox="0 0 24 24"><path d="M20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="#fffff"/></svg>
       </i>
          <a href="mailto:info@company.com" class="text-xs inset-y-4 ml-2">info@company.com</a>
       </div>
       <div class="tell-box items-center flex ml-24">
         <i>
         <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="0.75em" height="0.75em" viewBox="0 0 16 16"><g fill="#fffff"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></g></svg>
       </i>
          <a class="text-xs inset-y-4 ml-2" href="tel:010-020-0340" >010-020-0340</a>
       </div>
       
     </div>
    <div class="sotial-network flex 2xl:w-1/2 xl:w-3/12 justify-center ">
      
      <i class="ml-2 relative 2xl:left-40 xl:left-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="0.75em" height="0.75em" viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="#fffff"/></svg>
      </i>
      <i class="ml-2 relative 2xl:left-40 xl:left-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="0.75em" height="0.75em" viewBox="0 0 16 16"><g fill="fffff"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></g></svg>
      </i>
      <i class="ml-2 relative 2xl:left-40 xl:left-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="0.75em" height="0.75em" viewBox="0 0 1024 1024"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" fill="fffff"/></svg>
      </i>
      <i class="ml-2 relative 2xl:left-40 xl:left-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="0.75em" height="0.75em" viewBox="0 0 486.037 1000"><path d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074" fill="fffff"/></svg>
      </i>
    </div>
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
  padding: 7px;
  color: rgb(238, 238, 238);
}
i{
  margin: 4px
}
</style>
