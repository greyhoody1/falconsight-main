import styled from 'styled-components';
import { colors } from '../../utils/_variables';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { ReactComponent as StyledComponents } from '../../assets/styled-components.svg';


import {
	FaGithub,
	FaLinkedin,
	
} from 'react-icons/fa';

import { FiMail} from 'react-icons/fi';


export const LogoIcon = styled(Logo)`
	cursor: pointer;
`;

export const GithubIcon = styled(FaGithub)`
	color: ${colors.primary};
	font-size: 1rem;

	@media only screen and (max-width: 18em) {
		font-size: 0.8rem;
	}
`;

export const LinkedInIcon = styled(FaLinkedin)`
	color: ${colors.primary};
	font-size: 1rem;

	@media only screen and (max-width: 18em) {
		font-size: 0.8rem;
	}
`;

export const EmailIcon = styled(FiMail)`
	color: ${colors.primary};
	font-size: 1rem;

	@media only screen and (max-width: 18em) {
		font-size: 0.8rem;
	}
`;


export const StyledComponentsIcon = styled(StyledComponents)``;
