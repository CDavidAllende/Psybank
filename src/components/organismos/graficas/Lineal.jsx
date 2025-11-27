import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Lineal({datagrafica,data}) {
  return (
    <Container>
      <section>
        <Line data={datagrafica}/>
      </section>
      <section>
        <h2>Gastos por categoria</h2>
        {
          data.map((item,index) =>{
            return(
              <ContentCards>
                <div className="contentDescripcion">
                  <span>{item.icono}</span>
                  <span className="descripcion">{item.descripcion}</span>
                </div>
                <span>{item.total}</span>
              </ContentCards>
         )})
        }
      </section>
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;
const ContentCards = styled.div`
  display: flex;
  justify-content: space-between;
  .contentDescripcion{
    display: flex;
    gap: 10px;
  }
`;
