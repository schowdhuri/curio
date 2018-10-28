import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as theme from "constants/theme";

export const Table = styled.div`
    clear: both;
`;
export const HeaderRow = styled.div`
    display: none;
    ${theme.largeScreen(`
        display: flex;
    `)}
`;
export const Row = styled.div`
    box-shadow: 1px 1px 6px #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    ${theme.largeScreen(`
        border-radius: 0;
        box-shadow: none;
        display: flex;
        margin: 0;
        &:nth-child(even) {
            background-color: #edf4f7;
        }
    `)}
`;
export const HeaderCol = styled.div`
    font-weight: 700;
    flex: 1;
    padding: 10px;
`;
export const Col = styled.div`
    display: flex;
    flex: 1;
    padding: 10px;

    ${props => props.type=="action"
        ? `
            border-radius: 0 0 2px 2px;
            background-color: #edf4f7;
        `
        : ""}
    ${theme.largeScreen(`
        background: none;
        align-items: center;
    `)}
    &:before {
        content: "${props => props.name ? props.name + ': ' : ''}";
        font-weight: 700;
        margin-right: 5px;

        ${theme.largeScreen(`
            display: none;
        `)}
    }
`;
export const Icon = styled.img`
    width: 32px;
    height: 32px;
    ${theme.largeScreen(`
        width: 20px;
        height: 20px;
    `)}
`;
export const Action = styled.button`
    background: transparent;
    border: none;
    flex: 1;
`;
