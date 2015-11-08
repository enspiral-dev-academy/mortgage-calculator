/**
 * Imports
 */

import el from 'vdom-element'
import vdux from 'vdux'
import app from './app'
import createStore from './store'
import {listen} from 'virtual-component'
import {handleOnce} from 'redux-effects-events'
import element from 'vdom-element'
import App from './app'
import {initializeApp} from './actions'

console.log('initializeApp', initializeApp)

/**
 * Setup store
 */

const store = createStore({
  todos: []
})



/**
 * App
 */

store.dispatch(handleOnce('domready', () => {
  listen(store.dispatch)
  store.dispatch(initializeApp())
  vdux(store, state => <App key='app' state={state.app} {...state}/>, document.body)
}))
