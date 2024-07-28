import React from 'react';
import './AddUser.css';
import {
	collection,
	query,
	where,
	getDocs,
	setDoc,
	serverTimestamp,
	updateDoc,
	arrayUnion,
	doc,
} from 'firebase/firestore';
import { db } from '/src/lib/firebase.js';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useUserStore } from '/src/lib/userStore.js';

const AddUser = () => {
	const [user, setUser] = useState(null);

	const { currentUser } = useUserStore();

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
			} else {
				toast.error('User not found');
			}
		} catch (error) {
			console.log(error);
			toast.error(`Error: ${error.message}`);
		}
	};

	const handleAdd = async (e) => {
		e.preventDefault();

		const chatRef = collection(db, 'chats');
		const userChatsRef = collection(db, 'userchats');

		try {
			const newChatRef = doc(chatRef);

			await setDoc(newChatRef, {
				createdAt: serverTimestamp(),
				messages: [],
			});

			await setDoc(
				doc(userChatsRef, user.id),
				{
					chats: arrayUnion({
						chatID: newChatRef.id,
						lastMessage: '',
						receiverID: currentUser.id,
						updatedAt: Date.now(),
					}),
				},
				{ merge: true }
			);

			await setDoc(
				doc(userChatsRef, currentUser.id),
				{
					chats: arrayUnion({
						chatID: newChatRef.id,
						lastMessage: '',
						receiverID: user.id,
						updatedAt: Date.now(),
					}),
				},
				{ merge: true }
			);
		} catch (error) {
			console.log(error);
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
					<button onClick={handleAdd}>Add User</button>
				</div>
			)}
		</div>
	);
};

export default AddUser;
