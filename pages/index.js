import styles from '../styles/Home.module.css';
import React from 'react';
import Image from 'react-dom';
//import useSWR from 'swr';

//import Dog1 from '../public/images/dog1.png';
/*import Dog2 from '../public/images/dog2.png';
import Dog3 from '../public/images/dog3.png';
import Dog4 from '../public/images/dog4.png';
import Dog5 from '../public/images/dog5.png';
import Dog6 from '../public/images/dog6.png';
import Dog7 from '../public/images/dog7.png';
import Dog8 from '../public/images/dog8.png';
import Dog9 from '../public/images/dog9.png';*/
//import html from '../pages/test.html';

export default class Home extends React.Component{

  render() {
	/*const name = 'Josh Perez';
	var element = <h1>Hello, {name}</h1>;*/
	const added = "added text";
	const JSX_Ex = <p> this is JSX value {added} </p>;
	
	//const fetcher = (url) => fetch(url).then((res) => res.json())
	
	//const imageName = require({Dog1});

	const dogs = fetch('localhost:3000/api/dogs').then((res) => console.log(res.json()));
	
	//const out = res[0];
	

    return (
		//<img src={require("../public/images/dog1.png")} alt="Dog1"/>
		//<img src={imageName} />
		<p1>test</p1>
	)
  }
}
