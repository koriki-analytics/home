<template>
  <section class="flex flex-col lg:flex-row px-[22px] md:px-0 font-hubot "  >
    <div class=" w-full h-full flex mt-[108px] lg:pl-[40px] xl:pl-25.25 lg:pt-10 justify-center lg:justify-start flex-1 ">
      <div class="flex flex-col items-center lg:items-start max-w-full" >
          <h1 class='text-mdashboard md:text-dashboard w-[352px] md:w-[580px] 2xl:w-2xl text-center  lg:text-[50px] lg: lg:text-left  lg:text-left font-bold 2xl:text-[75px] lg:w-full'>All Your Digital Marketing in <span class="text-primary">One Place.</span></h1>
          <p class="text-p text-center lg:text-left mt-5 w-[352px] md:w-[580px] lg:w-9/10">Boost sales & reach your target customers all from one central dashboard</p>
          <button class="bg-primary text-btn w-[188px] md:w-[219px] h-[52px] rounded-[15px] mt-[14px] md:mt-10 md:40px btn" @click="handleModal">Join the waitlist</button>
          <img class="hidden lg:block mt-20" src="../../assets/Decoration.svg">
        </div>
      </div>
      
    <div class=" lg:bg-[url(../../assets/Frame.svg)] bg-cover md:flex-1 flex  md:mt-0 bg-no-repeat justify-center md:pt-30 w-full mt-14 lg:pt-40">
      <img src="../../assets/dashboard.png" class="z-1  flex lg:shrink-1 slide-left size-fit">
    </div>
  </section>
</template>

<script lang="ts" setup>
import { openModal } from '../composables/states';

  const open = openModal()

  const handleModal =()=>{
    open.value =!open.value
    console.log(open.value)
  }

  
</script>

<style scoped>
  .slide-left{
    animation: slide-left 1s ease-in;
  }
  @keyframes slide-left {
    from{
      transform: translate3d(100%, 0, 0);
    }
    to{
      transform: translate3d(0, 0, 0);
    }
  }
</style>