import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Questions() {
  const questions = [
    {question: "How many negative thoughts have you had in your life?",
    answers: ["Exactly 1", "No more than 10", "Hundreds maybe?", "It's gotta be in the thousands"]},
    {question: "Have you ever done anything embarassing?",
    answers: ["No Way", "Maybe once when I was a grimy little kid", "Yes", "All the time. I'm one clumsy fool"]},
    {question: "How often do you get into arguments online?",
    answers: ["I don't have social media and I never will", "Maybe I've gotten into a few", "Like once a month", "Every. Single. Day"]},
    {question: "Are you a liar?",
    answers: ["I don't do that", "Just once and I'll regret it for the rest of my miserable life", "I have before, but I don't make a habit of it", "Yes. Every day, whenever and to whoever I can"]},
    {question: "Have you ever cheated on an assignment?",
    answers: ["Obviously not. I'm not a dirty, dishonest person", "One time and never again", "Sometimes", "Every chance I get. Original thoughts don't reside in this noggin"]}
  ]
  const [index, updateQuestion] = useState(0);
  const navigate = useNavigate();

  function updateState() {
    
    if (index < questions.length) {
       updateQuestion(index + 1);
    }
    if (index === 4 ) {
      updateQuestion(index - 4)
      navigate("/results")
    }
  }
 
  return (
    <>  
    <div key={Math.floor(Math.random()*10000)}>
      {questions[index].question}
      {questions[index].answers.map((answer) => (
          <button  onClick={updateState}>{answer}</button>    
      ))}
    </div>
    </>
  );  
}

// function goToResults() {
//   return (
//     <div>
//       <Link to="/results">Click for results</Link>
//     </div>
//   )
// }