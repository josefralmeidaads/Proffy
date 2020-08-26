import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Lading'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

const Routes = () => {
    return(
        <BrowserRouter>
                <Route path="/" exact component={Landing} name="Landing" />
                <Route path="/study"  component={TeacherList} name="TeacherList" />
                <Route path="/give-classes"  component={TeacherForm} name="TeacherForm" />
        </BrowserRouter>
    )
}

export default Routes;