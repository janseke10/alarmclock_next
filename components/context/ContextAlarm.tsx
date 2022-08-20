import { createContext, ReactNode, useEffect, useState, Dispatch, SetStateAction } from "react";
import months from "./data";

type AlarmContextType = {
	hourDigital: string | null
	minutesDigital: string | null
	currentDay: number | null
	currentMonth: string | null
	currentYear: number | null
	setHourDigital: Dispatch<SetStateAction<string | null>>
	setMinutesDigital: Dispatch<SetStateAction<string | null>>
	setCurrentDay: Dispatch<SetStateAction<number | null>>
	setCurrentMonth: Dispatch<SetStateAction<string | null>>
	setCurrentYear: Dispatch<SetStateAction<number | null>>
}

// type AlarmContextType = {
// 	clock: Clock | null
// 	setClock: Dispatch<SetStateAction<Clock | null>>
	
// }

type ContextAlarmProps = {
	children: ReactNode
}

export const AlarmContext = createContext({} as AlarmContextType);

export const ContextAlarm = ({ children }: ContextAlarmProps) => {
	const[hourDigital, setHourDigital] = useState<string | null>(null);
	const[minutesDigital, setMinutesDigital] = useState<string | null>(null);
	const[currentDay, setCurrentDay] = useState<number | null>(null);
	const[currentMonth, setCurrentMonth] = useState<string | null>(null);
	const[currentYear, setCurrentYear] = useState<number | null>(null);

	useEffect(() => {
		setInterval(() => {
			let date = new Date(); 

			let HH = date.getHours(),
			MM = date.getMinutes(),
			day = date.getDate(),
			month = date.getMonth(),
			year = date.getFullYear();

			let hh = "", mm = "";

			hh = HH.toString();
			mm = MM.toString();
			
			if (HH < 10) {
				hh = `0${HH}`;
			};
      		if (MM < 10) {
				mm = `0${MM}`;
			};

			setHourDigital(hh);
			setMinutesDigital(mm);
			setCurrentDay(day);
			setCurrentMonth(months[month]);
		    setCurrentYear(year);

		}, 1000);
	}, [])

	return(
		<AlarmContext.Provider
		value={{
			hourDigital, minutesDigital, currentDay, currentMonth, currentYear, setHourDigital, setMinutesDigital, setCurrentDay, setCurrentMonth, setCurrentYear
		}}>
			{children}
		</AlarmContext.Provider>
	);
}

export default ContextAlarm;