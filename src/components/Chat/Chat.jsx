import React, { useState } from 'react';
import './Chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [text, setText] = useState('');

	const handleEmoji = (event) => {
		setText((prev) => prev + event.emoji);
	};

	console.log(text);

	return (
		<div className="chat">
			<div className="top">
				<div className="user">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<span>Szymon Michałek</span>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className="icons">
					<img
						src="./more.png"
						alt=""
					/>
					<img
						src="./video.png"
						alt=""
					/>
					<img
						src="./edit.png"
						alt=""
					/>
				</div>
			</div>
			<div className="center"></div>
			<div className="bottom">
				<div className="icons">
					<img
						src="./more.png"
						alt=""
					/>
					<img
						src="./video.png"
						alt=""
					/>
					<img
						src="./edit.png"
						alt=""
					/>
				</div>
				<input
					type="text"
					placeholder="Type a message..."
					onChange={(event) => setText(event.target.value)}
					value={text}
				/>
				<div className="emoji">
					<img
						src="./emoji.png"
						alt=""
						onClick={() => setIsOpen((prev) => !prev)}
					/>
					<div className="picker">
						<EmojiPicker
							open={isOpen}
							onEmojiClick={handleEmoji}
						/>
					</div>
				</div>
				<button className="sendButton">Send</button>
			</div>
		</div>
	);
};

export default Chat;
