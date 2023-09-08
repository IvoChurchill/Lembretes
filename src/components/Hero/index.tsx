import elefanteImage from "../../assets/images/Elefante.jpg";
import {Container} from "./styles";

export function Hero() {
    return (
        <Container>
            <img src={elefanteImage} alt="Foto de um Elefante"></img>
        </Container>
    );
}