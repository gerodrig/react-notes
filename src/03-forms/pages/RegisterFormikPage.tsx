
import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

const initialState = {
	name: '',
	email: '',
	password1: '',
	password2: '',
};

const validate = Yup.object({
	name: Yup.string().max(15, 'Must be 15 characters or less').min(2, 'Must be at least 2 characters').required('First name is required'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	password1: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
	password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords must match').required('Confirm password is required'),
})

export const RegisterFormikPage = () => {

	

	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik initialValues={initialState}
					onSubmit={ (values) => {console.log(values)}}
					validationSchema={validate}>
				{({handleReset}) => (
						<Form>
							<MyTextInput name='name' label='Name' placeholder='Benito'/>
							<MyTextInput name='email' label='Email' placeholder='Benito@outlook.com'/>
							<MyTextInput name='password1' label='Password' />
							<MyTextInput name='password2' label='Confirm Password'/>

							<button type='submit'>Create</button>
		
							<button type='button' onClick={ handleReset }>Reset From</button>
						</Form>
				)}


			</Formik>

		</div>
	);
};
