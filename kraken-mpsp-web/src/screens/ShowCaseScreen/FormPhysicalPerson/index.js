import React from "react";
import { Button } from "react-bootstrap";

import { Formik } from "formik";
import * as yup from "yup";

import "./styles.css";

const physicalSchema = yup.object().shape({
  nomeCompleto: yup.string(),
  cpf: yup.string(),
  rg: yup.string(),
  dataDeNascimento: yup.string(),
  nomeDaMae: yup.string()
});

const onSubmitPhysicalPerson = values => {
  console.log("JULIO onSubmitPhysicalPerson", values);
  const apiEndPoint = "http://localhost:8784/api";

  fetch(`${apiEndPoint}/PhysicalPerson`, {
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

const FormPhysicalPerson = () => {
  return (
    <Formik
      initialValues={{
        nomeCompleto: "",
        cpf: "",
        rg: "",
        dataDeNascimento: "",
        nomeDaMae: "",
        type: 1,
        completed: false
      }}
      enableReinitialize={true}
      onSubmit={values => onSubmitPhysicalPerson(values)}
      validationSchema={physicalSchema}
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
              name="nomeCompleto"
              placeholder="nomeCompleto"
              onChange={handleChange("nomeCompleto")}
              onBlur={handleBlur("nomeCompleto")}
              value={values.nomeCompleto}
              className={
                errors.nomeCompleto && touched.nomeCompleto
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.nomeCompleto && touched.nomeCompleto && (
              <div className="input-feedback">{errors.nomeCompleto}</div>
            )}

            <input
              name="cpf"
              placeholder="cpf"
              onChange={handleChange("cpf")}
              onBlur={handleBlur("cpf")}
              value={values.cpf}
              className={
                errors.cpf && touched.cpf ? "text-input error" : "text-input"
              }
            />
            {errors.cpf && touched.cpf && (
              <div className="input-feedback">{errors.cpf}</div>
            )}

            <input
              name="rg"
              placeholder="rg"
              onChange={handleChange("rg")}
              onBlur={handleBlur("rg")}
              value={values.rg}
              className={
                errors.rg && touched.rg ? "text-input error" : "text-input"
              }
            />
            {errors.rg && touched.rg && (
              <div className="input-feedback">{errors.rg}</div>
            )}

            <input
              name="dataDeNascimento"
              placeholder="dataDeNascimento"
              onChange={handleChange("dataDeNascimento")}
              onBlur={handleBlur("dataDeNascimento")}
              value={values.dataDeNascimento}
              className={
                errors.dataDeNascimento && touched.dataDeNascimento
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.dataDeNascimento && touched.dataDeNascimento && (
              <div className="input-feedback">{errors.dataDeNascimento}</div>
            )}

            <input
              name="nomeDaMae"
              placeholder="nomeDaMae"
              onChange={handleChange("nomeDaMae")}
              onBlur={handleBlur("nomeDaMae")}
              value={values.nomeDaMae}
              className={
                errors.nomeDaMae && touched.nomeDaMae
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.nomeDaMae && touched.nomeDaMae && (
              <div className="input-feedback">{errors.nomeDaMae}</div>
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

export default FormPhysicalPerson;
