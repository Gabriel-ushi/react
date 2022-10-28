/* eslint-disable no-unused-vars */
import {Cards} from '../Card/Card.js'
import { useAppContext } from '../../Store/AppContext.js'
import { openModalSavePin } from '../../Store/Actions.js'

export const CardModal = (props) => {
    const {state, dispatch} = useAppContext()

    const handleClick = (pinId) => {
        console.log("cLICOU", pinId)
        dispatch(openModalSavePin(pinId))
    }
    return(
        <Cards {...props} onClick = {handleClick}/>
    )
}