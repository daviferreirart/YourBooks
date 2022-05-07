import styled from "styled-components";
import { Container as MuiContainer, Card as MuiCard } from "@material-ui/core";

export const Container = styled(MuiContainer)`
  padding-top: 32px;
  .MuiContainer-root {
    display: flex;
    flex-direction: column;
  }
`;
