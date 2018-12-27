exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				Components: `${__dirname}/src/components`,
				Common: `${__dirname}/src/components/common`,
				Static: `${__dirname}/static/`,
				Theme: `${__dirname}/src/components/theme`,
				Data: `${__dirname}/data/config`,
			},
		},
	})
}
