<template>
    <div>
      <h1>Masuk</h1>
      <p>Silahkan login terlebih dahulu.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Jika belum punya akun silahkan <router-link to="/register">register</router-link>.</p>
      <p>
        <router-link to="/">Kembali ke halaman utama</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.form);
        alert('Thank you for logging in, ' + this.form.email + '!');
        this.form.email = '';
        this.form.password = '';
      }
    }
}
  </script>
  
  <style scoped>
  </style>
  