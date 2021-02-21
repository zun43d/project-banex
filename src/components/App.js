import React from 'react';
import Header from './Header';
import Notice from './Notice';
import Deposit from './Deposit';
import Submit from './Submit';
import '../styles/style.css';

const App = () => {
	return (
		<div>
			<Header />
			<Notice />
			<section className="main">
				<Deposit />
				<Submit />
			</section>
		</div>
	);
};

export default App;
