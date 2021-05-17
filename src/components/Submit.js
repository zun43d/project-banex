import React, { useRef } from 'react';
import { firebaseDB } from '../database/firebase';

const Submit = () => {
	const modal = useRef(null);
	const successModal = useRef(null);
	// form data ref
	const banAddr = useRef(null);
	const amount = useRef(null);
	const phone = useRef(null);
	const reffer = useRef(null);
	// form ref
	const form = useRef(null);

	const saveToFirebase = () => {
		// save data to firebase
		let transecRef = firebaseDB.database().ref('transections');
		transecRef.push({
			banAddr: banAddr.current.value,
			amount: amount.current.value,
			phone: phone.current.value,
			reffer: reffer.current.value,
			status: 'pending',
		});
		form.current.reset();
		closeModal();
		showSuccess();
	};

	const sellBan = (e) => {
		console.log(e);
		e.preventDefault();
		if (e.target.form[0].value.length == 64) {
			if (
				+e.target.form[1].value >= '999' &&
				+e.target.form[1].value <= '30000' &&
				typeof +e.target.form[1].value == 'number'
			) {
				if (e.target.form[2].value.length === 11) {
					if (
						e.target.form[3].value != 'যার মাধ্যমে এসেছেন তার নাম বাছাই করুন'
					) {
						modal.current.classList.add('is-active');
					} else {
						errorInput(reffer);
					}
				} else {
					errorInput(phone);
				}
			} else {
				errorInput(amount);
			}
		} else {
			errorInput(banAddr);
		}
	};
	const showSuccess = () => {
		successModal.current.classList.add('is-active');
	};

	const closeModal = () => {
		modal.current.classList.remove('is-active');
	};

	const errorInput = (a) => {
		a.current.classList.add('error-input');
	};

	return (
		<div className="main__child">
			<div ref={successModal} className="modal">
				<div className="notification is-success">
					<button
						onClick={() => successModal.current.classList.remove('is-active')}
						className="delete"
					></button>
					আপনার বানানো সেল করার জন্য রিকুয়েস্ট দেওয়া হয়েছে। এখন একটু অপেক্ষার
					পালা। আগামি ২৪ ঘন্টার মধ্যে আপনি আপনার বিকাশে টাকা পেয়ে যাবেন।
					ধন্যবাদ!
				</div>
			</div>
			<p className="stepcount two">২</p>
			<div className="card__inside">
				<h4>তথ্য দিন</h4>
				<div className="alert-note">
					প্রদত্ত অ্যাড্রেসে বানানো পাঠানোর পর নিচের ফর্মটি পুরন করুন। কোনো ভুল
					তথ্য দিলে সম্পূর্ণ দায়ভার আপনার।
				</div>
				<div className="submit-sec">
					<form ref={form} className="submit-form">
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
								maxLength="5"
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
								<option value="Jim">Ibtisam Jimmy</option>
								<option value="Shaiyan">Shaiyan</option>
								<option value="Zunaed">Zunaed</option>
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
						<h4>
							<strong className="has-text-white">মনে রাখবেনঃ</strong>
						</h4>
						<br />
						<p>
							আপনি সেল করার পর সর্বোচ্চ ২৪ ঘন্টা লাগতে পারে আপনার বিকাশ
							অ্যাকাউন্ট এ টাকা পৌছাতে। কারন আমরা প্রতি ২৪ ঘন্টায় একবার সব
							বানানো সেল করে থাকি। তাই আপনার বানানো সেল করে বিকাশ এ টাকা পাঠাতে
							একটু সময় লেগে যায়। আমরা চেষ্টা করি যত তারাতারি সম্ভব আপনার কাছে
							টাকা পৌঁছে দেওয়ার।
							<br />
							<br />
							আশা করছি আমাদের যথাসম্ভব সময় দিয়ে সাহায্য করবেন।
						</p>
					</section>
					<footer className="modal-card-foot">
						<button
							onClick={saveToFirebase}
							className="button is-success is-rounded"
						>
							আমি নিশ্চিত
						</button>
						<button
							onClick={closeModal}
							className="button is-normal is-rounded"
						>
							না
						</button>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default Submit;
