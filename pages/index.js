import styles from '../styles/Home.module.css';
import React from 'react';
import Image from 'react-dom';

export default class Home extends React.Component{

	constructor(props) {
		super(props);
		//this.state =
	}

	componentDidMount() {
		const dogs = fetch('http://localhost:3000/api/dogs').then((res) => console.log(res.json()));
	}

	render() {
		const added = "added text";
		const JSX_Ex = <p> this is JSX value {added} </p>;
	

   		return (
			<div>
				<img src="/images/dog1.png" alt="Dog1"/>
				<Dogs />
			</div>
		)
  	}
}

class Dogs extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<h1>I am from dogs</h1>
		)
	}
}
