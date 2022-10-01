import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const buttons = [
    {text: "Não lembrei", color: "#FF3030"},
    {text: "Quase não lembrei", color: "#FF922E"},
    {text: "Zap!", color: "#2FBE34"}
]

function Footer(props) {

    const {num, numOfTotalQuestions} = props;

  return (
    <FooterContainer>
        {`${num}/${numOfTotalQuestions} CONCLUÍDOS`}
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    text-align: center;
    color: black;
    background-color: white;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;