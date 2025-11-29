import React from 'react';

// src/components/Home.jsx
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import CardsSection from './CardsSection';
import Footer from './Footer';


//layout component 
const Home = () => {
	return (
		<div> 
      		<Navbar /> 
     	<main> 
        	<Jumbotron />
        	<CardsSection />
        </main>
			<Footer />
    	</div>
	);
};

export default Home;