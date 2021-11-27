import Start from './components/Start';
import Add from './components/Add';
import Added from './components/Added';
import Mywines from './components/Mywines';
import { Box, Container, IconButton, MenuItem, Paper, Grid, Popper, Grow, ClickAwayListener, MenuList } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import logo from './kuvat/logo.png';
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, HashRouter,  Route, Link, Switch } from "react-router-dom";


function App() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const [wines, setWines] = useState([{}]);

  //LOCAL STORAGE
  const saveWines = () => {
    localStorage.setItem("winenotes", JSON.stringify(wines));
  }
  const openWines = () => {
    if (localStorage.getItem("winenotes")) {
      setWines(JSON.parse(localStorage.getItem("winenotes")));
    } else {
      setWines([]);
    }
  }
  //MENU
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    openWines();
  },[]);

  useEffect(() => {
    saveWines();
  },[wines]);

  return (
      <Container style={{maxWidth:"725px"}}>
        <HashRouter>
          <Box  
            style={{
                    boxShadow: "0px 0px 3px #7d7d7d", 
                    backgroundColor:"#7e0038"
                    }}>
            <Grid container>
              <Grid 
                item xs={4} 
                align="left">
                <IconButton 
                  align="left" 
                  style={{
                          margin:"5px auto auto 8px", 
                          color:"white"
                          }} 
                  onClick={handleOpen} 
                  ref={anchorRef}>
                <MenuIcon/>
                </IconButton>
                <Popper 
                  open={open} 
                  anchorEl={anchorRef.current} 
                  placement="bottom-start" 
                  transition>
                    {({ TransitionProps, placement = "right" }) => (
                  <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left top' }}>
                    <Paper 
                      style={{
                              backgroundColor:"#7e0038", 
                              borderRadius:"7px"
                              }}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList style={{
                                          backgroundColor:"#7e0038", 
                                          color:"white", 
                                          borderRadius:"0px 0px 7px 7px"
                                          }}>
                          <MenuItem 
                            onClick={handleClose} 
                            component={Link} 
                            to="/">
                              <HomeIcon style={{marginRight:"10px"}}/>
                            Start
                          </MenuItem>
                          <MenuItem 
                            onClick={handleClose} 
                            component={Link} 
                            to="/add">
                              <AddIcon style={{marginRight:"10px"}}/>
                            Add Wine
                          </MenuItem>
                          <MenuItem 
                            onClick={handleClose} 
                            component={Link} 
                            to="/mywines">
                              <LocalBarIcon style={{marginRight:"10px"}}/>
                            My Wines
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                  )}
                </Popper>
              </Grid>
              <Grid item xs={4} align="center">
                <Box 
                  component={Link} 
                  to="/" 
                  style={{
                          margin:"auto", 
                          marginTop:"5px"
                          }}>
                  <img src={logo} alt="logo" height="50px"></img>
                </Box>
              </Grid>
              <Grid item xs={4} align="right">
                <IconButton 
                  color="inherit" 
                  component={Link} 
                  to="/add" 
                  style={{
                          margin:"5px 8px auto auto", 
                          color:"white"
                          }}>
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/add">
            <Add 
              wines={wines}
              setWines={setWines}
            />
          </Route>
          <Route path="/added">
            <Added
            />
          </Route>
          <Route path="/mywines">
            <Mywines 
              wines={wines}
            />
          </Route>
          </Switch>
        </HashRouter>
      </Container>
  )
}

export default App;