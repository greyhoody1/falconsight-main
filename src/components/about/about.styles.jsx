import styled from 'styled-components';
import { colors, margins } from '../../utils/_variables';

export const AboutSection = styled.section`
	margin: ${margins.marginLarge} 0;
	p {
		span {
			color: ${colors.primary};
		}
		&:nth-of-type(1) {
			margin-bottom: 0.5rem;
		}
	}
`;

export const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	gap: 3rem;

	@media screen and (max-width: 64em) {
		display: block;
		p{
			 padding-top: 15%;
			 text-align: center;
			 

	}
`;

export const AboutText = styled.div`

	p {
		font-size: 0.9rem;
		text-align: left;
		color: ${colors.lighter};
		line-height: 1.6;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		span {
			color: ${colors.primary};
		}
	}

	@media screen and (max-width: 64em) {
		p {
      //width: 85%;
	  padding-top: 5%;
	}
	strong{
		padding-top: 10%;
	}


	}
	@media screen and (min-width: 1024px) and (max-width: 3000px) {
    /* Laptop screen size styles here */
    
    p {
      width: 85%;
	  
	  padding-left: 25%;

	  text-align: left;
	}
    }
`;

export const Wrapper = styled.div`
	@media screen and (max-width: 48em) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 3rem;
	}
`;

export const AboutImageContainer = styled.div`
	max-width: 18.75rem;
	height: 16rem;
	position: relative;
	z-index: 10;
	border: 1.5px solid ${colors.secondary};
	


	

	@media screen and (max-width: 26em) {
		max-width: 16rem;
		height: 15rem;
		
	}
	@media screen and (max-width: 24em) {
		max-width: 15rem;
		height: 14rem;
	}
	@media screen and (max-width: 18em) {
		max-width: 11rem;
		height: 10rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		border-radius: 0px;
		
	}

	&::after {
		content: '';
		position: absolute;
		top: 15px;
		z-index: -1;
		left: 15px;
		width: 100%;
		height: 100%;
		background-color: transparent;
		border: 2px solid ${colors.primary};
		border-radius: 50px;
		backface-visibility: hidden;
		transition: all 0.2s ease;
		
	}

	&:hover::after {
		top: 10px;
		left: 10px;
	}
`;
