<template>
  <section class='mt-[55px] lg:mt-[144px] flex justify-center font-hubot trigger'>
    <div class="max-w-[1550px]">
      <h1 class="text-wedosubm font-bold mb-[26px] md:text-heading text-center lg:mb-[112px]">Who Should Use Koriki?</h1>
      <div class="flex flex-col lg:flex-row lg:gap-7 gap-[50px] items-center px-4 ">
        <div class="bg-tetiary  lg:w-fit rounded-b-[28px] scroll-left">
          <img  src="../../assets/brand.png">
          <div class=" flex flex-col gap-2.5 px-[30.85px] py-[27.5px]">
            <h6 class="font-bold text-wedosubm md:text-p">Brand & Businesses</h6>
            <p class="text-mid md:text-wedosubm  w-[255.7px] lg:w-[282px]">Streamline your strategy and scale faster.</p>
          </div>
        </div>
        <div class="bg-tetiary max-w-360px w-fit rounded-b-[28px] z-2 scroll-up">
          <img src="../../assets/creators.png">
          <div class=" flex flex-col gap-2.5 px-[30.85px] py-[27.5px]">
            <h6 class="font-bold text-wedosubm md:text-p">Creators & Influencers</h6>
            <p class="text-mid md:text-wedosubm  w-[255.7px] lg:w-[282px]">Grow your audience and boost engagement. 
            </p>
          </div>
        </div>
        <div class="bg-tetiary max-w-360px w-fit rounded-b-[28px] scroll-right">
          <img src="../../assets/agencies.png">
          <div class=" flex flex-col gap-2.5 px-[30.85px] py-[27.5px]">
            <h6 class="font-bold text-wedosubm md:text-p">Agencies</h6>
            <p class="text-mid md:text-wedosubm  w-[255.7px] lg:w-[282px]">Manage client campaigns with less effort and better results. 
            </p>
          </div>
        </div>
      </div>
      <h1 class="lg:mt-39 mt-[69px]  lg:text-wedo text-center font-bold lg:mb-23 mb-6 text-wedosubm">Platforms We Support</h1>
      <div class="flex gap-9 lg:gap-25 justify-center w-full items-center mix-blend-darken bounce">
        <img class="size-[80px] lg:size-auto " src="../../assets/Youtube.svg">
        <img class="size-[31px] lg:size-auto" src="../../assets/X.svg">
        <img class="size-[31px] lg:size-auto" src="../../assets/instagram.svg">
        <img class="size-[31px] lg:size-auto" src="../../assets/facebook.svg">
        <img class="size-[31px] lg:size-auto" src="../../assets/tiktok.svg">
      </div>
    </div>
  </section>
</template>

<script setup>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  onMounted(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const trigger = document.querySelector('.trigger')
    const scrollLeft = document.querySelector('.scroll-left')
    const scrollRight = document.querySelector('.scroll-right')
    const scrollUp = document.querySelector('.scroll-up')
    console.log(scrollUp)

    const bounce = document.querySelector('.bounce')
    const bounceItems = Array.from(bounce.childNodes)

    const tl = gsap.timeline({
      duration: 1,
      scrollTrigger:{
        trigger: trigger,
        start: 'top bottom',
        end: '50% 50%',
        scrub: true
      }
    })

    if (window.screen.width >= 1030){
      tl.fromTo(scrollLeft, {
      xPercent: 90,
      scale: 0.8
    },
  {
    xPercent: 0,
    scale: 1
  })



  tl.fromTo(scrollRight, {
      xPercent: -90,
      scale: 0.8
    },
  {
    xPercent: 0,
    scale: 1
  }, '<')
    }

    if(window.screen.width < 1030){
      const last = gsap.timeline({
        duration: 1,
        scrollTrigger:{
          trigger: scrollRight,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: true,
          markers:true
        }
      })
      const tl = gsap.timeline({
      duration: 1,

      scrollTrigger:{
        trigger: trigger,
        start: '0% 0%',
        end: '50% 90%',
        scrub:true,
        
      }
    })
      tl.fromTo(scrollLeft, {
      yPercent: 0,
      scale: 1,
      zIndex:3
    },
  {
    yPercent: 0,
    scale: 1,
    zIndex:3
  })

    tl.fromTo(scrollUp, {
      yPercent: -90,
      scale: 0.8
    },{
      yPercent: 0,
      scale:1
    })
    tl.fromTo(scrollRight, {
      yPercent: -180,
      scale: 0.6
    },
  {
    yPercent: -90,
    scale: 0.8
  }, '<')

    last.fromTo(scrollRight,{
      yPercent: -90,
      scale: 0.8
    },{
      yPercent: 0,
      scale: 1
    })
    }

  const tlbounce = gsap.timeline({
    duration: 0.1,
    repeat:-1,
    stagger:0.2,   
    ease: 'elastic'
  })
  bounceItems.forEach(item =>{
    tlbounce.fromTo(item,
    {y: 0},
    {y: -30,}).to(item, {y: 0}
    )

    })
  })
</script>