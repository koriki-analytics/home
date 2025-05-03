<template>
  <dialog class=" w-[100vw] h-[100vh] bg-transparent flex justify-center items-center fixed z-10 cal font-hubot" v-if="open" >
    <div @click="handleClose" class="overlay"></div>
    <div class="flex z-5 lg:h-[80vh] md:w-6/10 w-full h-fit items-center ">
      <div class="bg-white flex flex-col justify-center items-center gap-7 px-20 py-5 md:px-32 lg:py-1/10 flex-2 w-5/10 h-full">
        <ModalIcon class="min-h-[250px]"/>
        <h1 class="text-mp font-bold">Join the Koriki Waitlist 🚀</h1>
        <p>Get early access to the smarter way to grow your brand.</p>
        <form class="gap-6 flex flex-col w-full">
          <div class="flex md:flex-row flex-col gap-6 w-full ">
            <div class="flex flex-col w-full relative">
              <label class="absolute translate-y-[-12px] translate-x-1/5 bg-white" for="firstName">First Name</label>
              <input placeholder="John" type="text" class="w-full h-14 border-1 border-cod rounded-[15.26px] px-2" id="firstName">
            </div>
            <div class="flex flex-col w-full">
              <label class="absolute translate-y-[-12px] translate-x-1/5 bg-white" for="lastName">Last Name</label>
              <input placeholder="Doe" type="text" class="w-full h-14 border-1 border-cod rounded-[15.26px] px-2">
            </div>
          </div>
          <div class="flex flex-col">
            <label class="absolute translate-y-[-12px] translate-x-1/5 bg-white" for="email">Email Address</label>
            <input placeholder="john24doe@gmail.com" type="email" class="w-full h-14 border-1 border-cod rounded-[15.26px] px-2">
          </div>
          <button class="text-white bg-primary h-14 rounded-[15.26px] btn cursor-pointer">Join the waitlist</button>
        </form>
      </div>
      <div class=" hidden lg:flex flex-1 w-2/10 h-full bg-[url(@/assets/image.jpg)] bg-cover bg-repeat-none flex items-start justify-end px-3 py-5">
        <button @click="handleClose" class="text-white size-fit" >
          <CloseIcon/>
        </button>
      </div>
      
    </div>
  </dialog>
</template>

<style scoped>
  .overlay{
    content:" ";
    top: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    z-index: 1;
    opacity: 0.8
    
  }
  .cal{
    
  }
</style>

<script lang='ts' setup>
import {openModal} from '../composables/states';
  const open = openModal()

  const handleClose =() => {
    open.value = !open.value
  }
</script>