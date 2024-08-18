import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <MainContent>
          {displayData()}
        </MainContent>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #e1bee7;
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 2rem 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  max-height: calc(100vh - 4rem);

  /* Hover effects for all elements inside MainContent */
  & > * {
    margin-bottom: 1rem;
    padding: 0.5rem;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    border-radius: 8px;

    &:hover {
      transform: scale(1.03);
      background-color: #f1f1f1;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default App;

