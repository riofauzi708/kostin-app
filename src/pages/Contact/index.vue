<template>
  <div class="contact">
    <h1>Hubungi kami</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">Pesan:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Kirim</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
      alert('Thank you for contacting us, ' + this.form.name + '!');
      
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact {
  width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 8px;
}

.contact h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  height: 100px;
}

button {
  display: block;
  margin: 0 76%;
  width: 30%;
  padding: 0.7rem;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #38a873;
}
</style>
