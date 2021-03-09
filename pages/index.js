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
			<html>
				<img src="/images/dog1.png" alt="Dog1"/>
				<Dogs />
			</html>
		)
  	}
}

class Dogs extends React.Component{

	constructor(props){
		super(props);
		this.state = {list: []}
	}

	render(){
		return(
			<h1>I am from dogs</h1>
		)
	}
}
