import React from "react"
import Slide from "react-awesome-reveal"

const TimeUntil = () => {

	const [time, setTime] = React.useState({
		days: "0",
		hours: "0",
		minutes: "0",
		second: "0"
	})

	const renderItem = (time, value) => (
		<div className="countdown_item">
			<div className="countdown_time">
				{time}
			</div>
			<div className="countdown_tags">
				{value}
			</div>
		</div>
	)

	const getTimeUntil = React.useCallback((deadline) => {
		const time = Date.parse(deadline) - Date.parse(new Date())

		if (time < 0) {
			console.log("Date passed")
		} else {
			const second = Math.floor((time/1000)%60)
			const minutes = Math.floor((time/1000/60)%60)
			const hours = Math.floor((time/(1000*60*60))%24)
			const days = Math.floor((time/(1000*60*60*24)))
			
			setTime({
				days,
				hours,
				minutes,
				second
			})

		}

	}, [])

	React.useEffect(() => {
		setInterval(() => getTimeUntil("Dec, 20, 2021, 01:20:00"), 1000)
	}, [getTimeUntil])

	return (
		<Slide left delay={1000} triggerOnce>
			<div className="countdown_wrapper">
				<div className="countdown_top">
					Event starts in
				</div>
				<div className="countdown_bottom">
			
					{renderItem(time.days, 'Days')}
					{renderItem(time.hours, 'HS')}
					{renderItem(time.minutes, 'Min')}	
					{renderItem(time.second, 'Sec')}	

				</div>
			</div>
		</Slide>
	)

}

export default TimeUntil
