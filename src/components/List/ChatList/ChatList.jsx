import React, { useEffect, useState } from 'react';
import './ChatList.css';
import AddUser from './AddUser/AddUser';
import { useUserStore } from '/src/lib/userStore.js';
import { onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '/src/lib/firebase.js';

const ChatList = () => {
	const [addMode, setAddMode] = useState(false);
	const [chats, setChats] = useState([]);

	const { currentUser, isLoading, fetchUserInfo } = useUserStore();

	useEffect(() => {
		const unSub = onSnapshot(doc(db, 'userchats', currentUser.id), async (res) => {
			const items = res.data()?.chats;

			if (!items) {
				return;
			}

			const promisses = items.map(async (item) => {
				const userDocRef = doc(db, 'users', item.reciverID);
				const userDocSnap = await getDoc(userDocRef);

				const user = userDocSnap.data();

				return { ...item, user };
			});

			const chatData = await Promise.all(promisses);

			setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
		});

		return () => {
			unSub();
		};
	}, [currentUser.id]);

	console.log(chats);

	return (
		<div className="chatList">
			<div className="search">
				<div className="searchBar">
					<img
						src="./search.png"
						alt=""
					/>
					<input
						type="text"
						placeholder="Search"
					/>
				</div>
				<img
					className="add"
					src={addMode ? './minus.png' : './plus.png'}
					alt=""
					onClick={() => setAddMode((prev) => !prev)}
				/>
			</div>
			{chats.map((chat) => (
				<div
					className="item"
					key={chat.chatId}>
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<span></span>
						<p>{chat.chatMessage}</p>
					</div>
				</div>
			))}

			{addMode && <AddUser />}
		</div>
	);
};

export default ChatList;
