import React, { useState, useEffect } from 'react';
import { useNavigate } from'react-router-dom';

export default function Questions() {
  const questions = [
    {question: "How many negative thoughts have you had in your life?",
    answers: [{answer:"Exactly 1", value: 0}, {answer:"No more than 10", value: 1}, {answer:"Hundreds maybe?", value:2}, {answer:"It's gotta be in the thousands", value:3}],
    number: 1},
    {question: "Have you ever done anything embarassing?",
    answers: [{answer:"No Way", value: 0} , {answer: "Maybe once when I was a grimy little kid", value: 1} , {answer:"Yes", value: 2}, {answer:"All the time. I'm one clumsy fool", value: 3}],
    number: 2},
    {question: "How often do you get into arguments online?",
    answers: [{answer:"I don't have social media and I never will", value: 0}, {answer:"Maybe I've gotten into a few", value: 1}, {answer:"Like once a month", value: 2}, {answer:"Every. Single. Day", value: 3}],
    number: 3},
    {question: "Are you a liar?",
    answers: [{answer:"I don't do that", value: 0}, {answer:"Just once and I'll regret it for the rest of my miserable life", value: 1}, {answer:"I have before, but I don't make a habit of it", value: 2}, {answer:"Yes. Every day, whenever and to whoever I can", value: 3}],
    number: 4},
    {question: "Have you ever cheated on an assignment?",
    answers: [{answer:"Obviously not. I'm not a dirty, dishonest person", value: 0}, {answer:"One time and never again", value: 1}, {answer:"Sometimes", value: 2}, {answer:"Every chance I get. Original thoughts don't reside in this noggin", value: 3}],
    number: 5}
  ]
  const [question, setQuestion] = useState(0);
  const navigate = useNavigate();
  let finishedQuiz = false;
  
  useEffect(() => {
    if (finishedQuiz === true) {
      navigate("/results");
    }
  }, [question]);
    

  function updateState() {
    if (question < questions.length) {
       setQuestion(question + 1);
       finishedQuiz = false;
    }
    if (question === 4 ) {
      setQuestion(question - 4)
      finishedQuiz = true;
    }
  }

  return (
    <>  
      <p>Question {questions[question].number}</p>
      <div>
        {questions[question].question}
        {questions[question]?.answers?.length ? <ul> 
        {questions[question].answers.map((answer) => (
          <li>          
            <button key={Math.floor(Math.random()*10000)} onClick={updateState}>{answer.answer}</button>    
          </li>
        ))} </ul> : <>ppee</>}
        
      </div>
    </>
  );  
}
