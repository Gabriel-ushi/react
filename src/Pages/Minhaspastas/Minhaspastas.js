import Container from 'react-bootstrap/Container';
import {Listagem} from '../../Components/Lista/Listgroup'
import {useAppContext} from "../../../../my-project/src/Store/AppContext.js"

const adapterItems  =(items) => {
    return items.map(item => ({
        ...item, 
        title: item.name,
        total: item.pins.lenght
    }))
}

export const Minhaspastas = () =>{
    const {state} = useAppContext()
    return (
        <Container fluid>
        <Listagem items={adapterItems(state.folders)}/>
      </Container>
    )
}