import React from 'react'

function Location() {
	return (
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5922.080734483003!2d-0.1981069348135913!3d51.49153842465181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f8b6465814d%3A0xb8cc4edf517cf836!2sEarl&#39;s+Court!5e0!3m2!1sen!2suk!4v1541323644880" 
				width="100%" 
				height="500px" 
				frameBorder="0"
				title="location" 
				allowFullScreen
        	/>
			<div className="location_tag">
				<div>Location</div> 
			</div>
		</div>
	)
}

export default Location
