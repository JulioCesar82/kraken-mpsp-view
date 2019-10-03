import React, {Component, Fragment} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import {Formik} from 'formik';
import * as yup from 'yup';

import styles from './styles';

const physicalSchema = yup.object().shape({
  cpf: yup.string().required('Preenchimento obrigatório'),
  rg: yup.string().required('Preenchimento obrigatório'),
});

class FormPhysicalPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      apiEndPoint: 'http://localhost:8784/api',
    };
  }

  setLoading = isLoading => {
    console.log('[FormPhysicalPerson][setFormLoading] isLoading', isLoading);
    this.setState({loading: isLoading});
  };

  onSubmitPhysicalPerson = values => {
    const {apiEndPoint} = this.state;
    const {addResource} = this.props;

    console.log('[FormPhysicalPerson][onSubmitPhysicalPerson] started', values);
    this.setLoading(true);

    fetch(`${apiEndPoint}/PhysicalPerson`, {
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
            '[FormPhysicalPerson][onSubmitPhysicalPerson] Response Api',
            data,
          );
          addResource(data);
          this.formulario.resetForm();
        } else {
          console.log(
            '[FormPhysicalPerson][onSubmitPhysicalPerson] Network response was not ok.',
          );
        }
        this.setLoading(false);
      })
      .catch(error => {
        console.log(
          '[FormPhysicalPerson][onSubmitPhysicalPerson] There has been a problem: ' +
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
            cpf: '',
            rg: '',
          }}
          enableReinitialize={true}
          onSubmit={values => this.onSubmitPhysicalPerson(values)}
          validationSchema={physicalSchema}>
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
                    <Icon name="user" size={20} />
                  </View>
                  <TextInputMask
                    style={styles.containerInput}
                    type={'cpf'}
                    placeholder={'Informe o CPF'}
                    onBlur={handleBlur('cpf')}
                    onChangeText={handleChange('cpf')}
                    value={values.cpf}
                    isValid={!Boolean(errors.cpf && touched.cpf)}
                  />
                </View>

                <View style={styles.sectionInput}>
                  <View style={styles.containerIcon}>
                    <Icon name="book" size={20} />
                  </View>
                  <TextInputMask
                    style={styles.containerInput}
                    type={'custom'}
                    options={{
                      /**
                       * mask: (String | required | default '')
                       * the mask pattern
                       * 9 - accept digit.
                       * A - accept alpha.
                       * S - accept alphanumeric.
                       * * - accept all, EXCEPT white space.
                       */
                      mask: '99.999.999-*',
                    }}
                    placeholder={'Informe o RG'}
                    onBlur={handleBlur('rg')}
                    onChangeText={handleChange('rg')}
                    value={values.rg}
                    isValid={!Boolean(errors.rg && touched.rg)}
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

export default FormPhysicalPerson;
