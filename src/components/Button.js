import React from 'react'
import styled from 'styled-components'
import correct from '../assets/images/icone_certo.png';
import wrong from '../assets/images/icone_erro.png';
import almost from '../assets/images/icone_quase.png';

function Button(props) {

  const {text, color, question, num, setPlayImg, setOpen, setDetail, setStatus, setNum} = props;

  function clickStatus(text) {
    setOpen(false);
    setDetail(question);
    switch (text) {
      case "Não lembrei":
        setPlayImg(wrong);
        setStatus("#FF3030");
        setNum(num + 1);
        break;

      case "Quase não lembrei":
        setPlayImg(almost);
        setStatus("#FF922E")
        setNum(num + 1);
        break;

      default:
        setPlayImg(correct);
        setStatus("#2FBE34")
        setNum(num + 1);
        break;
    }
  }

  return (
    <FooterButton backgroundColor={color} onClick={() => clickStatus(text)}>
        {text}
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