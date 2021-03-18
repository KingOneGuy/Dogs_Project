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
			dogs: null
		};
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/dogs')
			.then((res) => res.json())
			.then((res) => this.setState(
				{
					dogs: res.dogs
				}
			))
			.then((res) => console.log(this.state));
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
