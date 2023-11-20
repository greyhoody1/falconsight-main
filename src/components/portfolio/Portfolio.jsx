import { SectionHeading } from '../main/main.styles';

import {
	PortfolioSection,
	PortoflioText,
	PortfolioContainer,
	ProjectContainer,
	ProjectImageContainer,
	ProjectDetailsContainer,

	
} from './portfolio.styles';



import night from '../../assets/night.jpg';
import nice from '../../assets/nice.jpg';
import sky from '../../assets/sky.png';
import house from '../../assets/house.jpg';
import pool from '../../assets/pool.png';
import shops from '../../assets/shops.jpg';
import project from '../../assets/project.jpg';
import project2 from '../../assets/project2.jpg';
import sky2 from '../../assets/sky2.jpg';

const Portfolio = () => {
	return (
		<PortfolioSection id='section-portfolio'>
			<SectionHeading>
				<h4>Gallery</h4>
			</SectionHeading>
			<PortoflioText>
				<p>Outcome of some work we have done</p>
			</PortoflioText>
			<PortfolioContainer>
				<ProjectContainer
					data-aos='fade-right'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
					<ProjectImageContainer>
						<img src={night} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						
					</ProjectDetailsContainer>
				</ProjectContainer>
				<ProjectContainer
					data-aos='fade-left'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
					<ProjectImageContainer>
						<img src={nice} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						
					</ProjectDetailsContainer>
				</ProjectContainer>
				<ProjectContainer
					data-aos='fade-right'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
					>
					<ProjectImageContainer>
						<img src={pool} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						
						
					</ProjectDetailsContainer>
				</ProjectContainer>

				
				<ProjectContainer
					data-aos='fade-left'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
					<ProjectImageContainer>
						<img src={project} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						
					</ProjectDetailsContainer>
				</ProjectContainer>

				
				<ProjectContainer
					data-aos='fade-right'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
					<ProjectImageContainer>
						<img src={project2} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						
					</ProjectDetailsContainer>
				</ProjectContainer>

				
				<ProjectContainer
					data-aos='fade-left'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
					<ProjectImageContainer>
						<img src={sky} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						
					</ProjectDetailsContainer>
				</ProjectContainer>

				
				<ProjectContainer
					data-aos='fade-right'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
					<ProjectImageContainer>
						<img src={sky2} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						
					</ProjectDetailsContainer>
				</ProjectContainer>
				


				<ProjectContainer
					data-aos='fade-left'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
					<ProjectImageContainer>
						<img src={house} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						
					</ProjectDetailsContainer>
				</ProjectContainer>

				
				<ProjectContainer
					data-aos='fade-right'
					data-aos-delay='500'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
					<ProjectImageContainer>
						<img src={shops} alt='' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
					
					</ProjectDetailsContainer>
				</ProjectContainer>

			</PortfolioContainer>
		</PortfolioSection>
	);
};

export default Portfolio;
