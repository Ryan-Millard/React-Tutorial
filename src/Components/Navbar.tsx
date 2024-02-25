import { NavLink } from 'react-router-dom';
import { FC } from 'react';

import './navbar.css';

const CustomNavLink = ({ children, ...props }) => (
	<NavLink {...props} className="nav-link">
		{children /*renders components inside CustomNavLink, i.e. buttons, text*/}
	</NavLink>
);

const Navbar: FC = () => {
	return (
		<div>
			<div className="navbar">
				<nav>
					<CustomNavLink to="/">Home</CustomNavLink>

					<CustomNavLink to="/use-state">useState</CustomNavLink>
					<CustomNavLink to="/use-effect">useEffect</CustomNavLink>
					<CustomNavLink to="/use-memo">useMemo</CustomNavLink>

					<CustomNavLink to="/card-component">Card</CustomNavLink>

					<CustomNavLink to="/styling-options">Styling Options</CustomNavLink>

					<CustomNavLink to="/props">Props</CustomNavLink>

					<CustomNavLink to="/conditional-rendering">Conditional Rendering</CustomNavLink>

					<CustomNavLink to="/list">List Rendering</CustomNavLink>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
