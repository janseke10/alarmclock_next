import { useEffect, useState } from "react";

function AnalogClock(){
	const [hour, setHour] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const clock = () => {
		let date = new Date();

		let hh = date.getHours() * 30,
		mm = date.getMinutes() * 6,
		ss = date.getSeconds() * 6;
	}



	return <h1>hello Page</h1>
}

export default AnalogClock;