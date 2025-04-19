import React, {useCallback, useContext, useState} from "react";
import './Login.css'
import {TabPanel, TabView} from "primereact/tabview";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {motion} from "framer-motion";
import MonkeyItem from "../../components/monkey-item/MonkeyItem.tsx";
import useMonkey from "../../hooks/monkey/useMonkey.ts";
import {MenuContext} from "../../layouts/menu/MenuContext.tsx";

const Login: React.FC = () => {
    const [user, setUser] = useState<any>({username: "", password: ""});
    const [activeTab, setActiveTab] = useState<number>(0);

    const {language} = useContext(MenuContext)

    const {monkeys, addMonkey} = useMonkey()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent, role: string) => {
        e.preventDefault();
        console.log(`Logging in as ${role}:`, user);
    };

    const handleAdd = useCallback(() => {
        addMonkey({
            name: "new one",
            age: 100,
            gender: 'female'
        })
    }, [])

    return (
        <motion.div
            className="login-container"
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <Card className="login-card">
                <h2 className="login-title">Welcome to the Monkey Shop</h2>

                <TabView activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
                    {/* Human Login Tab */}
                    <TabPanel header="Login as Human">

                        <motion.div
                            initial={{opacity: 0, scale: 1}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            <h1>{language}</h1>
                            <form onSubmit={(e) => handleSubmit(e, "Human")}>
                                <div className="input-group">
                                    <label>Username:</label>
                                    <InputText name="username" value={user.username} onChange={handleChange}
                                               className="p-inputtext-lg"/>
                                </div>

                                {monkeys?.map(monkey => (
                                    <MonkeyItem name={monkey.name} age={monkey.age} gender={monkey.gender}/>
                                ))}
                                <Button label={'Add Monkey'} onClick={handleAdd}/>

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

                    <a href="/register/Register" className="register-anchor">Create New Account</a>

                </div>
            </Card>


        </motion.div>
    );
};

export default Login;
