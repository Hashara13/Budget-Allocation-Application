import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importing styles from App.css

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currencies from './components/Currencies';

const App = () => {
    return (
        <AppProvider>
            <div className='app-container'>
                <header>
                    <h1 className='app-title'>Company's Budget Allocation</h1>
                </header>
                <div className='container'>
                    <div className='row mt-3'> 
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        <div className='col-sm'>
                            <Spent />
                        </div>
                        <div className='col-sm'>
                            <Currencies />
                        </div>
                    </div>
                    <h3 className='mt-3 section-title'>Allocation</h3>
                    <div className='row'>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className='mt-3 section-title'>Change Allocation</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    </div>
                </div>
                <footer>
                    <p>&copy; 2024. All Rights Reserved.</p>
                </footer>
            </div>
        </AppProvider>
    );
};

export default App;
