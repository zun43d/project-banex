import React from 'react';
import monkeyQr from '../images/monkey-qr.png';

const Deposit = () => {
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
				<button className="adrs-copy button is-rounded">
					অ্যাড্রেসটি কপি করুন
				</button>
			</div>
		</div>
	);
};

export default Deposit;
