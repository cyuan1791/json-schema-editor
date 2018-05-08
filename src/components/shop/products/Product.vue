<template>
  <div class="thumbnail ctext">
    <img class="card-img-top img-responsive" :src="product.imgUrl" :alt="product.title">
    <p class="card-block">
      <h5 class="card-title">{{product.title}}</h5>
      <p v-html="product.description"><p>
        <button v-if="product.modal !== ''" class='btn btn-default' @click="openModal(product.modal)">More</button>
        <modals-container name="webasone">
        </modals-container>
      <p class="card-text">{{product.amount / 100 | formatMoney}}</p>
      <add-to-cart :product="product"></add-to-cart>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  props: {
    product: Object
  },
  components: {
    AddToCart
  },
  methods: {
    openModal (description) {
      this.$modal.show({
        template: `<div class="panel panel-default"><div class="panel-heading"><button class="btn btn-default" @click="$emit('close')">Close</button></div><div class="panel-body"><p v-html="description" /></div> </div>`,
        props: ['description']
      }, {
        description: description
      }, {
        width: '80%',
        height: '60%'
      }, {
      })
    }
  }
}
</script>
