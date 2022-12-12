import React from 'react';
import { useState } from 'react'
import cascadia from '../components/cascadiaSM'
import wmrra from '../components/wmrra'
import './css/schedule.css'

const Schedule = () => {
	const race1 = wmrra.races
	const race2 = cascadia.races
	const race3 = race1.concat(race2)
	console.log(race3)
	const schedule = race3

	const ScheduleButton = ({org}) => {
		const [clicked, setClicked] = useState('true')
		console.log('current state of clicked outside of function', clicked)
		//if(clicked === 'false'){
		//	setSchedule(wmrra.races)
		//}
		// false ==== clicked!
		const scheduleSetter = (event) => {
			event.preventDefault()
			if(clicked === 'false'){
				setClicked('true')
				console.log('set to true')
				
			}else if(clicked === 'true'){		
				console.log('setting false')
				setClicked('false')
			}
		}

		return(
			<button className={`${clicked}`} onClick={scheduleSetter} >{org.name}</button>
		)
	}
	const Race = (race) => {
		return(
			<div>
				{race.race.name} date: {race.race.date[0]},{race.race.date[1]} track: {race.race.track}
			</div>
		)
	}
	const ScheduleDisplay = () => {
		
		return(
			<div>
				{schedule.map(race =>
					<Race key={Math.random()} race={race} />)}
			</div>
		)
	}
	return (
		<div>
			<div>
				<p>Select Organizations to display</p>
				<ScheduleButton org={cascadia} />
				<ScheduleButton org={wmrra} />
			</div>
			<h3>schedule:</h3>
			<ScheduleDisplay />

		</div>
	);
};

export default Schedule;

