import React, { useState } from 'react'
import users from './users'
import { Box, FormControlLabel, Checkbox, Typography, IconButton } from '@mui/material'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import AuthInput from '../components/mui/AuthInput';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import OrangeButton from '../components/mui/OrangeButtons';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const [error, setError] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            console.log(values)
            console.log(users)
            setError(false)
            let loaded_user = null
            for (let i = 0; i < users.length; i++) {
                if (users[i]['username'] === values.username && users[i]['password'] === values.password) {
                    loaded_user = users[i]
                    console.log(users[i])
                }
            }
            if (loaded_user) {
                localStorage.setItem('login', 'yes')
                navigate('/dashboard')
            }
            else {
                localStorage.setItem('login', 'no')
                setError(true)
            }
        },
    })

    const navigate = useNavigate()
    return (
        <form className='auth-form'
            onSubmit={formik.handleSubmit}
        >
            <h1 className='auth-heading'>Login</h1>
            <Box className='input-container'>
                <label className='input-label'>Username:</label>
                <AuthInput
                    icon={<PersonRoundedIcon />}
                    variant="outlined"
                    {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username && (
                    <Alert severity="error">{formik.errors.username}</Alert>
                )}
            </Box>
            <Box className='input-container'>
                <label className='input-label'>Password:</label>
                <AuthInput
                    type='password'
                    icon={<HttpsRoundedIcon />}
                    variant="outlined"
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                    <Alert severity="error">{formik.errors.password}</Alert>
                )}
            </Box>
            <Box className='form-extra'>
                <FormControlLabel control={<Checkbox sx={{ fontFamily: 'oswald', '& .MuiSvgIcon-root': { fontSize: 28, color: 'white' } }} />} label="Remember me" />
                <Link to='/'>Forgot Password?</Link>
            </Box>
            {error && <Alert severity="error">Username or password is incorrect.</Alert>}
            <OrangeButton
                type='submit'
            >Login</OrangeButton>
            <Typography variant='h3' sx={{ textAlign: 'center' }}>OR</Typography>
            <Box className='auth-social-icons'>
                <IconButton sx={{
                    fontSize: '40px'
                }}>
                    <FacebookOutlinedIcon sx={{ fontSize: '60px' }} className='auth-social-icon' />
                    <GoogleIcon sx={{ fontSize: '60px' }} className='auth-social-icon' />

                </IconButton>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: 'auto'
            }}>
                <Typography variant='body2'>Don't have an account?</Typography>
                <OrangeButton sx={{ padding: '5px 40px', fontSize: '16px' }}
                    onClick={() => {
                        navigate('/signup')
                    }}
                >Signup</OrangeButton>
            </Box>

        </form>
    )
}

export default Login