import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="left-con">
                        <div className="chart-con">
                            <Chart />
                        </div>
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-con">
                        <div className="history-con">
                            <History />
                            <h2 className="salary-title">Min <span>Salary</span> Max</h2>
                            <div className="salary-item">
                                <p>
                                    ${Math.min(...incomes.map(item => item.amount))}
                                </p>
                                <p>
                                    ${Math.max(...incomes.map(item => item.amount))}
                                </p>
                            </div>
                            <h2 className="salary-title">Min <span>Expense</span> Max</h2>
                            <div className="salary-item">
                                <p>
                                    ${Math.min(...expenses.map(item => item.amount))}
                                </p>
                                <p>
                                    ${Math.max(...expenses.map(item => item.amount))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    background-color: #e6e6fa; /* Light purple background color */
    padding: 2rem; /* Add padding to the container */
    transition: background-color 0.3s ease; /* Smooth transition for background color */

    &:hover {
        background-color: #6a0dad; /* Dark purple background color on hover */
    }

    .stats-con {
        display: grid;
        grid-template-columns: 2fr 1.5fr;
        gap: 2rem;

        .left-con {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .chart-con {
                height: 450px;
                background: #ffffff;
                border-radius: 20px;
                padding: 2rem;
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            }

            .amount-con {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;

                .income, .expense {
                    background: #f3f3f3;
                    border: 2px solid #e1bee7;
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
                    border-radius: 12px;
                    padding: 2rem;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;

                    &:hover {
                        transform: scale(1.05);
                        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
                    }

                    h2 {
                        font-size: 1.4rem;
                    }

                    p {
                        font-size: 2.5rem;
                        font-weight: 700;
                        margin-top: 1rem;
                    }
                }

                .income {
                    background: #f3f3f3;
                    border: 2px solid #e1bee7;
                }

                .expense {
                    background: #f3f3f3;
                    border: 2px solid #e1bee7;
                }

                .balance {
                    grid-column: 1 / -1;
                    background: #e0f7fa;
                    border: 2px solid #80deea;
                    border-radius: 12px;
                    padding: 2rem;
                    text-align: center;
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

                    h2 {
                        font-size: 1.4rem;
                    }

                    p {
                        font-size: 3rem;
                        font-weight: 700;
                        color: var(--color-green);
                    }
                }
            }
        }

        .right-con {
            .history-con {
                background: #ffffff;
                border-radius: 20px;
                padding: 2rem;
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

                h2 {
                    margin: 1.5rem 0;
                    font-size: 1.5rem;
                    color: #555;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .salary-title {
                    font-size: 1.3rem;
                    span {
                        font-size: 1.6rem;
                        color: #29b6f6;
                    }
                }

                .salary-item {
                    background: #f3f3f3;
                    border: 2px solid #e1bee7;
                    padding: 1.5rem;
                    border-radius: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;

                    p {
                        font-weight: 600;
                        font-size: 1.8rem;
                    }
                }

                .history-item {
                    background: #f3f3f3;
                    border: 2px solid #e1bee7;
                    padding: 1.5rem;
                    border-radius: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    transition: background 0.3s ease, box-shadow 0.3s ease;

                    &:hover {
                        background: #e1bee7;
                        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
                    }

                    p {
                        font-weight: 600;
                        font-size: 1.8rem;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .stats-con {
            grid-template-columns: 1fr;
            .right-con {
                margin-top: 2rem;
            }
        }
    }
`;

export default Dashboard;

