import React, { useEffect, useState } from "react";
import { TableContainer } from "../styles/components/Table";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import { hoverButton } from "../styles/components/Table";

const Table: React.FC = () => {
    const [hover, setHover] = useState(false);
    const [guideData, setGuideData] = useState([]);

    useEffect(() => {
        const fetchGuides = async () => {
            const guidesUrl = "http://localhost:3001/guides";
            const response = await fetch(guidesUrl);
            const guideData = await response.json();
            setGuideData(guideData);
        };
        fetchGuides();
    }, []);

    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>Guia</th>
                    <th>Data de Emissão</th>
                    <th>Prazo</th>
                    <th>Beneficiário</th>
                    <th>Plano</th>
                    <th>Congênere</th>
                    <th>Status</th>
                    <th>Anexos</th>
                </tr>
            </thead>
            <tbody>
                {guideData.map((guia, index) => {
                    return (
                        <tr key={index}>
                            <td>{guia.guia}</td>
                            <td>{guia.dataDeEmissao}</td>
                            <td>{guia.prazo}</td>
                            <td>{guia.beneficiario}</td>
                            <td>{guia.plano}</td>
                            <td>{guia.congenere}</td>
                            <td>{guia.status}</td>
                            <td>
                                {
                                    <AttachFileOutlinedIcon
                                        onMouseEnter={() => {
                                            setHover(true);
                                        }}
                                        onMouseLeave={() => {
                                            setHover(false);
                                        }}
                                        style={{
                                            ...hoverButton.normal,
                                            ...(hover
                                                ? hoverButton.hover
                                                : null)
                                        }}
                                    />
                                }
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </TableContainer>
    );
};

export default Table;
