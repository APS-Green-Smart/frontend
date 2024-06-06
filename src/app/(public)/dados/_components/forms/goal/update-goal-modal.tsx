'use client'
import { InputFloatLabel } from '@/components/UI/input';
import { Drop, Lightning } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Fieldset } from '../account/create-new-account-modal-fieldset';
import { MapContext } from '@/contexts/MapContext';
import { Button } from '@/components/UI/Button';

const GoalForm = () => {

    const { accountType, user, editGoalModalIsOpen, setEditGoalModalIsOpen } = useContext(MapContext);
    const [date, setDate] = useState(new Date());
    const [billGoal, setBillGoal] = useState('');
    const [goalConsu, setGoalConsu] = useState('');

    const handleSubmit = () => {
       
        if (user) {
            const data = {
                idEnterprise: user.id,
                cnpjEnterprise: user.cnpj,
                consumptionGoal: parseFloat(goalConsu),
                billGoal: parseFloat(billGoal)
              
            };
            console.log(data)
            fetch(`http://127.0.0.1:8080/goals/update/${accountType}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(async response => await response.json())
                .then(data => {
                    setEditGoalModalIsOpen(!editGoalModalIsOpen)
                }).catch((error) => {
                    alert(error)
                    console.error('Error:', error);
                });
        }

        
    };

    return (
        <div className='px-5 py-3'>
             <label>Tipo de Meta: {accountType}</label>
            <div className='flex items-center justify-center'>
                < Fieldset />
            </div>
          
            <div className='py-3'>
                <InputFloatLabel
                    label='Consumo'
                    type='number'
                    value={goalConsu}
                    onChange={e => setGoalConsu(e.target.value)}
                    state={true}
                />
            </div>
            <div className='py-3'>
                <InputFloatLabel
                    label='Valor (R$)'
                    type='number'
                    value={billGoal}
                    onChange={e => setBillGoal(e.target.value)}
                    state={true}
                />
            </div>
            <Button Title='Salvar Meta' onClick={handleSubmit}/>
        </div>
    );
};

export default GoalForm;
