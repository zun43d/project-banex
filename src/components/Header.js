import React from 'react-dom';
import logo from '../images/banex-logo.svg';

const Header = () => {
	return (
		<section id="header">
			<div className="wrapper">
				<a href="index.html">
					<img src={logo} className="header__logo" draggable="false" />
				</a>
				<a href="#" className="header__link has-text-black">
					শর্তাবলি
				</a>
			</div>
		</section>
	);
};

export default Header;
