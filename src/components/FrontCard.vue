<script>
export default {
  props:{
    creditCardNumber: String,
    holderName: String,
    expDateMonth: String,
    expDateYear: String
  }
}

</script>

<template>
  <div class="relative ml-[12%] drop-shadow-2xl mobile:ml-[5%]">
    <img src="../assets/bg-card-front.png" class="absolute z-0 mobile:w-[85%]" alt="CardImage">
    <img src="../assets/card-logo.svg" class="absolute z-10 mt-5 ml-5 mobile:w-[20%]" alt="CardLogo">
    <span class="absolute z-10 | text-white text-3xl tracking-widest | mt-32 ml-5 |
                mobile:text-2xl mobile:mt-24 mobile:ml-4">
      {{creditCardNumber ? creditCardNumber : '1234 5678 9123 0000'}}
    </span>
    <span class="absolute z-10 | text-white tracking-widest | mt-48 ml-5 |
          mobile:mt-36 mobile:text-xs mobile:ml-4">
      {{holderName ? holderName.toUpperCase() : 'JAINE APPLESEED'}}
    </span>
    <span class="absolute z-10 | text-white tracking-widest | mt-48 ml-[23rem] |
                mobile:mt-36 mobile:text-xs mobile:ml-[17rem]">
      {{`${expDateMonth ? expDateMonth : '00'}/${expDateYear ?  expDateYear : '00'}`}}
    </span>
  </div>
</template>

<style scoped>

</style>