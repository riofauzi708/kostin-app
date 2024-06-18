import { defineStore } from 'pinia';

export const useKosStore = defineStore('kos', {
  state: () => ({
    kosList: [
      { id: 1, image: 'https://via.placeholder.com/150', title: 'Kos Murah di Jakarta', price: 'Rp 1.500.000 / bulan', description: 'Deskripsi untuk kos murah di Jakarta.' },
      { id: 2, image: 'https://via.placeholder.com/150', title: 'Kos Nyaman di Bandung', price: 'Rp 1.200.000 / bulan', description: 'Deskripsi untuk kos nyaman di Bandung.' },
      { id: 3, image: 'https://via.placeholder.com/150', title: 'Kos Strategis di Surabaya', price: 'Rp 1.000.000 / bulan', description: 'Deskripsi untuk kos strategis di Surabaya.' },
      { id: 4, image: 'https://via.placeholder.com/150', title: 'Kos Mewah di Semarang', price: 'Rp 2.000.000 / bulan', description: 'Deskripsi untuk kos mewah di Semarang.' },
      { id: 5, image: 'https://via.placeholder.com/150', title: 'Kos Hemat di Padang', price: 'Rp 800.000 / bulan', description: 'Deskripsi untuk kos hemat di Padang.' }
    ]
  }),
  actions: {
    addKos(kos: { id: number, image: string, title: string, price: string, description: string }) {
      this.kosList.unshift(kos);
    },
    getKosById(id: number) {
      return this.kosList.find(kos => kos.id === id) || null;
    }
  }
});
