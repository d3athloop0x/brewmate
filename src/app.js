document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", price: 15000 },
      { id: 2, name: "Arabica Brazil", img: "2.jpg", price: 25000 },
      { id: 3, name: "Kopi Luwak", img: "3.jpg", price: 50000 },
      { id: 4, name: "Kopi Tubruk", img: "4.jpg", price: 10000 },
      { id: 5, name: "Kopi Aceh Gayo", img: "5.jpg", price: 30000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});

//konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
