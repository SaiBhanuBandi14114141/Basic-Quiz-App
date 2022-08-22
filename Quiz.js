import React, { useState } from 'react';
import './App.css'
export default function Quiz() {
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'Chennai', isCorrect: false },
				{ answerText: 'Delhi', isCorrect: true },
				{ answerText: 'Bangalore', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'What is the name of the Planet we are living?',
			answerOptions: [
				{ answerText: 'Mars', isCorrect: false },
				{ answerText: 'Saturn', isCorrect: false },
				{ answerText: 'Pluto', isCorrect: false },
				{ answerText: 'Earth', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
            <center>
				<h2><u>Basic Quiz</u></h2>
			{showScore ? (
				<div className='score-section'>
					<h3>You scored {score} out of {questions.length}</h3>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<h4>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
							</h4>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<br/>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button> 
						))}
					</div>
				</>
			)}
            </center>
		</div>
	);
}