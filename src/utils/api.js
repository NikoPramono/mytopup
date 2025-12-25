// === DUMMY API SEBELUM BACKEND READY ===
// Semua data masih di localStorage

export async function fetchOrder(id) {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  const found = orders.find(o => String(o.id) === String(id));

  // Simulasi delay network biar animasi Skeleton kelihatan
  return new Promise(resolve => setTimeout(() => resolve(found), 800));
}

export async function fetchOrders() {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  return new Promise(resolve => setTimeout(() => resolve(orders), 800));
}

export function saveOrder(order) {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
}

export function updateOrderStatus(id, status) {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  const updated = orders.map(o =>
    o.id === id ? { ...o, status } : o
  );
  localStorage.setItem("orders", JSON.stringify(updated));
}
