import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 100%;
  display: grid;
  gap: 10px;
  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 30px;
  font-weight: 500;
  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Name3 = styled.span`
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Name2 = styled.span`
margin-top: 40px;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  word-break: break-word;  
font-size: 20px;
  font-weight: 500;
  @media (max-width: 760px) {
    font-size: 25px;
    padding: 20px;
  }
`;

export const Function = styled.span`
  color: lightgray;
  margin-bottom: 10px;
`;

export const Intro = styled.span`
  color: lightgray;
  text-align: justify;
  @media (max-width: 760px) {
    font-size: 15px;
  }
`;