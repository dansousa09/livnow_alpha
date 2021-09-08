import React, { useState } from "react";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import TuneIcon from "@material-ui/icons/Tune";
import SearchBar from "material-ui-search-bar";
import {
    AuthorizationGuideTable,
    GuidePanel,
    Header,
    hoverButton,
    Switcher,
    TitleAndSearch
} from "../styles/components/MainContainer";
import { FormControlLabel, FormGroup, Switch } from "@material-ui/core";
import Table from "./Table";

const MainContainer: React.FC = () => {
    const [hover, setHover] = useState(false);

    return (
        <>
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
                    <TuneIcon
                        onMouseEnter={() => {
                            setHover(true);
                        }}
                        onMouseLeave={() => {
                            setHover(false);
                        }}
                        style={{
                            ...hoverButton.normal,
                            ...(hover ? hoverButton.hover : null)
                        }}
                    />
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
                    <Table />
                </GuidePanel>
            </AuthorizationGuideTable>
        </>
    );
};

export default MainContainer;
