import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import ChatSideBanner from '../../components/ChatSideBanner/ChatSideBanner';
import { useEffect } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import Logo from '../../Images/logo.png';
import Avatar from '../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  //const { loggedInUser } = useAuth();
  //const { initSocket } = useSocket();

  //const history = useHistory();

  // useEffect(() => {
  //   initSocket();
  // }, [initSocket]);

  // if (loggedInUser === undefined) return <CircularProgress />;
  // if (!loggedInUser) {
  //   history.push('/login');
  //   // loading for a split seconds until history.push works
  //   return <CircularProgress />;
  // }

  // return (
  //   <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
  //     <CssBaseline />
  //     <Grid item className={classes.drawerWrapper}>
  //       <ChatSideBanner loggedInUser={loggedInUser} />
  //     </Grid>
  //   </Grid>
  // );

  return (
    <Grid container direction="column" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <header className="dashboard--header">
        <div className="dashboard--header--branding">
          <div className="branding--logo">
            <img src={Logo} alt="Kanban Logo" />
          </div>
        </div>
        <nav className="dashboard--header--nav">
          <ul>
            <li className="nav--item active">
              <a href="#">
                <span className="material-icons-outlined">space_dashboard</span>
                Dashboard
              </a>
            </li>
            <li className="nav--item">
              <a href="#">
                <span className="material-icons-outlined">calendar_today</span>
                Calendar
              </a>
            </li>
          </ul>
        </nav>
        <div className="dashboard--header--actions">
          <button className="actions--create-board">
            <span className="material-icons-outlined">add</span>
            Create Board
          </button>
        </div>
        <div className="dashboard--header--user">
          <img src={Avatar} alt="avatar" className="user--avatar" />
        </div>
      </header>
      <main className="main">
        <header className="main--header">
          <h1>My School Board</h1>
          <nav className="menu">
            <span className="material-icons-outlined">menu</span>
          </nav>
        </header>
      </main>
    </Grid>
  );
}
