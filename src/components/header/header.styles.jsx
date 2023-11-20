import styled from 'styled-components';
import { colors, margins } from '../../utils/_variables';

export const MainHeader = styled.header``;

export const TextContainer = styled.div`
	margin-bottom: ${margins.marginMedium};

	h1 {
		font-family: 'Space Mono', monospace;
		color: ${colors.primary};
		font-weight: 400;
		font-size: 1.5rem;
		text-align: left;
		margin-bottom: 1.2rem;

		
	}

	h2 {
		font-size: 4rem;
		color: ${colors.light};
		margin-bottom: 0.4rem;
		text-align: center;
		line-height: 1.1;
		font-weight: 700;
		border: 0.5625rem solid ;
		border-radius: 12.25rem ;
		padding: 0.25rem 0.75rem;
	}

	h3 {
		font-size: 1rem;
		text-align: center;
		color: #ffffff;
		line-height: 0.9;
		margin-bottom: 1.5rem;
	}

	p {
		color: ${colors.lighter};
		width: 100%;
		line-height: 1.3;
		text-align: justify;

		span {
			color: ${colors.primary};
		}
	}
	
	@media screen and (min-width: 1024px) and (max-width: 3000px) {
    /* Laptop screen size styles here */
    h2 {
      font-size: 3.5rem;
	  padding-right: 10%;
	  padding-left: 30%;
	  border: 0.5625rem solid ;
		border-radius: 12.25rem ;
		padding: 0.25rem 0.75rem;
	}
    
    h3 {
      font-size: 1.6rem;
	  
    }
    p {
      width: 85%;
	  padding-right: 10%;
	  padding-left: 25%;

	  text-align: left;
	}
    }
  
	@media screen and (max-width: 52em) {
		h2 {
			font-size: 3.8rem;
		}
		h3 {
			font-size: 1.4rem;
		}
		p {
			width: 80%;
		}
	}
	@media screen and (max-width: 48em) {
		h2 {
			font-size: 2.8rem;
		}
		h3 {
			font-size: 1.3rem;
		}
		p {
			width: 89%;
		}
	}
	@media screen and (max-width: 34em) {
		h2 {
			font-size: 2.8rem;
		}
		h3 {
			font-size: 1.8rem;
		}
		p {
			width: 100%;
		}
	}
	@media screen and (max-width: 26em) {
		h2 {
			font-size: 1.5rem;
			border: 0.2925rem solid ;
			
		}
		h3 {
			font-size: 0.8rem;
		}
		p {
			font-size: 0.9rem;
			text-align:left;
		}
	}
	@media only screen and (max-width: 18em) {
		h1 {
			font-size: 0.9rem;
		}
		h2 {
			font-size: 1.8rem;
		}
		h3 {
			font-size: 1.2rem;
		}
		p {
			font-size: 0.7rem;
		}
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
	}

	span {
		margin-left: 0.5rem;
		font-weight: 500;

		@media only screen and (max-width: 18em) {
			font-size: 0.6rem;
		}
	}

	@media screen and (max-width: 23em) {
		gap: 0;
		justify-content: space-between;
	}
`;
