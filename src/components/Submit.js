import React from 'react';

const Submit = () => {
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
								type="text"
								placeholder="আপনার বানানো অ্যাড্রেসঃ"
								id="form__address"
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="কতো বানানো পাঠিয়েছেন তা নিচে লিখুনঃ"
								id="form__amount"
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="আপনার বিকাশ ফোন নাম্বারঃ"
								id="form__phone"
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="পাঠানোর সঠিক সময়ঃ"
								id="form__time"
							/>
						</div>
						<button className="form__submit button is-rounded">
							সেল বানানো
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Submit;
