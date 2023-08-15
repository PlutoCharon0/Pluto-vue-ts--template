<script setup lang="ts">
/* import { getProductList, addProduct } from '@/api/index';
const data: Ref = ref([])
getProductList(data)
const categoryList: Ref = ref()
const add = () => {
  addProduct(categoryList, {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
  })
} */
</script>

<template>
  <div>
    <img
      src="https://p26-passport.byteacctimg.com/img/user-avatar/8c98528e6aff13afe2e56390fe85304c~50x50.awebp"
    />
    <h1>Pluto-vue-ts-vite</h1>
  </div>
</template>

<style scoped lang="scss">
div {
  position: absolute;
  top: 30%;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translate(-50%, -50%);

  img {
    border-radius: 50%;
  }
}
</style>
