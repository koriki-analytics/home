<template>
  <section class="font-hubot flex flex-col items-center mt-34">
    <h1 class="font-bold text-[52px]">Our Testimonials</h1>
    <h6 class=" text-[52px]">What Our Clients Are Saying</h6>
    <div class="flex md:flex-col gap-16 justify-center mt-[136px]">
    <TestimonialCard v-for=" i in 2" :key="i"/>
    </div>
  </section>
</template>