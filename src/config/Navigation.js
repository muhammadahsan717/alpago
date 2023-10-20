import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import CompletedProjects from '../pages/CompletedProjects'
import UnderConstructionProjects from '../pages/UnderConstructionProjects'
import Leads from '../pages/Leads'

export const nav = [
    {path: '/dashboard', name: 'DASHBOARD', element: <Dashboard />, isMenu: false, isPrivate: true},
    {path: '/home', name: 'HOME', element: <Home />, isMenu: false, isPrivate: true},
    {path: '/about', name: 'ABOUT', element: <About />, isMenu: false, isPrivate: true},
    {path: '/service', name: 'SERVICE', element: <Service />, isMenu: false, isPrivate: true},
    {path: '/completed-projects', name: 'COMPLETED PROJECTS', element: <CompletedProjects />, isMenu: false, isPrivate: true},
    {path: '/under-construction-projects', name: 'UNDER CONSTRUCTION PROJECTS', element: <UnderConstructionProjects />, isMenu: false, isPrivate: true},
    {path: '/leads', name: 'LEADS', element: <Leads />, isMenu: false, isPrivate: true}
];