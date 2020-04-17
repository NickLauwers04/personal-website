import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <BrowserRouter>
    	<Layout/>
  	</BrowserRouter>,

    document.body.appendChild(document.createElement('div')),
  )
})