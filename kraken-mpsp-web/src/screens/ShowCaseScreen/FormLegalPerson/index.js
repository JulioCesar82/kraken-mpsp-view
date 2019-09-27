import React from "react";
import { Button } from "react-bootstrap";

import { Formik } from "formik";
import * as yup from "yup";

import "./styles.css";

const legalSchema = yup.object().shape({
    cnpj: yup
        .string()
        .required("Informe o CNPJ")
        .min(4, "Preencha o CNPJ correto")
});

const onSubmitLegalPerson = values => {
    console.log("JULIO onSubmitLegalPerson", values);
    const apiEndPoint = "http://localhost:8784/api";

    fetch(`${apiEndPoint}/LegalPerson`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    }).then(async (response) => {
        if (response.ok) {
            var data = await response.blob();
            console.log("JULIO RETORNO API", data);
        } else {
            console.log('Network response was not ok.');
        }
    })
        .catch(error => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
};

const FormLegalPerson = () => {
    return (
        <Formik
            initialValues={{
                CNPJ: "",
                NomeFantasia: "BANCO SAFRAAA",
                CNPJ: "12312312312312",
                CPFDoFundador: "333333333",
                Contador: "11111111"
            }}
            enableReinitialize={true}
            onSubmit={values => onSubmitLegalPerson(values)}
            validationSchema={legalSchema}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    isValid,
                    submitForm
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <input
                            name="cnpj"
                            onChange={handleChange("cnpj")}
                            onBlur={handleBlur("cnpj")}
                            value={values.cnpj}
                            className={
                                errors.cnpj && touched.cnpj ? 'text-input error' : 'text-input'
                            }
                        />
                        {errors.cnpj && touched.cnpj && (
                            <div className="input-feedback">{errors.cnpj}</div>
                        )}

                        <Button
                            variant="primary"
                            type="button"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Limpar campos
                </Button>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={!isValid || isSubmitting}
                        >
                            Iniciar procura
                </Button>
                    </form>
                );
            }}
        </Formik>
    );
}

export default FormLegalPerson;