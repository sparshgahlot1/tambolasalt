import {HiMiniBuildingStorefront, HiHome, HiOutlineTicket, HiClipboardDocumentList} from 'react-icons/hi2'
import {FiSettings} from 'react-icons/fi'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import styles from './Nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav(){

    const inactivelink = styles.inactivelink
    const activelink = styles.activelink

    const router = useRouter();
    const {pathname} = router;

    return(
        <div>
            <div className={styles.navColor}>
                <Link href={'/'} className="flex items-center">
                    <HiMiniBuildingStorefront/>
                    <p>E-Commerce Admin</p>
                </Link>
                <nav>
                <Link href={'/'} className={pathname === '/' ? activelink:inactivelink}> <HiHome/><p>Dashboard</p></Link>
                <Link href={'/orders'} className={pathname.includes('/orders') ? activelink:inactivelink}> <HiClipboardDocumentList/><p>Orders</p></Link>
                <Link href={'/contest'} className={pathname.includes('/contest') ? activelink:inactivelink}> <BsFillBookmarkStarFill/><p>Contest</p></Link>
                <Link href={'/tickets'} className={pathname.includes('/tickets') ? activelink:inactivelink}> <HiOutlineTicket/><p>Tickets</p></Link>
                <Link href={'/settings'} className={pathname.includes('/settings') ? activelink:inactivelink}> <FiSettings/><p>Settings</p></Link>
            </nav>
            </div>
        </div>
    )
}