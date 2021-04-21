import React, { useRef } from 'react';

const Notice = () => {
	const ln = useRef(null);
	setTimeout(() => {
		ln.current.style.transform = 'translateY(0px)';

		setTimeout(() => {
			ln.current.style.transform = 'translateY(40px)';
		}, 5000);
	}, 3000);

	return (
		<section>
			<div id="notice">
				<p>
					BanEx এ আপনাকে স্বাগতম!
				</p>
			</div>
			<div ref={ln} id="legal-notice">
				This is an unofficial site.{' '}
				<strong style={{ color: '#fbdd11' }}>NOT FROM BANANO</strong>
			</div>
		</section>
	);
};

export default Notice;
