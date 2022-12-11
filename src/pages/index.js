import React from 'react';
import './css/index.css'
import Schedule from './schedule';

const Home = () => {
return (
	<div>
		<section>
			<img src="/img/sumo.webp" alt="supermoto" id="splashImg"></img>
		</section>
		<h1>Moto Schedule</h1>
		<p>It is hard to find all of the motorcycle racing schedules in one place. This is my solution.</p>
		<Schedule />
	</div>
);
};

export default Home;
