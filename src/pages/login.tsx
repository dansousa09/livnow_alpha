import React, { useEffect, useState } from "react";
import Logo from "../assets/liv-logo.svg";
import { FormControl, InputLabel, TextField } from "@material-ui/core";
import PasswordField from "material-ui-password-field";
import { Container, LoginPanel } from "../styles/pages/Login";
import SubmitButton from "../components/SubmitButton";

const Login: React.FC = () => {
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            const usersUrl = "http://localhost:3001/users";
            const response = await fetch(usersUrl);
            const userData = await response.json();
            setUserData(userData);
        };
        fetchUsers();
    }, []);

    return (
        <Container>
            <LoginPanel>
                <header>
                    <Logo />
                </header>
                <form>
                    <FormControl>
                        <TextField
                            id="user_input"
                            label="Usuário"
                            style={{ marginBottom: 16 }}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setUser(event.target.value);
                                if (user === userData[0].userLogin) {
                                    alert("Hello");
                                }
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="password_input-label">
                            Senha
                        </InputLabel>
                        <PasswordField
                            id="password_input-label"
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setPassword(event.target.value);
                                if (password === userData[0].passwordLogin) {
                                    alert("Hello");
                                }
                            }}
                        />
                    </FormControl>
                    <div>
                        <SubmitButton>Entrar</SubmitButton>
                    </div>
                </form>
            </LoginPanel>
        </Container>
    );
};

export default Login;
