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
        <ButtonContainer>
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    text={button.text}
                    color={button.color}
                />
            ))}
        </ButtonContainer>
        {`${num}/${numOfTotalQuestions} CONCLUÍDOS`}
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 375px;
    min-height: 70px;
    gap: 20px;
    padding: 14px 10px;
    font-size: 18px;
    text-align: center;
    color: black;
    background-color: white;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
`;