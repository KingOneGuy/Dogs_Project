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
	/*  Defined props:
	 *  src
	 */
	
	constructor(props){
		super(props);
		this.state = {
			list: null
		};
	}

	// Can't get data from json
	componentDidMount() {
		//const dogs = fetch('http://localhost:3000/api/dogs').then((res) => console.log(res.json()));
		fetch('http://localhost:3000/api/dogs')
			//.then((res) => console.log(res.json()))
			.then((res) => res.json())
			//.then((res) => JSON.parse(res.dogs));
			.then((res) => console.log(res.dogs));
	}

	render(){
		const {src} = this.props; // same as: const src = this.props.src;

		return(
			<div>
				<img src={src} alt="Dog1"/>
				<h1> I am from dogs. </h1>
			</div>
		)
	}
}
