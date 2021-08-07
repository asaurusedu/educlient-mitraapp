import Submitmateri from "../components/submit-materi";
import { signIn, useSession } from "next-auth/client";

export default function PENGAJUANMATERI() {
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
          <Submitmateri email={session.user.email}/>
        </>
      )}
    </>
  );
}
