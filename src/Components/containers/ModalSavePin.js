/* eslint-disable react-hooks/exhaustive-deps */
import {Modelo} from "../Modal/Modal.js"
import {Button} from "../Button/Button"
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAppContext } from "../../Store/AppContext.js";
import { closemodals } from "../../Store/Actions.js";
import { useEffect } from "react";
import { useState } from "react";
import { fetchFoldersAction ,openModalCreateFolderAction, savePininFolderAction } from "../../Store/Actions.js";
import { SavePinFolder } from "../../Services/Pinservice.js";

export const ModalSavePin = ({open}) =>{
  const {state, dispatch} = useAppContext()
  const [itensLoading, setitensLoading] = useState({})
  const handleClosePin =() => {
    console.log('fechando')
    dispatch(closemodals())
}

const handleCreateFolder = () => {
    console.log ("criando pasta")
    dispatch(openModalCreateFolderAction())
}

const handleClick = async (folderId) => {
  savePininFolderAction(dispatch, state.activePinId, folderId)
  setitensLoading((prevState) =>{
    return{
      ...prevState,
      [folderId]: true
    }})
  await SavePinFolder(dispatch, state.activePinId, folderId)
  setitensLoading((prevState) =>{
    return{
      ...prevState,
      [folderId]: false
    }
  })
}

const foldersNormalize = state.folders.map(folder =>{
    return({
      ...folder, 
      saved: folder.pins.includes(state.activePinId)
    })
})

useEffect(() =>{
  fetchFoldersAction(dispatch)
},[])

useEffect(() =>{
},[state])

  return (
    <Modelo title = "Salvar pin" open = {open} onHide = {handleClosePin} controls = {[
        {
            label: "criar pasta",
            variant: "secondary",
            loading:false,
            loadingLabel:"criar pasta",
            onClick: handleCreateFolder
        }
    ]}>
       <ListGroup variant="flush">
        {foldersNormalize.map ((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>      
            <Row>
                <Col xs = {8}>{folder.name}</Col>
                <Col xs = {4}><Button 
                label= {folder.saved? 'Salvo': 'Salvar'}
                loadingLabel="Salvando"
                onClick ={() => handleClick(folder.id)}
                variant = {folder.saved? 'secondary': 'primary'}
                disabled={folder.saved}
                loading={itensLoading[folder.id]}
                >
                  </Button></Col>
            </Row>
      </ListGroup.Item>
        ))}
      <ListGroup.Item>      
            <Row>
                <Col xs = {8}>trigonometria</Col>
                <Col xs = {4}><Button label= "Salvar" loadingLabel="Salvando"></Button></Col>
            </Row>
      </ListGroup.Item>
      </ListGroup>
    </Modelo>
  );
}
