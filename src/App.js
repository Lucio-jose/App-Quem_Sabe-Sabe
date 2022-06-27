import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Quantas provincias tem Angola?',
			answerOptions: [
				{ answerText: '24', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '18', isCorrect: true },
				{ answerText: '20', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a Língua oficial de Angola?',
			answerOptions: [
				{ answerText: 'Lingala', isCorrect: false },
				{ answerText: 'Portuges', isCorrect: true },
				{ answerText: 'Ingles', isCorrect: false },
				{ answerText: 'Frances', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a dimensão de Angola?',
			answerOptions: [
				{ answerText: '1.246,700km Expo(2)', isCorrect: true },
				{ answerText: '1.346,700km', isCorrect: false },
				{ answerText: '1.243,700km', isCorrect: false },
				{ answerText: '12.462.700m', isCorrect: false },
			],
		},
		{
			questionText: 'Quem foi o primeiro presidente de Angola?',
			answerOptions: [
				{ answerText: 'Jonas Savimbi', isCorrect: false },
				{ answerText: 'José Eduardo Dos Santos', isCorrect: false },
				{ answerText: 'António Neto', isCorrect: true },
				{ answerText: 'João Lourenço', isCorrect: false },
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
			{showScore ? (
				<div className='score-section'>
					Voce Acertou {score} de {questions.length} questões
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Questão {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
