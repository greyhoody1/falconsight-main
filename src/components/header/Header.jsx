import Typewriter from 'typewriter-effect';
import { MainHeader, TextContainer, LinksContainer } from './header.styles';

import {
	//GithubLink,
	EmailLink,
	//LinkedInLink
} from '../icons/icon-container.styles';

const Header = () => {
	return (
		<MainHeader>
			<TextContainer>
				
				<h2>Falconsight Aerial Solutions</h2>

				<h3>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('Your #1 reliable drone service provider').start();
						}}
						options={{
							autoStart: true,
							cursor: '',
							pauseFor: 0
						}}
					/>
				</h3>

				<p>
				At <strong>FALCONSIGHT</strong>, we combine our expertise, cutting-edge methodologies, 
				and advanced technologies to deliver the highest quality inspection services 
				available. Our goal is to continuously exceed client expectations by consistently 
				delivering exceptional results and providing comprehensive insights and reports
				that enable informed decision-making.
				</p>

				<p>
				Trust in us as your preferred aerial photography, videography, survey and
				inspection partner, and we will consistently surpass your expectations, offering 
				unmatched professionalism and a dedication to excellence in every aspect of 
				our service delivery.
				</p>

			</TextContainer>
			<LinksContainer>
				<EmailLink />
			</LinksContainer>
		</MainHeader>
	);
};

export default Header;
