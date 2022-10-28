import *  as Types from './Types.js'
import * as Pinservice from '../Services/Pinservice'

export const openModalSavePin = (pinId) => ({
    type: Types.openModalSavePinType,
    payload: pinId
});

export const closemodals = () => ({
    type: Types.closeModalsType 
})

export const fetchFoldersInitAction = () => ({
    type: Types.fetchFoldersInitType
})

export const fetchFoldersSucessAction = (folders) => ({
    type: Types.fetchFoldersSucessType,
    payload: folders
})

export const fetchFoldersAction =  async (dispatch) => {
    dispatch(fetchFoldersInitAction())
    const folders = await Pinservice.getFolders()
    dispatch(fetchFoldersSucessAction(folders))
}

export const openModalCreateFolderAction = () => ({
    type: Types.openModalCreateFolderType
})

export const saveFoldersInitAction = () => ({
    type: Types.saveFoldersInitType
})

export const saveFoldersSucessAction = (folder) => ({
    type: Types.saveFoldersSucessType,
    payload: folder
})

export const saveFoldersAction =  async (dispatch, folderName, pinId) => {
    dispatch(saveFoldersInitAction())
    await new Promise (resolve => {
        setTimeout(resolve, 1000)
    })
    const NewFolder = await Pinservice.Savefolders(folderName)
    const folder = await Pinservice.SavePinFolder(NewFolder.id, pinId)
    dispatch(saveFoldersSucessAction(folder))
}

export const savePinsInitAction = () => ({
    type: Types.savePinsInitType
})

export const savePinsSucessAction = (folders) => ({
    type: Types.savePinsSucessType,
    payload: folders
})

export const savePininFolderAction = async (dispatch, pinId, folderId) => {
    dispatch(savePinsInitAction())
    await new Promise (resolve => {
        setTimeout(resolve, 1000)
    })
    await Pinservice.SavePinFolder(folderId, pinId)
    const folders = await Pinservice.getFolders()
    dispatch(savePinsSucessAction(folders))
}

export const fetchPinsInitAction =  async () => ({
    type: Types.fetchPinsInitType
})

export const fetchPinsSucessAction = (pinsData) => ({
    type: Types.fetchPinsSucessType,
    payload: pinsData
})

export const fetchPinsAction = async (dispatch) => {
    dispatch(fetchPinsInitAction())
    const pinsData = await Pinservice.getPins()
    dispatch(fetchPinsSucessAction(pinsData))
}
 
