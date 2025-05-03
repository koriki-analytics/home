<template>
  <section class="mt-13 mb:22 lg:mb-58 lg:mt-44 flex justify-center overflow-x-hidden font-hubot">
    <div class="flex flex-col lg:max-w-[1342px] items-center">

      <div class="flex justify-center">
        <h1 class="text-p md:text-wedo font-bold">What We Do</h1>
      </div>
      <!-- first -->
      <div class="flex flex-col lg:flex-row lg:justify-center lg:mt-38 gap-5 items-center entry">
        <img class="min-w-1/2 lg:max-w-1/2 metaimage" src="../../assets/Feature.png ">
        <div class="flex items-center flex-col px-4 lg:justify-center lg:flex-1 max-w-[580px] metatext">
        <h1 class="text-wedosubm md:text-wedosub font-bold">Smart Marketing Management & AI Insights</h1>
        <div class="flex flex-col items-start w-full my-6 ">
          <h6 class="text-[#4B4B53] font-semibold text-[16px] text-left w-1/1">Unified Marketing Dashboard</h6>
          <ul>
            <li class="mb-4 mt-2"><div class="flex gap-3">
              <img src="../../assets/Group.svg">
              <p class="text-[16px] text-[#82848E]">All your marketing data in one place</p>
            </div></li>
            <li><div class="flex gap-3">
              <img src="../../assets/Group.svg">
              <p class="text-[16px] text-[#82848E]">From the big picture to the intricate details – Koriki’s got you covered</p>
            </div></li>
          </ul>
        </div>
        <div class="flex flex-col items-start w-full my-6">
          <h6 class="text-[#4B4B53] font-semibold text-[16px] text-left w-1/1">AI-driven Insights</h6>
          <ul >
            <li class="mb-4 mt-2"><div class="flex gap-3">
              <img src="../../assets/Group.svg">
              <p class="text-[16px] text-[#82848E]">Find out what’s working and what’s not before it costs you.</p>
            </div></li>
            <li><div class="flex gap-3">
              <img src="../../assets/Group.svg">
              <p class="text-[16px] text-[#82848E]">Predict future trends & get recommendations to keep you ahead of the game.</p>
            </div></li>
          </ul>
        </div>
        </div>
      </div>
      <!-- second -->
      <div class="flex flex-col lg:flex-row-reverse lg:justify-center items-center entry">
        <img class="min-w-1/2 lg:max-w-1/2 w-full metaimage" src="../../assets/Group2.png">
        <div class="flex items-start md:items-center flex-col px-4 lg:justify-start lg:flex-1 lg:pt-0 max-w-[580px] metatext ">
        <h1 class="text-wedosubm md:text-wedosub font-bold">Seamless Integration & Content Control</h1>
        <div class="flex flex-col items-start w-full my-6">
          <h6 class="text-[#4B4B53] font-semibold text-[16px] text-left w-1/1">Multi-Platform Integration</h6>
          <ul>
            <li class="mb-4 mt-2"><div class="flex gap-3">
              <img src="../../assets/Group.svg">
              <p class="text-[16px] text-[#82848E]">Connect your social accounts and ad platforms with the click of a button
              </p>
            </div></li>
            <li><div class="flex gap-3">
              <img src="../../assets/Group.svg">
              <p class="text-[16px] text-[#82848E]">No more switching between tabs — it's all here.</p>
            </div></li>
          </ul>
        </div>
        <div class="flex flex-col items-start w-full my-6">
          <h6 class="text-[#4B4B53] font-semibold text-[16px] text-left w-1/1">Content Management</h6>
          <ul >
            <li class="mb-4 mt-2"><div class="flex gap-3">
              <img src="../../assets/Group.svg">
              <p class="text-[16px] text-[#82848E]">Keep track of your past, present and future content ideas</p>
            </div></li>
            <li><div class="flex gap-3">
              <img src="../../assets/Group.svg">
              <p class="text-[16px] text-[#82848E]"> Schedule posts across multiple social media channels</p>
            </div></li>
          </ul>
        </div>
        </div>
      </div>
        <!-- third -->
      <div class="flex flex-col lg:flex-row lg:justify-center gap-15 entry">
      <img class="metaimage" src="../../assets/Group3.svg">
      <div class="flex items-start lg:items-center flex-col px-4 lg:justify-center max-w-[580px] lg:flex-1 metatext">
      <h1 class="text-wedosubm md:text-wedosub font-bold">Smart Reports & Real-Time Alerts</h1>
      <div class="flex flex-col items-start w-full my-6">
        <h6 class="text-[#4B4B53] font-semibold text-[16px] text-left w-1/1">Automated Reporting</h6>
        <ul>
          <li class="mb-4 mt-2"><div class="flex gap-3">
            <img src="../../assets/Group.svg">
            <p class="text-[16px] text-[#82848E]">Get detailed marketing performance reports how you want, when you want.
            </p>
          </div></li>
          <li><div class="flex gap-3">
            <img src="../../assets/Group.svg">
            <p class="text-[16px] text-[#82848E]"> Carry your team along with shared reports</p>
          </div></li>
        </ul>
      </div>
      <div class="flex flex-col items-start w-full my-6">
        <h6 class="text-[#4B4B53] font-semibold text-[16px] text-left w-1/1">Performance Alerts</h6>
        <ul >
          <li class="mb-4 mt-2"><div class="flex gap-3">
            <img src="../../assets/Group.svg">
            <p class="text-[16px] text-[#82848E]">Set goals and get notified of key milestones</p>
          </div></li>
          <li><div class="flex gap-3">
            <img src="../../assets/Group.svg">
            <p class="text-[16px] text-[#82848E]">Instant alerts when you’re off track so you can fix issues fast. </p>
          </div></li>
        </ul>
      </div>
      </div>
      </div>
    </div>
    
  </section>
</template>

<script setup>
  import gsap from 'gsap'
  import Lenis from 'lenis'
  import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
    const entries = document.querySelectorAll('.entry')

    entries.forEach(entry => {
      let entryImage = entry.querySelector('.metaimage')
      let entryText = entry.querySelector('.metatext')

      gsap.set(entryText, {
        xPercent: 100,
        opacity: 0
      })

      gsap.set(entryImage, {
        xPercent:-100,
        opacity: 0
      })

      gsap.to(entryText, {
        scrollTrigger: {
          trigger: entry,
          start: 'top bottom',
          end: 'bottom 90%',
          scrub: true
        },
        xPercent:0,
        opacity:1
      })

      gsap.to(entryImage, {
        scrollTrigger:{
          trigger: entry,
          start: 'top bottom',
          end: 'bottom 90%',
          scrub: true
        }, 
        xPercent: 0,
        opacity: 1
      })
    });
  })

</script>