import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import { styles } from './sign_up.styles'
import { BackButton } from '../../components/back_button/BackButton'
import { BigBottomButton } from '../../components'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import MTIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { APIDomain, Color, FieldType, Icon, Size } from '../../constants'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { SignUpDataModel } from '../../models'

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must contain 3 characters or more')
    .required('Required'),
  email: Yup.string()
    .email('Provide a valid email address')
    .required('Required'),
  location: Yup.string()
    .min(3, 'Provide a valid location')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters or more')
    .required('Required'),
  confirmPassword: Yup.string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    })
    .required('Re-enter password'),
})

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [obscurePassword, setObscurePassword] = useState(true)
  const [obscureConfirmPassword, setObscureConfirmPassword] = useState(true)
  const navigation = useNavigation()

  const showSuccessAlert = () => {
    Alert.alert(
      'Congratulations!',
      'You have successfully created the account!',
      [
        {
          text: 'Sing In',
          onPress: () => navigation.goBack(),
        },
      ]
    )
  }

  const showErrorAlert = (errors: FormikErrors<SignUpDataModel>) => {
    var error = Object.values(errors)[0]

    if (error === 'Required') {
      error = 'Please provide all required fields'
    }

    Alert.alert('Invalid Form', error)
  }

  const signUp = async (values: SignUpDataModel) => {
    setIsLoading(true)

    try {
      const endpoint = `${APIDomain.local}/api/signup`
      const { confirmPassword, ...data } = values

      const response = await axios.post(endpoint, data)

      if (response.status === 201) {
        showSuccessAlert()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <BackButton onPress={navigation.goBack} />

          <Image
            source={require('../../assets/images/two.png')}
            style={styles.cover}
          />

          <Text style={styles.title}>Unlimited</Text>
          <Text style={styles.title}>Luxurious Furniture</Text>

          <View style={styles.inputContainer}>
            <Formik
              initialValues={{
                username: '',
                email: '',
                location: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => signUp(values)}
            >
              {({
                handleChange,
                handleSubmit,
                touched,
                values,
                errors,
                isValid,
                setFieldTouched,
              }) => (
                <View>
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Username</Text>
                    <View
                      style={
                        touched.username
                          ? styles.activeInputWrapper
                          : styles.inactiveInputWrapper
                      }
                    >
                      <MTIcon
                        name={Icon.usernameField}
                        size={Size.xSmallIcon}
                        color={Color.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        placeholder="Enter username"
                        onFocus={() => setFieldTouched(FieldType.username)}
                        onBlur={() =>
                          setFieldTouched(FieldType.username, false)
                        }
                        value={values.username}
                        onChangeText={handleChange(FieldType.username)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                      />
                    </View>

                    {touched.username && errors.username && (
                      <Text style={styles.error}>{errors.username}</Text>
                    )}
                  </View>

                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Email</Text>
                    <View
                      style={
                        touched.email
                          ? styles.activeInputWrapper
                          : styles.inactiveInputWrapper
                      }
                    >
                      <MTIcon
                        name={Icon.emailField}
                        size={Size.xSmallIcon}
                        color={Color.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        placeholder="Enter email"
                        onFocus={() => setFieldTouched(FieldType.email)}
                        onBlur={() => setFieldTouched(FieldType.email, false)}
                        value={values.email}
                        onChangeText={handleChange(FieldType.email)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                      />
                    </View>

                    {touched.email && errors.email && (
                      <Text style={styles.error}>{errors.email}</Text>
                    )}
                  </View>

                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Location</Text>
                    <View
                      style={
                        touched.location
                          ? styles.activeInputWrapper
                          : styles.inactiveInputWrapper
                      }
                    >
                      <IonIcon
                        name={Icon.location}
                        size={Size.xSmallIcon}
                        color={Color.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        placeholder="Enter location"
                        onFocus={() => setFieldTouched(FieldType.location)}
                        onBlur={() =>
                          setFieldTouched(FieldType.location, false)
                        }
                        value={values.location}
                        onChangeText={handleChange(FieldType.location)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                      />
                    </View>

                    {touched.location && errors.location && (
                      <Text style={styles.error}>{errors.location}</Text>
                    )}
                  </View>

                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Password</Text>
                    <View
                      style={
                        touched.password
                          ? styles.activeInputWrapper
                          : styles.inactiveInputWrapper
                      }
                    >
                      <MTIcon
                        name={Icon.passwordField}
                        size={Size.xSmallIcon}
                        color={Color.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        secureTextEntry={obscurePassword}
                        placeholder="Enter password"
                        onFocus={() => setFieldTouched(FieldType.password)}
                        onBlur={() =>
                          setFieldTouched(FieldType.password, false)
                        }
                        value={values.password}
                        onChangeText={handleChange(FieldType.password)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                      />

                      <TouchableOpacity
                        onPress={() => setObscurePassword(!obscurePassword)}
                      >
                        <MTIcon
                          name={
                            obscurePassword
                              ? Icon.hidePassword
                              : Icon.showPassword
                          }
                          size={Size.xxSmallIcon}
                        />
                      </TouchableOpacity>
                    </View>

                    {touched.password && errors.password && (
                      <Text style={styles.error}>{errors.password}</Text>
                    )}
                  </View>

                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View
                      style={
                        touched.confirmPassword
                          ? styles.activeInputWrapper
                          : styles.inactiveInputWrapper
                      }
                    >
                      <MTIcon
                        name={Icon.passwordField}
                        size={Size.xSmallIcon}
                        color={Color.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        secureTextEntry={obscureConfirmPassword}
                        placeholder="Enter password again"
                        onFocus={() =>
                          setFieldTouched(FieldType.confirmPassword)
                        }
                        onBlur={() =>
                          setFieldTouched(FieldType.confirmPassword, false)
                        }
                        value={values.confirmPassword}
                        onChangeText={handleChange(FieldType.confirmPassword)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                      />

                      <TouchableOpacity
                        onPress={() =>
                          setObscureConfirmPassword(!obscureConfirmPassword)
                        }
                      >
                        <MTIcon
                          name={
                            obscureConfirmPassword
                              ? Icon.hidePassword
                              : Icon.showPassword
                          }
                          size={Size.xxSmallIcon}
                        />
                      </TouchableOpacity>
                    </View>

                    {touched.confirmPassword && errors.confirmPassword && (
                      <Text style={styles.error}>{errors.confirmPassword}</Text>
                    )}
                  </View>

                  <BigBottomButton
                    onPress={() =>
                      isValid ? handleSubmit() : showErrorAlert(errors)
                    }
                    title={'S I G N   U P'}
                    isActive={isValid}
                    isLoading={isLoading}
                  />
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
