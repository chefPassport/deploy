import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Logo from '../img/Logo.jpg'
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const NavBar = () => {
    const classes = useStyles();
    let history = useHistory();

    const logout = () => {
        localStorage.removeItem("token");
        history.push('./')
     };

    return (
        <Nav>
            <Img src={Logo} alt='company logo'/>
            <CrumbsCont>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link 
                        color="inherit" 
                        href="/home" 
                        onClick={() => history.push('/home')} 
                        className={classes.link}>
                        <HomeIcon className={classes.icon} />
                        Home
                    </Link>
                    <Link
                        color="inherit"
                        href="/profile"
                        onClick={() => history.push('/profile')}
                        className={classes.link}>
                        <AccountCircleIcon className={classes.icon} />
                        Profile
                    </Link>
                    <Link 
                        color="inherit" 
                        href="#" 
                        // onClick={} 
                        className={classes.link}>
                        <SettingsIcon className={classes.icon} />
                        Settings
                    </Link>
                    <Link 
                        color="inherit" 
                        href="#" 
                        onClick={logout} 
                        className={classes.link}>
                        <ExitToAppIcon className={classes.icon} />
                        Log Out
                    </Link>
            </Breadcrumbs>
        </CrumbsCont>
      </Nav>
    )
};

export default NavBar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`;
const CrumbsCont = styled.div`
    display: flex;
    align-items: center;
`;
const Img = styled.img`
    max-height: 70px;
`;
