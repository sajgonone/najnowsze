import React, { Component } from "react";

const phone = RegExp(
	/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/
	)
const emailRegex = RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
const formValid = ({formErrors, ...rest })  => {
	let valid = true;

	Object.values(formErrors).forEach(val => {
		val.length > 0 && (valid = false);
	});

	Object.values(rest).forEach(val => {
	val === null && (valid = false)
	});

	return valid;
};

class ContactPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			phone: null,
			message: null,
			formErrors: {
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				message: ""
			}
		}
	}

	handleSubmit = e => {
		e.preventDefault();

		if (formValid(this.state)) {
			console.log(`
			--SUBMITTING--
			First Name: ${this.state.firstName}
			Last Name: ${this.state.lastName}
			Email: ${this.state.email}
			Phone: ${this.state.phone}
			Message: ${this.state.message}
			`);
		} else {
			console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
		}
	};

	handleChange = e => {
		e.preventDefault();
		const { name, value } = e.target;
		let formErrors = this.state.formErrors;


		switch (name) {
			case 'firstName':
				formErrors.firstName =
					value.length < 3 ? "min 3 characters required": "";
				break;
			case 'lastName':
				formErrors.lastName =
					value.length < 3 ? "min 3 characters required": "";
				break;
			case 'email':
				formErrors.email =
					emailRegex.test(value) ? '': 'Invalid email address';
				break;
			case 'phone':
				formErrors.phone =
					phone.test(value) ? '': 'Invalid mobile number';
				break;
				case 'message':
				formErrors.message =
				value.length < 10 ? "You can say more than that :)": "";
				break;
			default:
				break;
		}
		this.setState({ formErrors, [name]: value }, () => console.log(this.state));
	};


	render() {
		const { formErrors } = this.state;
		
		return (
			<div id="contact" className="container-contact100">
				<div className="contact100-map"></div>

				<div className="wrap-contact100">
					<div className="contact100-form-title conta">
						<span className="contact100-form-title-1">
							Contact Me
				</span>

						<span className="contact100-form-title-2">
							Feel free to drop me a line below!
				</span>
					</div>

					<form onSubmit={this.handleSubmit} noValidate className="contact100-form validate-form">

						<div className="wrap-input100 validate-input" data-validate="Name is required">
							<span className="label-input100">First Name:</span>
							<input
								className="input100"
								type="text"
								name="firstName"
								placeholder="Enter first name"
								noValidate
								onChange={this.handleChange}
							/>
							{formErrors.firstName.length > 0 && (
								<span className="errorMessage">{formErrors.firstName}</span>
							)}
							<span className="focus-input100"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Name is required">
							<span className="label-input100">Last Name:</span>
							<input
								className="input100"
								type="text"
								name="lastName"
								placeholder="Enter last name"
								noValidate
								onChange={this.handleChange}
							/>
							{formErrors.lastName.length > 0 && (
								<span className="errorMessage">{formErrors.lastName}</span>
							)}
							<span className="focus-input100"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
							<span className="label-input100">Email:</span>
							<input
								className="input100"
								type="email"
								name="email"
								placeholder="Enter email addess"
								noValidate
								onChange={this.handleChange}
							/>
							{formErrors.email.length > 0 && (
								<span className="errorMessage">{formErrors.email}</span>
							)}
							<span className="focus-input100"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Phone is required">
							<span className="label-input100">Phone:</span>
							<input
								className="input100"
								type="phone"
								name="phone"
								placeholder="Enter phone number"
								noValidate
								onChange={this.handleChange} />
								{formErrors.phone.length > 0 && (
								<span className="errorMessage">{formErrors.phone}</span>
							)}
							<span className="focus-input100"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Message is required">
							<span className="label-input100">Message:</span>
							<textarea
								className="input100"
								name="message"
								placeholder="Your Comment..."
								noValidate
								onChange={this.handleChange}
							>
							</textarea>
							{formErrors.message.length > 0 && (
								<span className="errorMessage">{formErrors.message}</span>
							)}
							<span className="focus-input100"></span>
						</div>

						<div className="container-contact100-form-btn">
							<button className="contact100-form-btn">
								<span>
									Submit
							<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}


export default ContactPage;