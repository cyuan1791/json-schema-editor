<template>
  <transition-group name="list" tag="div">

  <div class="row" v-for="(row, id) in productRows" :key="id">
      <div class="col-xs-12 col-sm-4" v-for="product in row">
        <product
          :product="product"
          track-by="id">
        </product>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'
import chunk from 'chunk'

export default {
  computed: mapState({
    productRows: state => chunk(state.products.all, 3)
  }),
  methods: mapActions([
    'getProducts'
  ]),
  components: { Product },
  created () {
    this.getProducts()
  }
}
</script>

<style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
