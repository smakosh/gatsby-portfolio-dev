import React from 'react'
import { Container, Card } from 'Common'
import JSONData from "../../../../content/Projects.json"
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Projects = () => (
	<Wrapper as={Container} id="projects">
		<h2>Projects</h2>
		<Grid>
			{JSONData.projects.map((node, index) => {
				return (
					<Item
						key={index}
						as="a"
						href={node.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card>
							<Content>
								<h4>{node.name}</h4>
								<p>{node.description}</p>
							</Content>
							<Stats>
								<div>
									<span>{node.platform}</span>
								</div>
								<div>
									<span>By {node.author}</span>
								</div>
							</Stats>
						</Card>
					</Item>
				)
			})}
		</Grid>
	</Wrapper>
)
