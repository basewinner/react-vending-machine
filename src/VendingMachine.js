import React from 'react';
import { Link } from 'react-router-dom';
import Message from "./Message";
import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div
			className="VendingMachine"
			style={{
				backgroundImage : `url('https://static01.nyt.com/images/2019/09/15/fashion/10vendingring2/10vendingring2-articleLarge.jpg?quality=75&auto=webp&disable=upscale')`
			}}
		>
			<Message>
				<h1>Welcome to VendMagic! Please make a selection 🍺🥜</h1>
			</Message>
			<Message>
				<h1>
					<Link className="VendingMachine-link" to="/beer">
						Beer
					</Link>
				</h1>
				<h1>
					<Link className="VendingMachine-link" to="/peanuts">
						Peanuts
					</Link>
				</h1>
				<h1>
					<Link className="VendingMachine-link" to="/crackerjacks">
						Cracker Jacks
					</Link>
				</h1>
			</Message>
		</div>
	);
};

export default VendingMachine;