import { ErrorMessage, useField } from "formik";

interface Props {
    name: string;
    label: string;
    placeholder?: string;
    [key: string]: any;
}

export const MySelect = ({label, ...props}: Props) => {

    const [ field ] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name }>{label}</label>        
            <select className="text-input" {...field} {...props}/>
            <ErrorMessage name={props.name} component='span'/>
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
            </>
    )
}
