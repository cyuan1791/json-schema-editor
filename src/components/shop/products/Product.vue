<template>
  <div class="thumbnail ctext">
    <img class="card-img-top img-responsive" :src="product.imgUrl" :alt="product.title">
    <div class="card-block">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.amount / 100 | formatMoney}}</p>
      <add-to-cart :product="product"></add-to-cart>
      <button @click="openModal(product.description)">Show</button>
      <modals-container name="example"
             :width="300"
             :height="300"
             @before-open="beforeOpen"
             @before-close="beforeClose">
        <b>Time {{time}}</b>
      </modals-container>
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  data () {
    return {
      time: 0,
      duration: 5000
    }
  },
  props: {
    product: Object
  },
  components: {
    AddToCart
  },
  methods: {
    openModal (description) {
      this.$modal.show({
        template: `<b><p v-html="description"></p> <button @click="$emit('close')">Close</button></b>`,
        props: ['description']
      }, {
        description: description
      }, {
        width: 300,
        height: 300
      }, {
        'before-open': this.beforeOpen
      })
    }
  }
}
</script>
