/* eslint-disable no-unused-vars */
import {Homepage} from "./Pages/HomePage/Home.js"
import {Header} from "./Partial/Header"
import {Minhaspastas} from "./Pages/Minhaspastas/Minhaspastas.js"

import {AppContext} from "./Store/AppContext.js"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const initialState = {
    activePinId:  null,
    mode:null,
    type:null,
    folders: [],
    pins:[]
}
function App() {
    return(
        <BrowserRouter>
            <div className="App">
                <AppContext initialState={initialState}>
                    <Header />
                        <Routes>
                            <Route exact path="/" element={<Homepage />}/>
                            <Route exact path="/minhas-pastas" element={<Minhaspastas />}/>
                        </Routes>
                </AppContext>
            </div>
         </BrowserRouter>
    )
}

export default App;