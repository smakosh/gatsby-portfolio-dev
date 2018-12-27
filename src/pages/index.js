import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects } from 'Components/landing'

const IndexPage = () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects />
		<Skills />
		<Contact />
	</Layout>
)

export default IndexPage
