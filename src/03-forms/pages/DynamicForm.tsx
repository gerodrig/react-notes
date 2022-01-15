import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

    if (!input.validation) continue;

    let schema = Yup.string();

    for (const rule of input.validation) {
        if (rule.type === 'required') {
            schema = schema.required(rule.message);
        }

        if (rule.type === 'minLength') {
            schema = schema.min(( rule as any).value || 1, rule.message);
        }

        if (rule.type === 'maxLength') {
            schema = schema.max(( rule as any).value || 15, rule.message);
        }

        if(rule.type === 'email') {
            schema = schema.email(rule.message);
        }
        //..other rules
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Forms</h1>

			<Formik
				initialValues={initialValues}
                validationSchema={ validationSchema }
				onSubmit={(values) => {
					console.log(values);
				}
            }
			>
				{(formik) => (
					<Form noValidate>
						{formJson.map(
							// eslint-disable-next-line array-callback-return
							({ type, name, placeholder, label, options }) => {
								if (
									type === 'input' ||
									type === 'password' ||
									type === 'email'
								) {
									return (
										<MyTextInput
											key={name}
											type={type as any}
											name={name}
											label={label}
											placeholder={placeholder}
										/>
									);
								} else if (type === 'select') {
									return (
										<MySelect
											key={name}
											label={label}
											name={name}
										>
											<option value=''>
												Select an option
											</option>
											{options?.map(({id, label}) => (
												<option
													key={id}
													value={id}
												>
													{label}
												</option>
											))}
										</MySelect>
									);
								}
							}
						)}
						<button type='submit'>Submit</button>
						<button onClick={formik.handleReset}>Reset</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
