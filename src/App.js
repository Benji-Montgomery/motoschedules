import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import MapPage from './pages/mapPage'

function App() {
return (
	<Router>
		<Navbar />
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/contact' element={<Contact/>} />
			<Route path='/sign-up' element={<SignUp/>} />
    		<Route path='/mapPage' element={<MapPage/>} />
		</Routes>
	</Router>
);
}

export default App;