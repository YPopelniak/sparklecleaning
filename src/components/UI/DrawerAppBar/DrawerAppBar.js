import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from '../../imgs/logo2.png'
import BookScheduleButton from "../BookScheduleButton/BookScheduleButton";
import './DrawerAppBar.css'
import {createTheme, ThemeProvider} from "@mui/material/styles";

const navItems = [
    {name: "HOME", id: '#home'},
    {name: "WHAT WE ARE OFFERING", id: '#what_we_are_offering'},
    {name: "OUR SERVICES", id: '#our_services'},
    {name: 'CONTACT', id: '#contact'},

];

const theme = createTheme({
    palette: {
        primary: {
            main: '#003156',
        },

    },
});

function DrawerAppBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}} className={'nav-wrapper'}>
            <Typography sx={{my: 1}}>
                <a href="/" className="brand-logo">
                    <img src={logo} alt={'logo'}/>
                </a>
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: "center"}}>
                            <ListItemText primary={<a href={item.id}>{item.name}</a>}/>
                        </ListItemButton>
                    </ListItem>

                ))}
                <ListItem disablePadding>
                    <ListItemButton sx={{textAlign: "center"}}>
                        <ListItemText primary={<a href={'#customers'}>CUSTOMERS</a>}/>
                    </ListItemButton>
                </ListItem>
                <BookScheduleButton/>

            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: "flex",
                    '& .MuiToolbar-root': {
                        paddingLeft: 0,
                        paddingRight: '0',
                    }
                }}
                className={'nav-wrapper'}>
                <CssBaseline/>
                <AppBar component="nav" sx={{
                    zIndex: 999,
                    backgroundColor: '#11ffee00',
                    padding: '0',
                    position: 'inherit', boxShadow: 'none',

                }}>
                    <Toolbar sx={{justifyContent: 'flex-end', p: 0, alignItems: 'flex-start'}}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, color: "#292D32"}}
                        >
                            <a href="/" className="brand-logo"><img src={logo} alt={'logo'}/></a>
                            <h3 className={'name-logo'}>HIGHLY PROFESSIONAL CLEANING</h3>
                        </Typography>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            className={'MenuIcon'}

                            sx={{
                                display: {md: 'none'}, color: "#292D32"
                            }}
                        >
                            <MenuIcon
                            />
                        </IconButton>
                        <Box sx={{
                            display: {xs: 'none', md: 'block'},
                            flexGrow:"2",
                            '& .MuiButtonBase-root': {
                                '&:hover': {
                                    border: "1px solid #003156"
                                }
                            }
                        }}>
                            <div className={'hide'} style={{display: 'flex'}}>
                                {navItems.map((item) => (
                                    <a href={item.id}>
                                        <Button key={item.name}

                                                className={'hide__button'}>
                                            {item.name}
                                        </Button>
                                    </a>

                                ))}
                                <BookScheduleButton/>
                            </div>
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                        sx={{
                            display: {sm: 'block', md: 'block'},
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: 'auto'
                            }
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>

            </Box>
        </ThemeProvider>
    )
        ;
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

export default DrawerAppBar;
