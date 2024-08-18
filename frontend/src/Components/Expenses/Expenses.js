import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import ExpenseForm from './ExpenseForm';
import IncomeItem from '../IncomeItem/IncomeItem';

function Expenses() {
    const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, [getExpenses]);

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income">
                    Total Expense: <span>${totalExpenses()}</span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.map((expense) => {
                            const { _id, title, amount, date, category, description, type } = expense;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="var(--color-red)" // You might want to update this color if it's a different theme
                                    deleteItem={deleteExpense}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    );
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    background-color: #fdfdfe; /* Light background color for the section */
    transition: background-color 0.3s ease; /* Smooth transition for background color */

    &:hover {
        background-color: #f8d7da; /* Light red background when hovered */
    }

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f8bbd0; /* Light pink background */
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;
        transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: #dc3545; /* Red color for the total expense amount */
        }

        &:hover {
            background-color: #f48fb1; /* Slightly darker pink on hover */
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); /* Slightly more pronounced shadow on hover */
            color: #6c757d; /* Grey color for the text when hovered */
        }
    }

    .income-content {
        display: flex;
        gap: 2rem;

        .form-container {
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.02); /* Slight zoom effect on hover */
            }
        }

        .incomes {
            flex: 1;
        }
    }
`;

export default Expenses;

