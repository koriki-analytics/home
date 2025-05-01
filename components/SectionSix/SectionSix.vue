<template>
  <section class="lg:mt-39 lg:bg-[url(../../assets/image.jpg)]  bg-center bg-no-repeat mt-27 font-hubot">
    <div class="bg-darkprimary px-4 pt-10 border-[0.78px] border-primary gap-5 flex flex-col md:border-[3px] 
    md:px-20 border-dashed border-weborange border-l-0 lg:w-4/5 lg:pr-45 lg:rounded-tr-[432px] xl:pr-[276px] 2xl:pr-100 xl:pl-50 " >
      <h1 class="text-mid text-white text-center mb-5 font-bold lg:text-[52px] ">Frequently Asked Questions</h1>
      <div class="bg-white rounded-[4px] md:rounded-[14px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6 btn ">
        <button @click="handleToggle" class="flex items-center justify-between w-full faq"><h6 class="text-smallest font-medium text-left">What does koriki do?</h6> <svg class="move" width="50" height="50" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_233_2187)">
      <circle cx="41.4876" cy="36.9256" r="25.3309" fill="white"/>
      </g>
      <path d="M38.3779 45.1821L46.5972 36.9255L38.3779 28.669" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <filter id="filter0_d_233_2187" x="0.156738" y="0.594727" width="82.6616" height="82.6616" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="5"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_233_2187"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_233_2187" result="shape"/>
      </filter>
      </defs>
      </svg></button>
        <p v-if="toggle" class="text-textsm text-[13px]">Koriki aggregates data from all your marketing channels and simplifies the analytics, reporting and content management. Koriki is not just about creating content and scheduling posts, it’s about deriving insights from those posts and using those insights to fuel your growth.</p>
      </div>
      <div class="bg-white rounded-[4px] md:rounded-[14px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6 btn ">
        <button @click="handleSToggle" class="flex items-center justify-between w-full faq"><h6 class="text-smallest font-medium text-left">What marketing channels does Koriki support?</h6><svg class="move" width="50" height="50" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_233_2187)">
      <circle cx="41.4876" cy="36.9256" r="25.3309" fill="white"/>
      </g>
      <path d="M38.3779 45.1821L46.5972 36.9255L38.3779 28.669" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <filter id="filter0_d_233_2187" x="0.156738" y="0.594727" width="82.6616" height="82.6616" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="5"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_233_2187"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_233_2187" result="shape"/>
      </filter>
      </defs>
      </svg></button>
        <p v-if="toggles" class=" text-textsm text-[13px]">Koriki aggregates data from all your marketing channels and simplifies the analytics, reporting and content management. Koriki is not just about creating content and scheduling posts, it’s about deriving insights from those posts and using those insights to fuel your growth.</p>
      </div>
      <div class="bg-white rounded-[4px] md:rounded-[14px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6 btn">
        <button @click="handleTToggle" class="flex items-center justify-between w-full faq"><h6 class="text-smallest font-medium text-left">Can I use Koriki if I do not have a company?</h6> <svg class="move" width="50" height="50" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_233_2187)">
      <circle cx="41.4876" cy="36.9256" r="25.3309" fill="white"/>
      </g>
      <path d="M38.3779 45.1821L46.5972 36.9255L38.3779 28.669" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <filter id="filter0_d_233_2187" x="0.156738" y="0.594727" width="82.6616" height="82.6616" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="5"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_233_2187"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_233_2187" result="shape"/>
      </filter>
      </defs>
      </svg></button>
        <p v-if="togglet" class=" text-textsm text-[13px]">Koriki aggregates data from all your marketing channels and simplifies the analytics, reporting and content management. Koriki is not just about creating content and scheduling posts, it’s about deriving insights from those posts and using those insights to fuel your growth.</p>
      </div>
      <div class="bg-white rounded-[4px] md:rounded-[14px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6 btn">
        <button @click="handleLToggle" class="flex items-center justify-between w-full faq"><h6 class="text-smallest font-medium text-left">Where do I sign up?</h6>
          <svg class="move" width="50" height="50" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_233_2187)">
      <circle cx="41.4876" cy="36.9256" r="25.3309" fill="white"/>
      </g>
      <path d="M38.3779 45.1821L46.5972 36.9255L38.3779 28.669" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <filter id="filter0_d_233_2187" x="0.156738" y="0.594727" width="82.6616" height="82.6616" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="5"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_233_2187"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_233_2187" result="shape"/>
      </filter>
      </defs>
      </svg>
      </button> 
        <p v-if="togglel" class=" text-textsm text-[13px]">Koriki aggregates data from all your marketing channels and simplifies the analytics, reporting and content management. Koriki is not just about creating content and scheduling posts, it’s about deriving insights from those posts and using those insights to fuel your growth.</p>
      </div>
      <span class="text-[12px] text-[22px] font-semibold text-white my-9 text-center">Got more questions? <span class="font-normal">Reach out to us at <a class="text-link underline cursor-pointer" > hello@koriki.io</a></span></span>

    </div>
  </section>
</template>

<script  setup>
import gsap from 'gsap'
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

  

  onMounted(()=>{
    const tl = gsap.timeline({
        duration: 1,
        repeat:-1,
        repeatDelay:0.3,
      })
    
    const btn = document.querySelectorAll('.faq')
    btn.forEach(item =>{
      const be = item.lastChild
      item.addEventListener('mouseover', function(){
        tl.to(be,{
          x: 5,
          scale: 1.1
        }, '<').play(0)
      } )
      item.addEventListener('mouseout', ()=>{
        tl.set(be,{
          x:0,
          scale:1
        }).pause(0)
      })
      
    })

    
  }

  )
  
</script>
