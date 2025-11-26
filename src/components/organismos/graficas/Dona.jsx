import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Dona({datagrafica}) {
  return (
    <Container>
      <Doughnut data={datagrafica}/>
    </Container>
  );
}

const Container = styled.div`
  
`;
