import React from 'react';
import './Detail.css';
import { auth } from '../../lib/firebase';

const Detail = () => {
	return (
		<div className="detail">
			<div className="user">
				<img
					src="./avatar.png"
					alt=""
				/>
				<h2>Szymon Michałek</h2>
				<p>Lorem ipsum dolor sit.</p>
			</div>
			<div className="info">
				<div className="option">
					<div className="title">
						<span>Chat Settings</span>
						<img
							src="./arrowUp.png"
							alt=""
						/>
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Privacy & help</span>
						<img
							src="./arrowUp.png"
							alt=""
						/>
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Shered photos</span>
						<img
							src="./arrowDown.png"
							alt=""
						/>
					</div>
					<div className="photos">
						<div className="photoItem">
							<div className="photoDetail">
								<img
									src="https://th.bing.com/th/id/OIP.I6lYvmANLf0UM_EEm6Az9wHaE9?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
									alt=""
								/>
								<span>SZYMON.png</span>
							</div>
							<img
								src="./download.png"
								alt=""
								className="icon"
							/>
						</div>
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Shered Files</span>
						<img
							src="./arrowUp.png"
							alt=""
						/>
					</div>
				</div>
				<button>Block User</button>
				<button
					className="logout"
					onClick={() => auth.signOut()}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Detail;
