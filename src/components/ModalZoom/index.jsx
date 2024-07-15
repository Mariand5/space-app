import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import BotonIcono from "../BotonIcono"
//La posición fisex hace que se salga del flujo del documento y se mantenga fija en su lugar sin importar que la pagina se desplace
const Overlay = styled.div`
    background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
//Usamosa el dialog para crear una ventana emergente y colocamos alli nuestro componente Imagen
//La posición lo coloca de de manera absoluta en relación con su elemento padre más cercano con posición relativa
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const ModalZoom = ({ foto, alCerrar, alAlternarFavorito }) => {
    //Usamos la negación del objeto para convertirlo en un valor booleano
    return <>
        {foto && <>
            <Overlay />
            <DialogEstilizado open={!!foto} onClose={alCerrar}>
                <Imagen foto={foto} expandida={true} alAlternarFavorito={alAlternarFavorito}/>
                <form method="dialog">
                    <BotonIcono formMethod="dialog">
                        <img src="/iconos/cerrar.png" alt="Icono de cerrar" />
                    </BotonIcono>
                </form>
            </DialogEstilizado>
        </>}

    </>


}

export default ModalZoom