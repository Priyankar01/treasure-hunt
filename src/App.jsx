import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import riddles from './data/riddles';
import './App.css';

function App() {
	const { id } = useParams();
	const locationId = parseInt(id, 10);
	const [currentLocation, setCurrentLocation] = useState(locationId - 1);
	const [userAnswer, setUserAnswer] = useState('');
	const [showHint, setShowHint] = useState(false);

	useEffect(() => {
		setCurrentLocation(locationId - 1);
	}, [locationId]);

	const handleAnswerSubmit = () => {
		if (
			userAnswer.toLowerCase() ===
			riddles[currentLocation].movie_answer.toLowerCase()
		) {
			setShowHint(true);
		} else {
			alert('Incorrect answer. Please try again!');
		}
	};

	// const handleNextLocation = () => {
	// 	if (currentLocation < riddles.length - 1) {
	// 		const nextLocationId = currentLocation + 2;
	// 		window.location.href = `/location/${nextLocationId}`;
	// 	} else {
	// 		alert('Congratulations! You have completed the treasure hunt.');
	// 	}
	// };

	return (
		<>
			<div className="wrapper">
				<div className="app">
					<h1 className='heading'>Treasure Hunt</h1>
					<div>
						<h2>Riddle:</h2>
						<p className='riddle'>"{riddles[currentLocation].movie_clue}"</p>
						<input
						className='input-box'
							type="text"
							value={userAnswer}
							onChange={(e) => setUserAnswer(e.target.value)}
							placeholder="Enter your answer..."
						/>
						<br />
						<button className="button-13" onClick={handleAnswerSubmit}>
							Find Clue
						</button>
					</div>
					{showHint && (
						<div className='location-ans'>
							<h3>Location Clue:</h3>
							<p>"{riddles[currentLocation].location_clue}"</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
