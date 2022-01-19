<template>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
              <md-field>
                <md-input   :value="SaleCC"  v-model="sumSale" type="number"></md-input>
              <label for="saleCurrencys">Отдаю</label>
              <md-select  v-model="saleCurrencys" name="saleCurrencys" id="saleCurrencys">
                  <md-option  v-for="item in currencys" :key="item.cc" :value="item.cc" > {{ item.cc }} </md-option>
              </md-select>
            </md-field>
        </div>
        <div class="md-layout-item">
            <md-field>
              <md-input  :value="BuyCC" type="number"></md-input>
            <label for="buyCurrencys">Получаю</label>
            <md-select v-model="buyCurrencys" name="buyCurrencys" id="buyCurrencys">
                <md-option v-for="item in currencys" :key="item.cc" :value="item.cc" > {{ item.cc }} </md-option>
            </md-select>
          </md-field>
        </div>
        </div>
</template>

<script>
  export default {
    name: 'Selsect',
    data: () => ({
      saleCurrencys: "USD",
      buyCurrencys:  "EUR",
      sumSale : 100,
    }),
    watch: {
      saleCurrencys:{
          deep: true,
          handler: 'selectSaleCurrencys'
      },
      buyCurrencys:{
          deep: true,
          handler: 'selectBuyCurrencys'
      },
      sumSale:{
          deep: true,
          handler: 'sumSaleHand'
      },
    },
    methods: {
      selectSaleCurrencys (value) {
          this.$store.dispatch('setSeleCurrency', value)
      },
      selectBuyCurrencys (value) {
          this.$store.dispatch('setBuyCurrency', value)
      },
      sumSaleHand(value){
          this.$store.dispatch('setSumSale', value)
      }
    },
    computed: {
      currencys () {
        return this.$store.getters.getCurrencys
      },
      getSaleCurrencys () {
        return this.$store.getters.saleCurrencys
      },
      getBuyCurrencys () {
        return this.$store.getters.buyCurrencys
      },
      BuyCC () {
        const buyCarrency = this.$store.getters.getCurrencys.filter(el => el.cc === this.$store.getters.getBuyCurrencys );
        const saleCarerncy = this.$store.getters.getCurrencys.filter(el => el.cc === this.$store.getters.getSaleCurrencys );
        const getSumSale =  this.$store.getters.getSumSale
        const saleCarerncyRate = (saleCarerncy[0]) ? saleCarerncy[0].rate : 0;
        const buyCarrencyRate = (buyCarrency[0]) ? (saleCarerncyRate * getSumSale / buyCarrency[0].rate ).toFixed(2) : 0;
        return buyCarrencyRate;
      },
      SaleCC () {
          return this.$store.getters.getSumSale
      }
  },
  }
</script>
