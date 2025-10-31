import styled from "styled-components";
import {Btnsave} from "../moleculas/Btnsave"
import {v} from "../../styles/variables"
import {useCategoriasStore, useUsuariosStore} from "../../index"
import Swal from "sweetalert2";

export function CardEliminarData() {
  const {eliminarCategoriasTodas} = useCategoriasStore();
  const {datausuarios} = useUsuariosStore()
  const eliminar = async()=>{
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Una vez eliminado, ¡No podrá recuperar estos registros!",
        icon: "!! Warning ¡¡",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const p = {
            idusuario:datausuarios.id,
          };
          await eliminarCategoriasTodas(p);
        }
      });
  };
  return (
    <Container>
        <h2>Resetear todo</h2>
        <span>
           🐥🐥 ADVERTENCIA !! Esta accion es irrevesible, una vez ejecutada se eliminara
            todos tus movimientos icluidos las categorias asi como los saldos acumulados
            en tu cuenta. 🐥🐥
        </span>
        <Btnsave titulo="Resetear" bgcolor="yellow"
        funcion={eliminar}/>
        <div className="contentImg">
          <img src={v.logo}/>
        </div>
    </Container>);
}
const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgba(255, 99, 99, 0.87);
  height: 100%;
  background: rgb(42, 1, 1);
  background: linear-gradient(
    18deg,
    rgba(253, 0, 0, 0.12) 9%,
    rgba(252, 69, 69, 0.3) 100%
  );
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  gap: 20px;

  h2 {
    color: rgba(252, 69, 69, 0.72);
  }
  span {
    color: rgba(251, 82, 82, 0.67);
    font-size: 120%;
  }
  .contentImg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10%;
    opacity: 0.18;
    margin: 30px;
    img {
      width: 100%;
      animation: flotar 1.7s ease-in-out infinite alternate;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;