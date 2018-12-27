import React from 'react'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper>
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
			<Details>
				<h1>Hi There!</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry’s standard dummy.
				</p>
				<Button as="a" href="#">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
