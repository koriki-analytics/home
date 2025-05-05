<template>
  <section class="flex flex-col items-center  mt-12 lg:mt-[12px] overflow-x-hidden font-hubot trig">
    <h1 class="text-headingmobile md:text-heading font-bold mb-12 lg:my-0">Our Story</h1>
    <div class="bg-[url(../../assets/image.jpg)] bg-size-[auto_full] bg-center bg-no-repeat w-full mt-[12px] md:mt-31">
      <div class="w-4/5 bg-tetiary rounded-tr-[112.68px] md:rounded-tr-[432px] px-8 py-6 md:px-31 md:py-23 border-dashed border-[#FFA400] border-3 border-l-0 train">
        <div class="max-w-[1110px]">
              <article class="text-text py-3 border-dashed border-primary border-b-3 mb-4 ">
                <h1 class='text-p md:text-dashboard font-semibold'>Koriki</h1>
                <p class="text-[14px] md:text-[32px]"> /ˈkɔːrɪki/ (noun)</p>
              </article>
            <article>
              <p class="text-pmobile md:text-mp"><span class="font-semibold">Etymology</span>: Derived from the Yoruba Phrase <span class="font-semibold">Ki Oriki</span>, meaning <span class="text-primary font-semibold">to sing one's praise </span></p>
              
            </article>
            <article class="flex gap-5 mt-10">
              <ol start="1" class="list-decimal">
                <li class="text-pmobile md:text-mp" >
                  <span class="font-semibold">A belief </span>– Like our culture, we believe your brand’s story should be heard by those that matter
                </li>
                <li class="text-pmobile md:text-mp">
                  <span class="font-semibold">A mission</span> – Like our culture, we believe your brand’s story should be heard by those that matter. Our belief fuels our desire to transform brands leveraging data and technology.
                </li>
              </ol>
            </article>
            </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  onMounted(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const trig = document.querySelector('.trig')
    const train = document.querySelector('.train')
    const tl= gsap.timeline({
      duration: 0.5,
      ease: 'elastic',
      scrollTrigger:{
        trigger: trig,
        start: '-10% 50%',
        end: '-10%  90%',
      }

    })
    if (window.screen.width > 785){
      tl.fromTo(train, {
      xPercent:-100,
      opacity:0,
      borderRadius: 0
    },
  {
    xPercent: 50,
    opacity:1
  }).to(train,{
    xPercent: 0,
    opacity:1,
    borderTopRightRadius:432
  })  
    }

    if (window.screen.width < 785){
      tl.fromTo(train, {
      xPercent:-100,
      opacity:0,
      borderRadius: 0
    },
  {
    xPercent: 50,
    opacity:1
  }).to(train,{
    xPercent: 0,
    opacity:1,
    borderTopRightRadius:112.68
  })  
    }
    
    
  })
</script>