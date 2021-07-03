import React from 'react';
import './App.css';

class ClickerApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 1
		};		
		
	}
	incrementClicks = () => {
		this.setState({
			clicks: this.state.clicks + 1
		});
	}
	decrementClicks = () => {
		this.setState({
			clicks: this.state.clicks - 1
		});
	}
	initalValue =(e)=>{	
		let value=	parseInt(e.target.value)
		value < 1000 &&this.setState({
			clicks:value
		})
	}
	render() {
		return (
			<div className="container">
				<h1>Simple Counter</h1>
				<div className="flex">
				<button onClick={this.decrementClicks}>-</button>
				<input type="number" min="1" max="1000" value={this.state.clicks} onChange={this.initalValue}/>
				<button onClick={this.incrementClicks}>+</button>
				</div>
			</div>
		);
	}
}


export default ClickerApp;
