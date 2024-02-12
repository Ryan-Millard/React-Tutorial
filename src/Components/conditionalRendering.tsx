import { FC } from 'react';

import './conditionalRendering.css';

interface UserProps {
	isLoggedIn: boolean;
	username: string;
}

function ConditionalRenderingExample(props:UserProps):FC<{}> {
	const welcomeMessage:FC = <h2 className="welcome-message">Welcome { props.username }</h2>;
	const loginPrompt:FC = <h2 className="login-prompt">Please log in to continue.</h2>;

	return ( props.isLoggedIn ?  welcomeMessage : loginPrompt);
}

ConditionalRenderingExample.defaultProps = {
	isLoggedIn: false,
	username: "guest"
}

export default ConditionalRenderingExample;
