import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import QuestionCard from './QuestionCard';
const Quiz = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
localStorage.removeItem("type");
    navigate("/");
  };

  const [questions, setQuestions] = useState(null)
  const [selectedLanguage, setselectedLanguage] = useState('')

  const getQuestions = async () => {
    try {
      const response = await fetch('http://localhost:8000/questions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setQuestions(data);
        // console.log("Rrceived data is: ", data);
        console.log('Questions feteched successfully.');

      } else {

        console.error('Fetching questions failed.');

      }
    } catch (error) {
      console.error('Error during fetching:', error);
    }
  }

  const getSelectedLanguage = async () => {
    try {
      const email = localStorage.getItem("email")
      const response = await axios.get(`http://localhost:8000/${email}/language`);
      // console.log("selected language is: ", response.data.language)
      setselectedLanguage(response.data.language)
    }
    catch (err) {
      console.log("Error: ", err);
    }
  }
  useEffect(() => {

    getQuestions();
    getSelectedLanguage();
  }, [])


  let langQuestions = []
  if (questions != null) {
    langQuestions = questions[0].questions
  }
  // console.log("lang questions", langQuestions)
  if (selectedLanguage !== '') {
    if (selectedLanguage === "English") {
      langQuestions = langQuestions['English'];
    }
    else if (selectedLanguage === "Spanish") {
      langQuestions = langQuestions['Spanish']
    }
    else {
      langQuestions = langQuestions['French']
    }
  }

  const [score, setScore] = useState(0);
  
  const handleSubmit=async()=>{
    // update the users score in the database
    const email=localStorage.getItem("email");
    try {
      await axios.put(`http://localhost:8000/${email}/${score}/updateScore`);
      console.log('User Score updated successfully');
    } catch (error) {
      console.error('Error updating user score:', error);
    }

    navigate('/profile');

  }


  return (
    <>
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">LanguageApp</div>
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="hover:text-gray-300 text-lg">Home</Link></li>
            <li><Link to="/profile" className="hover:text-gray-300 text-lg">Profile</Link></li>
            <li><button onClick={logout} className="hover:text-gray-300 text-lg">Logout</button></li>
          </ul>
        </div>
      </nav>
      <div className="text-center font-bold text-4xl mt-5">Quiz for {selectedLanguage}</div>

      <div className="text-center font-bold text-4xl mt-5">There are total 10 questions</div>
      <div className="text-center font-bold text-2xl mt-5">Each correct answer will reward you with additional points equal to the difficulty of the question.</div>
      <div className="text-center font-bold text-2xl mt-5">And each incorrect answer will deduct your score by one.</div>
      <h1 className="text-2xl m-3">Your current score is: {score}</h1>
      <div >
        {langQuestions && langQuestions.map((obj) => {
          return <QuestionCard number={obj.number} score={score} setScore={setScore} question={obj.question} options={obj.options} correctAnswer={obj.correctAnswer} difficulty={obj.difficulty} />
        })}
      </div>


      <div className="flex justify-center items-center mt-4 mb-4">


        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" onClick={handleSubmit}>
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
            Submit your score
          </span>
        </button>
      </div>
    </>
  )
}

export default Quiz