import './Login.scss';
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ILoginForm } from './interfaces';
import { useAuth } from '../../../hooks/useAuth';

export const Login = () => {

  const {loginAction} = useAuth()

  const initialValues: ILoginForm = {
    email: 'alejandro.cardenas.g07@gmail.com',
    password: 'password'
  }

  const validationSchema = Yup.object({
    email: Yup.string().email().required('El Correo es requerido'),
    password: Yup.string().required('La contraseña es requerida')
  });

  const {values, errors, handleSubmit, handleChange} = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async(values) => {
      await loginAction(values);
    },
    validateOnChange: false,
  });

  return (
    <section className="login">

      <div className="login__container">

        <Form onSubmit={handleSubmit}>

          <Form.Input name="email" placeholder="Correo electrónico" type="text" value={values.email} onChange={handleChange}
            error={errors.email}
          />
          <Form.Input name="password" placeholder="Contraseña" type="password" value={values.password} onChange={handleChange}
            error={errors.password}
          />
          <Button fluid primary content='Iniciar Sesión' type="submit"/>

        </Form>

      </div>

    </section>
  )
}
