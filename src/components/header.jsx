import React from "react"
import logo from '../images/stitchkeylogo1.svg'
import "./header.css"

export default function Header () {
	return (
		<header className="header">
			<img
				alt="stitchkey logo"
				className="logo"
				src={logo}
			/>
			<div className="header-container"/>
		</header>
	)
}