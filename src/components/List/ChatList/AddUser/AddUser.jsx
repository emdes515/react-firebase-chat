import React from 'react';
import './AddUser.css';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '/src/lib/firebase.js';
import { toast } from 'react-toastify';
import { useState } from 'react';

const AddUser = () => {
	const [user, setUser] = useState(null);

	const handleSearch = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const username = formData.get('username');

		try {
			const usersRef = collection(db, 'users');
			const usernameQuery = query(usersRef, where('username', '==', username));

			const querySnapshot = await getDocs(usernameQuery);

			if (!querySnapshot.empty) {
				setUser(querySnapshot.docs[0].data());
			}

			console.log(user);
		} catch (error) {
			console.log(error);
			toast.error('User not found');
		}
	};

	return (
		<div className="addUser">
			<form onSubmit={handleSearch}>
				<input
					type="text"
					placeholder="Username"
					name="username"
					id="username"
				/>
				<button>Search</button>
			</form>
			{user && (
				<div className="user">
					<div className="detail">
						<img
							src={user.avatar || './avatar.png'}
							alt=""
						/>
						<span>{user.username}</span>
					</div>
					<button>Add User</button>
				</div>
			)}
		</div>
	);
};

export default AddUser;
