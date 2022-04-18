<template>
  <h2>單一產品</h2>
  <div class="container">
    <!-- {{ product }} -->
    <h3>
      {{ product.title }}
    </h3>
    <p>
      {{ product.category }}
    </p>
    <p>價格為： {{ product.price }}</p>
    <img class="w-100" :src="product.imageUrl" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [],
    };
  },
  methods: {
    getProduct() {
      console.log(this.$route);
      const { id } = this.$route.params; // 使用解構方法取得id
      this.$http(
        `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}` // 帶入id
      ).then((res) => {
        this.product = res.data.product;
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
