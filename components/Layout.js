import {useSession, signIn} from "next-auth/react";
import Nav from "./Nav";
import styles from "./Layout.module.css"

export default function Layout({children}) {
  const {data: session} = useSession();

  if(!session){
    return (
      <div className={styles.login}>
      <div>
      <button onClick={() => signIn('google')}>
        Login with google
      </button>
      </div>
    </div>
    )
  }

  return (
    <div className={styles.layout}>
      <div className={styles.box}>
        <Nav/>
        <div className={styles.innerBox}>
          {children}
        </div>
      </div>
    </div>
    )
}