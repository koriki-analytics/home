<template>
  <section class="font-hubot flex flex-col items-center mt-34">
    <h1 class="font-bold text-mdashboard md:text-[52px]">Our Testimonials</h1>
    <h6 class=" text-mdashboard md:text-[52px] text-center">What Our Clients Are Saying</h6>
    <div class="flex flex-col lg:flex-row gap-16 justify-center items-center mt-[136px]">
    <TestimonialCard v-for=" i in 2" :key="i"/>
    </div>
  </section>
</template>