import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MyTextInput, MySelect } from '../components';
import '../styles/styles.css';

const initalValues = {
	firstName: '',
	lastName: '',
	email: '',
	terms: false,
	jobType: '',
};

const yupSchema = Yup.object({
	firstName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.min(2, 'Must be 1 characters or more')
		.required('Required'),
	lastName: Yup.string()
		.max(10, 'Must be 10 characters or less')
		.min(2, 'Must be 1 characters or more')
		.required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
	terms: Yup.boolean().oneOf(
		[true],
		'You must accept the terms and conditions'
	),
	jobType: Yup.string().required('Please select a job type'),
});

export const FormikAbstract = () => {
	return (
		<div>
			<h1>Formik Abstract</h1>

			<Formik
				initialValues={initalValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={yupSchema}
			>
				{(formik) => (
					<Form>
						<MyTextInput
							name='firstName'
							label='First Name'
							placeholder='Benito'
						/>

						<MyTextInput
							name='lastName'
							label='Last Name'
							placeholder='Rodriguez'
						/>

						<MyTextInput
							name='email'
							label='Email Address'
							placeholder='benito@outlook.com'
							type='email'
						/>

						<MySelect name='jobType' label='Job Type'>
							<option value=''>Pick Something</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='designer'>IT Senior</option>
							<option value='developer'>Salesforce</option>
						</MySelect>

						<MyCheckbox name='terms' label='Terms and conditions'/>

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
