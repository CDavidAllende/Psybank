import styled from "styled-components";
import {UserAuth,BtnCircular} from "../../index"

export function DataUser() {
  const {user} =UserAuth()
  return (
    <Container>
      <div className="imgContainer">
        <img src={user.picture}/>
      </div>
      <div className="btncircularContainer">
        <BtnCircular />
      </div>
    </Container>);
}
const Container =styled.div`
  
`