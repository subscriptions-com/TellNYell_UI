import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import { useHistory } from "react-router-dom";
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function LogIn() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    var history = useHistory();
    return (
        <Router>
            <div>

                <Button  aria-controls="customized-menu"
                         aria-haspopup="true"
                         variant="outlined"
                         color="secondary"
                         onClick={handleClick}>
                    LogIn
                </Button>{' '}
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                        <Switch>
                            <ListItemText primary="LOGIN AS USER" onClick={() => history.push("/tellnyell/login/user")} /></Switch>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <Switch>
                            <ListItemText primary="LOGIN AS BUSINESS OWNER" onClick={() => history.push("/tellnyell/login/BO")} /></Switch>
                    </StyledMenuItem>
                </StyledMenu>
            </div></Router>
    );
}