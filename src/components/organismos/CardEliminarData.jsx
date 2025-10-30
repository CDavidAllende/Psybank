import styled from "styled-components";
import {Btnsave} from "../moleculas/Btnsave"

export function CardEliminarData() {
  return (
    <Container>
        <h2>Resetear todo</h2>
        <span>
           🐥🐥 ADVERTENCIA !! Esta accion es irrevesible, una vez ejecutada se eliminara
            todos tus movimientos icluidos las categorias asi como los saldos acumulados
            en tu cuenta. 🐥🐥
        </span>
        <Btnsave titulo="Resetear" bgcolor="yellow"/>
    </Container>);
}
const Container =styled.div`
  
`