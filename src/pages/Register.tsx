import React, { useState } from "react";
import './Register.css';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { motion } from "framer-motion";
import { Dropdown } from "primereact/dropdown";


const Register: React.FC = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Registering user:", form);
    };

    return (
        <motion.div
            className="register-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="register-card">
                <h2 className="register-title">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="column">
                            <div className="input-group">
                                <label>Gender:</label>

                                    <Dropdown
                                        name="gender"
                                        value={form.gender}
                                        options={[
                                            {label: 'Male', value: 'male'},
                                            {label: 'Female', value: 'female'},
                                            {label: 'Monkey', value: 'other'}
                                        ]}
                                        onChange={(e) => setForm({...form, gender: e.value})}
                                        placeholder="Select a Gender"
                                        className=" w-full"
                                    />


                            </div>
                            <div className="input-group">
                                <label>Email:</label>
                                <InputText type={"email"} name="email" value={form.email} onChange={handleChange}/>
                            </div>
                            <div className="input-group">
                                <label>Password:</label>
                                <InputText type="password" name="password" value={form.password} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="input-group">
                                <label>Name:</label>
                                <InputText name="lastName" value={form.lastName} onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label>Username:</label>
                                <InputText name="username" value={form.username} onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label>Confirm Password:</label>
                                <InputText type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <Button type="submit" label="Register" className="p-button" />
                </form>
            </Card>
        </motion.div>
    );
};

export default Register;
