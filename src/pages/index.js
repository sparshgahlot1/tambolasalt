import Layout from "../../components/Layout";
import {useSession, signIn} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>

      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello!, {session?.user?.email}
        </h2>
        <div>
          <img src={session?.user?.image} alt="" className="w-8 h-8"/>
        </div>
        
      </div>
    </Layout>
}