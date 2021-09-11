import React from "react";
import Link from "next/link";
import Logo from "../assets/liv-logo.svg";
import { FormControl, InputLabel, TextField } from "@material-ui/core";
import PasswordField from "material-ui-password-field";
import { Container, LoginPanel } from "../styles/pages/Login";
import SubmitButton from "../components/SubmitButton";

const Login: React.FC = () => {
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
                                console.log(event.target.value);
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
                                console.log(event.target.value);
                            }}
                        />
                    </FormControl>
                    <Link href="/">
                        <div>
                            <SubmitButton>Entrar</SubmitButton>
                        </div>
                    </Link>
                </form>
            </LoginPanel>
        </Container>
    );
};

export default Login;
