import React from 'react'
import { Footer } from 'Theme'
import { Global } from './styles'
import './layout.css'

export const Layout = ({ children }) => (
	<>
		<Global />
		{children}
		<Footer />
	</>
)
