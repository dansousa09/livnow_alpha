import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
    padding: 32px 16px;

    thead {
        tr {
            border-bottom: solid 1px black;
        }
    }
    tbody {
        tr {
            border: solid 1px black;
            text-align: center;
            height: 60px;
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
