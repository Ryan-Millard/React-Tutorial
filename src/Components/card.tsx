import { FC, CSSProperties } from 'react';

import './card.css'; // must be imported to be applied

// This returns an FC (functional component)
function Card():FC<{}> {
	return (
		<div className="card"> {/*"className" rather than "class" because "class" is a JavaScript keyword*/}
			<img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
				alt="React Logo" className="card-image"/>
			<h2 className="card-title">React Tutorial🐱‍👤🐱‍🏍</h2>
			<p className="card-text">This is a card component. These are very common in React, so it would be a good idea to
					familiarize yourself with them.</p>
		</div>
	);
}

export default Card;


// Although functional, this component is not reusable,
// thus "props" (short for properties) were created.
// See the ./props.tsx file for more informaition.
