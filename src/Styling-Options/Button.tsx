import { FC } from 'react';

import './button.css';	// 1) external stylesheets

function Button():FC<{}> {
	return (
		<button className="button">Click me</button>
	);
}

export default Button;


/*
 * 1) External stylesheets:
 * 		, thus can cause naming conflicts.
 *
 */
