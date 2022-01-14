import { ErrorMessage, useField } from "formik";

interface Props {
    name: string;
    label: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [key: string]: any;
}

export const MyTextInput = ({label, ...props}: Props) => {

    const [ field ] = useField(props);
    // const [ field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name }>{label}</label>        
            <input className="text-input" {...field} {...props}/>
            <ErrorMessage name={props.name} component='span'/>
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )

            } */}
            </>
    )
}
