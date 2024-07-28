import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '/src/lib/firebase.js';
import {
	doc,
	setDoc,
	getDocs,
	where,
	query,
	collection,
	serverTimestamp,
} from 'firebase/firestore';
import upload from '/src/lib/upload.js';

const Login = () => {
	const [avatar, setAvatar] = useState({
		file: null,
		url: '',
	});

	const [loading, setLoading] = useState(false);

	const handleAvatar = (event) => {
		const file = event.target.files[0];
		if (file) {
			setAvatar({
				file: file,
				url: URL.createObjectURL(file),
			});
		}
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		setLoading(true);

		const formData = new FormData(event.target);

		const { email, password } = Object.fromEntries(formData);

		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success('Logged in successfully');
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleRegister = async (event) => {
		event.preventDefault();

		setLoading(true);

		const formData = new FormData(event.target);

		const { username, newEmail, newPassword } = Object.fromEntries(formData);

		try {
			const usersRef = collection(db, 'users');

			const usernameQuery = query(usersRef, where('username', '==', username));
			const usernameQuerySnapshot = await getDocs(usernameQuery);

			const emailQuery = query(usersRef, where('email', '==', newEmail));
			const emailQuerySnapshot = await getDocs(emailQuery);

			if (!usernameQuerySnapshot.empty) {
				toast.error('Username already exists');
				return;
			}

			if (!emailQuerySnapshot.empty) {
				toast.error('Email already exists');
				return;
			}

			const res = await createUserWithEmailAndPassword(auth, newEmail, newPassword);

			const imgUrl = await upload(avatar.file);

			await setDoc(doc(db, 'users', res.user.uid), {
				username: username,
				email: newEmail,
				avatar: imgUrl,
				id: res.user.uid,
				createdAt: serverTimestamp(),
				blocked: [],
			});

			await setDoc(doc(db, 'userschats', res.user.uid), {
				chats: [],
			});

			toast.success('Account created');
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		} finally {
			setLoading(false);
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
					<button
						type="submit"
						disabled={loading}>
						{loading ? 'Loading...' : 'Login'}
					</button>
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
					<button
						type="submit"
						disabled={loading}>
						{loading ? 'Loading...' : 'Sign Up'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
