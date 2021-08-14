import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import MyCalendar from './pages/Calendar/MyCalendar';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';

import './App.css';

function App(): JSX.Element {
  // return (
  //   <MuiThemeProvider theme={theme}>
  //     <BrowserRouter>
  //       <SnackBarProvider>
  //         <AuthProvider>
  //           <SocketProvider>
  //             <Switch>
  //               <Route exact path="/login" component={Login} />
  //               <Route exact path="/signup" component={Signup} />
  //               <Route exact path="/dashboard">
  //                 <Dashboard />
  //               </Route>
  //               <Route path="*">
  //                 <Redirect to="/login" />
  //               </Route>
  //             </Switch>
  //           </SocketProvider>
  //         </AuthProvider>
  //       </SnackBarProvider>
  //     </BrowserRouter>
  //   </MuiThemeProvider>
  // );
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/calendar" component={MyCalendar} />
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
