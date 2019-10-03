import React, {Component, Fragment} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import {Formik} from 'formik';
import * as yup from 'yup';

import styles from './styles';

const legalSchema = yup.object().shape({
  cnpj: yup.string().required('Preenchimento obrigatório'),
});

class FormLegalPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      apiEndPoint: 'http://localhost:8784/api',
    };
  }

  setLoading = isLoading => {
    console.log('[FormLegalPerson][setFormLoading] isLoading', isLoading);
    this.setState({loading: isLoading});
  };

  onSubmitLegalPerson = values => {
    const {apiEndPoint} = this.state;
    const {addResource} = this.props;

    console.log('[FormLegalPerson][onSubmitLegalPerson] started', values);
    this.setLoading(true);

    fetch(`${apiEndPoint}/LegalPerson`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(async response => {
        if (response.ok) {
          var data = await response.json();
          console.log(
            '[FormLegalPerson][onSubmitLegalPerson] Response Api',
            data,
          );
          addResource(data);
          this.formulario.resetForm();
        } else {
          console.log(
            '[FormLegalPerson][onSubmitLegalPerson] Network response was not ok.',
          );
        }
        this.setLoading(false);
      })
      .catch(error => {
        console.log(
          '[FormLegalPerson][onSubmitLegalPerson] There has been a problem: ' +
            error.message,
        );
        this.setLoading(false);
      });
  };

  render() {
    const {loading} = this.state;
    return (
      <View style={styles.containerForm}>
        <Formik
          ref={ref => (this.formulario = ref)}
          initialValues={{
            cnpj: '',
          }}
          enableReinitialize={true}
          onSubmit={values => this.onSubmitLegalPerson(values)}
          validationSchema={legalSchema}>
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
              submitForm,
            } = props;
            return (
              <Fragment>
                <View style={styles.sectionInput}>
                  <View style={styles.containerIcon}>
                    <Icon name="building" size={20} />
                  </View>
                  <TextInputMask
                    style={styles.containerInput}
                    type={'cnpj'}
                    placeholder={'Informe o CNPJ'}
                    onBlur={handleBlur('cnpj')}
                    onChangeText={handleChange('cnpj')}
                    value={values.cnpj}
                    isValid={!Boolean(errors.cnpj && touched.cnpj)}
                  />
                </View>

                <TouchableOpacity
                  disabled={!isValid || loading}
                  loading={loading}
                  onPress={submitForm}
                  style={styles.buttonContainer}>
                  {loading && (
                    <ActivityIndicator
                      color="white"
                      size="large"
                      style="loadingShow"
                    />
                  )}
                  <Text style={styles.buttonLabel}>Iniciar procura</Text>
                </TouchableOpacity>
              </Fragment>
            );
          }}
        </Formik>
      </View>
    );
  }
}

export default FormLegalPerson;
