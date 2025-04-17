import React, { useState } from "react";
import './Login.css'
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { motion } from "framer-motion";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {User} from "../entities/User";

const Login: React.FC = () => {
    const [user, setUser] = useState<User>({ username: "", password: "" });
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent, role: string) => {
        e.preventDefault();
        console.log(`Logging in as ${role}:`, user);
    };

    return (
        <motion.div
            className="login-container"
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <Card className="login-card" >
                <h2 className="login-title">Welcome to the Monkey Shop</h2>

                <TabView  activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
                    {/* Human Login Tab */}
                    <TabPanel header="Login as Human">

                        <motion.div
                            initial={{opacity: 0, scale: 1}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            <form onSubmit={(e) => handleSubmit(e, "Human")} >
                                <div className="input-group"  >
                                    <label>Username:</label>
                                    <InputText name="username" value={user.username} onChange={handleChange}
                                               className="p-inputtext-lg"/>
                                </div>
                                <div className="input-group">
                                    <label>Password:</label>
                                    <InputText type="password" name="password" value={user.password}
                                               onChange={handleChange} className="p-inputtext-lg"/>
                                </div>
                                <Button type="submit" label="Login as Human"
                                        className="p-button-rounded p-button-primary"/>
                            </form>
                        </motion.div>
                    </TabPanel>

                    {/* Monkey Login Tab */}
                    <TabPanel header="Login as Monkey">
                        <motion.div
                            initial={{opacity: 0, scale: 1}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            <form onSubmit={(e) => handleSubmit(e, "Monkey")}>
                                <div className="input-group">
                                    <label>Monkey Name:</label>
                                    <InputText name="username" value={user.username} onChange={handleChange}
                                               className="p-inputtext-lg"/>
                                </div>
                                <div className="input-group">
                                    <label>Secret Key:</label>
                                    <InputText type="password" name="password" value={user.password}
                                               onChange={handleChange} className="p-inputtext-lg"/>
                                </div>
                                <Button type="submit" label="Login as Monkey"
                                        className="p-button-rounded p-button-warning"/>
                            </form>
                        </motion.div>
                    </TabPanel>
                </TabView>
                <div className="register-link">

                    <a href="/Register" className="register-anchor">Create New Account</a>

                </div>
            </Card>


        </motion.div>
    );
};

export default Login;
