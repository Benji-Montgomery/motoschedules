import React from 'react';
import './css/index.css'
import Schedule from './schedule';
import DateTime from '../components/date';


const Home = () => {

return (
	<div>
		<section>
			<img src="/img/sumo.webp" alt="supermoto" id="splashImg"></img>
		</section>
		<section id="main">
		<h1>Moto Schedule</h1>
		<h3><DateTime /></h3>
		<p>It is hard to find all of the Super Moto racing schedules in one place. This is my solution.</p>
		<p>All dates are 2023</p>
		<Schedule />
		</section>
	</div>
);
};

export default Home;
