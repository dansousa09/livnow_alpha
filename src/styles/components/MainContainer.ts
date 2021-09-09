import styled from "styled-components";

export const Header = styled.div`
    ${(props) => props.theme.colors.primaryBackground}
    height: 30%;
    width: 100%;
    position: absolute;
    top: 0;
    padding: 25px 32px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
`;

export const TitleAndSearch = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: ${(props) => props.theme.colors.textWhite};

    h3 {
        margin: 0 8px;
    }
`;

export const Switcher = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    font-weight: 700;
    color: ${(props) => props.theme.colors.textWhite};
`;

export const hoverButton = {
    normal: {
        borderRadius: "50%",
        transition: "ease all 0.4s",
        background: "none",
        color: "#ffffff",
        fontSize: 36,
        cursor: "pointer"
    },
    hover: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        background: "rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
        padding: "4px",
        fontSize: 36,
        cursor: "pointer"
    }
};

export const AuthorizationGuideTable = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    height: 100%;
    padding: 0 72px;
    background-color: #f1f1f1;
`;

export const GuidePanel = styled.div`
    width: 100%;
    position: relative;
    top: 15%;
    height: 85%;
    background-color: #f1f1f1;
    margin: 0 16px;
    border-radius: 8px 8px 0 0;
    border-top: solid 0.5px ${(props) => props.theme.colors.darkPrimary};
    border-left: solid 0.5px ${(props) => props.theme.colors.darkPrimary};
    border-right: solid 0.5px ${(props) => props.theme.colors.darkPrimary};
    -webkit-box-shadow: 0px 8px 13px -1px rgba(0, 0, 0, 0.69);
    box-shadow: 0px 8px 13px -1px rgba(0, 0, 0, 0.69);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        border: 2px solid transparent;
        box-shadow: inset 0 0 0 20px rgb(0 0 0 / 24%);
        border-radius: 20px;
    }
`;

export const MainFooter = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0.25rem 8rem;
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.colors.primaryBackground};
    color: ${(props) => props.theme.colors.textWhite};
    font-weight: 600;
    opacity: 0.6;
    transition: all ease 0.4s;
    &:hover {
        transition: all ease 0.4s;
        opacity: 1;
    }
    span {
        cursor: pointer;
    }
    span:first-child {
        font-weight: 400;
    }
`;
