import React, { useEffect, useState } from 'react';
import './ChatList.css';
import AddUser from './AddUser/AddUser';
import { useUserStore } from '/src/lib/userStore.js';
import { onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '/src/lib/firebase.js';
import useChatStore from '/src/lib/chatStore.js';

const ChatList = () => {
	const [addMode, setAddMode] = useState(false);
	const [chats, setChats] = useState([]);

	const { currentUser, isLoading, fetchUserInfo } = useUserStore();

	const { changeChat } = useChatStore();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	useEffect(() => {
		const unSub = onSnapshot(doc(db, 'userchats', currentUser.id), async (res) => {
			const items = res.data()?.chats;

			if (!items) {
				return;
			}

			const promises = items.map(async (item) => {
				const userDocRef = doc(db, 'users', item.receiverID);
				const userDocSnap = await getDoc(userDocRef);

				const user = userDocSnap.data();

				return { ...item, user };
			});

			const chatData = await Promise.all(promises);

			setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
		});

		return () => {
			unSub();
		};
	}, [currentUser.id]);

	const handleSelect = async (chat) => {
		const { chatID, user } = chat;

		changeChat(chatID, user);
	};

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
					key={chat.chatID}
					onClick={() => {
						handleSelect(chat);
					}}>
					<img
						src={chat.user.avatar || './avatar.png'}
						alt=""
					/>
					<div className="texts">
						<span>{chat.user.username}</span>
						<p>{chat.chatMessage}</p>
					</div>
				</div>
			))}

			{addMode && <AddUser />}
		</div>
	);
};

export default ChatList;
