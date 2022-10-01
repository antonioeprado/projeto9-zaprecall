import React, { useState } from 'react';
import styled from 'styled-components';
import play from '../assets/images/play-outline-icon.svg';
import arrow from '../assets/images/setinha.png'

function Flashcard(props) {

  const {questions, index} = props;
  const {question, answer} = questions;

  const [open, setOpen] = useState(false);
  const [playImg, setPlayImg] = useState(play);
  const [detail, setDetail] = useState(question)


  function openCard() {
    setOpen(true);
    setPlayImg(arrow);
  }

  function showAnswer() {
    setDetail(answer);
  }


  return (
    <FlashCardContainer open={open}>
        {open ? detail : `Pergunta ${index + 1}`}
        <PlayButton src={playImg} onClick={playImg === play ? openCard : showAnswer} detail={detail} answer={answer}/>
    </FlashCardContainer>
  )
}

export default Flashcard

const FlashCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: ${(props) => props.open ? "131px" : "65px"};
    margin: 10px auto;
    padding: ${(props) => props.open ? "20px 10px" : "10px 10px"};
    border-radius: 5px;
    font-family: 'Recursive', cursive;
    font-weight: ${(props) => props.open ? 400 : 700};
    font-size: ${(props) => props.open ? "18px" : "16px"};
    line-height: ${(props) => props.open ? "21.6px" : "19.2px"};
    color: black;
    background-color: ${(props) => props.open ? "#FFFFD4": "white"};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    cursor: ${(props) => props.open ? "default" : "pointer"};
`;

const PlayButton = styled.img`
    display: ${(props) => props.detail === props.answer ? "none" : "initial"};
    width: 20px;
    height: 23px;
`;