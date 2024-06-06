"use client"

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/app/hooks/useAuth';
import { MapContext } from '@/contexts/MapContext';

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
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </main>
    );
};

export default Login;
