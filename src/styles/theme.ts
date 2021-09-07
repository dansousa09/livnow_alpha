const theme = {
    colors: {
        primaryBackground: () =>
            `background: rgb(32, 106, 131); 
            background: linear-gradient(
                135deg,
                rgba(32, 106, 131, 1) 0%,
                rgba(16, 53, 65, 1) 100%
            );`,

        secundaryBackground: () => "background: #FFFFFF",
        text: "#2B2D42",
        primary: "#FD5200",
        darkPrimary: "rgba(16, 53, 65, 1)",
        shadowBox: () =>
            `-webkit-box-shadow: 5px 5px 17px 1px #000000; box-shadow: 5px 5px 17px 1px #000000;`
    }
};

export default theme;
