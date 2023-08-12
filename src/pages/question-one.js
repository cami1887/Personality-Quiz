import React from 'react';
import { Link } from 'react-router-dom';

export default function QuestionOne() {
  return (
    <>
    <h2>Question One</h2>
    <Link to="/question2">
            <button>Next</button>
    </Link>
    </>
  );  
}