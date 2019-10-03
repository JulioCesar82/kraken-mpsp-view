import React, { Component } from "react";
import { } from "react-bootstrap";

import { Formik } from "formik";
import * as yup from "yup";

import "./styles.css";

const physicalSchema = yup.object().shape({
  cpf: yup.string().required("Preenchimento obrigatório"),
  rg: yup.string().required("Preenchimento obrigatório")
});

class FormPhysicalPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      apiEndPoint: "http://localhost:8784/api"
    };
  }

  setLoading = isLoading => {
    console.log("[FormPhysicalPerson][setLoading] isLoading", isLoading);
    this.setState({ loading: isLoading });
  };

  onSubmitPhysicalPerson = values => {
    const { apiEndPoint } = this.state;
    const { addResource } = this.props;

    console.log("[FormPhysicalPerson][onSubmitPhysicalPerson] started", values);
    this.setLoading(true);

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
          var data = await response.json();
          console.log(
            "[FormPhysicalPerson][onSubmitPhysicalPerson] Response Api",
            data
          );
          addResource(data);
          this.formulario.resetForm();
        } else {
          console.log(
            "[FormPhysicalPerson][onSubmitPhysicalPerson] Network response was not ok."
          );
        }
        this.setLoading(false);
      })
      .catch(error => {
        console.log(
          "[FormPhysicalPerson][onSubmitPhysicalPerson] There has been a problem: " +
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
          cpf: "",
          rg: ""
        }}
        enableReinitialize={true}
        onSubmit={values => this.onSubmitPhysicalPerson(values)}
        validationSchema={physicalSchema}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            //dirty,
            //isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            //handleReset,
            isValid,
            //submitForm
          } = props;
          return (
            <form onSubmit={handleSubmit} className="formContainer">
              <div className="row no-gutters">
                <div className="col-12 col-lg mt-2">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <span className="fa fa-user"></span>
                      </div>
                    </div>
                    <input
                      name="cpf"
                      placeholder="Informe o CPF"
                      onChange={handleChange("cpf")}
                      onBlur={handleBlur("cpf")}
                      value={values.cpf}
                      className={
                        errors.cpf && touched.cpf
                          ? "form-control error"
                          : "form-control"
                      }
                    />
                  </div>
                  {errors.cpf && touched.cpf && (
                    <div className="input-feedback">{errors.cpf}</div>
                  )}
                </div>

                <div className="col-12 col-lg ml-lg-2 mt-2">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <span className="fa fa-book"></span>
                      </div>
                    </div>
                    <input
                      name="rg"
                      placeholder="Informe o RG"
                      onChange={handleChange("rg")}
                      onBlur={handleBlur("rg")}
                      value={values.rg}
                      className={
                        errors.rg && touched.rg
                          ? "form-control error"
                          : "form-control"
                      }
                    />
                  </div>
                  {errors.rg && touched.rg && (
                    <div className="input-feedback">{errors.rg}</div>
                  )}
                </div>

              </div>

              <div className="row no-gutters">
                <div className="col-md-12 mr-lg-2 mt-2">
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

export default FormPhysicalPerson;
