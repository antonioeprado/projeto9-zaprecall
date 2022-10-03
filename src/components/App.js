import React, { useState } from 'react'
import styled from 'styled-components';
import GlobalStyle from '../assets/styles/globalStyles';
import Flashcard from './Flashcard';
import Footer from './Footer';
import Header from './Header';
import deck from './deck';

const questions = [...deck.questions];

function App() {

  const [num, setNum] = useState(0);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        {questions.map((question, index) => (
          <Flashcard
            key={index}
            questions={question}
            index={index}
            num={num}
            setNum={setNum}
          />
        ))}
      </AppContainer>
      <Footer num={num} setNum={setNum} numOfTotalQuestions={questions.length} />
    </>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 375px;
  max-height: 667px;
  background-color: #FB6B6B;
  margin: auto;
  border: 1px solid #dbdbdb;
  overflow-y: scroll;
`;