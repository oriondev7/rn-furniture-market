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
import { styles } from './sign_in.styles'
import { BackButton } from '../../components/back_button/BackButton'
import { BigBottomButton } from '../../components'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import MTIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  APIDomain,
  AsyncStorageKey,
  Color,
  FieldType,
  Icon,
  ScreenName,
  Size,
} from '../../constants'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { SignInDataModel, UserDataModel } from '../../models'

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Provide a valid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters or more')
    .required('Required'),
})

export const SingIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [responseData, setResponseData] = useState<UserDataModel | undefined>(
    undefined
  )
  const [obscureText, setObscureText] = useState(true)
  const navigation = useNavigation()

  const showErrorAlert = (errors: FormikErrors<SignInDataModel>) => {
    var error = Object.values(errors)[0]

    if (error === 'Required') {
      error = 'Please provide all required fields'
    }

    Alert.alert('Invalid Form', error)
  }

  const signIn = async (values: SignInDataModel) => {
    setIsLoading(true)

    try {
      const response = await axios.post(`${APIDomain.local}/api/signin`, values)

      if (response.status === 200) {
        setResponseData(response.data)

        await AsyncStorage.setItem(
          `${AsyncStorageKey.user}${responseData?._id}`,
          JSON.stringify(responseData)
        )
        await AsyncStorage.setItem(
          AsyncStorageKey.id,
          JSON.stringify(responseData?._id)
        )

        navigation.replace(ScreenName.bottomNavigation)
      } else {
        Alert.alert('An error has occurred', 'Please provide valid credentials')
      }
    } catch (error) {
      Alert.alert('An error has occurred', 'Please try to sign up again')
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
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => signIn(values)}
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
                        secureTextEntry={obscureText}
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
                        onPress={() => setObscureText(!obscureText)}
                      >
                        <MTIcon
                          name={
                            obscureText ? Icon.hidePassword : Icon.showPassword
                          }
                          size={Size.xxSmallIcon}
                        />
                      </TouchableOpacity>
                    </View>

                    {touched.password && errors.password && (
                      <Text style={styles.error}>{errors.password}</Text>
                    )}
                  </View>

                  <BigBottomButton
                    onPress={() =>
                      isValid ? handleSubmit() : showErrorAlert(errors)
                    }
                    title={'S I G N   I N'}
                    isActive={isValid}
                    isLoading={isLoading}
                  />

                  <View style={styles.signUpContainer}>
                    <Text style={styles.signUpTitle}>
                      Don't have an account?{' '}
                    </Text>
                    <Text
                      style={styles.signUpAction}
                      onPress={() => navigation.navigate(ScreenName.signUp)}
                    >
                      Sign Up
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
