import React from 'react'
import styled from 'styled-components'

function Button(props) {

  return (
    <FooterButton backgroundColor={props.color}>
        {props.text}
    </FooterButton>
  )

}

export default Button

const FooterButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 40px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    color: white;
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
    &:hover {
        filter: brightness(0.7);
    }
`;