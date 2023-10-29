import {HiMiniBuildingStorefront, HiHome, HiOutlineTicket, HiClipboardDocumentList} from 'react-icons/hi2'
import {FiSettings} from 'react-icons/fi'
import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav(){
    return(
        <div>
            <div className={styles.navColor}>
                <Link href={'/'} className="flex items-center">
                    <HiMiniBuildingStorefront/>
                    <p>E-Commerce Admin</p>
                </Link>
                <nav>
                <Link href={'/'} className="flex items-center pt-4"> <HiHome/><p>Dashboard</p></Link>
                <Link href={'/'} className="flex items-center pt-4"> <HiClipboardDocumentList/><p>Orders</p></Link>
                <Link href={'/'} className="flex items-center pt-4"> <HiOutlineTicket/><p>Tickets</p></Link>
                <Link href={'/'} className="flex items-center pt-4"> <FiSettings/><p>Settings</p></Link>
            </nav>
            </div>
        </div>
    )
}