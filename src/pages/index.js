import {useSession, signIn} from "next-auth/react";
import Nav from "../../components/Nav";

export default function Home() {
  const {data: session} = useSession();

  if(!session){
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
      <button className="bg-white text-black p-2 px-4 rounded-lg" onClick={() => signIn('google')}>
        Login with google
      </button>
      </div>
    </div>
    )
  }

  return (
    <div className='bg-blue-900 min-h-screen'>
      <div className="flex">
        <Nav/>
        <div className="flex-grow bg-white mt-2 mr-2 rounded-lg p-4">
          logged in as {session.user.email} 
        </div>
      </div>
    </div>
    )
}