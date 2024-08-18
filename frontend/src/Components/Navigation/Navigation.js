import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <h2>Abhinav</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={active === item.id ? 'active' : ''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    );
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: #6a1b9a; /* Purple background color */
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(6px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: 0.2rem;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .text {
            h2 {
                color: #FFFFFF; /* White color for text */
                font-size: 1.5rem;
                margin-bottom: 0.2rem;
            }
            p {
                color: rgba(255, 255, 255, 0.8); /* Lighter white color for text */
                font-size: 1rem;
            }
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: flex;
            align-items: center;
            margin: 0.8rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #FFFFFF; /* White color for text */
            padding-left: 1rem;
            position: relative;
            border-radius: 8px;
            padding: 0.5rem;
            background: rgba(255, 255, 255, 0.1); /* Semi-transparent background for menu items */

            &:hover {
                background: rgba(255, 255, 255, 0.2); /* Lighter background on hover */
            }

            i {
                color: #FFFFFF; /* White color for icons */
                font-size: 1.5rem;
                margin-right: 1rem;
            }
        }
    }

    .active {
        color: #FFFFFF !important; /* White color for active text */
        background: rgba(255, 255, 255, 0.3) !important; /* Light background for active item */
        
        i {
            color: #FFFFFF !important; /* White color for active icon */
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #FFFFFF; /* White indicator for active item */
            border-radius: 0 10px 10px 0;
        }
    }

    .bottom-nav {
        li {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-weight: 500;
            color: #FFFFFF; /* White color for text */
            padding: 0.8rem;
            border-radius: 8px;
            transition: background 0.3s ease;

            &:hover {
                background: rgba(255, 255, 255, 0.2); /* Lighter background on hover */
            }

            i {
                margin-right: 0.5rem;
            }
        }
    }
`;

export default Navigation;

