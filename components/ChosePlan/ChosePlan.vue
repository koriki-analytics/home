<template>
  <section class="flex justify-center items-center flex-col gap-10 font-hubot mt-34">
    <h1 class="font-bold text-wedo max-w-[516px] text-center">Chose The Plan That's Right For You</h1>
    <p class="text-[19px] text-cod font-bold">Choose plan that works best for you, feel free to contact us</p>
    <div>
      <button>Bill Monthly</button>
      <button>Bill Yearly</button>
    </div>
    <div class="flex flex-col lg:flex-row gap-8 "> 
      <div class="flex flex-col lg:flex-row gap-8 "> 
      <div class="shadow-xl px-5 pt-11 pb-6 rounded-[21px]">
        <div class="flex justify-center flex-col items-center gap-4">
          <h6 class="font-semibold text-mp text-center">Free</h6>
        <p class="text-center text-[18px] max-w-[220px] text-cod" >Have a go and test your superpowers</p>
        <p>$0</p>
        </div>
        <div class="bg-tetiary rounded-[10px] mt-[31px] 
        px-9 py-7  ">
        
          <ul class="flex-col flex gap-6">
            <li class="flex gap-[10px]" v-for="i in attribute" :key="i"><IconsCheck/>
              {{ i }}
            </li>
          </ul>
          <button class="h-17 bg-white mt-4 w-full rounded-[21px] shadow-sm text-[#0A5757] font-bold">Signup for free</button>
        </div>
    </div>
    </div>
      <div class="bg-[#0A5757] pt-11 w-100 h-[700px] rounded-[21px] overflow-hidden">
        <div class="flex justify-center flex-col items-center gap-4">
          <h6 class="font-semibold text-mp text-center">Pro</h6>
        <p class="text-center text-[18px] max-w-[220px] text-white" >Have a go and test your superpowers</p>
        </div>
        <div class="bg-[#00A8A5] rounded-[10px]  px-9  h-full rounded-full w-170 -translate-x-35 flex justify-center ">
          <div class="absolute justify-center w-100">
            <div class=" px-5">
              <div class="flex flex-col gap-4 items-center px-5 text-white">
              <p class="font-semibold text-[52px]">$0</p>
              <button class="h-11">Save a $50</button>
            </div>
            <div class="bg-white py-7 px-9 rounded-[21px]">
              <ul class="flex-col flex gap-6">
              <li class="flex gap-[10px]" v-for="i in attribute1" :key="i"><IconsCheck/>
                {{ i }}
              </li>
            </ul>
            <button class="h-17 bg-primary mt-4 w-full rounded-[21px] shadow-sm text-white font-bold">Signup for free</button>
            </div></div>
          </div>
        </div>
    </div>
    <div class="shadow-xl px-5 pt-11 pb-6 rounded-[21px]">
        <div class="flex justify-center flex-col items-center gap-4">
          <h6 class="font-semibold text-mp text-center">Business</h6>
        <p class="text-center text-[18px] max-w-[220px] text-cod" >Unveil new superpowers and join the Design Leaque</p>
        <p>$0</p>
        </div>
        <div class="bg-tetiary rounded-[10px] mt-[31px] px-9 py-7 ">
          <ul class="flex-col flex gap-6">
            <li class="flex gap-[10px]" v-for="i in attribute2" :key="i"><IconsCheck/>
              {{ i }}
            </li>
          </ul>
          <button class="h-17 bg-white mt-4 w-full rounded-[21px] shadow-sm text-[#0A5757] font-bold">Go to Business</button>
        </div>
    </div>
  </div>
  </section>
</template>

<script setup>
  const attribute = ['2 Users','2 Files','Public Share & Comments','Chat Support ', "New income apps"]
  const attribute2 = ['All the features of pro plan','Account success Manager','Single Sign-On (SSO)','Co-conception pogram', "Collaboration-Soon"]
  const attribute1 = ['4 Users','All apps','Unlimited editable exports','Folders and collaboration ', "All incoming apps"]

</script>