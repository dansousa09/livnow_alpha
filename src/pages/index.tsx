import React from "react";
import Head from "next/head";

import { Container } from "../styles/pages/Home";
import MainContainer from "../components/MainContainer";
import AsideMenu from "../components/AsideMenu";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Livnow</title>
            </Head>

            <AsideMenu />
            <MainContainer />
        </Container>
    );
};

export default Home;
