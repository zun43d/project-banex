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
					কিভাবে সেল করব?
				</a>
			</div>
			<div ref={modal} className="modal">
				<div onClick={closeModal} className="modal-background"></div>
				<div className="modal-card has-text-white">
					<header className="modal-card-head ">
						<p className="modal-card-title has-text-white">
							নিয়মাবলি ও শর্তসমূহ
						</p>
						<span
							onClick={closeModal}
							className="delete"
							aria-label="close"
						></span>
					</header>
					<section className="modal-card-body">
						<div>
							<h4>বানানো কিভাবে সেল করব?</h4>
							<br />
							১। প্রথমে সাইট এ দেওয়া বানানো এড্রেসটি কপি করে, ঐ অ্যাড্রেস এ
							আপনার বানানো ওয়ালেট (Kalium) থেকে যত বানানো সেল করতে চান, তা
							পাঠান। মনে রাখবেন, আপনি ১০০০ এর কম বানানো সেল করতে পারবেন না আর
							সর্বোচ্চ ৩০,০০০ বানানো পর্যন্ত সেল করতে পারবেন।
							<br />
							<br />
							২। এবার বানানো পাঠানোর পর সাইট এ দেওয়া ফর্মটি পুরন করুন। ফর্মটি
							নিখুত ভাবে পুরন করতে হবে, আপনার কোনো ভুল তথ্যের দায়ভার কর্তৃপক্ষ
							নিবে না।
							<br />
							<br />
							৩। ফর্মটি পুরন করার পর, "সেল বানানো"-তে ক্লিক করুন। তারপর আপনি
							সম্মত হলেই আপনার বানানো সেল রিকুয়েস্ট আমাদের কাছে চলে আসবে।
							<br />
							<br />
							আপনার সেল রিকুয়েস্ট আমাদের কাছে আশার পর আমরা একটি নির্দিষ্ট সময়ে
							(সন্ধ্যা ৮টা - রাত ১০.৩০টা) আপনার বানানো সেল করব। তারপর সেল করে
							পাওয়া টাকার থেকে ৫% ওয়েব-ফি রেখে আমরা আপনার প্রাপ্য টাকা আপনার
							দেওয়া বিকাশ নাম্বারে পাঠিয়ে দিব।
							<br />
							<br />
							<br />
							<h4>ডলার রেট</h4>
							<br />
							আমাদের সাইট থেকে সেল করলে আমরা প্রতি ডলারে ৮৫ টাকা রেট দিয়ে থাকি।
							তারমানে আপনি যদি 10$ সেল করেন তাহলে দাম হবে ১০x৮৫ = ৮৫০ টাকা। সাথে
							৫% আমাদের ওয়েব-ফি কাটার পর আপনি পাবেন ৮০৮ টাকা।
							<br />
							<br />
							<br />
							<h4>Banano Back Policy</h4>
							<br />
							যদি এমন হয় যে আপনি বানানো পাঠিয়েছেন, কিন্তু আপনি ফর্ম সাবমিত
							করেননি অথবা কোনো কারনে আপনার ফর্মটি সাবমিত হয়নি, তখন আমরা ঐ
							হিশাব-বিহিন বানানো যেই অ্যাড্রেস থেকে পাঠানো হয়েছে ঐ অ্যাড্রেসে
							ফিরত পাঠিয়ে দিব।
							<br />
							<br />
							যদি একই অ্যাড্রেস থেকে বারবার একই কাজ করা হলে ঐ অ্যাড্রেস থেকে যত
							বানানো আসবে তার সম্পূর্ণটা বাজেয়াপ্ত করা হবে।
							<br />
							<br />
							<br />
							সবশেষে, আমাদের সাইট ব্যাবহারের মাধ্যমে আপনি আমাদের সকল নিয়মাবলি ও
							শর্তাবলি এর সাথে সম্মতি প্রকাশ করছেন।
						</div>
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
