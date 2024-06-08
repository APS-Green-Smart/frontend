"use client"

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/app/hooks/useAuth';
import { MapContext } from '@/contexts/MapContext';
import { InputFloatLabel } from '@/components/UI/input';
import { Button } from '@/components/UI/Button';
import { Ilustration } from '@/components/animations/animated-components/Ilustration';

const Login = () => {
    const { isAuth, fetchUserData } = useContext(MapContext);

    const [name, setName] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    const { registrar } = useAuth();

    useEffect(() => {
        if (isAuth) {
            router.push('/dados');
        }
    }, [isAuth]);

    const handleRegistrar = async (event: any) => {
        event.preventDefault();
        setIsLoading(true)
        const isSuccess = await registrar(email, password, cnpj, name);
        if (isSuccess) {
            fetchUserData();
            setIsLoading(false)
            router.push('/dados');
        } else {
            setIsLoading(false)
            alert('Register failed');
        }
    };

    return (
        <main className='w-full h-screen text-black flex flex-col items-center justify-center'>
            {isLoading ? (
                <>
                    <figure className='m-auto w-full h-full flex items-center justify-center'>
                        <Ilustration person='loading' typeAnimation='fromTheBotton' />
                    </figure>
                </>
            ) : (
                <div className='px-5 py-10 flex flex-col items-center bg-black-custom text-white rounded-3xl'>
                    <h1 className='font-semibold text-3xl py-3'>Registro</h1>
                    <div className='flex py-3'>
                        <InputFloatLabel label='Nome da empresa' type='text' state={true} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='flex py-3'>
                        <InputFloatLabel label='e-mail' type='email' state={true} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex py-3'>
                        <InputFloatLabel label='senha' type='password' state={true} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex py-3'>
                        <InputFloatLabel label='CNPJ' type='number' state={true} onChange={(e) => setCNPJ(e.target.value)} />
                    </div>
                    <Button onClick={handleRegistrar} Title='entrar' />
                </div>
            )}
        </main>
    );
};

export default Login;
