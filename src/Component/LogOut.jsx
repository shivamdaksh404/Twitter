import styles from './LogOut.module.css'
import { FaTwitter } from "react-icons/fa";
import { Button } from '@mui/material';
import { getCurrentUser } from '../services/utilities';
import { useNavigate } from 'react-router-dom';
export default function Logout() {
    const navigate = useNavigate()
    const currentUser = getCurrentUser()
    function handleLogout() {
        currentUser.isLoggedIn = false
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        navigate("/")
   }
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                <FaTwitter className={styles.icon} />
                    
                    <div className={styles.text}>
                    <h3>Log out of Twitter?</h3>
                    <span>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. </span>
                    <Button onClick={handleLogout} variant='contained' >Log out</Button>
                    <Button onClick={()=>navigate("/")} variant='contained' >Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}