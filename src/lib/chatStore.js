import { create } from 'zustand';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '/src/lib/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import useUserStore from './userStore.js';

export const useChatStore = create((set) => ({
	chatID: null,
	user: null,
	isCurrentUserBlocked: false,
	isReceiverBlocked: false,
	changeChat: (chatID, user) => {
		const currentUser = useUserStore.getState().currentUser;

		if (user.blocked.includes(currentUser.id)) {
			return set({
				chatID,
				user: null,
				isCurrentUserBlocked: true,
				isReceiverBlocked: false,
			});
		} else if (currentUser.blocked.includes(user.id)) {
			return set({
				chatID,
				user,
				isCurrentUserBlocked: false,
				isReceiverBlocked: true,
			});
		} else {
			set({
				chatID,
				user,
				isCurrentUserBlocked: false,
				isReceiverBlocked: false,
			});
		}
	},

	changeBlock: () => {
		set((state) => ({
			...state,
			isReceiverBlocked: !state.isReceiverBlocked,
		}));
	},
}));

export default useChatStore;
