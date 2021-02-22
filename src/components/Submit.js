import React, { useRef } from 'react';

const Submit = () => {
	const modal = useRef(null);
	// form data ref
	const banAddr = useRef(null);
	const amount = useRef(null);
	const phone = useRef(null);
	const reffer = useRef(null);

	const sellBan = (e) => {
		e.preventDefault();
		if (banAddr.current.value.length !== 64) {
			errorInput(banAddr);
		} else if (amount.current.value < '1000') {
			errorInput(amount);
		} else if (phone.current.value.length !== 11) {
			errorInput(phone);
		} else if (reffer.current.value == null) {
			errorInput(reffer);
		} else {
			modal.current.classList.add('is-active');
		}
	};
	const closeModal = () => {
		modal.current.classList.remove('is-active');
	};

	const errorInput = (a) => {
		a.current.classList.add('error-input');
	};

	const resetInput = (e) => {
		e.current.classList.remove('error-input');
	};

	// const formCheck = (e) => {
	// 	e[0].value !== 64
	// 		? e[0].classList.add('error-input')
	// 		: e[0].classList.remove('error-input');
	// };

	return (
		<div className="main__child">
			<p className="stepcount two">২</p>
			<div className="card__inside">
				<h4>তথ্য দিন</h4>
				<div className="alert-note">
					প্রদত্ত অ্যাড্রেসে বানানো পাঠানোর পর নিচের ফর্মটি পুরন করুন। কোনো ভুল
					তথ্য দিলে সম্পূর্ণ দায়ভার আপনার।
				</div>
				<div className="submit-sec">
					<form className="submit-form">
						<div>
							<input
								// onChange={(e) => formCheck(e.target.form)}
								ref={banAddr}
								type="text"
								placeholder="আপনার বানানো অ্যাড্রেসঃ"
								id="form__address"
								autoComplete="off"
							/>
						</div>
						<div>
							<input
								// onChange={amntX}
								ref={amount}
								type="text"
								placeholder="কতো বানানো পাঠিয়েছেন তা নিচে লিখুনঃ"
								id="form__amount"
								autoComplete="off"
							/>
						</div>
						<div>
							<input
								// onChange={phnX}
								ref={phone}
								type="text"
								placeholder="আপনার বিকাশ ফোন নাম্বারঃ"
								id="form__phone"
							/>
						</div>
						<div className="select is-warning is-rounded">
							<select ref={reffer}>
								<option>যার মাধ্যমে এসেছেন তার নাম বাছাই করুন</option>
								<option>Ibtisam Jimmy</option>
								<option>Shaiyan</option>
							</select>
						</div>
						<button
							onClick={(e) => sellBan(e)}
							className="form__submit button button-p is-rounded"
						>
							সেল বানানো
						</button>
					</form>
				</div>
			</div>
			{/* Modal for sell confirmation */}
			<div ref={modal} className="modal">
				<div onClick={closeModal} className="modal-background"></div>
				<div className="modal-card has-text-white">
					<header className="modal-card-head">
						<p className="modal-card-title has-text-white">
							সেল করার বেপারে আপনি কি নিশ্চিত?
						</p>
						<div
							onClick={closeModal}
							className="delete"
							aria-label="close"
						></div>
					</header>
					<section className="modal-card-body">
						দফাজসদিওয়াহে দফহা হুএহফুই হফিয়া হফু হফ এফ গাহসেফগ স্ফ ব্দব চভব আসা
						সদাওেঝা এওউফাসেফ উয়াসেফ্যাএফ্যাসেফ্যহাধসুয়াদা এহ ফু শেফ এহফা ফ ফহফহ
						আফহা ফহাএ ফ ফ ফহফ ফহ আহেফাহ ফুহেহফুহসেফ আস্ফ সেফ উএহ ফ হসুএ হফুয়াশেফ
						শেফ হাসেহ ফেহফ শেফুসাহফুসেফহুস সুইহ ইহ এইউফহ সেফু
					</section>
					<footer className="modal-card-foot">
						<button className="button is-success is-rounded">
							আমি নিশ্চিত
						</button>
						<button className="button is-normal is-rounded">না</button>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default Submit;
