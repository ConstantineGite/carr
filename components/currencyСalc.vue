
<template>
  <div class="md-layout md-gutter">
    <md-list  class="md-layout-item">
      Покупка:
      <md-list-item  v-for="item in currencys" :key="item.message">
           <span>{{`Курс ${item.cc}/UAH`}}</span> <span>{{ (item.rate - (item.rate * 0.24 / 100)).toFixed(2) }}</span>
        </md-list-item>
    </md-list>
    <md-list  class="md-layout-item">
      Продажа:
      <md-list-item  v-for="item in currencys" :key="item.message">
           <span>{{`Курс ${item.cc}/UAH`}}</span> <span>{{item.rate.toFixed(2)}}</span>
        </md-list-item>
    </md-list>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  computed: {
    currencys () {
      return this.$store.getters.getCurrencys
    }
  },
  created() {
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then( response => {
          const currenciesFiltering = ["EUR", "USD", "GBP", "RUB"];
          const currencies = response.data.filter(({ cc }) => currenciesFiltering.includes(cc));
          this.$store.dispatch('setCurrencys', currencies)
       })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  }
}
</script>
