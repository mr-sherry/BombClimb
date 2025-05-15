import React, { useContext } from "react";
import styles from "./Profile.module.css";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";




const Profile = () => {
    const { loggedUser, setLoggedUser } = useContext(UserContext);
    const navigate = useNavigate();

    if (!loggedUser) {
        navigate("/login");
        return <h1>You are not logged in.</h1>;
    }

    const handleLogout = () => {
        setLoggedUser(null);
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileCard}>
                <img
                    src="/img/profile.jpg"
                    alt="Profile"
                    className={styles.profilePic}
                />
                {/* <Image src={"/img/profile.jpg"} /> */}
                <h2 className={styles.name}>Name: {loggedUser.fullName}</h2>
                <p className={styles.email}>Gmail: {loggedUser.email}</p>
                <p className={styles.username}>UserName: {loggedUser.userName}</p>
                <button className={styles.logoutBtn} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
