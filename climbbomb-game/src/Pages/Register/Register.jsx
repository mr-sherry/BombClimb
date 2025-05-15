import { useState, useContext } from "react";
import styles from "./Register.module.css";
import { UserContext } from "../../Context/UserContext";

const Register = () => {
    const { register, users } = useContext(UserContext);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, email, fullName } = formData;
        register(username, password, email, fullName);
    };

    return (
        <div className={styles.registerContainer}>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    className={styles.inputField}
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputField}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputField}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputField}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button className={styles.submitBtn} type="submit">
                    Register
                </button>
            </form>
            <div>
                <h3>Registered Users:</h3>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user.userName} - {user.email}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Register;
