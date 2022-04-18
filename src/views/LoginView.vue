<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mt-3 mb-3 text-center font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <!-- 綁定input -->
            <input
              type="email"
              class="form-control"
              id="username"
              v-model="user.username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <!-- 綁定input -->
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <!-- 記得把type改成button /  綁定login方法 -->
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            type="button"
            @click="login"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-center text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          console.log(token, expired);
          document.cookie = `davidToken=${token}; expires=${new Date(expired)}`;
          //登入成功並且把cookie存好時，push到產品列表
          this.$router.push("/admin/products");
        })
        .catch((err) => {
          alert("登入失敗");
          console.log(err.response.data.message);
        });
    },
  },
};
</script>
