import React from "react";
import { Layout, Seo } from "components/common";

const NotFound = () => (
	<Layout>
		<Seo title="404: Not found" location="/404" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
);

export default NotFound;
