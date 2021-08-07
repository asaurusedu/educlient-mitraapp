import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!session && (
        <>
          <div className="flex h-screen">
            <div className="m-auto">
              <h1 className="font-bold text-center text-4xl mb-8">
                Anda Belum Login
              </h1>
              <button
                className="w-full h-16 px-6 text-indigo-100 font-bold transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800"
                onClick={signIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </>
      )}
      {session && (
        <>
          <div className="flex h-screen">
            <div className="m-auto">
              <div className="grid grid-cols-1 gap-6">
                <h1 className="font-bold">Signed in as {session.user.email} </h1>
                <Link href="/pengajuan-materi" passHref>
                  <button className="w-full h-16 px-6 text-indigo-100 font-bold transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">
                    Kirim Permohonan Pembuatan Materi
                  </button>
                </Link>

                <button
                  className="w-full h-16 px-6 text-red-100 font-bold transition-colors duration-150 bg-red-700 focus:shadow-outline hover:bg-red-800"
                  onClick={signOut}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
