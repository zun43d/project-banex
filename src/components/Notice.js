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
					*বি.দ্রঃ সাইটের রক্ষণাবেক্ষণের জন্য প্রতি লেনদেন এ ৫% করে ফি প্রযোজ্য!
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
