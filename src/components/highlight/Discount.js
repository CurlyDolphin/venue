import React from "react"
import { Fade, Slide } from "react-awesome-reveal"
import MyButton from "../utils/MyButton"

const Discount = () => {

	const end = 30

	const [start, setStart] = React.useState(0)

	const porcentage = () => {
		if (start < end) {
			setStart(prevCount => prevCount+1)
		}
	}

	React.useEffect(() => {
		if (start > 0 && start < 30) {
			setTimeout(() => {
				setStart(prevCount => prevCount+1)
			}, 30)
		}
	}, [start])

	return (
		<div className="center_wrapper">
			<div className="discount_wrapper">

				<Fade triggerOnce
					onVisibilityChange={ (inView) => {
						if (inView) {
							porcentage()
						}
					}}
				>
					<div className="discount_porcentage">
						<span>{start}%</span>
						<span>OFF</span>
					</div>
				</Fade>

				<Slide right triggerOnce>
					<div className="discount_description">
						<h3>Purchase ticket before 20th June</h3>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta suscipit ipsum, sed sodales mauris ornare at. Donec volutpat facilisis ante eget suscipit.
						</p>

						<MyButton 
							text="Purchase tickets"
							link="http://google.com"
							style={{
								background: "#ffa800",
								color: "#fff"
							}}
						/>

					</div>
				</Slide>

			</div>
		</div>
	)
}

export default Discount
