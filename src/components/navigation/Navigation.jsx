import { useContext } from 'react';
import { NavMenuContext } from '../../context/NavMenuContext';

import { LogoIcon } from '../icons/icons.styles';
import { Button, ButtonTypeClasses } from '../button/Button';

import {
	NavHeader,
	LogoContainer,
	NavBar,
	NavMenu,
	NavItem,
	NavLink,
	Hamburger,
	HamburgerBar
} from './navigation.styles';

const Navigation = () => {
	const { isNavOpen, toggleNavMenu, visible } = useContext(NavMenuContext);

	return (
		<NavHeader visible={visible}>
			<NavBar>
				<LogoContainer href=''>
					<LogoIcon/>
				</LogoContainer>
				<NavMenu isNavOpen={isNavOpen}>
					<NavItem onClick={toggleNavMenu}>
						<NavLink href='/#section-about'>About</NavLink>
					</NavItem>
					<NavItem onClick={toggleNavMenu}>
						<NavLink href='/#section-portfolio'>Gallery</NavLink>
					</NavItem>
					<NavItem onClick={toggleNavMenu}>
						<NavLink href='/#section-contact'>Contact</NavLink>
					</NavItem>

					<Button
						buttonType={ButtonTypeClasses.base}
						href={`${process.env.PUBLIC_URL}/Falconsight Aerial.pdf`}
						target='_blank'
						rel='noopener noreferrer'
						download
					>
						Download PDF
					</Button>
				</NavMenu>

				<Hamburger isNavOpen={isNavOpen} onClick={toggleNavMenu}>
					<HamburgerBar />
				</Hamburger>
			</NavBar>
		</NavHeader>
	);
};

export default Navigation;
