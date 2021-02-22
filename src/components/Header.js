import React, { useRef } from 'react';
import logo from '../images/banex-logo.svg';

const Header = () => {
	const modal = useRef(null);

	const showModal = (e) => {
		e.preventDefault();
		modal.current.classList.add('is-active');
	};
	const closeModal = () => {
		modal.current.classList.remove('is-active');
	};

	return (
		<section id="header">
			<div className="wrapper">
				<a href="/.">
					<img src={logo} className="header__logo" draggable="false" />
				</a>
				<a
					href="#"
					onClick={(e) => showModal(e)}
					className="header__link has-text-black"
				>
					শর্তাবলি
				</a>
			</div>
			<div ref={modal} className="modal">
				<div onClick={closeModal} className="modal-background"></div>
				<div className="modal-card has-text-white">
					<header className="modal-card-head ">
						<p className="modal-card-title has-text-white">
							আপনি কি আমাদের শর্তাবলির সাথে সম্মত?
						</p>
						<span
							onClick={closeModal}
							className="delete"
							aria-label="close"
						></span>
					</header>
					<section className="modal-card-body">
						দাইশুই আউহদু হদাহদুইয়াহস ধদুইয়াহ সদুইহসদ উইয়াশদুই হাসদ হুইয়াহসদু
						ইয়াহদ উইয়া হদুয়াইহ দুইয়াহদ ইউয়াওহদুইয়া উইয়াহ দুইয়া দু হাউস হদাউইওহ
						দাওুধ আউদ হাওদা ওহদু
					</section>
					<footer className="modal-card-foot">
						<button
							onClick={closeModal}
							className="button is-success is-rounded"
						>
							ঠিক আছে
						</button>
					</footer>
				</div>
			</div>
		</section>
	);
};

export default Header;
