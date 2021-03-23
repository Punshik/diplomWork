import React from 'react'
import {Switch , Route, Redirect} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { Navbar1 } from '../components/Navbar1'

export const MainPage = () => {
    return (
        <h1>Hello</h1>
    )
}