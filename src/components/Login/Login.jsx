import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '/src/lib/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import upload from '/src/lib/upload.js';

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

	const handleRegister = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		const { username, newEmail, newPassword } = Object.fromEntries(formData);

		console.log(newEmail, newPassword);

		try {
			const res = await createUserWithEmailAndPassword(auth, newEmail, newPassword);

			const imgUrl = await upload(avatar.file);

			await setDoc(doc(db, 'users', res.user.uid), {
				username: username,
				email: newEmail,
				avatar: imgUrl,
				id: res.user.uid,
				createdAt: new Date(),
				blocked: [],
			});

			await setDoc(doc(db, 'userschats', res.user.uid), {
				chats: [],
			});

			toast.success('Account created');
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
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
				<form onSubmit={handleRegister}>
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
