<<<<<<< HEAD
import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
=======
import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const cookie = Cookies.get('jwt_token')

  if (cookie === undefined) {
>>>>>>> origin/main
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
