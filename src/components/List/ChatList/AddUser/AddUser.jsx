import React from 'react';
import './AddUser.css';

const AddUser = () => {
	return (
		<div className="addUser">
			<form>
				<input
					type="text"
					placeholder="Username"
					name="username"
					id="username"
				/>
				<button>Search</button>
			</form>
			<div className="user">
				<div className="detail">
					<img
						src="./avatar.png"
						alt=""
					/>
					<span>Szymon Michałek</span>
				</div>
				<button>Add User</button>
			</div>
		</div>
	);
};

export default AddUser;
