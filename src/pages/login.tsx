import React from "react";
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
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="password_input-label">
                            Senha
                        </InputLabel>
                        <PasswordField id="password_input-label" />
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
