<template>
  <section class="lg:mt-39 lg:bg-[url(../../assets/image.jpg)]  bg-center bg-no-repeat mt-27 font-hubot">
    <div class="bg-darkprimary px-4 pt-10 border-[0.78px] border-primary gap-5 flex flex-col md:border-[3px] 
    md:px-20 border-dashed border-weborange border-l-0 lg:w-4/5 lg:pr-45 lg:rounded-tr-[432px] xl:pr-[276px] 2xl:pr-100 xl:pl-50 " >
      <h1 class="text-mid text-white text-center mb-5 font-bold lg:text-[52px] ">Frequently Asked Questions</h1>
      <div class="bg-white rounded-[4px] md:rounded-[14px] shadow-md border-[0.78px] border-primary pl-[19px] pr-[21px] py-6 btn ">
        <button @click="handleToggle" class="flex items-center justify-between w-full faq"><h6 class="text-smallest font-medium text-left">What does koriki do?</h6> <svg class="move" id="1" width="50" height="50" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_233_2187)">
      <circle cx="41.4876" cy="36.9256" r="25.3309" fill="white" class="circle svg"/>
      </g>
      <path class="path svgpath" d="M38.3779 45.1821L46.5972 36.9255L38.3779 28.669" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <button @click="handleSToggle" class="flex items-center justify-between w-full faq"><h6 class="text-smallest font-medium text-left">What marketing channels does Koriki support?</h6><svg id="2" class="move" width="50" height="50" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_233_2187)">
      <circle cx="41.4876" cy="36.9256" r="25.3309" fill="white" class="circles svg"/>
      </g>
      <path class="paths svgpath" d="M38.3779 45.1821L46.5972 36.9255L38.3779 28.669" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <button @click="handleTToggle" class="flex items-center justify-between w-full faq"><h6 class="text-smallest font-medium text-left">Can I use Koriki if I do not have a company?</h6> <svg id="3" class="move" width="50" height="50" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_233_2187)">
      <circle cx="41.4876" cy="36.9256" r="25.3309" fill="white" class="circlet svg"/>
      </g>
      <path class="patht svgpath" d="M38.3779 45.1821L46.5972 36.9255L38.3779 28.669" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
          <svg id="4" class="move" width="50" height="50" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_233_2187)">
      <circle cx="41.4876" cy="36.9256" r="25.3309" fill="white" class="circlel svg"  />
      </g>
      <path class="pathl svgpath" d="M38.3779 45.1821L46.5972 36.9255L38.3779 28.669" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
    toggles.value = false
    togglet.value = false
    togglel.value = false
    const path = document.querySelector('.path')
    const circle = document.querySelector('.circle')
    const svg = document.querySelectorAll('.svg')
    const svgpath = document.querySelectorAll('.svgpath')
    const animate =  document.getElementById('1')
    if (toggle.value == true){
      svg.forEach(item =>{
        item.attributes.fill.nodeValue = '#fff'
        animate.classList.remove('rotate')
      animate.classList.add('reverse')
      })
      svgpath.forEach(item =>{
        item.attributes.stroke.nodeValue = '#008080'
      })
      circle.attributes.fill.nodeValue = '#008080'
      path.attributes.stroke.nodeValue = '#fff'
      animate.classList.remove('reverse')
      animate.classList.add('rotate')
    }
    else{
    circle.attributes.fill.nodeValue = '#fff'
    path.attributes.stroke.nodeValue = '#008080'
    animate.classList.remove('rotate')
    animate.classList.add('reverse')
    }
  }
  
  const handleSToggle =()=>{
    toggles.value =!toggles.value
    toggle.value = false
    togglet.value = false
    togglel.value = false
    const paths = document.querySelector('.paths')
    const circles = document.querySelector('.circles')
    const svg = document.querySelectorAll('.svg')
    const svgpath = document.querySelectorAll('.svgpath')
    const animate =  document.getElementById('2')
    if (toggles.value == true){
      svg.forEach(item =>{
        item.attributes.fill.nodeValue = '#fff'
      })
      svgpath.forEach(item =>{
        item.attributes.stroke.nodeValue = '#008080'
      })
      
      circles.attributes.fill.nodeValue = '#008080'
      paths.attributes.stroke.nodeValue = '#fff'
      animate.classList.remove('reverse')
      animate.classList.add('rotate')
    }
    else{
    circles.attributes.fill.nodeValue = '#fff'
    paths.attributes.stroke.nodeValue = '#008080'
    animate.classList.remove('rotate')
    animate.classList.add('reverse')
    }
  }
  const handleTToggle =()=>{
    togglet.value =!togglet.value
    toggles.value = false
    toggle.value = false
    togglel.value = false
    const patht = document.querySelector('.patht')
    const circlet = document.querySelector('.circlet')
    const svg = document.querySelectorAll('.svg')
    const svgpath = document.querySelectorAll('.svgpath')
    const animate =  document.getElementById('3')
    if (togglet.value == true){
      svg.forEach(item =>{
        item.attributes.fill.nodeValue = '#fff'
      })
      svgpath.forEach(item =>{
        item.attributes.stroke.nodeValue = '#008080'
      })
      animate.classList.remove('reverse')
      animate.classList.add('rotate')
      circlet.attributes.fill.nodeValue = '#008080'
      patht.attributes.stroke.nodeValue = '#fff'
      
    
    }
    else{
    circlet.attributes.fill.nodeValue = '#fff'
    patht.attributes.stroke.nodeValue = '#008080'
    animate.classList.remove('rotate')
    animate.classList.add('reverse')
    }
  }
  const handleLToggle =()=>{
    togglel.value =!togglel.value
    toggles.value = false
    togglet.value = false
    toggle.value = false
    const pathl = document.querySelector('.pathl')
    const circlel = document.querySelector('.circlel')
    const svg = document.querySelectorAll('.svg')
    const svgpath = document.querySelectorAll('.svgpath')
    const animate =  document.getElementById('4')
    
    if (togglel.value == true){
      svg.forEach(item =>{
        item.attributes.fill.nodeValue = '#fff'
        
      })
      svgpath.forEach(item =>{
        item.attributes.stroke.nodeValue = '#008080'
      })
      animate.classList.remove('reverse')
      animate.classList.add('rotate')
      circlel.attributes.fill.nodeValue = '#008080'
      pathl.attributes.stroke.nodeValue = '#fff'
    }
    else{
    circlel.attributes.fill.nodeValue = '#fff'
    pathl.attributes.stroke.nodeValue = '#008080'
    animate.classList.remove('rotate')
    animate.classList.add('reverse')
    }
    
    
    
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

<style>
  .rotate{
    animation: rotate 0.5s linear forwards ;
  }
  .reverse{
    animation: rotate 0.5s linear forwards reverse;
  }

  @keyframes rotate {
    to{
      transform: rotate(90deg);
    }
  }
</style>
