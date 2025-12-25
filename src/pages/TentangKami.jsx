export default function TentangKami() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Section Tentang Kami */}
        <div className="bg-[#B9FF66] text-[#191A23] rounded-2xl p-10 mb-10 shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">
            Tentang Kami
          </h1>
          <p className="text-center leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* VISI */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Visi Kami</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel pulvinar urna, nec gravida turpis.
          </p>
        </div>

        {/* MISI */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Misi Kami</h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Quisque vel pulvinar urna, nec gravida turpis.</li>
            <li>Fusce non metus sed nisl hendrerit convallis.</li>
            <li>Curabitur ut libero nec augue bibendum dictum.</li>
          </ul>
        </div>

        {/* Komitmen */}
        <div className="bg-[#B9FF66] text-[#191A23] rounded-2xl p-6 shadow mb-10">
          <h2 className="text-xl font-semibold mb-2">Komitmen Kami</h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet turpis a justo ultricies luctus.
          </p>
        </div>
      </div>
    </div>
  );
}
