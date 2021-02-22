import React, { useState } from 'react';
import monkeyQr from '../images/monkey-qr.png';

const Deposit = () => {
	const copyToClipboard = () => {
		const el = document.createElement('textarea');
		el.value =
			'ban_3hx3yb9urr16dmnnk4mzhxh638c1qkrqw6kjfqazc9bcfj5nxx4hy47skqec';
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		// Change button related stuff
		const copyButton = document.querySelector('.adrs-copy');
		copyButton.classList.add('copied');
		copyButton.innerHTML = 'কপি হয়েছে!';

		setTimeout(() => {
			copyButton.classList.remove('copied');
			copyButton.innerHTML = 'অ্যাড্রেসটি কপি করুন';
		}, 1500);
	};

	return (
		<div className="main__child">
			<p className="stepcount one">১</p>
			<div className="card__inside">
				<h4>নিচের অ্যাড্রেস এ বানানো পাঠান</h4>
				<div className="depo">
					<div className="depo__address">
						<span>ban_3hx3yb9</span>
						urr16dmnnk4mzhxh638c1qkrqw6kjfqazc9bcfj5nxx4hy4
						<span>7skqec</span>
					</div>
					<img className="depo__qr" src={monkeyQr} width="230px" />
				</div>
				<button
					onClick={copyToClipboard}
					className="adrs-copy button button-p is-rounded"
				>
					অ্যাড্রেসটি কপি করুন
				</button>
			</div>
		</div>
	);
};

export default Deposit;
