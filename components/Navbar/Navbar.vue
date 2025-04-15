<template>
  <nav class=" flex md:px-25.25 justify-between items-center absolute top-0 h-[70px] md:h-[100px] shadow-sm w-1/1 md:shadow-none z-2 pl-3 font-hubot">
    <img class="w-[100px] md:w-[150px]" src="../../assets/logo.png">
    <button class="hidden md:block bg-primary text-btn w-[237px] rounded-[20px] h-[55px]" @click="handleModal">Join the waitlist</button>
  </nav>
</template>

<script lang="ts" setup>
import { openModal } from '../composables/states';

  const open = openModal()

  const handleModal =()=>{
    open.value =!open.value
    console.log(open.value)
  }
  
</script>