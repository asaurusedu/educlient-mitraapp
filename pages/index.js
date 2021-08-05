import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Link href="/submit-materi" passHref>
        <button className="w-full h-16 px-6 text-indigo-100 font-bold transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">
          Kirim Permohonan Pembuatan Materi
        </button>
        </Link>
      </div>
    </div>
  );
}
