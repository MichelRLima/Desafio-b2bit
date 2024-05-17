import b2bit from '../images/b2bit.png'
import { useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import ApiB2bit from '../api/ApiB2bit';
import { FormValues } from '../models/interfaces/FormValues';
import { Navigate } from 'react-router-dom';
import notifySuccess from '../functions/alerts/notifySuccess';
import notifyError from '../functions/alerts/notifyError';

const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.email) {
        errors.email = 'Required';
    }

    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
}

const LoginForm = () => {
    const [loaded, setLoaded] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: async (values) => {
            try {
                const response = await ApiB2bit.post('/login/', {
                    email: values.email,
                    password: values.password
                }, {
                    headers: {
                        'Accept': 'application/json;version=v1_web',
                        'Content-Type': 'application/json'
                    }
                })
                if (response.status === 200) {
                    notifySuccess("Bem vindo")
                    postToken(response.data.tokens.access, true)
                }
            } catch (error) {
                notifyError("Ops, algo deu errado")
                console.error('Erro ao fazer login:', error);

            }
        },
    });

    /////////////////////////////////////////////////

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('LoginForm must be used within an AuthProvider');
    }

    const { token, postToken, getToken } = context;

    useEffect(() => {
        const fetchToken = async () => {
            await getToken();
            setLoaded(true)
        };

        fetchToken();
    }, []);

    ///////////////////////////////////////////////////////////

    return (
        <>
            {!loaded ? (
                <>
                    <div className="flex flex-col items-center justify-center">
                        <img className=" w-24 mt-5 border" src={b2bit} alt="image" />
                        <h1>Carregando</h1>
                    </div>
                </>

            ) : (
                <>
                    {token ? (
                        <>
                            <Navigate to="/profile" />
                        </>

                    ) : (
                        <>
                            <form className='flex justify-center items-center' onSubmit={formik.handleSubmit}>
                                <div className='w-full sm:w-438px h-534px mt-16 rounded-18px mx-6 shadow-2xl shadow-stone-800 flex flex-col items-center justify-center'>


                                    <div className='w-72 h-24  '>
                                        <img src={b2bit} alt="Descrição da imagem" />
                                    </div>


                                    <div className='w-72 sm:w-96 h-72 mt-16  flex flex-col items-center justify-center '>
                                        <div className='w-full h-24 mb-2 '>
                                            <label htmlFor="username" className=' font-nunito font-bold text-lg mb-2 text-custom-gray'>E-mail</label>
                                            <input type='text' id="email" onChange={formik.handleChange} value={formik.values.email} name="email" placeholder='@gmail.com' className='w-full h-14 rounded-lg bg-f1f1f1-bg pl-4 '></input>
                                            {formik.errors.email ? <p className='text-xs text-red-500'>*{formik.errors.email}</p> : null}
                                        </div>
                                        <div className='w-full h-24 mb-2 '>
                                            <label htmlFor="password" className='font-nunito font-bold text-lg mb-2 text-custom-gray'>Password</label>
                                            <input type='password' id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder='************' className='w-full h-14 rounded-lg bg-f1f1f1-bg pl-4 '></input>
                                            {formik.errors.password ? <p className='text-xs text-red-500'>*{formik.errors.password}</p> : null}
                                        </div>

                                        <button type='submit' className='w-full h-14 mt-6 bg-02274F-bg rounded-lg cursor-pointer font-nunito font-bold text-lg text-fafafa-bg hover:bg-gray-900'>
                                            Sign In
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </>
                    )}
                </>



            )

            }



        </>)
}

export default LoginForm