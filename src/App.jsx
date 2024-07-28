import { useEffect } from 'react';
import Chat from './components/Chat/Chat';
import Detail from './components/Detail/Detail';
import List from './components/List/List';
import Login from './components/Login/Login';
import Notification from './components/Notification/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '/src/lib/firebase.js';
import { useUserStore } from '/src/lib/userStore.js';
import { useChatStore } from '/src/lib/chatStore.js';

const App = () => {
	const { currentUser, isLoading, fetchUserInfo } = useUserStore();

	const { chatID } = useChatStore();

	useEffect(() => {
		const unSub = onAuthStateChanged(auth, (user) => {
			fetchUserInfo(user?.uid);
		});

		return () => {
			unSub();
		};
	}, [fetchUserInfo]);

	console.log(currentUser);

	if (isLoading) return <div className="loading">Loading...</div>;

	return (
		<div className="container">
			{currentUser ? (
				<>
					<List />
					{chatID && <Chat />}
					{chatID && <Detail />}
				</>
			) : (
				<Login />
			)}
			<Notification />
		</div>
	);
};

export default App;
