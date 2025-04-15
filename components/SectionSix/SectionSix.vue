<template>
  <section class="lg:mt-39 lg:bg-[url(../../assets/image.jpg)]  bg-center bg-no-repeat mt-27 font-hubot">
    <div class="bg-darkprimary px-4 pt-10 border-[0.78px] border-primary gap-5 flex flex-col border-[0.78] border-dashed border-weborange border-l-0 lg:w-4/5 lg:rounded-tr-[432px] lg:pr-[276px] 2xl:pr-100 lg:pl-50 " >
      <h1 class="text-mid text-white text-center mb-5 font-bold lg:text-[52px] ">Frequently Asked Questions</h1>
      <div class="bg-white rounded-[4px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6">
        <button @click="handleToggle" class="flex items-center justify-between w-full"><h6 class="text-smallest font-medium text-left">What does koriki do?</h6> <img v-if="!toggle" class="size-10 " src="../../assets/pretoggle.svg"> <img v-if="toggle" class="size-10 " src="../../assets/toggle.svg"></button>
        <p v-if="toggle" class="text-textsm text-[13px]">Koriki aggregates data from all your marketing channels and simplifies the analytics, reporting and content management. Koriki is not just about creating content and scheduling posts, it’s about deriving insights from those posts and using those insights to fuel your growth.</p>
      </div>
      <div class="bg-white rounded-[4px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6">
        <button @click="handleSToggle" class="flex items-center justify-between w-full"><h6 class="text-smallest font-medium text-left">What marketing channels does Koriki support?</h6> <img v-if="!toggles" class="size-10 " src="../../assets/pretoggle.svg"> <img v-else class="size-10" src="../../assets/toggle.svg"></button>
        <p v-if="toggles" class=" text-textsm text-[13px]">Koriki aggregates data from all your marketing channels and simplifies the analytics, reporting and content management. Koriki is not just about creating content and scheduling posts, it’s about deriving insights from those posts and using those insights to fuel your growth.</p>
      </div>
      <div class="bg-white rounded-[4px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6">
        <button @click="handleTToggle" class="flex items-center justify-between w-full"><h6 class="text-smallest font-medium text-left">Can I use Koriki if I do not have a company?</h6> <img v-if="!togglet" class="size-10 " src="../../assets/pretoggle.svg"> <img v-if="togglet" class="size-10" src="../../assets/toggle.svg"></button>
        <p v-if="togglet" class=" text-textsm text-[13px]">Koriki aggregates data from all your marketing channels and simplifies the analytics, reporting and content management. Koriki is not just about creating content and scheduling posts, it’s about deriving insights from those posts and using those insights to fuel your growth.</p>
      </div>
      <div class="bg-white rounded-[4px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6">
        <button @click="handleLToggle" class="flex items-center justify-between w-full"><h6 class="text-smallest font-medium text-left">Where do I sign up?</h6> <img v-if="!togglet" class="size-10 " src="../../assets/pretoggle.svg"> <img v-if="togglel" class="size-10" src="../../assets/toggle.svg"></button>
        <p v-if="togglel" class=" text-textsm text-[13px]">Koriki aggregates data from all your marketing channels and simplifies the analytics, reporting and content management. Koriki is not just about creating content and scheduling posts, it’s about deriving insights from those posts and using those insights to fuel your growth.</p>
      </div>
      <span class="text-[12px] text-[22px] font-semibold text-white my-9 text-center">Got more questions? <span class="font-normal">Reach out to us at <a class="text-link underline" > hello@koriki.io</a></span></span>

    </div>
  </section>
</template>
<script lang="ts" setup>
import { openFFaq, openLFaq, openSFaq, openTFaq } from '../composables/states';

  const toggle = openFFaq()
  const toggles = openSFaq()
  const togglet = openTFaq()
  const togglel = openLFaq()

  const handleToggle =()=>{
    toggle.value =!toggle.value
  }
  
  const handleSToggle =()=>{
    toggles.value =!toggles.value
  }
  const handleTToggle =()=>{
    togglet.value =!togglet.value
  }
  const handleLToggle =()=>{
    togglel.value =!togglel.value
  }
  
</script>
