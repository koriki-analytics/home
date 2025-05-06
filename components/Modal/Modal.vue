<template>
  <dialog class=" w-[100vw] h-[100vh] bg-transparent flex justify-center items-center fixed z-10 cal font-hubot" v-if="open && !success" >
    <div @click="handleClose" class="overlay"></div>
    <div class="flex z-5 lg:h-[80vh] md:w-6/10 w-full h-fit items-center ">
      <div class="bg-white flex flex-col justify-center items-center gap-7 px-10 md:px-15 py-5  xl:px-32 lg:py-1/10 flex-2 w-5/10 h-full pb-20">
        <ModalIcon class="h-[125px] md:min-h-[250px] "/>
        <h1 class="md:text-mp font-bold text-mid text-center ">Join the Koriki Waitlist 🚀</h1>
        <p>Get early access to the smarter way to grow your brand.</p>
        <form @submit.prevent="handleSubmit" class="gap-6 flex flex-col w-full items-center">
          <div class="flex md:flex-row flex-col gap-6 w-full max-w-[480px] md:max-w-full">
            <div class="flex flex-col w-full  relative">
              <label class="absolute translate-y-[-12px] translate-x-1/5 bg-white" for="firstName">First Name*</label>
              <input  required placeholder="John" type="text" class="mediaQ w-full md:h-14 border-1 border-cod rounded-[15.26px] px-2 h-12" id="firstName" v-model="firstName">
            </div>
            <div class="flex flex-col w-full">
              <label class="absolute translate-y-[-12px] translate-x-1/5 bg-white" for="lastName">Last Name*</label>
              <input required placeholder="Doe" type="text" class="w-full md:h-14 h-12 border-1 border-cod rounded-[15.26px] px-2" v-model="lastName">
            </div>
          </div>
          <div class="flex flex-col w-full md:max-w-full max-w-[480px]">
            <label class="absolute translate-y-[-12px] translate-x-1/5 bg-white" for="email">Email Address*</label>
            <input required placeholder="john24doe@gmail.com" type="email" class=" w-full md:h-14 border-1 border-cod rounded-[15.26px] px-2 h-12 " v-model="email">
          </div>
          <button class="text-white bg-primary h-14 rounded-[15.26px] btn cursor-pointer w-full" id="formButton " v-if="!loading">Join the waitlist</button>
          <button class="text-white bg-primary h-14 rounded-[15.26px] btn cursor-pointer flex justify-center gap-2 items-center hidden unhide w-full" id="formButton">
            <div class="bg-white size-[30px] rounded-[15px] test "></div>
            <div class="bg-white size-[20px] rounded-[10px] test "></div>
            <div class="bg-white size-[10px] rounded-[5px] test " ></div>
            
          </button>
        </form>
      </div>
      <div class=" hidden lg:flex flex-1 w-2/10 h-full bg-[url(@/assets/image.jpg)] bg-cover bg-repeat-none flex items-start justify-end px-3 py-5">
        <button @click="handleClose" class="text-white size-fit ">
          <CloseIcon/>
        </button>
      </div>
      
    </div>
  </dialog>

  <dialog class=" w-[100vw] h-[100vh] bg-transparent flex justify-center items-center fixed z-10 cal font-hubot" v-if="open && success" >
    <div @click="handleClose" class="overlay"></div>
    <div class="flex z-5 lg:h-[80vh] md:w-5/10 w-full h-fit items-center ">
      <div class="bg-white flex flex-col justify-center items-center gap-7 px-5 md:px-20 py-5 lg:px-32 lg:py-1/10 flex-2 w-5/10 h-full border-[2px] border-dashed border-primary rounded-[30px]">
        <Success class="min-h-[250px]"/>
        <h1 class="text-wedosubm font-bold">You're In!</h1>
        <p class="text-center">We’re excited to help you tell your brand’s story like never before.
          You’ll be the first to know when we launch.</p>
        <button @click="handleClose" class="text-white w-1/2 font-semibold text-wedosubm h-16 bg-primary rounded-[15px] btn cursor-pointer ">Back to home</button>
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


</style>

<script lang='ts' setup>

import {isLoading, openModal} from '../composables/states';
import { useSuccess } from '../composables/states';
import gsap from 'gsap'


  const firstName = ref<string>("")
  const lastName = ref<string>("")
  const email = ref<string>("")
  const open = openModal()
  const success = useSuccess()
  const loading = isLoading()


  const handleClose =() => {
    open.value = !open.value
    success.value = false
  }

  

  const handleSubmit = async() =>{
    loading.value = !loading.value
    const btn = document.querySelector('.unhide')
    btn?.classList.remove('hidden')
    
    const test = document.querySelectorAll('.test')
    console.log(test)

    const tl = gsap.timeline({
      repeat:-1,
      duration: 0.4,
      repeatDelay:0.5,
      yoyo: true
    })

    tl.to(test[0], {
        scale: 0.4,
        xPercent:100
      }).to(test[1], {
        scale: 1
      }).to(test[2], {
        scale:3,
        xPercent: -500
    })

    


    const fullName = firstName.value + " " + lastName.value
    const postEmail = email.value
    try{
      const response = await $fetch('https://backend-main-dev-a2cf.up.railway.app/waitlist', {
      method: 'POST',
      body: {
        full_name: fullName,
        email: postEmail
      }
    })
    console.log(response)
    if(response.status == 'success'){
      loading.value = !loading.value
      success.value =!success.value
    }
    }
    
    catch{

    }

    
  }

</script>