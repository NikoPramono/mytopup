import toast from "react-hot-toast";

export function startOrderAutoUpdate() {
  setInterval(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const now = Date.now();
    let updated = false;

    const newOrders = orders.map(o => {
      // jangan ubah jika sudah Success
      if (o.status === "Success") return o;

      const statusHistory = o.statusHistory || {};

      if (o.status === "Pending") {
        const pendingTime = new Date(o.statusAt || o.createdAt).getTime();
        if (now - pendingTime >= 60 * 1000) {
          updated = true;
          statusHistory["Processing"] = now;
          return { ...o, status: "Processing", statusAt: now, statusHistory };
        }
      }

      if (o.status === "Processing") {
        const processingTime = new Date(o.statusAt).getTime();
        if (now - processingTime >= 3 * 60 * 1000) {
          updated = true;
          statusHistory["Success"] = now;
          toast.success(`Pesanan #${o.id} selesai!`);
          return { ...o, status: "Success", statusAt: now, statusHistory };
        }
      }

      return o;
    });

    if (updated) {
      localStorage.setItem("orders", JSON.stringify(newOrders));
    }
  }, 2000); // update tiap 2 detik untuk progress lebih smooth
}
