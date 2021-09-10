import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBomb } from "react-icons/fa";
import { IGuia } from "../interfaces/components/ITable";
import {
    AttachFileOutlinedIconStyled,
    StatusTd,
    TableContainer
} from "../styles/components/Table";

interface TableProps {
    setUser: (userData: string) => void | Promise<Object>;
}

const Table: React.FC<TableProps> = ({ setUser }) => {
    const [guideData, setGuideData] = useState([]);

    useEffect(() => {
        const fetchGuides = async () => {
            const guidesUrl = "http://localhost:3001/guides";
            const response = await fetch(guidesUrl);
            const data = await response.json();
            setGuideData(data);
        };
        fetchGuides();
        const fetchUsers = async () => {
            const usersUrl = "http://localhost:3001/users";
            const response = await fetch(usersUrl);
            const userData = await response.json();
            setUser(
                `${userData[1].fname}  ${userData[1].lname} (${userData[1].userLogin})`
            );
        };
        fetchUsers();
    }, []);

    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>Guia</th>
                    <th>Data de Emissão</th>
                    <th>
                        Prazo <FaBomb />
                    </th>
                    <th>Beneficiário</th>
                    <th>Plano</th>
                    <th>Congênere</th>
                    <th>Status</th>
                    <th>Anexos</th>
                </tr>
            </thead>
            <tbody>
                {guideData.map((guia: IGuia, index: number) => {
                    const guideStatus = () => {
                        switch (guia.status) {
                            case "Liberada": {
                                return (
                                    <StatusTd
                                        style={{ backgroundColor: "#3490dc" }}
                                    >
                                        {guia.status}
                                    </StatusTd>
                                );
                            }
                            case "Sob Auditoria": {
                                return (
                                    <StatusTd
                                        style={{ backgroundColor: "#38c172" }}
                                    >
                                        {guia.status}
                                    </StatusTd>
                                );
                            }
                            case "Negada": {
                                return (
                                    <StatusTd
                                        style={{ backgroundColor: "#c13838" }}
                                    >
                                        {guia.status}
                                    </StatusTd>
                                );
                            }
                            default: {
                                return <StatusTd>{guia.status}</StatusTd>;
                            }
                        }
                    };
                    return (
                        <Link href="/login">
                            <tr key={index}>
                                <td>{guia.guia}</td>
                                <td>{guia.dataDeEmissao}</td>
                                <td>{guia.prazo}</td>
                                <td>{guia.beneficiario}</td>
                                <td>{guia.plano}</td>
                                <td>{guia.congenere}</td>
                                {guideStatus()}
                                <td>
                                    <AttachFileOutlinedIconStyled />
                                </td>
                            </tr>
                        </Link>
                    );
                })}
            </tbody>
        </TableContainer>
    );
};

export default Table;
