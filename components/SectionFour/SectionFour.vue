<template>
  <section class="bg-[url(../../assets/image.jpg)] bg-center flex-col-reveserse flex flex-row-reverse bg-cover font-hubot mt-22 lg:mt-0" v-if="pathname.pathname == '/waitlist'">
    <div class="bg-primary text-btn w-9/10 py-6 rounded-tl-[112px] md:rounded-tl-[432px] md:py-28 lg:gap-11 gap-3
    items-end flex flex-col px-8 pl-25 xl:pr-48 border-[3px] border-web border-dashed border-r-0">
      <h1 class="text-mid md:text-[38px]
      lg:text-heading 2xl:text-dashboard md:text-right text-right">Be the First to Experience Koriki!</h1>
      <p class="text-pmobile text-right md:text-wedosubm lg:max-w-[687px] 2xl:text-mp 2xl:max-w-[980px]">Join the waitlist and get early access to the ultimate marketing intelligence platform. Stay ahead with AI-driven insights, automated reports, and seamless content management—all in one place</p>
      <button class="bg-white text-[#000] w-[137px] h-[34px] md:h-[54px] md:w-55 rounded-[13px] btn" @click='handleOpen'>Join the waitlist</button>
    
    </div>
  </Section>
  <section class="bg-[url(../../assets/image.jpg)] bg-center flex-col-reveserse flex flex-row-reverse bg-cover font-hubot mt-22 lg:mt-0" v-else>
    <div class="bg-primary text-btn w-9/10 py-6 rounded-tl-[112px] md:rounded-tl-[432px] md:py-28 lg:gap-11 gap-3
    items-end flex flex-col px-8 pl-25 xl:pr-48 border-[3px] border-web border-dashed border-r-0">
      <p class="text-pmobile text-right md:text-wedosubm lg:max-w-[687px] 2xl:text-mp 2xl:max-w-[980px]">Koriki simplifies the way businesses and influencers manage their digital presence. In just a few simple steps, you can connect your marketing channels, track performance, and automate insights for better decision-making.</p>

      <div class="flex flex-col gap-5 lg:flex-row lg:gap-13 flex-1">
        

      <div class="bg-white 2xl:w-[323px] w-[250px] h-fit p-[20px] 2xl:p-[34px] rounded-[10px]">
        <div>
          <div class="bg-[#FFA400] size-[70px] flex items-center justify-center rounded-[10px]">
            <IconsChain/>
          </div>
          <h1 class="font-bold 2xl:text-headingmobile text-black mt-8 mb-5 text-smallest">Link Your Channels</h1>
          <p class="text-[#676873] text-[18px] 2xl:text-[18px] text-pmobile">Link your social and marketing platforms like Facebook, Instagram, LinkedIn, and more to sync real-time data.</p>
        </div>
      </div>
      <div class="bg-white 2xl:w-[323px] w-[250px] p-[20px] 2xl:p-[34px] h-fit rounded-[10px] ">
        <div>
          <div class="bg-[#984108] size-[70px] flex items-center justify-center rounded-[10px]">
            <IconsClipboard/>
          </div>
          <h1 class="font-bold 2xltext-headingmobile text-black mt-8 mb-5 text-smallest">Smart Reports</h1>
          <p class="text-[#676873] 2xl:text-[18px] text-pmobile">schedule reports for ongoing tracking and set alerts to monitor key performance changes.</p>
        </div>
      </div>

      <div class="bg-white 2xl:w-[323px] w-[250px] h-fit p-[20px] 2xl:p-[34px] rounded-[10px] ">
        <div>
          <div class="bg-[#003235] size-[70px] flex items-center justify-center rounded-[10px] flex-shrink">
            <IconsAnalytics/>
          </div>
          <h1 class="font-bold 2xl:text-headingmobile text-black mt-8 mb-5 text-smallest">Analyze & Optimize</h1>
          <p class="text-[#676873] text-[18px] 2xl:text-[18px] text-pmobile">Monitor performance with dashboards showing impressions, engagement, ad spend, and audience growth.</p>
        </div>
      </div>
      </div>
    
    </div>
  </Section>
</template>
<script setup>
  import { openModal } from '../composables/states';
  import { useRequestURL } from '#app';
  const open = openModal()
  const handleOpen=() =>{
    open.value =!open.value
  }
  const pathname =useRequestURL()
</script>