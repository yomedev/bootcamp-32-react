import { omit } from 'lodash-es';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from '../../redux/auth/thunk.auth';
import { createUserService } from '../../services/users.service';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const year = new Date().getFullYear();
const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
};

export const JoinPage = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [values, setValues] = useState(initialState);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Email')
        .min(10, 'Must be at least 2 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      first_name: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      last_name: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

    }),
    onSubmit: values => {
      console.log(values);
    }
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const handleChange = event => {
  //   const { value, name } = event.target;
  //   setValues(prev => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   createUserService(values)
  //     .then(() => {
  //       toast.success('Success')
  //       dispatch(loginThunk(omit(values, 'first_name', 'last_name'))).unwrap()
  //     })
  //     .catch(() => toast.error('Error'))

  //   setIsLoading(true);
  // };

  return (
    <>
      <form action="#" className="mt-5 mx-auto p-0" style={{ width: '450px' }} onSubmit={formik.handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

        <div className="form-floating my-4">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            {...formik.getFieldProps('email')}
            className="form-control"
          />
          <label htmlFor="email">Email address</label>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <div className="form-floating my-4">
          <input
            id="first_name"
            name="first_name"
            type="first_name"
            autoComplete="off"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            className="form-control"
          />
          <label htmlFor="first_name">First Name</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="last_name"
            name="last_name"
            type="last_name"
            autoComplete="off"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            className="form-control"
          />
          <label htmlFor="last_name">Last Name</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="form-control"
          />
          <label htmlFor="password">Password</label>
        </div>

        <Link to="/login" className="d-block my-4">
          Already has account?
        </Link>

        <button className="w-100 mt-2 btn btn-lg btn-primary" disabled={isLoading} type="submit">
          {isLoading ? 'Loading ....' : 'Sign In'}
        </button>
        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </form>
    </>
  );
};