'use client';

import { Button } from '@/components/UI/Button';
import { Modal } from '@/components/UI/modal-root';
import { MapContext } from '@/contexts/MapContext';
import { useContext, useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

const EnergyConsumptionAndBillChart = () => {
  const { energyAccounts, modalIsOpen, setModalIsOpen } = useContext(MapContext);

  const [data, setData] = useState<Account[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (energyAccounts) {
      setData(energyAccounts);
      if (energyAccounts.length < 3) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    }
  }, [energyAccounts]);

  return (
    <>

      <div>
        {showMessage ? (
          <div className="text-center text-red-500 max-w-lg m-auto pb-5">
            <p className='py-4'>É necessário pelo menos três contas para visualizar o gráfico.</p>
            <Button Title='Cadastrar conta' onClick={() => setModalIsOpen(!modalIsOpen)} />
            <Ilustration person='no-energy' typeAnimation='fromTheBotton' />
          </div>
        ) :
          (
            <>
  
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="consumption" fill="#8884d8" name="Consumo de Energia (kWh)" />
                  <Bar yAxisId="right" dataKey="bill" fill="#82ca9d" name="Valor da Conta (R$)" />
                </BarChart>
              </ResponsiveContainer>
            </>
          )}
 
      </div>

      {modalIsOpen && (
        <Modal title="Cadastrar nova conta" onClose={() => setModalIsOpen(!setModalIsOpen)}>
          <AccountForm />
        </Modal>
      )}
    </>
  );
};

export default EnergyConsumptionAndBillChart;
