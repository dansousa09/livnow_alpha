import React from "react";
import {
    AsideBar,
    BackOfficeIcon,
    DownMenu,
    HamburgerMenu,
    Notifications,
    NotificationsIcon,
    SettingsIcon,
    TasksIcon,
    UpMenu,
    UserIcon
} from "../styles/components/AsideMenu";

const AsideMenu: React.FC = () => {
    return (
        <AsideBar>
            <UpMenu>
                <HamburgerMenu />
                <UserIcon />
            </UpMenu>
            <hr />
            <Notifications>
                <NotificationsIcon />
            </Notifications>
            <hr />
            <DownMenu>
                <BackOfficeIcon />
                <TasksIcon />
                <SettingsIcon />
            </DownMenu>
        </AsideBar>
    );
};

export default AsideMenu;
