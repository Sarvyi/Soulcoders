import React from 'react'
import { useState } from 'react'

const QuestionCard = ({ number, score, setScore, question, options, correctAnswer, difficulty }) => {
    const [answer, setAnswer] = useState(null)
    const [correct, setCorrect] = useState("")
    const [submited, setSubmited] = useState(false)


    // console.log("options", options);
    // console.log("correct ans", correctAnswer);
    // console.log("diff", difficulty);


    const handleSubmit = () => {
        if (answer === correctAnswer) {
            setScore((score) => score + difficulty)
            setCorrect("true")
        }
        else {
            setScore((score) => Math.max(score - 1, 0))
            setCorrect("false")
        }
        setSubmited(true)
    }
    return (
        <>



            <div>
                <div className="bg-[#3885e2] w-full  border-2 flex flex-col justify-center items-center p-3 gap-5 rounded-lg text-white mt-3 ">

                    <div>




                    </div>
                    <div className="text-3xl text-bold text-black font-bold">

                        {number}.{question}
                        {difficulty && (<h1 className="  text-center text-black text-xl">Difficulty: {difficulty}</h1>)}
                    </div>



                    <div>
                        <h1 className="text-2xl mb-2">Options are:</h1>
                        <div>
                            <div className="flex flex-row justify-center items-center gap-4 mb-6 cursor-pointer text-black text-2xl">

                                <input type="radio" name="options" value={options[0]}
                                    onChange={(e) => setAnswer(e.target.value)} />

                                {options[0]}


                                <input type="radio" name="options" value={options[1]}
                                    onChange={(e) => setAnswer(e.target.value)} />

                                {options[1]}

                                <input type="radio" name="options" value={options[2]}
                                    onChange={(e) => setAnswer(e.target.value)} />

                                {options[2]}
                                <input type="radio" name="options" value={options[3]}
                                    onChange={(e) => setAnswer(e.target.value)} />

                                {options[3]}



                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <button class="bg-blue-600 text-black hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
                                    onClick={() => handleSubmit()}>
                                    Submit
                                </button>


                            </div>
                        </div>



                    </div>


                    {submited && (
                        <div>
<div className="bg-white rounded-lg text-black text-2xl p-3 font-bold mb-3">Your answer is {correct === "true" ? "correct" : "incorrect"}<p>
                                The correct answer is {correctAnswer}</p>
                            </div>
                           
                            
                        </div>
                    )}



                    <div>

                    </div>




                </div>
            </div>


        </>
    )
}

export default QuestionCard