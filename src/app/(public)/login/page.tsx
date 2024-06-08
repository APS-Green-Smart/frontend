"use client"

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/app/hooks/useAuth';
import { MapContext } from '@/contexts/MapContext';
import { InputFloatLabel } from '@/components/UI/input';
import { Button } from '@/components/UI/Button';

const Login = () => {
    const { isAuth, fetchUserData } = useContext(MapContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { login } = useAuth();

    useEffect(() => {
        if (isAuth) {
            router.push('/dados');
        }
    }, [isAuth]);

    const handleLogin = async (event: any) => {
        event.preventDefault();
        const isSuccess = await login(email, password);
        if (isSuccess) {
            fetchUserData();
            router.push('/dados');
        } else {
            alert('Login failed');
        }
    };

    return (
        <main className='w-full h-screen text-black flex flex-col items-center justify-center'>
            <div className='px-5 py-10 flex flex-col items-center bg-black-custom text-white rounded-3xl'>
                <h1 className='font-semibold text-3xl py-3'>Login</h1>
                <div className='flex'>
                    <InputFloatLabel label='e-mail' type='email' state={true} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex py-3'>
                    <InputFloatLabel label='senha' type='password' state={true} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button onClick={handleLogin} Title='entrar'/>
            </div>
        </main>
    );
};

export default Login;
