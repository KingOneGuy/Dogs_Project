import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Image from 'react-dom';

export default class Home extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		// These variables don't have a use. They're just note-to-selfs.
		const added = "added text";
		const JSX_Ex = <p> this is JSX value {added} </p>;
	
   		return (
			<html>
				<DogList />
			</html>
		)
  	}
}

class DogList extends React.Component{
	
	constructor(props){
		super(props); // Always run super(props) before anything else
		this.state = {
			dogs: null
		};
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/dogs')
			.then(res => res.json()) // .json automatically turns the data to a useable format
			.then(res => this.setState(
				{
					dogs: res.dogs
				}
			));
	}

	render(){
		const dogs = this.state.dogs; // local variable dogs

		// If this check is not here, program will try to read values that don't exist
		// componentDidMount takes time, meaning that render will likely run first
		if(dogs != null){
			console.log("dogs not null");
			console.log(dogs[0].src);

			return(
				<div>
					{/* .map is like foreach */}
					{dogs.map(i => {
						return(
							<Dog src={i.src} name={i.name} desc={i.description} />
						)
					})}
				</div>
			)
		}else{
			console.log("dogs null");
			return(<p>Loading dogs...</p>)
		}

	}
}

class Dog extends React.Component{
	/*  Defined props:
	 *  src
	 *  name
	 *  desc
	 */

	constructor(props){
		super(props);
	}

	render(){
		const {src} = this.props; // same as: const src = this.props.src;
		const {name} = this.props;
		const {desc} = this.props;

		return(
			<div>
				<img src={src} />
				<h1>{name}</h1>
				<p>{desc}</p>
			</div>
		)
	}
}