import React, { useState } from "react";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import SearchBar from "material-ui-search-bar";
import { FormControlLabel, FormGroup, Switch } from "@material-ui/core";
import Table from "./Table";
import {
    AuthorizationGuideTable,
    Container,
    GuidePanel,
    Header,
    MainFooter,
    Switcher,
    TitleAndSearch,
    TuneIconStyled
} from "../styles/components/MainContainer";

const MainContainer: React.FC = () => {
    const [user, setUser] = useState("");

    return (
        <Container>
            <Header>
                <TitleAndSearch>
                    <LibraryBooksOutlinedIcon style={{ fontSize: 36 }} />
                    <h3>Minhas Guias</h3>
                    <SearchBar
                        onChange={() => console.log("onChange")}
                        onRequestSearch={() => console.log("onRequestSearch")}
                        placeholder="Pesquisar"
                        style={{
                            margin: "0 16px",
                            minWidth: "50%",
                            maxHeight: 42,
                            borderRadius: 8
                        }}
                    />
                    <TuneIconStyled style={{ fontSize: 36 }} />
                </TitleAndSearch>
                <Switcher>
                    <span style={{ marginRight: 32 }}>0 de 0</span>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch name="Sob Auditoria" color="primary" />
                            }
                            label="Sob Auditoria"
                        />
                    </FormGroup>
                </Switcher>
            </Header>
            <AuthorizationGuideTable>
                <GuidePanel>
                    <Table setUser={setUser} />
                </GuidePanel>
            </AuthorizationGuideTable>
            <MainFooter>
                <span>Usuário: {user}</span>
                <span>LIVnow v1.10.15</span>
            </MainFooter>
        </Container>
    );
};

export default MainContainer;
