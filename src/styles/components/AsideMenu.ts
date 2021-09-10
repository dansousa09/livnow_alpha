import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

export const AsideBar = styled.aside`
    width: 4.5rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${(props) => props.theme.colors.primaryBackground};
    color: ${(props) => props.theme.colors.textWhite};
    transition: all ease 0.2s;
    opacity: 0.9;
    -webkit-box-shadow: 10px 0px 18px 1px rgba(0, 0, 0, 0.49);
    box-shadow: 10px 0px 18px 1px rgba(0, 0, 0, 0.49);
    &:hover {
        opacity: 1;
    }

    hr {
        width: 50%;
        position: relative;
        bottom: 0;
        background-color: #fff;
    }
`;

export const UpMenu = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const HamburgerMenu = styled(GiHamburgerMenu)`
    width: 100%;
    font-size: 32px;
    padding: 4px;
    margin: 0.5rem 0;
    transition: all ease 0.1s;
    cursor: pointer;
    &:hover {
        ${(props) => props.theme.colors.secundaryBackground};
        color: ${(props) => props.theme.colors.textDark};
        border-radius: 4px 0 0 4px;
    }
`;

export const UserIcon = styled(BiUserCircle)`
    width: 100%;
    font-size: 48px;
    padding: 4px;
    margin: 0.5rem 0;
    transition: all ease 0.1s;
    cursor: pointer;
    &:hover {
        ${(props) => props.theme.colors.secundaryBackground};
        color: ${(props) => props.theme.colors.textDark};
        border-radius: 4px 0 0 4px;
    }
`;

export const Notifications = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NotificationsIcon = styled(IoMdNotificationsOutline)`
    width: 100%;
    font-size: 32px;
    padding: 4px;
    margin: 0.5rem 0;
    transition: all ease 0.1s;
    cursor: pointer;
    &:hover {
        ${(props) => props.theme.colors.secundaryBackground};
        color: ${(props) => props.theme.colors.textDark};
        border-radius: 4px 0 0 4px;
    }
`;

export const DownMenu = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export const BackOfficeIcon = styled(MdLibraryBooks)`
    width: 100%;
    font-size: 32px;
    padding: 4px;
    margin: 0.5rem 0;
    transition: all ease 0.1s;
    cursor: pointer;
    &:hover {
        ${(props) => props.theme.colors.secundaryBackground};
        color: ${(props) => props.theme.colors.textDark};
        border-radius: 4px 0 0 4px;
    }
`;

export const TasksIcon = styled(RiCheckboxMultipleLine)`
    width: 100%;
    font-size: 32px;
    padding: 4px;
    margin: 0.5rem 0;
    transition: all ease 0.1s;
    cursor: pointer;
    &:hover {
        ${(props) => props.theme.colors.secundaryBackground};
        color: ${(props) => props.theme.colors.textDark};
        border-radius: 4px 0 0 4px;
    }
`;

export const SettingsIcon = styled(IoSettingsOutline)`
    width: 100%;
    font-size: 32px;
    padding: 4px;
    margin: 0.5rem 0;
    transition: all ease 0.1s;
    cursor: pointer;
    &:hover {
        ${(props) => props.theme.colors.secundaryBackground};
        color: ${(props) => props.theme.colors.textDark};
        border-radius: 4px 0 0 4px;
    }
`;
