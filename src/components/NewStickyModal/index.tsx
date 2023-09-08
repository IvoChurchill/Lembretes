import { useContext, useState } from "react";
import Modal from "react-modal";
import NotesContext from "../../hooks/notesContext";
import { Button } from "../Button";
import { Container } from "./styles";




interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewStickyModal({isOpen, onRequestClose}: ModalProps) {

    const [stickyName, setStickyName] = useState("");
    const [stickyDescripton, setStickyDescription] = useState("");
    const { notes, setNotes } = useContext<any>(NotesContext);

    const formData = {
        title: stickyName,
        description: stickyDescripton,
    };

function handleFormSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    onRequestClose();
}

    return (
    <Modal isOpen={isOpen} 
    onRequestClose={onRequestClose} 
    shouldCloseOnEsc className="react-modal-content" 
    style={{overlay: {background: "rgba(0,0,0,0.409)"}}}
    >
        <Container onSubmit={handleFormSubmit}>
            <h1>Criar Lembrete</h1>
            <div>
                <input type="text" placeholder="Nome" 
                onChange={(event) => setStickyName(event.target.value)} />
                <textarea placeholder="Descrição" 
                onChange={(event) => setStickyDescription(event.target.value)} />
            </div>
            <Button title="Adicionar Lembrete" 
            onClick={() => setNotes([...notes, formData])} />
        </Container>
    </Modal>
 );
}