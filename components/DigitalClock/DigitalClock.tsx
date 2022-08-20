import { useContext } from "react";
import ContextAlarm, { AlarmContext } from "../context/ContextAlarm";

function DigitalClock() {
	const { hourDigital, minutesDigital, currentDay, currentMonth, currentYear } =
		useContext(AlarmContext);
	return(
		<div>
			<div className="clock__text">
				<div className="clock__text-hour">{`${hourDigital}:`}</div>
				<div className="clock__text-minutes">{minutesDigital}</div>
			</div>

			<div className="clock__date">
        		<span>{`${currentDay} `}</span>
        		<span>{`${currentMonth} , `}</span>
        		<span>{currentYear}</span>
      		</div>
		</div>
	);
}



export default DigitalClock;