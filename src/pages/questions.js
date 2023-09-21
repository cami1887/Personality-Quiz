import React, { useState, useEffect, useMemo } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate } from'react-router-dom';
import '../styling/questions.css';
import { score } from './results';

const questions = [
  {question: "Do you think you suck?",
  answers: [{answer:"No", value: 0}, {answer:"Not Usually", value: 1}, {answer:"Sometimes", value:2}, {answer:"Yes", value:3}],
  number: 1},
  {question: "Do you ever find yourself doing embarassing things?",
  answers: [{answer:"No Way", value: 0} , {answer: "Maybe once when I was a grimy little kid", value: 1} , {answer:"Yes", value: 2}, {answer:"All the time. I'm one clumsy fool", value: 3}],
  number: 2},
  {question: "How often do you get into arguments online?",
  answers: [{answer:"I don't have social media and I never will", value: 0}, {answer:"Maybe I've gotten into a few", value: 1}, {answer:"Like once a month", value: 2}, {answer:"Every. Single. Day", value: 3}],
  number: 3},
  {question: "Do you lie?",
  answers: [{answer:"I don't do that", value: 0}, {answer:"Just once and I'll regret it for the rest of my miserable life", value: 1}, {answer:"I have before, but I don't make a habit of it", value: 2}, {answer:"Yes. Every day, whenever and to whoever I can", value: 3}],
  number: 4},
  {question: "Do you like cats?",
  answers: [{answer:"YES", value: 0}, {answer:"They're fine", value: 1}, {answer:"Not really", value: 2}, {answer:"I find their indifference to me insulting", value: 3}],
  number: 5}
]

export let result = 0;


export const storedResult = parseInt(sessionStorage.getItem("finalResult"));
export function Questions() {
  const [question, setQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();

  function updateQuestion() {
    if (question < questions?.length - 1 ) {
      setQuestion(question + 1);
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

  console.log(points)
  return (
    <div className='quiz-container'>
      <>{loading ? 
        <div id="loading-container">
          <p>Calculating Results...</p> 
          <ReactLoading id="loading-bubbles" type={"spinningBubbles"} color={"white"} width={'60%'}/>
        </div> : null}
      </>
      <p className="quiz-question">{questions[question]?.question}</p>
      {questions[question]?.answers?.length ? 
        <ul> {questions[question]?.answers.map((answer) => (
          <li className="selection-container" key={Math.floor(Math.random()*10000)} onClick={updateQuestion} >          
            <button className="selection-button" key={Math.floor(Math.random()*10000)} points={answer?.value} onClick={updatePoints}>{answer?.answer}</button>    
          </li>
          ))} 
        </ul> : <></>} 
    </div>
    ) 
  }

// score ? result = score : result = 0;