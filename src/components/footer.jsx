import React from "react"
import Airtable from 'airtable'
import dotenv from 'dotenv'
import "./footer.css"

require('dotenv').config()

Airtable.configure({
	apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`
})

const base = Airtable.base(`${process.env.REACT_APP_AIRTABLE_BASE_KEY}`)

export default function Footer () {
	const [email, setEmail] = React.useState("")
	const [confirm, setConfirm] = React.useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		base('mailing-list').create({
			"email": email
		}, function (err, record) {
			if (err) {
				console.error(err);
				return;
			}
			console.log(record.getId());
		})

		setEmail("")
		setConfirm(true)
	}

	return (
		<footer className="footer" onSubmit={handleSubmit}>
			{confirm
				? <div className="confirmation-container">
					<h2>We'll be in touch as StitchKey news arrives!</h2>
				</div>
				: <form className="mailing-list">
					<h2>Want to know more? Check back here for updates or join our mailing list and be the first to know</h2>
					<input type="email" name="mailing-list" onChange={e => setEmail(e.target.value)} />
					<button type="submit" >Join the Waiting List</button>
				</form>
			}
		</footer>
	)
}

