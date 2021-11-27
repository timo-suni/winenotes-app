import { Typography, Paper, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Slider, Grid, Button, FormHelperText } from "@material-ui/core";
import { v4 as uuid } from 'uuid';
import { Rating } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { useState, useRef } from 'react';

function Add(props) {
    const history = useHistory();
    const [error, setError] = useState({});
    const formInput = useRef({});

    const [lightbold, setLightbold] = useState();
    const [smoothtannic, setSmoothtannic] = useState();
    const [drysweet, setDrysweet] = useState();
    const [softacid, setSoftacid] = useState();

    const lightboldInput = (event, newValue) => {
        setLightbold(newValue);
    }
    const smoothtannicInput = (event, newValue) => {
        setSmoothtannic(newValue);
    }
    const drysweetInput = (event, newValue) => {
        setDrysweet(newValue);
    }
    const softacidInput = (event, newValue) => {
        setSoftacid(newValue);
    }

    const formHandler = (e) => {
        e.preventDefault();

        let errors = {};

        if(!formInput.current.rorw) {
            errors = {...errors, rorw : "Choose one!"}
        }
        if(!formInput.current.name) {
            errors = {...errors, name : "Specify a name!"}
        }
        if(!formInput.current.country) {
            errors = {...errors, country : "Specify a country!"}
        }
        if(!formInput.current.region) {
            errors = {...errors, region : "Specify a region!"}
        }
        if(!formInput.current.grapes) {
            errors = {...errors, grapes : "Specify at least one grape!"}
        }
        if(!formInput.current.year) {
            errors = {...errors, year : "Specify a year!"}
        }
        if(!formInput.current.flavor1) {
            errors = {...errors, flavor1 : "Specify at least one flavor!"}
        }
        if(formInput.current.overallrating === null) {
            errors = {...errors, overallrating : "Rate the wine!"}
        }
        if (Object.entries(errors).length > 0) {

            setError({...errors});
      
          } else {
      
            setError({});
      
            let constructor = {
                                id : uuid(),
                                redorwhite : formInput.current.rorw,
                                name : formInput.current.name,
                                country : formInput.current.country,
                                region : formInput.current.region,
                                grapes : formInput.current.grapes,
                                year : formInput.current.year,
                                lightbold : lightbold,
                                smoothtannic : smoothtannic,
                                drysweet : drysweet,
                                softacid : softacid,
                                flavor1 : formInput.current.flavor1,
                                flavor2 : formInput.current.flavor2,
                                flavor3 : formInput.current.flavor3,
                                overall : formInput.current.overallrating
                                }
            props.setWines([...props.wines, constructor]);
            history.push("/added");
          }
    }
    const inputHandler = (e) => {
        formInput.current[e.target.name] = e.target.value;
    }

    return(
        
        <Paper 
            elevation={2} 
            square={true} 
            style={{
                    backgroundColor:"#f4f4f4", 
                    minHeight:"300px", 
                    padding: "30px"
                    }}>
                        
            <Typography style={{marginBottom: "15px"}}>Add your wine notes below:</Typography>

            <form onSubmit={formHandler}>
                <FormControl style={{marginTop: "10px"}}>
                    <Typography>Red or white?</Typography>
                    <FormHelperText
                        error={Boolean(error.rorw)}
                        >{error.rorw}
                        </FormHelperText>
                        <RadioGroup row >
                            <FormControlLabel 
                                value="Red"
                                label="Red"  
                                control={   <Radio
                                            size="small" 
                                            name="rorw"
                                             
                                            onChange={inputHandler}
                                            style={{color:"#7e0038"}}
                                            />} 
                            />
                            <FormControlLabel 
                                value="White"
                                label="White" 
                                control={   <Radio 
                                            size="small" 
                                            name="rorw" 
                                            onChange={inputHandler}
                                            style={{color:"#7e0038"}}
                                            />}
                            />              
                        </RadioGroup>

                </FormControl>
                <TextField 
                    fullWidth 
                    size="small" 
                    variant="outlined" 
                    label="Name" 
                    name="name"
                    error={Boolean(error.name)}
                    helperText={error.name}  
                    onChange={inputHandler}
                    style={{
                            marginTop:"10px"
                            }}
                />
                <TextField 
                    fullWidth 
                    size="small" 
                    variant="outlined" 
                    label="Country" 
                    name="country" 
                    error={Boolean(error.country)}
                    helperText={error.country}  
                    onChange={inputHandler} 
                    style={{
                            marginTop:"10px", 
                            borderColor:"#f4f4f4"
                            }}
                />
                <TextField 
                    fullWidth 
                    size="small" 
                    variant="outlined" 
                    label="Region" 
                    name="region" 
                    error={Boolean(error.region)}
                    helperText={error.region}
                    onChange={inputHandler} 
                    style={{
                            marginTop:"10px", 
                            color:"#f4f4f4"
                            }}
                />
                <TextField 
                    fullWidth 
                    size="small" 
                    variant="outlined" 
                    label="Grapes" 
                    name="grapes" 
                    error={Boolean(error.grapes)}
                    helperText={error.grapes}
                    onChange={inputHandler} 
                    style={{
                            marginTop:"10px", 
                            color:"#f4f4f4"
                            }}
                />
                <TextField 
                    fullWidth
                    type="number" 
                    size="small" 
                    variant="outlined" 
                    label="Year" 
                    name="year" 
                    error={Boolean(error.year)}
                    helperText={error.year}
                    onChange={inputHandler} 
                    style={{
                            marginTop:"10px", 
                            color:"#f4f4f4"
                            }}
                />
{/*LIGHT BOLD*/} 
                <Grid container spacing={2} style={{marginTop:"10px"}}>
                    <Grid item align="right" style={{width:"70px"}}>
                        <Typography>Light</Typography>
                    </Grid>
                    <Grid item>
                        <Slider
                            name="lightbold"
                            defaultValue={5}
                            onChangeCommitted={lightboldInput}
                            step={1}
                            min={1}
                            max={9}
                            track={false}
                            style={{width:"350px", color:"#7e0038"}}
                        />    
                    </Grid>
                    <Grid item>
                        <Typography>Bold</Typography>
                    </Grid>
                </Grid> 
{/*SMOOTH TANNIC*/}    
                <Grid container spacing={2} style={{marginTop:"10px"}}>
                    <Grid item align="right" style={{width:"70px"}}>
                        <Typography>Smooth</Typography>
                    </Grid>
                    <Grid item>
                        <Slider
                            name="smoothtannic"
                            defaultValue={5}
                            onChangeCommitted={smoothtannicInput}
                            step={1}
                            min={1}
                            max={9}
                            track={false}
                            style={{width:"350px", color:"#7e0038"}}
                        />    
                    </Grid>
                    <Grid item>
                        <Typography>Tannic</Typography>
                    </Grid>
                </Grid>    
{/*DRY-SWEET*/}    
                <Grid container spacing={2} style={{marginTop:"10px"}}>
                    <Grid item align="right" style={{width:"70px"}}>
                        <Typography>Dry</Typography>
                    </Grid>
                    <Grid item>
                        <Slider
                            name="drysweet"
                            defaultValue={5}
                            onChangeCommitted={drysweetInput}
                            step={1}
                            min={1}
                            max={9}
                            track={false}
                            style={{width:"350px", color:"#7e0038"}}
                        />    
                    </Grid>
                    <Grid item>
                        <Typography>Sweet</Typography>
                    </Grid>
                </Grid>
{/*SOFT-ACID*/}    
                <Grid container spacing={2} style={{marginTop:"10px"}}>
                    <Grid item align="right" style={{width:"70px"}}>
                        <Typography>Soft</Typography>
                    </Grid>
                    <Grid item>
                        <Slider
                            name="softacid"
                            defaultValue={5}
                            onChangeCommitted={softacidInput}
                            step={1}
                            min={1}
                            max={9}
                            track={false}
                            style={{width:"350px", color:"#7e0038"}}
                        />    
                    </Grid>
                    <Grid item>
                        <Typography>Acid</Typography>
                    </Grid>
                </Grid>
                <Typography style={{marginTop:"10px"}}>Main flavors:</Typography>
                <TextField 
                    fullWidth 
                    size="small" 
                    variant="outlined" 
                    label="Flavor 1" 
                    name="flavor1" 
                    error={Boolean(error.flavor1)}
                    helperText={error.flavor1}
                    onChange={inputHandler} 
                    style={{
                            marginTop:"10px"
                            }}
                />
                <TextField 
                    fullWidth 
                    size="small" 
                    variant="outlined" 
                    label="Flavor 2" 
                    name="flavor2" 
                    onChange={inputHandler} 
                    style={{
                            marginTop:"10px"
                            }}
                />
                <TextField 
                    fullWidth 
                    size="small" 
                    variant="outlined" 
                    label="Flavor 3" 
                    name="flavor3" 
                    onChange={inputHandler} 
                    style={{
                            marginTop:"10px"
                            }}
                />
                <Typography style={{marginTop:"10px", marginBottom:"10px"}}>Overall rating:</Typography>
                <Rating 
                    name="overallrating"
                    defaultValue={null} 
                    max={10} 
                    onChange={inputHandler}
                    style={{fontSize:"49px"}}
                />

                <Button 
                    fullWidth 
                    type="submit" 
                    variant="contained" 
                    style={{marginTop:"20px", 
                            backgroundColor:"#7e0038", 
                            color:"white", 
                            fontWeight:"bold"
                            }}
                    >ADD WINE
                </Button> 
            </form>
        </Paper>
    )
}
export default Add;