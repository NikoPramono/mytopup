import React from "react";

export default function KebijakanPrivasi() {
  return (
    <div className="pt-24 min-h-screen bg-white font-primary">
      <section className="bg-[#B9FF66] py-16 px-6 text-center">
        <h1 className="text-h1 font-bold text-black mb-4">Kebijakan Privasi</h1>
        <p className="text-p text-black/70 max-w-2xl mx-auto">Informasi mengenai bagaimana kami mengumpulkan dan melindungi data pribadi Anda.</p>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 text-gray-600">
        <div>
          <h2 className="text-2xl font-bold text-black mb-3">Informasi yang Kami Kumpulkan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black mb-3">Penggunaan Data</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </section>
    </div>
  );
}