import React from "react";
import { Button } from "react-bootstrap";

import { Formik } from "formik";
import * as yup from "yup";

import "./styles.css";

const legalSchema = yup.object().shape({
  nomeFantasia: yup.string(),
  cnpj: yup.string(),
  cpfDoFundador: yup.string(),
  contador: yup.string()
});

const onSubmitLegalPerson = values => {
  console.log("JULIO onSubmitLegalPerson", values);
  const apiEndPoint = "http://localhost:8784/api";

  fetch(`${apiEndPoint}/LegalPerson`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  })
    .then(async response => {
      if (response.ok) {
        var data = await response.blob();
        console.log("JULIO RETORNO API", data);
      } else {
        console.log("Network response was not ok.");
      }
    })
    .catch(error => {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });
};

const FormLegalPerson = () => {
  return (
    <Formik
      initialValues={{
        nomeFantasia: "",
        cnpj: "",
        cpfDoFundador: "",
        contador: "",
        type: 0,
        completed: false
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
              name="nomeFantasia"
              placeholder="nomeFantasia"
              onChange={handleChange("nomeFantasia")}
              onBlur={handleBlur("nomeFantasia")}
              value={values.nomeFantasia}
              className={
                errors.nomeFantasia && touched.nomeFantasia
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.nomeFantasia && touched.nomeFantasia && (
              <div className="input-feedback">{errors.nomeFantasia}</div>
            )}

            <input
              name="cnpj"
              placeholder="cnpj"
              onChange={handleChange("cnpj")}
              onBlur={handleBlur("cnpj")}
              value={values.cnpj}
              className={
                errors.cnpj && touched.cnpj ? "text-input error" : "text-input"
              }
            />
            {errors.cnpj && touched.cnpj && (
              <div className="input-feedback">{errors.cnpj}</div>
            )}

            <input
              name="cpfDoFundador"
              placeholder="cpfDoFundador"
              onChange={handleChange("cpfDoFundador")}
              onBlur={handleBlur("cpfDoFundador")}
              value={values.cpfDoFundador}
              className={
                errors.cpfDoFundador && touched.cpfDoFundador
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.cpfDoFundador && touched.cpfDoFundador && (
              <div className="input-feedback">{errors.cpfDoFundador}</div>
            )}

            <input
              name="contador"
              placeholder="contador"
              onChange={handleChange("contador")}
              onBlur={handleBlur("contador")}
              value={values.contador}
              className={
                errors.contador && touched.contador
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.contador && touched.contador && (
              <div className="input-feedback">{errors.contador}</div>
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
};

export default FormLegalPerson;
