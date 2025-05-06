<template>
  <section class="flex flex-col lg:flex-row px-[22px] md:px-0 font-hubot "  >
    <div class=" w-full h-full flex mt-[108px] lg:pl-[40px] xl:pl-25.25 lg:pt-10 justify-center lg:justify-start flex-1 ">
      <div class="flex flex-col items-center lg:items-start max-w-full" v-for="(i) in visible" :key= i.id>
          <h1 :id = i.id class='text-mdashboard md:text-dashboard w-[352px] md:w-[580px] 2xl:w-full 2xl:h-[340px] text-center  lg:text-[50px] h-60 md:h-[385px] lg:text-left lg:h-[225px] lg:text-left font-bold 2xl:text-[75px] lg:w-full tl'>{{ i.main }}<span class="text-primary">{{ i.mainTwo }}</span></h1>
          <p class="text-p text-center lg:text-left mt-5 w-[352px] md:w-[580px] lg:w-9/10 2xl:h-[72px]">{{ i.sub }}</p>
          <p class="text-p text-center lg:text-left mt-5 w-[352px] md:w-[580px] lg:w-9/10 hidden">with Ease</p>
          <button class="bg-primary text-btn w-[188px] md:w-[219px] h-[52px] rounded-[15px] mt-[14px] md:mt-10 md:40px btn" @click="handleModal">Join the waitlist</button>
          <img class="hidden lg:block mt-20" src="../../assets/Decoration.svg">
        </div>
      </div>
      
    <div class=" lg:bg-[url(../../assets/Frame.svg)] bg-cover md:flex-1 flex  md:mt-0 bg-no-repeat justify-center md:pt-30 w-full mt-14 lg:pt-40">
      <img src="../../assets/dashboard.png" class="size-fit"/>
    </div>
  </section>
</template>


<script lang="ts" setup>
import { openModal } from '../composables/states';
import {gsap} from 'gsap'


  const open = openModal()

  const handleModal =()=>{
    open.value =!open.value
    console.log(open.value)
  }

  const text = ref([{id: 1, main:"All Your Digital Marketing in ", mainTwo:"One Place.", sub:"Boost sales & reach your target customers all from one central dashboard" },
  {id: 2, main:"Level Up Your Brand with Insight ", mainTwo:"You can Trust", sub:"Stop guessing – let data drive your sales & marketing strategy." },
  {id: 3, main:"Manage Your Content ", mainTwo:"with Ease", sub:"Take control over your ideas – store, manage & improve your content on Koriki." }
  ] )

  const visible = computed(() => 
    text.value.slice(0,1)
  )

  const first = computed(()=>document.querySelector('.tl'))

const pushUp = async () => {
  const el = first.value

  // Animate out
  await gsap.to(el, {
    yPercent: -40,
    opacity: 0,
    duration: 0.5,
    ease: 'power1.in'
  })

  // Update text and wait for DOM update
  text.value.push(text.value.shift())
  await nextTick()

  // Animate in
  await gsap.fromTo(el,
    { yPercent: 40, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out'
    }
  )
}

onMounted(() => {
  // Animate in on mount
  gsap.fromTo(first.value,
    { yPercent: 40, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out'
    }
  )

  // Start loop
  setInterval(pushUp, 5000)
})

  
</script>

<style scoped>
  .slide-left{
    animation: slide-left 1s ease-in;
  }
  @keyframes slide-left {
    from{
      transform: translate3d(100%, 0, 0);
    }
    to{
      transform: translate3d(0, 0, 0);
    }
  }
</style>