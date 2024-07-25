import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '/src/lib/firebase';

const upload = async (file) => {
	if (!file) {
		// const defaultAvatarRef = ref(storage, 'images/avatar.png');
		// try {
		// 	const downloadURL = await getDownloadURL(defaultAvatarRef);
		// 	return downloadURL;
		// } catch (error) {
		// 	console.error('Error getting default avatar:', error);
		// 	throw error;
		// }

		return null;
	}

	const date = new Date();
	const storageRef = ref(storage, `images/${date + file.name}`);
	const uploadTask = uploadBytesResumable(storageRef, file);

	return new Promise((resolve, reject) => {
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
			},
			(error) => {
				reject(`Something went wrong: ${error.code}`);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log('File available at', downloadURL);
					resolve(downloadURL);
				});
			}
		);
	});
};

export default upload;
