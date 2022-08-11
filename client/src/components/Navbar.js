import React from 'react'
import logo from '../assets/logo.png'
import Avatar from '@mui/material/Avatar';
// import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export const Navbar = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='navbar' style={{ width: '100%', borderBottom: '1.5px solid #E7E7ED', display: "flex", flexDirection: 'row', alignItems: 'center', height: '72' }}>
            <div className="left" style={{ width: '24%', }}>
                <div className="logo" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '19px', marginBottom: '19px', cursor: 'pointer' }}>
                    <img style={{ width: '25px', marginLeft: '9%', marginRight: '8.45px' }} src={logo} alt="" />
                    <h3>Drive</h3>
                </div>
            </div>
            <div className="right" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '80%' }}>
                <div className="searchbar" style={{ width: '838px', backgroundColor: '#E7E7ED', display: 'flex', flexDirection: 'row', alignItems: 'center', height: '38px', borderRadius: '7px' }}>
                    <input placeholder='Seach Drive' type="text" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', width: '93.8%', height: 'inherit', paddingLeft: '18px' }} />
                    <SearchIcon style={{ width: '24px', height: '20px', cursor: 'pointer' }}></SearchIcon>
                </div>
                <div className="user_settings" style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '11px' }}>
                    {/* <AppsIcon color="primary" style={{ width: '24px', height: '24px', marginLeft: '12px', marginRight: "9px", cursor: 'pointer' }}></AppsIcon> */}
                    <Avatar src={props.photo} onClick={handleClick} style={{ width: '29px', height: '29px', marginLeft: '12px', marginRight: "9px", cursor: 'pointer' }} />
                    <Menu
                        disableAutoFocusItem={false}
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 25,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={() => { props.setAuth(null); localStorage.removeItem('authuser') }}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
