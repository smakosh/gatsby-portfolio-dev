import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { Wrapper, Overlay } from './styles'

const HeaderWrapper = ({ sidebar, toggle }) => (
	<Wrapper>
		<Overlay sidebar={sidebar} onClick={toggle} />
		<Navbar />
		<Hamburger sidebar={sidebar} toggle={toggle} />
		<Sidebar sidebar={sidebar} toggle={toggle} />
	</Wrapper>
)

const enhance = compose(
	withStateHandlers(() => ({ sidebar: false, isHomePage: false }), {
		toggle: ({ sidebar }) => () => ({ sidebar: !sidebar }),
		setHomePage: ({ isHomePage }) => () => ({ isHomePage: !isHomePage }),
	})
)

export const Header = enhance(HeaderWrapper)
