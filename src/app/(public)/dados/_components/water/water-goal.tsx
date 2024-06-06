'use client';

import { Button } from '@/components/UI/Button';
import { Modal } from '@/components/UI/modal-root';
import { MapContext } from '@/contexts/MapContext';
import { useContext, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 
import AccountForm from '../create-new-account-modal';
import { Ilustration } from '@/components/animations/animated-components/Ilustration';

interface Account {
    date: string;
    cnpjEnterprise: string;
    consumptionGoal: number;
    bill: number;
    consumption: number;
    billGoal: number;
    id: string;
}

const WaterConsumptionAndBillGoalsChart = () => {
    const { waterAccounts, modalIsOpen, setModalIsOpen } = useContext(MapContext);

    const [data, setData] = useState<Account[]>([]);
    const [showMessage, setShowMessage] = useState(false);
    const [showGoalMessage, setShowGoalMessage] = useState(false);

    useEffect(() => {
        if (waterAccounts) {
            setData(waterAccounts);

            if (waterAccounts.length < 3) {
                setShowMessage(true);
            } else {
                setShowMessage(false);
            }

            const hasZeroGoals = waterAccounts.some(account => account.consumptionGoal === 0 || account.billGoal === 0);
            if (hasZeroGoals) {
                setShowGoalMessage(true);
            } else {
                setShowGoalMessage(false);
            }
        }
    }, [waterAccounts]);

    return (
        <>
            <div>
                {showMessage ? (
                    <div className="text-center text-red-500 max-w-lg m-auto pb-5">
                        <p className='py-4'>É necessário pelo menos três contas para visualizar o gráfico.</p>
                        <Button Title='Cadastrar conta' onClick={() => setModalIsOpen(!modalIsOpen)} />
                        <Ilustration person='water-goal' typeAnimation='fromTheBotton'/>
                    </div>
                ) : showGoalMessage ? (
                    <div className="text-center text-red-500 max-w-lg m-auto pb-5">
                        <p className='py-4'>Algumas metas de consumo ou valor estão zeradas. Atualize as metas para visualizar o gráfico.</p>
                        <Button Title='Editar metas' onClick={() => setModalIsOpen(!modalIsOpen)} />
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="consumption" stroke="#8884d8" name="Consumo Real (m³)" />
                            <Line type="monotone" dataKey="bill" stroke="#82ca9d" name="Valor Real (R$)" />
                            <Line type="monotone" dataKey="consumptionGoal" stroke="#d884d8" name="Meta de Consumo (m³)" />
                            <Line type="monotone" dataKey="billGoal" stroke="#d8ca9d" name="Meta de Valor (R$)" />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>

            {modalIsOpen && (
                <Modal title="Editar Metas" onClose={() => setModalIsOpen(!modalIsOpen)}>
                    <AccountForm />
                </Modal>
            )}
        </>
    );
};

export default WaterConsumptionAndBillGoalsChart;
