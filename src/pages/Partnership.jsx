import React from "react";

export default function Partnership() {
  return (
    <div className="pt-24 min-h-screen bg-white font-primary">
      <section className="bg-[#B9FF66] py-16 px-6 text-center">
        <h1 className="text-h1 font-bold text-black mb-4">Partnership</h1>
        <p className="text-p text-black/70 max-w-2xl mx-auto">Bergabunglah bersama ekosistem kami untuk pertumbuhan bisnis yang lebih cepat.</p>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-black mb-6">Mengapa Bermitra Dengan Kami?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Integrasi Mudah", "Komisi Kompetitif", "Support 24/7"].map((item, i) => (
            <div key={i} className="p-6 border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000]">
              <h3 className="font-bold mb-2">{item}</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}