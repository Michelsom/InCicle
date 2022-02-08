import { Logo } from "../../assets";
import { Container } from "./style";

export function Header(){
  return(
    <Container>
      <img src={Logo}/>
    </Container>
  )
}