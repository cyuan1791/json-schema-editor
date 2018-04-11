<template>
  <div class="thumbnail ctext">
    <img class="card-img-top img-responsive" :src="product.imgUrl" :alt="product.title">
    <div class="card-block">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.price | formatMoney}}</p>
      <add-to-cart :product="product"></add-to-cart>
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>
