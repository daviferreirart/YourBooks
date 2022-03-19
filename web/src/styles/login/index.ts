import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
padding-top:64px;
`
export const LoginGoogleButton = styled.button`
display:flex;
flex-direction:row;
height:36px;
justify-content:space-around;
padding:8px 34px; 
width:280px;
align-items:center;
border-radius:6px;
color:white;
background-color:inherit;
border:1px solid #ffffff;
font-size:16px;
`

export const AppName = styled.h3`
font-size:24px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
font-weight:700;
margin-bottom:40px;
`