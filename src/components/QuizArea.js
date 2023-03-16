import React, { useState } from 'react';
import './QuizArea.css';
import { DiJavascript1 } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';
import { AiOutlineClose } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';
import { TiFlowSwitch } from 'react-icons/ti';
import { BsLayoutSplit } from 'react-icons/bs';
import { BiDotsHorizontalRounded, BiCube } from 'react-icons/bi';
import { unityQuestions } from './unityQuestions';

function QuizArea() {
  const [questions] = useState(unityQuestions);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  
  const handleOptionChange = (questionId, answerText, isCorrect) => {
    if (!submitted) {
      setSelectedOptions(prevState => ({
        ...prevState,
        [questionId]: { answerText, isCorrect }
      }));
      if (isCorrect) {
        setCorrectAnswers(prevState => prevState + 1);
      }
    }
    if (isCorrect) {
      setCorrectAnswers(prevState => prevState + 1);
       }
    }
  const handleSubmit = () => {
    const correctAnswersCount = Object.values(selectedOptions).filter(value => value?.isCorrect).length;
    setCorrectAnswers(correctAnswersCount);
    setShowMessage(true);

  setSubmitted(true);
  };  
  return (
    <div className='quiz-area-container'>
      <div className="tabs-manager">
        <ul className="tabs">
          <li className="tab">
            <p><DiJavascript1 className='tab-icon'/>JS.js <AiOutlineClose className='close'/></p>
          </li>
          <li className="tab">
            <p><TbBrandCSharp className='tab-icon'/>Unity.cs <AiOutlineClose className='close'/></p>
          </li>
        </ul>
        <div className="right-corner">
          <p className="btn"><FiPlay/></p>
          <p className="btn"><TiFlowSwitch/></p>
          <p className="btn"><BsLayoutSplit/></p>
          <p className="btn"><BiDotsHorizontalRounded/></p>
        </div>
      </div>
      <div className="path-manager">
        <p>src {'>'} components {'>'} <DiJavascript1 className='js-path'/> quizzy.js {'>'} <BiCube className='cube'/> quizzy</p>
      </div>
      <div className="line-div">
       
        <div className="quiz-content">
          <div className="import-area">
            <p style={{color: 'var(--purple)'}}>import</p>
            <p style={{color: 'var(--select-text)'}}>Quiz</p>
            <p style={{color: 'var(--purple)'}}>from</p>
            <p style={{color: 'var(--yellow)'}}>'./quizzy.js'</p>
          </div>        
          {questions.map((question) => (
            <div key={question.ID} className="question">
              <div className="question-area">
                <p style={{color: 'var(--purple)'}}>What</p>
                <p style={{color: 'var(--yellow)'}}>{question.questionText}</p>
              </div>
              <div className="options">
                {question.answerOptions.map((option) => (
                  <div key={option.answerText} className="option-area">
                    <p>
                    <input
                      disabled={setSubmitted}
                      type="radio"
                      name={`question${question.ID}`}
                      value={option.answerText}
                      onChange={() => handleOptionChange(question.ID, option.answerText, option.isCorrect)}
                      checked={selectedOptions[question.ID]?.answerText === option.answerText}
                    />
                    </p>     
                    <p style={{color:'var(--green)'}}>{option.answerText}</p> 
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="send-result">
            <p><button onClick={handleSubmit} className="submit-button">[ SUBMIT ]</button></p>
            {showMessage && (
              <p>
                Congrats! You got {correctAnswers} questions right!
              </p>
            )}
          </div>       
        </div>
      </div>
    </div>
  );
}

export default QuizArea;
