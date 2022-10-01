import React from 'react'
import styled from "styled-components";
import logoSmall from '../assets/images/logo-pequeno.png';

function Header() {
  return (
    <HeaderContainer>
        <Logo src={logoSmall} />
        <Title>ZapRecall</Title>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: space-between;
    margin: auto;
`;

const Logo = styled.img`
    width: 52px;
    height: 60px;
`;

const Title = styled.p`
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -1.2%;
    text-align: center;
    color: #fff;
    width: 203px;
    height: 44px;
    transform: rotate(0.58deg);
`;