import React, { useRef } from 'react';

const Modal = ({ content, modalRef }) => {
	const modal = useRef(null);

	return (
		<div ref={modal} onLoad={modalRef(modal)} className="modal">
			<div className="modal-background"></div>
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">
						আপনি কি আমাদের শর্তাবলির সাথে সম্মত?
					</p>
					<span className="delete" aria-label="close"></span>
				</header>
				<section className="modal-card-body">{content}</section>
				<footer className="modal-card-foot">
					<button className="button is-success is-rounded">আমি সম্মত</button>
					<button className="button is-rounded is-danger">না</button>
				</footer>
			</div>
		</div>
	);
};

export default Modal;
