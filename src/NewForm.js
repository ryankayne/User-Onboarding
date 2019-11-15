import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const NewForm = ({ values }) => {

    return (
        <div className="user-form">
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                <Field type="email" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <Field type="checkbox" name="tos" />
                <button>Submit</button>
            </Form>
        </div>
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