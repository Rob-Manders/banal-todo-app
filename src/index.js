
import './scss/index.scss'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import Theme from '@Context/Theme'

ReactDOM.render(
	<Theme>
		<App />
	</Theme>,
	document.getElementById('root')
)