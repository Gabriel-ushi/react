import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ModalSavePin} from "../../../../my-project/src/Components/containers/ModalSavePin.js"
import {Modalpasta} from "../../../../my-project/src/Components/Modal/Modalpasta.js"
import {Alerta} from "../../../../my-project/src/Components/Notification/Notification.js"
import {useAppContext} from "../../../../my-project/src/Store/AppContext.js"
import {CardModal} from '../../../../my-project/src/Components/containers/CardModal'
import { useState, useEffect } from 'react';
import { saveFoldersSucessType } from '../../Store/Types.js';
import { fetchPinsAction } from '../../Store/Actions.js';


export const Homepage = () => {
    const { state, dispatch } = useAppContext()
    const [showFeedback, setshowFeedback] = useState(false)

const PinsNormalized = state.pins.map (pin =>({
        ...pin,
        total: state.folders.filter(folder =>(
            folder.pins.includes(pin.id)
)).lenght
}))

useEffect(() =>{
    fetchPinsAction(dispatch)
}, [dispatch])

useEffect (() =>{
        if (state.type ===saveFoldersSucessType){
            setshowFeedback(true)
        }
},[state.type])

    return(
        <div>
            <ModalSavePin open={state.mode === 'savePin'}/>
            {showFeedback && (<Alerta message = "criado com sucesso" variant="danger" onClose={()=>setshowFeedback(false)}/>)}
            <Modalpasta open={state.mode === 'createFolder'} />
                    <Container fluid>
                        <Row>
                            {PinsNormalized.map(pin =>(
                                <Col xs ={12} md={2} key={pin.id}><CardModal {...pin} /></Col>
                            ))}
                        </Row>
                    </Container>
        </div>
    )
}