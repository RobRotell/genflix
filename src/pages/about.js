import * as React from 'react'

import Billboard from '../components/Billboard'
import FixedContainer from '../components/FixedContainer'
import SEO from '../components/SEO'

import styled from '@emotion/styled'



const AboutWrapper = styled.div`
	line-height: 1.3;
	font-weight: var( --fontWeightSemiBold );
	font-size: 20px;
	color: var( --colorWhite );
`

const PlainLink = styled.a`
	color: var( --colorRed );
	text-decoration: none;
	transition: var( --transitionSpeed ) color linear;

	&:hover {
		color: var( --colorWhite );
	}
`

const PlainHeading = styled.h2`
	font-size: 24px;
`



const AboutPage = () => {

	return (
		<>
			<Billboard
				title="About"
			/>
			<FixedContainer>
				<AboutWrapper>
					<PlainHeading>Hi there!</PlainHeading>
					<p>You might be wondering what this nonsense is all about (I ask myself that often). Back in
						2023, to practice learning AlpineJS and OpenAI's DALL-E API, I built a site that curated
						AI-generated movie posters, titles, and taglines: <PlainLink href="https://moovi.robr.app"
						target="_blank">moovi.robr.app</PlainLink>. The results were bewilderingly humorous and
						dreadfully frightening</p>
					<p>Flash forward to today: I wanted to play around with GatsbyJS and I wanted the world to more
						fully enjoy the monstrous creations from my Moovi project. This site is the fruit of those two
						ideas &mdash; may these movies fuel your curiosity and your nightmares.</p>
					<p>&mdash; Rob!</p>
				</AboutWrapper>
			</FixedContainer>
		</>
	)
}


export const Head = () => (
	<SEO
		title="About | Synflix"
		description="The whys and wherefores for this site."
	/>
)


export default AboutPage
