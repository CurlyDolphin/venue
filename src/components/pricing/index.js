import React from "react"
import MyButton from "../utils/MyButton.js"
import { Zoom } from "react-awesome-reveal"

const Pricing = () => {

	const priceState = {
		prices: [100, 150, 200],
		position: ['Balcony', 'Medium', 'Star'],
		desc: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia nunc sed felis placerat gravida. Aenean id cursus tellus, vitae maximus lectus",
			"Morbi a diam commodo, accumsan mauris nec, iaculis mauris. Integer at arcu elit. Phasellus gravida imperdiet lorem ut faucibus.",
			"Suspendisse nisi diam, scelerisque a posuere a, auctor quis mi. Donec pellentesque pulvinar porttitor. Phasellus ac ante in tellus dapibus mollis vehicula in ipsum. "
		],
		linksTo: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
		delay: [500, 0, 500]
	}

	const showBoxes = () => (
		priceState.prices.map((box, index) => (
			<Zoom key={`${box}_${index}`} className="pricing_item" delay={priceState.delay[index]}>
				<div className="pricing_inner_wrapper">
					<div className="pricing_title">
						<span>${priceState.prices[index]}</span>
						<span>${priceState.position[index]}</span>
					</div>
					<div className="pricing_description">
						{priceState.desc[index]}
					</div>
					<div className="pricing_button">
						<MyButton 
							text="Purchase tickets"
							link={priceState.linksTo[index]}
							style={{ 
								color: "#fff"
							}}
						/>
					</div>
				</div>
			</Zoom>
		))
	)

	return (
		<div className="bck_black">
			<div className="center_wrapper pricing_section">
				<h2>Pricing</h2>

				<div className="pricing_wrapper">
					{showBoxes()}
				</div>

			</div>
		</div>
	)
}

export default Pricing