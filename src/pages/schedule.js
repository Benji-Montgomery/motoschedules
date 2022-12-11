import React from 'react';
import { useState } from 'react'
import cascadia from '../components/cascadiaSM'

const Schedule = () => {
	const [schedule, setSchedule] = useState([])


	const ScheduleButton = ({org}) => {

		const scheduleSetter = (event) => {
			event.preventDefault()
			console.log(org)
			setSchedule(org.races)
			console.log(schedule)
		}

		return(
			<button onClick={scheduleSetter}>{org.name}</button>
		)
	}
	const Race = (race) => {
		console.log(race)
		return(
			<div>
				date: {race.race.date[0]},{race.race.date[1]} track: {race.race.track}
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
			</div>
			<h3>schedule:</h3>
			<ScheduleDisplay />

		</div>
	);
};

export default Schedule;
