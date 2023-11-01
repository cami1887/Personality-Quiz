import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate } from'react-router-dom';
import '../styling/questions.css';
import Eggy from './eggman';
import { questions } from '../data/question-data';


export function Questions() {
  const [question, setQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState(0);
  const [position, setPosition] = useState('bottom-left');
  // const [name, setName] = useState('animate-quiz')
  const navigate = useNavigate();
  let result = 0;

  // updates points, positions eggy, 
  function updatePoints(e) {
    const currentPoint = e.currentTarget.getAttribute("points");
    setPoints(points + Number(currentPoint));
    // setName(name);
    if (question < questions?.length - 1 ) {
      if ((question === 0)  || (question === 4) || (question === 8)){
        setPosition('bottom-right')
        // setName(name);
      }
      if ((question === 1) || (question === 5) || (question === 9)) {
        setPosition('top');
        // setName('animate-quiz');
      }
      if (question === 2 || (question === 6)) {
        setPosition('bottom');
        // setName('animate-quiz');
      }
      if (question === 3 || (question === 7) ) {
        setPosition('bottom-left');
        // setName('animate-quiz');
      }setQuestion(question + 1);
    }
    else {
      const previousQuestion = question;
      setLoading(true);
      setQuestion(previousQuestion+1);
    }
   }

  useEffect(() => {
    if (loading) {
      if (points <= 10) {
        console.log(points)
        result = 0;
      }
      if (points > 10 && points <=  20) {
        console.log(points)
        result = 1;
      }
      if (points > 20) {
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
        {questions[question]?.answers?.length ? 
        <>
          <p className="quiz-question">{questions[question]?.question}</p>
          <ul>{questions[question]?.answers.map((answer) => (
            <li className="selection-container" key={Math.floor(Math.random()*10000)} >          
              <button className="selection-button" key={Math.floor(Math.random()*10000)} points={answer?.value} onClick={updatePoints}>{answer?.answer}</button>    
            </li>))} 
          </ul>
        </> : <></>}
      </div>
    </>
    ) 
  }