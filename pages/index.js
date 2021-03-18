import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Image from 'react-dom';

export default class Home extends React.Component{

	constructor(props) {
		super(props);
		//this.state =
	}

	render() {
		const added = "added text";
		const JSX_Ex = <p> this is JSX value {added} </p>;
	

   		return (
			<html>
				<Dogs src="/images/dog1.png"/>
			</html>
		)
  	}
}

class Dogs extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			list: []
		};
	}

	// Can't get data from json
	componentDidMount() {
		//const dogs = fetch('http://localhost:3000/api/dogs').then((res) => console.log(res.json()));
		fetch('http://localhost:3000/api/dogs')
			.then((res) => console.log(res.json()))
			//.then((res) => JSON.parse(res.dogs));
			.then((res) => this.setState({ list: res }))
				//this.setState({list: res.dogs});
				
			.then(console.log(this.state));
	}

	render(){
		return(
			<div>
				<img src={this.props.src} alt="Dog1"/>
				<h1> I am from dogs. </h1>
			</div>
		)
	}
}
