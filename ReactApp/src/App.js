import React from 'react'
import './App.css'
import AppRoutes from './router/router'
import { HashRouter as Router,Switch,Route,} from 'react-router-dom'
import {Provider} from 'react-redux'

function App (props) {
	console.log(props)
	const {store} = props
	return (
		<div className="App">
			<Provider store={store}>
				<Router >
					<Switch>
						{AppRoutes.map((item,index)=>{
							return <Route  key={index} exact={item.exact} path={item.path} render={props=>(<item.component  {...props}  child={item.child}/>)}/>
						})}
					</Switch>

				</Router>
			</Provider>

		</div>
	)
}

export default App
