import React from 'react';
import MealForm from '../containers/MealForm';
import SymptomForm from '../containers/SymptomForm';
import DateDisplay from '../containers/DateDisplay';

export const Dashboard = () => {
    return (            
        <div>
            <MealForm />
            <SymptomForm />
            <DateDisplay />
        </div>
    )
}