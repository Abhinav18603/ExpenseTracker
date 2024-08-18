
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, [getIncomes]);

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">
                    Total Income: <span>${totalIncome()}</span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date, category, description, type } = income;
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
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteIncome}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    background-color: #e8f5e9; /* Light green background for the section */
    transition: background-color 0.3s ease; /* Smooth transition for background color */

    &:hover {
        background-color: #c8e6c9; /* Slightly darker green background when hovered */
    }

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff; /* White background */
        border: 2px solid #e0e0e0; /* Light gray border */
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;

        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: #003366; /* Dark blue color for the total income amount */
        }

        &:hover {
            background-color: #4caf50; /* Green background on hover */
            color: #ffffff; /* White text color on hover */
            border-color: #4caf50; /* Green border on hover */
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); /* Slightly more pronounced shadow on hover */
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
            background-color: #ffffff; /* White background color for the incomes section */
            transition: background-color 0.3s ease; /* Smooth transition for background color */

            &:hover {
                background-color: #e8f5e9; /* Light green background when hovered */
            }
        }
    }
`;

export default Income;
