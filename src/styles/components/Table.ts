import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
    padding: 32px 16px;

    thead {
        tr {
            border-bottom: solid 1px black;
            height: 40px;
        }
    }
    tbody {
        tr {
            border: solid 1px black;
            text-align: center;
            height: 6.4rem;
            transition: ease all 0.1s;
            cursor: pointer;
            border-top: solid 1px black;
            color: inherit;
            display: table-row;
            outline: none;
            vertical-align: middle;
            border-spacing: 0;
            border-collapse: collapse;
            opacity: 0.8;
            td {
                width: 12.5%;
            }
            &:hover {
                background: #fff;
                opacity: 1;
                border-radius: 4px;
            }
        }
    }
`;

export const hoverButton = {
    normal: {
        borderRadius: "50%",
        transition: "ease all 0.4s",
        background: "none",
        color: "#000000",
        fontSize: 28,
        cursor: "pointer"
    },
    hover: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        background: "rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
        padding: "1px",
        fontSize: 28,
        cursor: "pointer"
    }
};

export const StatusTd = styled.td`
    border-radius: 0.4rem;
    padding: 0.4rem;
    color: #fff;
    text-align: center;
    overflow: hidden;
    outline: none !important;
    font-weight: 400;
    box-sizing: border-box;
`;
