import Link from "next/link";
import Layout from "../../components/Layout";

export default function Contest(){
    return (
        <Layout>
            <Link className="bg-blue-900 text-white py-1 px-2 rounded-lg" href={'/contest/new'}>Create new Contest</Link>
        </Layout>
    )
}