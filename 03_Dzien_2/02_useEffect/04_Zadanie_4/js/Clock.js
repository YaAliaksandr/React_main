import React, { useEffect, useState } from "react";
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";


const Clock = () => {
	const [data, setData] = useState(new Date())




	useEffect(() => {

		const timer = setInterval(() => {
			setData(new Date());
		}, 1000);
		return () => {
			clearInterval(timer);
		}

	}, []);


	return (<>
		<ClockTime date={data} />
		<ClockDate date={data} />
	</>)
}
export default Clock;