import React from "react";
import { Layout, Seo } from "components/common";
import { Intro, Skills, Contact, Projects } from "components/landing";

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
		<Projects />
		<Skills />
		<Contact />
	</Layout>
);

export default Home;
