<template>
  <nav class=" flex xl:px-25.25 md:px-10 justify-between items-center absolute top-0 h-[70px] md:h-[100px] shadow-sm w-1/1 md:shadow-none z-2 pl-3 font-hubot" v-if="param.pathname === '/waitlist'">
    <img class="w-[100px] md:w-[150px]" src="../../assets/logo.png">
    <button class="hidden md:block bg-primary text-btn w-[237px] rounded-[20px] h-[55px] btn cursor-pointer" @click="handleModal">Join the waitlist</button>
  </nav>
  <nav class=" flex xl:px-25.25 md:px-10 justify-between items-center sticky top-0 h-[70px] md:h-[100px] shadow-sm w-1/1 md:shadow-none z-2 pl-3 font-hubot bg-white z-100" v-else>
    <img class="w-[100px] md:w-[150px]" src="../../assets/logo.png">
    <!-- <button class="hidden md:block bg-primary text-btn w-[237px] rounded-[20px] h-[55px] btn cursor-pointer" @click="handleModal">Join the waitlist</button> -->
  </nav>
</template>

<script lang="ts" setup>
import { openModal } from '../composables/states';

  const open = openModal()

  const handleModal =()=>{
    open.value =!open.value
    console.log(open.value)
  }

  const param = useRequestURL()
  
</script>

<style>
.btn:hover{
  animation: hover-state 0.1s ease-in forwards

}

@keyframes hover-state {
  to{
    transform: scale(1.1); 
    background-color:var(--color-hover) ;
    color: black
  }
}
</style>

