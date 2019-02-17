import React from 'react'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'
import classes from './Contact.scss'
const contact = ({ values, errors, touched, isSubmitting }) => {
	

	let mix = isSubmitting ? classes.BtnDisabled : classes.BtnEnabled;


	return (
		<div className={classes.Contact} id="contact">
			<Form>
				<div>
					{ touched.email && errors.email ? <p className={classes.ErrorParagraph}>errors.email</p> : null }
				<Field type="text" name="email" placeholder="Email"  />
				</div>
				<Field type="message" name="message" placeholder="Enter a message"  />
				<button className={mix}  disabled={isSubmitting}   type="submit">Submit</button>
			</Form>
		</div>
	)
}

export default withFormik({
	mapPropsToValues({ email, message }){
		return{
			email: email || '',
			message: message || ''
		}
	},
	validationSchema: Yup.object().shape({
		email: Yup.string().email('Please pass a dobry email').required(),
		message: Yup.string().required()
	}),
	handleSubmit(values,  { errors, resetForm, setErrors, setSubmitting }){
		setTimeout(()=>{
			if(!errors){
				console.log(values)
				resetForm();
			}
		},1000)
	}
})(contact);