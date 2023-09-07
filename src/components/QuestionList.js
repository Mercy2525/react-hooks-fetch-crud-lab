import React, { useEffect, useState } from "react";

function QuestionList() {

  const[questions,setQuestions]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res=>res.json())
    .then(data=>setQuestions(data))
    .catch(e=>console.log(e))
  })

  // const query=questions.map(question=>question)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question=><li>{question.prompt}</li>)}</ul>
    </section>
  );
}

export default QuestionList;
