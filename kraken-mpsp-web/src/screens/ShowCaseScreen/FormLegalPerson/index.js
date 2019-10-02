import React, { Component } from "react";
import {} from "react-bootstrap";

import { Formik } from "formik";
import * as yup from "yup";

import "./styles.css";

const legalSchema = yup.object().shape({
  cnpj: yup.string().required("Preenchimento obrigatório")
});

class FormLegalPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      apiEndPoint: "http://localhost:8784/api"
    };
  }

  setLoading = isLoading => {
    console.log("[FormLegalPerson][setFormLoading] isLoading", isLoading);
    this.setState({ loading: isLoading });
  };

  onSubmitLegalPerson = values => {
    const { apiEndPoint } = this.state;
    const { addResource } = this.props;

    console.log("[FormLegalPerson][onSubmitLegalPerson] started", values);
    this.setLoading(true);

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
          var data = await response.json();
          console.log(
            "[FormLegalPerson][onSubmitLegalPerson] Response Api",
            data
          );
          addResource(data);
          this.formulario.resetForm();
        } else {
          console.log(
            "[FormLegalPerson][onSubmitLegalPerson] Network response was not ok."
          );
        }
        this.setLoading(false);
      })
      .catch(error => {
        console.log(
          "[FormLegalPerson][onSubmitLegalPerson] There has been a problem: " +
            error.message
        );
        this.setLoading(false);
      });
  };

  render() {
    const { loading } = this.state;
    return (
      <Formik
        ref={ref => (this.formulario = ref)}
        initialValues={{
          cnpj: ""
        }}
        enableReinitialize={true}
        onSubmit={values => this.onSubmitLegalPerson(values)}
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
            <form onSubmit={handleSubmit} className="formContainer">
              <div className="row no-gutters">
                <div className="col-md mr-md-2 mt-2">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <span className="fa fa-building"></span>
                      </div>
                    </div>
                    <input
                      name="cnpj"
                      placeholder="Informe o CNPJ"
                      onChange={handleChange("cnpj")}
                      onBlur={handleBlur("cnpj")}
                      value={values.cnpj}
                      className={
                        errors.cnpj && touched.cnpj
                          ? "form-control error"
                          : "form-control"
                      }
                    />
                  </div>
                  {errors.cnpj && touched.cnpj && (
                    <div className="input-feedback">{errors.cnpj}</div>
                  )}
                </div>

                <div className="col-md mr-md-2 mt-2">
                  <button
                    className="btn btn-success btn-block"
                    type="submit"
                    disabled={!isValid || loading}
                  >
                    {loading ? "Enviando pedido…" : "Iniciar procura"}
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default FormLegalPerson;
