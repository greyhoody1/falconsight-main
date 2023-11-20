//import { SectionHeading } from '../main/main.styles';
import { ContactSection, ContactText } from './contact.styles';
import { Button, ButtonTypeClasses } from '../button/Button';

const Contact = () => {
	return (
		<ContactSection id='section-contact'>
			<ContactText>
				<h3>Reach Out </h3>
				<p>
					Phone : <span>0558210838</span>
				</p>
				<p>
					Email : <span>www.falconsightaerial@gmail.com</span>
				</p>
				<p>Locate us:<span> Community 8 y/27, Tema, Greater Accra </span> </p>
				<p>Feel free to get in touch </p>
				
			</ContactText>
			<Button
				buttonType={ButtonTypeClasses.base}
				href='mailto:falconsightaerial@gmail.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				Send an Email
			</Button>
		</ContactSection>
	);
};

export default Contact;
