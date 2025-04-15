<template>
  <dialog class="w-[100vw] h-[100vh] bg-black opacity-95 flex justify-center items-center fixed z-3 " v-if="open" >
    <div class="w-[668px] opacity-100" >
      <div class="bg-primary flex justify-end pr-14 rounded-t-[15px]"><button @click="handleClose" class="text-btn h-15">X</button></div>
      <form class="bg-white w-full px-10 pt-21 pb-16 rounded-b-[20px]">
        <div class="flex justify-between gap-3 mb-[27px]">
          <div class="rounded-[15px] border-1 border-cod w-1/2 pl-2 ">
            <p>First Name</p>
            <input placeholder="John">
          </div>
          <div class="rounded-[15px] border-1 border-cod w-1/2 pl-2">
          <p>Last Name</p>
          <input placeholder="Smith">
          </div>
        </div>
        <div class="rounded-[15px] border-1 border-cod w-full pl-2 ">
          <p>Email Address</p>
          <input placeholder="example@gmail.com">
        </div>
        <button class="bg-primary w-full h-15 rounded-[15px] mt-[34px] text-btn">Join the waitlist</button>
      </form>
    </div>
  </dialog>
</template>

<script lang='ts' setup>
import {openModal} from '../composables/states';
  const open = openModal()

  const handleClose =() => {
    open.value = !open.value
  }
</script>