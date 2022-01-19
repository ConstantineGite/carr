<template>
  <section class="carrency-app">
        <header-calc/>
        <carrency-calc/>
        <md-button v-on:click="save" class="md-raised md-primary">Save to localstorage</md-button>
        {{getLocalstorage}}
	</section>
</template>

<script>
import HeaderCalc from   '~/components/header'
import CarrencyCalc from '~/components/currencyСalc'

export default {
  components: {
    HeaderCalc,
    CarrencyCalc
  },
  data: () => ({
    initoacalStorange:  null
  }),
  methods: {
    save(){
       this.$store.dispatch('setLocalstorage', this.$store.getters.getCurrencys)
    },
  },
  computed: {
      getLocalstorage () {
        return this.$store.getters.getLocalstorage
      }
  },

}
</script>
