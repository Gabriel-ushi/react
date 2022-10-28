import * as Types from './Types.js'

export function reducer (state, action) {
    // eslint-disable-next-line default-case
    console.log(action.payload, "reducer")
    switch (action.type){
        case Types.openModalSavePinType:
            return{
                ...state, 
                type: Types.openModalSavePinType,
                mode: 'savePin',
                activePinId:action.payload
            }
            case Types.closeModalsType:
                return {
                    ...state,
                    type: Types.closeModalsType,
                    mode:null
                }
            case Types.fetchFoldersInitType:
                return {
                    ...state,
                    type: Types.fetchFoldersInitType,
                }
            case Types.fetchFoldersSucessType:
                return {
                    ...state,
                    type: Types.fetchFoldersSucessType,
                    folders:action.payload
                    }
            case Types.openModalCreateFolderType:
                return {
                    ...state,
                    type: Types.openModalCreateFolderType,
                    mode: 'createFolder'
                    }
            case Types.saveFoldersSucessType:
                return{
                    ...state,
                    type: Types.saveFoldersSucessType,
                folders:[
                    ...state.folders,
                    action.payload
                ]
                }   
                case Types.savePinsSucessType:
                return{
                    ...state,
                    type: Types.savePinsSucessType,
                folders:[
                    action.payload
                ]
                }  
                case Types.fetchPinsSucessType:
                return {
                    ...state,
                    pins: action.payload,
                    } 
        default:
            return {
                ...state,
                type:action.type
            }
}}