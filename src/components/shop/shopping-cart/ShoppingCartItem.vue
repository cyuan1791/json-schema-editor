<template>
  <div class="media mb-1 ctext">
    <div class="media-left">
      <img class="media-object rounded" :src="item.imgUrl" :alt="item.title" style="max-height: 50px;">
    </div>
    <div class="media-body">
      <strong class="d-block">{{item.title}}</strong>
      <span>Quantity: {{item.quantity}} - {{item.amount/100 | formatMoney}}</span>
    </div>
    <div class="media-right align-middle">
      <remove-from-cart :product="item"></remove-from-cart>
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>
