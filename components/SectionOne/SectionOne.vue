<template>
  <section class="flex flex-col lg:flex-row px-[22px] md:px-0 font-hubot "  >
    <div class=" flex-initial mt-[108px] lg:pl-[40px] xl:pl-25.25 lg:pt-10  flex justify-center lg:justify-start ">
      <div class="flex flex-1 flex-col items-center lg:items-start shrink max-w-1/2" >
          <h1 class='text-mdashboard md:text-dashboard w-[352px] md:w-[580px] 2xl:w-2xl text-center  lg:text-[42px] lg:w-[440px] lg:text-left  lg:text-left font-bold 2xl:text-[75px] lg:max-w-ful '>All Your Digital Marketing in <span class="text-primary">One Place.</span></h1>
          <p class="text-p text-center lg:text-left mt-5 w-[352px] md:w-[580px] ">Boost sales & reach your target customers all from one central dashboard</p>
          <button class="bg-primary text-btn w-[188px] md:w-[219px] h-[52px] rounded-[15px] mt-[14px] md:mt-10 md:40px" @click="handleModal">Join the waitlist</button>
          <img class="hidden lg:block mt-20" src="../../assets/Decoration.svg">
        </div>
      </div>
      
    <div class=" lg:bg-[url(../../assets/Frame.svg)] bg-cover md:flex-2 flex mt-[55px] md:mt-0 bg-no-repeat  justify-center ">
      <img src="../../assets/dashboard.png" class="z-1 flex lg:shrink-0 lg:min-w-[400px] slide-left">
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