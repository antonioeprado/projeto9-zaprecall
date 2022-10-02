import React, { useEffect, useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import play from '../assets/images/play-outline-icon.svg';
import arrow from '../assets/images/setinha.png';

const buttons = [
  {text: "Não lembrei", color: "#FF3030"},
  {text: "Quase não lembrei", color: "#FF922E"},
  {text: "Zap!", color: "#2FBE34"}
]

function Flashcard(props) {

  const {questions, index, num, setNum} = props;
  const {question, answer} = questions;

  const [open, setOpen] = useState(false);
  const [playImg, setPlayImg] = useState(play);
  const [detail, setDetail] = useState(question);
  const [status, setStatus] = useState("");
  const [cursor, setCursor] = useState("");

  useEffect(() => {
    if(status) {
      setCursor("not-allowed");
    } else if(open) {
      setCursor("default");
    } else {
      setCursor("pointer");
    }
  }, [status, open])


  function openCard() {
    setOpen(true);
    setPlayImg(arrow);
  }

  function showAnswer() {
    setDetail(answer);
  }

  function playButton() {
    if(cursor !== "not-allowed") {
      return playImg === play ? openCard() : showAnswer();
    }
  }


  return (
    <FlashCardContainer
      open={open}
      detail={detail}
      answer={answer}
      status={status}
      cursor={cursor}
    >
        {open ? detail : `Pergunta ${index + 1}`}
        <PlayButton
          src={playImg}
          onClick={playButton}
          detail={detail}
          answer={answer}
          cursor={cursor}
          data-identifier="flashcard-show-btn"
        />
        <ButtonContainer detail={detail} answer={answer}>
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    text={button.text}
                    color={button.color}
                    question={question}
                    setPlayImg={setPlayImg}
                    setOpen={setOpen}
                    setDetail={setDetail}
                    setStatus={setStatus}
                    num={num}
                    setNum={setNum}
                />
            ))}
        </ButtonContainer>
    </FlashCardContainer>
  )
}

export default Flashcard

const FlashCardContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.detail !== props.answer ? "row" : "column"};
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: ${(props) => props.open ? "131px" : "65px"};
    margin: 10px auto;
    padding: ${(props) => props.open ? "20px 10px" : "10px 10px"};
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-style: "normal";
    font-weight: ${(props) => props.open ? 400 : 700};
    font-size: ${(props) => props.open ? "18px" : "16px"};
    line-height: ${(props) => props.open ? "21.6px" : "19.2px"};
    color: ${(props) => props.status ? props.status : "black"};
    text-decoration: ${(props) => props.status ? "line-through" : "none"};
    background-color: ${(props) => props.open ? "#FFFFD4": "white"};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    cursor: ${(props) => props.cursor};
`;

const ButtonContainer = styled.div`
    display: ${(props) => props.detail !== props.answer ? "none" : "flex"};
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
`;

const PlayButton = styled.img`
    display: ${(props) => props.detail !== props.answer ? "initial" : "none"};
    width: 20px;
    height: 23px;
    cursor: ${(props) => props.cursor};
`;