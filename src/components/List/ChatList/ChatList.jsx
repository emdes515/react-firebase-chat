import React, { useState } from 'react';
import './ChatList.css';
import AddUser from './AddUser/AddUser';

const ChatList = () => {
	const [addMode, setAddMode] = useState(false);

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
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			<div className="item">
				<img
					src="./avatar.png"
					alt=""
				/>
				<div className="texts">
					<span>Mateusz Jankowski</span>
					<p>Hej</p>
				</div>
			</div>
			{addMode && <AddUser />}
		</div>
	);
};

export default ChatList;
