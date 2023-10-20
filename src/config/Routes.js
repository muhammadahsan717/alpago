import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import CompletedProjects from '../pages/CompletedProjects'
import UnderConstructionProjects from '../pages/UnderConstructionProjects'
import Leads from '../pages/Leads'
import Login from '../components/Login'
import MainPage from '../pages/MainPage'


const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route element={<PrivateWrapper />}> */}
                <Route path='/dashboard' element={ <Dashboard to='/' /> } />
                <Route path='/home' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/service'element={ <Service /> } />
                <Route path='/completed-projects' element={ <CompletedProjects /> } />
                <Route path='/under-construction-projects' element={ <UnderConstructionProjects /> } />
                <Route path='/leads'  element={ <Leads /> }/>
                {/* </Route> */}
                <Route path='/login' element = {<Login />}/>
                <Route path='/' element = {<MainPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers