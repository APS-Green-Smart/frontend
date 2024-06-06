'use client'
import { InputFloatLabel } from '@/components/UI/input';
import { Drop, Lightning } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Fieldset } from './create-new-account-modal-fieldset';
import { MapContext } from '@/contexts/MapContext';
import { Button } from '@/components/UI/Button';

const AccountForm = () => {

    const { accountType, user, setModalIsOpen, modalIsOpen } = useContext(MapContext);
    const [date, setDate] = useState(new Date());
    const [consumption, setConsumption] = useState('');
    const [bill, setBill] = useState('');

    const handleSubmit = () => {
        

        const formattedDate = date.toISOString();

        if (user?.cnpj) {
            const data = {
                referenceDate: formattedDate,
                consumption: parseFloat(consumption),
                billAmount: parseFloat(bill),
                accountType,
                cnpj: user.cnpj
            };

            fetch(`http://127.0.0.1:8080/account/${accountType}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                }).catch((error) => {
                    console.error('Error:', error);
                });
        }

        setModalIsOpen(!modalIsOpen)
    };

    return (
        <div>
             <label>Tipo de Conta: {accountType}</label>
            <div className='flex items-center justify-center'>
                < Fieldset />
                
            </div>
            <div className='py-3 flex flex-col'>
                <label>Data de Referência</label>
                
                    <DatePicker
                        selected={date}
                        onChange={(date: Date) => setDate(date)}
                        dateFormat="yyyy-MM-dd"
                        showIcon
                        className='dark:bg-gray-200 w-full rounded-sm'
                    />
             

            </div>
            <div className='py-3'>
                <InputFloatLabel
                    label='Consumo'
                    type='number'
                    value={consumption}
                    onChange={e => setConsumption(e.target.value)}
                    state={true}
                />
            </div>
            <div className='py-3'>
                <InputFloatLabel
                    label='Valor da Conta (R$)'
                    type='number'
                    value={bill}
                    onChange={e => setBill(e.target.value)}
                    state={true}
                />
            </div>
            <Button Title='Salvar Conta' onClick={handleSubmit}/>
        </div>
    );
};

export default AccountForm;
