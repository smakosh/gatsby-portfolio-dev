import React from 'react'
import { Footer } from 'Theme'
import { Global } from './styles'

export const Layout = ({ children }) => (
	<>
		<Global />
		{children}
		<Footer />
	</>
)
