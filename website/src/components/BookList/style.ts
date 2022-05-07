import styled from "styled-components";
import {Card as MuiCard } from "@material-ui/core";


export const Card = styled(MuiCard)`
  display: flex;
  flex-direction: row;

  img {
    height: 250px;
    width:150px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items:flex-start;
  }
`;
