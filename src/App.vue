<script>
import FrontCard from './components/FrontCard.vue'
import BackCard from "./components/BackCard.vue";

export default {
  components: {
    FrontCard,
    BackCard
  },
  data() {
    return {
      holderName: '',
      creditCardNumber: '',
      expDateMonth: '',
      expDateYear: '',
      cvc: '',
      msg: [],
      validated: false,
    }
  },
  watch: {
    creditCardNumber() {
      this.creditCardNumber = this.creditCardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
      this.checkLetter()
    },

  },
  methods: {
    checkEmpty(fieldName, value) {
      const msg = "Can't be blank"
      if (value === "") {
        this.msg[fieldName] = msg
        return false
      } else {
        this.msg[fieldName] = ""
        return true
      }

    },
    checkAll() {
      this.validated = this.checkEmpty('holderName', this.holderName)
      this.validated = this.checkEmpty('creditCardNumber', this.creditCardNumber)
      this.validated = this.checkEmpty('expDateMonth', this.expDateMonth)
      this.validated = this.checkEmpty('expDateYear', this.expDateYear)
      this.validated = this.checkEmpty('cvc', this.cvc)
      if ((this.checkEmpty('creditCardNumber', this.creditCardNumber))) {
        this.validated = this.checkLetter()
      }
    },
    checkLetter() {
      if (/[a-zA-Z]/i.test(this.creditCardNumber)) {
        this.msg['creditCardNumber'] = "Wrong format, numbers Only"
        return false
      } else {
        this.msg['creditCardNumber'] = ""
        return true
      }
    }
  }
}
</script>

<template>
  <div class="flex relative mobile:flex-col">
    <div class="absolute z-20 w-full mt-[8%] mobile:mt-[30%]">
       <FrontCard :credit-card-number="creditCardNumber" :holder-name="holderName" :exp-date-month="expDateMonth"
                  :exp-date-year="expDateYear"/>
     </div>

     <div class="absolute z-10 w-full mt-[25%] mobile:mt-[5%]">
       <BackCard :cvc="cvc"/>
     </div>

    <div class="h-screen w-1/3 bg-desktopBackground bg-no-repeat bg-cover
      mobile:bg-mobileBackground mobile:w-screen mobile:h-[30vh]"/>
    <div class="w-2/3 h-screen | flex items-center
      mobile:w-screen mobile:h-[70vh] mobile:justify-center mobile:items-start mobile:mt-[20%]">
      <form class="flex flex-col w-2/5 ml-[40%]
        mobile:w-[90%] mobile:m-0" @submit.prevent="checkAll" v-if="!validated">
        <div class="flex flex-col mb-6">
          <label class="mb-2 text-xs tracking-widest mobile:text-base">CARDHOLDER NAME</label>
          <input placeholder="e.g. Jane Appleseed" v-model="holderName"
                 class="outline outline-1  | p-3 rounded-lg | text-lg | focus:outline-firstGradient
                 mobile:text-xl mobile:p-4"
                 :class="msg.holderName ? 'outline-red-600' : 'outline-lightGrayishViolet'">
          <span v-if="msg.holderName" class="text-xs text-red-600 mt-2 mobile:text-xl">{{ msg.holderName }}</span>
        </div>

        <div class="flex flex-col mb-6">
          <label class="mb-2 text-xs tracking-widest mobile:text-base">CARD NUMBER</label>
          <input placeholder="e.g. 1234 5678 9123 0000" minlength="19" maxlength="19" v-model="creditCardNumber"
                 class="outline outline-1 | p-3 rounded-lg | text-lg | focus:outline-firstGradient
                 mobile:text-xl mobile:p-4"
                 :class="msg.creditCardNumber ? 'outline-red-600' : 'outline-lightGrayishViolet'">
          <span v-if="msg.creditCardNumber" class="text-xs text-red-600 mt-2 mobile:text-xl">{{ msg.creditCardNumber }}</span>
        </div>

        <div class="grid grid-cols-2 gap-5">
          <div>
            <label class="text-xs tracking-widest mobile:text-base">EXP. DATE (MM/YY)</label>
            <div class="grid grid-cols-2 gap-3 mt-2">
              <div class="flex flex-col">
                <input type="number" placeholder="MM" v-model="expDateMonth" maxlength="2"
                       oninput="if((this.value.length) > 2) { this.value = this.value.substring(0, 2); }"
                       class="outline outline-1 | p-3 rounded-lg | text-lg | focus:outline-firstGradient
                       mobile:text-xl mobile:p-4"
                       :class="msg.expDateMonth ? 'outline-red-600' : 'outline-lightGrayishViolet'">
                <span v-if="msg.expDateMonth" class="text-xs text-red-600 mt-2 mobile:text-xl">{{ msg.expDateMonth }}</span>
              </div>
              <div class="flex flex-col">
                <input type="number" placeholder="YY" v-model="expDateYear" maxlength="2"
                       oninput="if((this.value.length) > 2) { this.value = this.value.substring(0, 2); }"
                       class="outline outline-1 | p-3 rounded-lg | text-lg | focus:outline-firstGradient
                       mobile:text-xl mobile:p-4"
                       :class="msg.expDateYear ? 'outline-red-600' : 'outline-lightGrayishViolet'">
                <span v-if="msg.expDateYear" class="text-xs text-red-600 mt-2 mobile:text-xl">{{ msg.expDateYear }}</span>
              </div>
            </div>
          </div>

          <div>
            <label class="text-xs tracking-widest mobile:text-base">CVC</label>
            <input type="number" placeholder="e.g. 123" v-model="cvc" maxlength="3"
                   oninput="if((this.value.length) > 3) { this.value = this.value.substring(0, 3); }"
                   class="mt-2 mb-0.5 | max-w-full | outline outline-1 | p-3 rounded-lg | text-lg | focus:outline-firstGradient
                   mobile:text-xl mobile:p-4"
                   :class="msg.cvc ? 'outline-red-600' : 'outline-lightGrayishViolet'">
            <span v-if="msg.cvc" class="text-xs text-red-600 mobile:text-xl">{{ msg.cvc }}</span>
          </div>
        </div>
        <input type="submit" value="Confirm" max="999"
               class="bg-veryDarkViolet text-white | text-lg | rounded-lg p-3 mt-6 | focus:outline-firstGradient
               mobile:text-xl mobile:p-5">
      </form>
      <div v-if="validated" class="flex flex-col items-center justify-center w-2/5 ml-[40%]
                                   mobile:w-[90%] mobile:m-0 ">
        <img src="./assets/icon-complete.svg" alt="OK_Icon" class="mb-6">
        <span class="text-3xl tracking-widest mb-5">THANK YOU!</span>
        <span class="tracking-widest text-darkGrayishViolet">We've added our card details</span>
        <button class="w-full bg-veryDarkViolet text-white | text-lg | rounded-lg p-3 mt-6">Continue</button>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
