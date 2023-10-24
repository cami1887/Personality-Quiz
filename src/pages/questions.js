import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate } from'react-router-dom';
import '../styling/questions.css';
import Eggy from './eggman';
import { questions } from '../data/question-data';

export let result = 0;
export const storedResult = parseInt(sessionStorage.getItem("finalResult"));

export function Questions() {
  const [question, setQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState(0);
  const [position, setPosition] = useState('bottom-left');
  const [name, setName] = useState('animate-quiz')
  const navigate = useNavigate();

  function updateQuestion() {
    if (question < questions?.length - 1 ) {
      setQuestion(question + 1);
      if (question === 0) {
        setPosition('bottom-right')
        setName(name);
      }
      if (question === 1) {
        setPosition('top');
        setName('animate-quiz');
      }
      if (question === 2) {
        setPosition('bottom');
        setName('animate-quiz');
      }
      if (question === 3) {
        setPosition('bottom-left');
        setName('animate-quiz');
      }
    }
    else {
      const previousQuestion = question;
      setLoading(true);
      setQuestion(previousQuestion+1);
    }
  }

  function updatePoints(e) {
    const currentPoint = e.currentTarget.getAttribute("points");
    setPoints(points + Number(currentPoint));
   }

  useEffect(() => {
    if (loading) {
      if (points <= 5) {
        console.log(points)
        result = 0;
      }
      if (points > 5 && points < 10) {
        console.log(points)
        result = 1;
      }
      if (points > 10) {
        console.log(points)
        result = 2;
      }
      sessionStorage.setItem("finalResult", result);
      setTimeout(() => {
        navigate("/result"); 
      }, 1000);
    }
  }, [loading, navigate, points]);

  return (
    <>
      <>{loading ? 
        <div id="loading-container">
          <p>CALCULATING RESULTS...</p> 
          <ReactLoading id="loading-bubbles" type={"spinningBubbles"} color={"white"} width={'25%'}/>
        </div> : 
        <Eggy position={position} message={questions[question]?.eggyResponse} />}
      </>
      <div className='quiz-container'>
        <p className="quiz-question">{questions[question]?.question}</p>
        {questions[question]?.answers?.length ? 
          <ul> {questions[question]?.answers.map((answer) => (
            <li className="selection-container" key={Math.floor(Math.random()*10000)} onClick={updateQuestion} >          
              <button className="selection-button" key={Math.floor(Math.random()*10000)} points={answer?.value} onClick={updatePoints}>{answer?.answer}</button>    
            </li>))} 
          </ul> : <></>} 
      </div>
    </>
    ) 
  }