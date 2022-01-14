import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialState = {
	name: '',
	email: '',
	password1: '',
	password2: '',
};

export const RegisterPage = () => {
	const { formData, name, email, password1, password2, isValidEmail, onChange, resetForm} =
		useForm(initialState);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			name === '' ||
			email === '' ||
			password1 === '' ||
			password2 === ''
		) {
			return;
		}

		console.log('Submitting form', formData);
	};

	return (
		<div>
			<h1>Register Page</h1>

			<form onSubmit={onSubmit} noValidate>
				<input
					type='text'
					name='name'
					placeholder='Name'
					value={name}
					onChange={onChange}
					className={`${name.trim().length <= 0 && 'has-error'}`}
				/>
				{ name.trim().length <= 0 && <span>Name field is required</span> }
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={email}
					onChange={onChange}
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>
					{ !isValidEmail(email) && <span>Name field is required</span> }
				<input
					type='password'
					name='password1'
					placeholder='Password'
					value={password1}
					onChange={onChange}
				/>
				{ password1.trim().length <= 0 && <span>Name field is required</span> }
				{ password1.trim().length <= 6 && password1.trim().length > 0  && <span>Password must be more than 6 character</span> }
				<input
					type='password'
					name='password2'
					placeholder='Repeat Password'
					value={password2}
					onChange={onChange}
				/>
				{ password2.trim().length <= 0 && <span>Name field is required</span> }
				{ password2.trim().length > 0 && password1 !== password2  && <span>Passwords must match</span> }

				<button type='submit'>Create</button>

				<button type='button' onClick={ resetForm }>Reset From</button>
			</form>
		</div>
	);
};
