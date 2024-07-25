import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';

const Login = () => {
	const [avatar, setAvatar] = useState({
		file: null,
		url: '',
	});

	const handleAvatar = (event) => {
		const file = event.target.files[0];
		if (file) {
			setAvatar({
				file: file,
				url: URL.createObjectURL(file),
			});
		}
	};

	const handleLogin = (event) => {
		event.preventDefault();
		toast.error('Hello');
	};

	return (
		<div className="login">
			<div className="item">
				<h2>Welcome back,</h2>
				<form onSubmit={handleLogin}>
					<input
						type="text"
						placeholder="Email"
						name="email"
						id="email"
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						id="password"
					/>
					<button type="submit">Sign In</button>
				</form>
			</div>
			<div className="separator"></div>
			<div className="item">
				<h2>Create an account</h2>
				<form action="">
					<label htmlFor="file">
						<img
							src={avatar.url || './avatar.png'}
							alt=""
						/>
						Upload an image
					</label>
					<input
						type="file"
						name="file"
						id="file"
						style={{ display: 'none' }}
						onChange={handleAvatar}
					/>
					<input
						type="text"
						placeholder="Username"
						name="username"
						id="username"
					/>
					<input
						type="email"
						placeholder="Email"
						name="newEmail"
						id="newEmail"
					/>
					<input
						type="password"
						placeholder="Password"
						name="newPassword"
						id="newPassword"
					/>
					<button type="submit">Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
