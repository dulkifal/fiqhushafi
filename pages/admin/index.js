import { Route, Redirect } from "react-router-dom";
import react from 'react';

const PrivateRoute = props => {
  
  let user = 0;

// import { useUser } from './useUser';
// const user = useUser();
if (user) {
  return <Redirect to="/login" />;
}
return <Route {...props} />;
}
export default PrivateRoute;