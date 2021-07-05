import React from "react";
import { withFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validate = ({ name, email }) => {
    const errors = {};

    if (!name) {
        errors.name = "Please enter your Full Name"
    } else if (name.length < 5) {
        errors.name = "Remember your First and Last name please!"
    }

    if (!email) {
        errors.email = "Please enter your Email"
    }

    return errors;
}

const NewForm = ({ values }) => {

    return (
        <Formik 
            onSubmit={( tools, values ) => {
            tools.resetForm();
            alert(`${values.name}, has been added at this email: ${values.email}.`)
        }}
        validate={validate}
        initialValues={{ name: "", email: "" }}
        render={props => {
            return (
                <Form>
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" />
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" component="div" />
                    <Field type="checkbox" name="tos" />
                    <input type="submit" />
                </Form>
            );
        }}
        />
        // // <div className="user-form">
        //     {/* <Form>
        //         <Field type="text" name="name" placeholder="Name" />
        //         <Field type="email" name="email" placeholder="Email" />
        //         <Field type="password" name="password" placeholder="Password" />
        //         <Field type="checkbox" name="tos" />
        //         <button>Submit</button>
        //     </Form> */}
        // {/* </div> */}
    )
};

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        };
    }
})(NewForm);

export default FormikUserForm;