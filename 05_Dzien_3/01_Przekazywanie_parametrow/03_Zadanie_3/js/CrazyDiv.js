import React, { useState } from "react";

const CrazyDiv = () => {
	const [divW, setDivW] = useState(100);
	const [divP, setDivP] = useState("absolute");
	const [divLeft, setDivLeft] = useState(0);
	const [divTop, setDivTop] = useState(0);

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	const divMoove = (min, max) => {


		setDivLeft(getRandomArbitrary(min, max));
		setDivTop(getRandomArbitrary(min, max));
	}




	return (<div onMouseEnter={() => divMoove(0, 1000)}
		style={{ height: "100px", width: divW + "px", position: divP, left: divLeft + "px", top: divTop + "px", backgroundColor: "blue" }}>


	</div >)
}

export default CrazyDiv;


//Bartek GRA
// import React, {useEffect, useState} from "react";
// const CrazyDiv = () => {
//   const [counter, setCounter] = useState(0);
//   const [timer, setTimer] = useState(10);
//   const [left, setLeft] = useState(0);
//   const [top, setTop] = useState(0);


//   useEffect(()=> {
//     const myTimer = setInterval(() => {
//       setTimer(prevState => prevState - 1);
//     }, 1000)

//     return () => {
//       clearInterval(myTimer);
//     }
//   }, [])

//   const handleHover = (min, max) => {
//     const randomNumber = Math.floor(Math.random() * max) + min;

//     if(timer > 0) {
//       setCounter(prevState => prevState +1)
//       setLeft(randomNumber);
//       setTop(randomNumber);
//     }
//   }

//   return <>
//     <h1>
//       Liczba trafień: {counter}
//     </h1>
//     <h2>Pozostały czas: {timer} </h2>
//     <div onClick={() => handleHover(300, 600)}
//       style={{
//         backgroundColor: 'red',
//         width: '100px',
//         height: '100px',
//         position: 'absolute',
//         left: left,
//         top: top,
//     }}>
//       left: {left}, <br/>
//       top: {top}

//     </div>
//   </>
// }
// export default CrazyDiv