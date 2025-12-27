import React from "react";

export default function SyaratKetentuan() {
  return (
    <div className="pt-24 min-h-screen bg-white font-primary">
      {/* HEADER SECTION */}
      <section className="bg-[#B9FF66] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-h1 font-bold text-black mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-p text-black/70">
            Harap baca syarat dan ketentuan penggunaan layanan kami dengan seksama.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <div className="space-y-12">
            
            {/* Bagian 1 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-[#B9FF66] pl-4">
                1. Penerimaan Ketentuan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Bagian 2 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-[#B9FF66] pl-4">
                2. Penggunaan Layanan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
              </ul>
            </div>

            {/* Bagian 3 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-[#B9FF66] pl-4">
                3. Batasan Tanggung Jawab
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.
              </p>
            </div>

            {/* Bagian 4 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-[#B9FF66] pl-4">
                4. Perubahan Ketentuan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
              </p>
            </div>

          </div>

          {/* Kontak Information */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <h3 className="text-xl font-bold text-black mb-2">Punya Pertanyaan?</h3>
            <p className="text-gray-600">
              Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, silakan hubungi tim kami melalui email di <span className="font-bold text-black">info@email.com</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}