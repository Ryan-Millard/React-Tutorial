/*
 * This file showcases the 3 main ways that React components can be styled without
 * using CSS preprocessors or frameworks.
 */


import { FC, CSSProperties } from 'react';

import './button.css';	// 1) external stylesheets
import { btn } from './button.module.css';	// 2) modules

function Button():FC<{}> {
	const styles:CSSProperties = {	// 3) Inline Styling
		backgroundColor: "hsl(200, 100%, 50%)",
		color: 'white',
		padding: '10px 20px',
		borderRadius: '5px',
		border: 'none',
		cursor: 'pointer',
		margin: '10px',
		display: 'block'
	}

	return (
	<>
		<button className="btn">1<br />External Stylesheet<br />Click me</button>
		<button className={ btn }>2<br />Module<br />Inspect me in your browser, I have a weird CSS class.</button>
		<button style={ styles }>3<br />Inline Styling<br />Click me</button>
	</>
	);
}

export default Button;


/*
 * 1) External stylesheets:
 * 		Easy to work with and can be conditionally applied.
 * 		Applies global styles throughout app, thus may cause naming conflicts.
 *
 * 2) Modules:
 * 		Avoids naming conflicts by generating unique hashes via a hashing algorithm.
 *
 * 3) Inline Styling:			NB: Utilizes JSON syntax, not CSS syntax.
 * 									Uses "style" instead of "className".
 * 		Convenient.
 * 		Reduces readability of code by cluttering it.
 *
 */
