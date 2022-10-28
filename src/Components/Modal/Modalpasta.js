/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Modelo} from "../Modal/Modal.js"
import {useState} from 'react'
import { useAppContext } from "../../Store/AppContext.js";
import Form from 'react-bootstrap/Form';
import { closemodals, saveFoldersAction} from "../../Store/Actions.js";
import { saveFoldersInitType, saveFoldersSucessType } from "../../Store/Types.js";
import { useEffect } from "react";

export const Modalpasta = ({open}) =>{
    const [folderName, setFolderName] = useState ('')
    const {state, dispatch} = useAppContext()

    const handleCloseFolder =() => {
        dispatch(closemodals())
    }
    const handleChange =(e)=>{
        setFolderName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Fez o submit', folderName)
        saveFoldersAction(dispatch, folderName, state.activePinId)

    }

    useEffect (() =>{
        if (state.type ===saveFoldersSucessType){
            handleCloseFolder()
        }
    },[state.type])

    return(
        <Modelo 
        open ={open}
        onHide = {handleCloseFolder}
        title = "criar pasta"
        controls = {[
            {
            label: "criar e salvar",
            loadingLabel: 'criando',
            variant: "secondary",
            loading:state.type === saveFoldersInitType,
            type: "submit",
            form: "criar-pasta"
            }
        ]}>
            <Form onSubmit={handleSubmit} id="criar-pasta">
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome da pasta</Form.Label>
        <Form.Control type="text" placeholder="Ex: matematica" onChange = {handleChange} value={folderName}/>
      </Form.Group>
    </Form>
        </Modelo>
    )
}