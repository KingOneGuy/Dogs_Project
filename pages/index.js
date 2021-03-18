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
				<DogList />
			</html>
		)
  	}
}

class DogList extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			dogs: null
		};
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/dogs')
			.then(res => res.json())
			.then(res => this.setState(
				{
					dogs: res.dogs
				}
			));
			//.then(res => console.log(this.state));
	}

	render(){
		const dogs = this.state.dogs; // local variable dogs
		//console.log(this.state.dogs.src);

		// If this check is not here, program will try to read values that don't exist
		// componentDidMount takes time, meaning that render will run first
		/*if(dogs != null){
			dogs.map(i => {
				console.log(i.src);
				console.log(i.name);
				console.log(i.description);
			})
		}*/

		/*return(
			<div>
				{() => dogs.map(i => {
					<Dog src={i.src} name={i.name} desc={i.description} />
				})}
			</div>
		)*/

		
		if(dogs != null){
			console.log("dogs not null");
			console.log(dogs[0].src);
			
			return(
				/*dogs.map(i => {
					<div>
						<img src={i.src} />
						<h1>{i.name}</h1>
						<p>{i.description}</p>
					</div>
				})*/
				<img src={dogs[0].src} />
			)
		}else{
			console.log("dogs null");
			return(<p>Not loaded.</p>)
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
		const {src} = this.src; // same as: const src = this.props.src;
		const {name} = this.name;
		const {desc} = this.desc;

		return(
			<div>
				<img src={src} />
				<h1>{name}</h1>
				<p>{desc}</p>
			</div>
		)
	}
}