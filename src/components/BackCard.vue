<script>
export default {
  props:{
    cvc: String
  }
}

</script>

<template>
  <div class="relative ml-[20%] drop-shadow-2xl ">
    <img src="../assets/bg-card-back.png" class="absolute z-0 mobile:w-[95%]" alt="CardBack" >
    <span class="absolute z-10 | text-white text-lg tracking-widest | mt-[6.7rem] ml-[22.5rem]
              mobile:text-normal mobile:ml-[15.2rem] mobile:mt-[4.5rem]">
      {{ cvc ? cvc : '123' }}
    </span>
  </div>
</template>

<style scoped>

</style>