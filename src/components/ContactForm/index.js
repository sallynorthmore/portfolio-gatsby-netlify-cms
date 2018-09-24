import React from 'react';
// import { Link } from 'gatsby';
// import logo from '../img/logo.svg'
import { ContactFormComponent, Form } from './styles';

const ContactForm = () => (
	<ContactFormComponent>
		<form name="contact" method="POST" netlify>
			<p>
				<label>
					Your Name: <input type="text" name="name" />
				</label>
			</p>
			<p>
				<label>
					Your Email: <input type="email" name="email" />
				</label>
			</p>
			<p>
				<label>
					Your Role:{' '}
					<select name="role[]" multiple>
						<option value="leader">Leader</option>
						<option value="follower">Follower</option>
					</select>
				</label>
			</p>
			<p>
				<label>
					Message: <textarea name="message" />
				</label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
	</ContactFormComponent>
);

// <Link to="/about" className="Title">
// 	About
// </Link>

export default ContactForm;
