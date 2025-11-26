import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import {v, Dona, useMovimientosStore, useOperaciones, useUsuariosStore } from "../../index"

export function Tabs() {
    const [activeTab, setactiveTab] = useState(0);
    const handleClick = (index) => {
        setactiveTab(index);
    };
const {idusuario} = useUsuariosStore();
const {año,mes,tipo} = useOperaciones();
const {dataRptMovimientosAñoMes, rptMovimientosAñoMes} = useMovimientosStore();

const datagrafica = {
  labels: dataRptMovimientosAñoMes?.map((item) =>item.descripcion),
  datasets: [
    {
      label: 'Total',
      data: dataRptMovimientosAñoMes?.map((item) =>item.total),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

const { isLoading, error } = useQuery({
  queryKey: ["Reporte movimientos"],
  queryFn: () =>
    rptMovimientosAñoMes({
      año,
      mes,
      tipocategoria: tipo,
      idusuario,
    }),
});
    if (isLoading) {
        return <h1>Cargando ...</h1>        
    }
    if(error){
        return(<h1>Error</h1>)
    }
    return (
        <Container className="container" activeTab={`${activeTab}00%`}>
            <ul className="tabs">
                <li className={activeTab === 0 ? "active" : ""}
                 onClick={() => handleClick(0)}
                >
                    <v.iconopie />
                </li>
                <li className={activeTab === 1 ? "active" : ""}
                 onClick={() => handleClick(1)}
                >
                    <v.iconolineal />
                </li>
                <li className={activeTab === 2 ? "active" : ""}
                 onClick={() => handleClick(2)}
                >
                    <v.iconobars />
                </li>

                <div className="glider" style={{ left: `${activeTab * 150}px` }}></div>
            </ul>

            <div className="tab-content">
                {activeTab === 0 && <Dona datagrafica={datagrafica}/>}
                {activeTab === 1 && <h1>Area 2</h1>}
                {activeTab === 2 && <h1>Area 3</h1>}
            </div>
         </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .tabs {
        list-style: none;
        display: flex;
        box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.1);
        background-color: ${(props) => props.theme.bg};
        position: relative;
        border-radius: 100px;
        justify-content: space-between;
        top: 0;
        left: 0;

        * {
            z-index: 2;
        }

        color: ${(props) => props.theme.text};

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 54px;
            width: 150px;
            font-size: 1.25rem;
            font-weight: 500;
            border-radius: 99px;
            cursor: pointer;
            transition: all 0.25s ease;

            svg {
                font-size: 1.7rem;
                transition: all 0.25s ease;
            }
        }
        li.active {
            color: #b388ff;
            transform: scale(1.18);

            svg {
                color: #b388ff;
                filter: drop-shadow(0 0 6px #b388ff);
            }
        }
        .glider {
            position: absolute;
            top: 0;
            left: 0;
            width: 150px;
            height: 54px;
            border-radius: 99px;
            background: rgba(179, 136, 255, 0.25);
            box-shadow: 0 0 12px 6px rgba(179, 136, 255, 0.7);
            transition: left 0.35s ease;
            z-index: 1;
        }
    }
`