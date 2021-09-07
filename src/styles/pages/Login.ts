import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => props.theme.colors.primaryBackground}
`;
export const LoginPanel = styled.div`
    ${(props) => props.theme.colors.secundaryBackground};
    ${(props) => props.theme.colors.shadowBox};
    min-height: 350px;
    min-width: 400px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 48px;
    header {
        width: 100%;
        position: relative;
        top: 0;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 32px 8px 0px 8px;
    }
    form {
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 8px 0;
        justify-content: center;

        div {
            display: flex;
            justify-content: center;
        }
    }
`;
