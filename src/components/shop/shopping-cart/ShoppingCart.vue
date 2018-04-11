<template>

  <div>
    <shopping-cart-item
      v-for="item in items"
      :item="item"
      :key="item.id">
    </shopping-cart-item>

    <shopping-cart-summary></shopping-cart-summary>

    <div  class="mt-1 text-xs-center ctext">
      <form action="#" method="POST">
        <stripe-checkout :disabled="orderOnLimit"
                         :stripe-key="stripekey"
                         :options="options"
          :product="product">
        </stripe-checkout>
        <input type="hidden" name="amount" :value="product.amount" />
      </form>
      {{ stripeKey }}
      <!--<button class="btn btn-success"-->
        <!--:disabled="orderOnLimit"-->
        <!--@click="buy">-->
        <!--Checkout-->
      <!--</button>-->
      <p v-if="orderOnLimit">Order is over limit.</p>
    </div>
    <div id="stripe-return" v-if="stripereturn" v-html="stripereturn">
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { mapGetters } from 'vuex'
import { StripeCheckout } from 'vue-stripe'

export default {
  computed: {
    ...mapGetters({
      items: 'cartProducts',
      orderOnLimit: 'orderOnLimit'
    }),
    product () {
      return {
        name: 'Welcome',
        description: '',
        // 'shipping-address': true,
        amount: this.$store.getters.total * 100
      }
    },
    options () {
      return {
        'shippingAddress': true,
        'billingAddress': true
      }
    },
    stripekey () {
      return window.stripekey
    },
    stripereturn () {
      return window.stripereturn
    }
  },
  components: {
    ShoppingCartItem,
    ShoppingCartSummary,
    'stripe-checkout': StripeCheckout
  }
//  methods: {
//    buy () {
//      window.alert('You bought :)')
//      window.location.reload()
//    }
//  }
}
</script>

<style >
  #stripe-return {
    width: 200px;
    height: 150px;
    background-color: #F0F0F0;
    padding: 10px;
    margin: 5px 0;
  }
  #stripe-return h3 {
    text-align: center;
  }
</style>
