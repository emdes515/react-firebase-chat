import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ message, type }) => {
	return (
		<div className="">
			<ToastContainer position="bottom-right" />
		</div>
	);
};

export default Notification;
