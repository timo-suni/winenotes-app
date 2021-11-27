import { Typography, Box, Button, Paper, Slider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Mywines(props) {
    const [dialog, setDialog] = useState(false);
    const [wineNotes, setWineNotes] = useState({});
    const columns = [
                    {   field: "id", headerName: "ID", hide: true    },
                    {   field: "name", headerName: "Name", width: 170    },
                    {   field: "country", headerName: "Country", width: 125    },
                    {   field: "grapes", headerName: "Grapes", width: 225    },
                    {   field: "region", headerName: "Region", hide: true    },
                    {   field: "year", headerName: "Year", width: 74    },
                    {   field: "lightbold", headerName: "Light - Bold", hide: true    },
                    {   field: "smoothtannic", headerName: "Smooth - Tannic", hide: true    },
                    {   field: "drysweet", headerName: "Dry - Sweet", hide: true    },
                    {   field: "softacid", headerName: "Soft - Acid", hide: true    },
                    {   field: "flavor1", headerName: "Flavor 1", hide: true    },
                    {   field: "flavor2", headerName: "Flavor 2", hide: true    },
                    {   field: "flavor3", headerName: "Flavor 3", hide: true    },
                    {   field: "overall", headerName: "Rating", width: 74    }
                    ];

    const handleCellClick = (e) => {
    setWineNotes({
                    redorwhite : e.row.redorwhite,
                    name : e.row.name,
                    country : e.row.country,
                    region : e.row.region,
                    grapes : e.row.grapes,
                    year : e.row.year,
                    lightbold : e.row.lightbold,
                    smoothtannic : e.row.smoothtannic,
                    drysweet : e.row.drysweet,
                    softacid : e.row.softacid,
                    flavor1 : e.row.flavor1,
                    flavor2 : e.row.flavor2,
                    flavor3 : e.row.flavor3,
                    overall : e.row.overall
                    })
    setDialog(true);
    };
      
    const closeDialog = () => {
    setDialog(false);
    };

    function MyWines() {
        if (Object.entries(props.wines).length > 0) {
            return (
                <DataGrid
                    rows={props.wines} 
                    density="compact" 
                    columns={columns} 
                    autoHeight={true}
                    hideFooter={true}
                    disableColumnSelector={true}
                    disableColumnMenu={true}
                    onCellClick={handleCellClick}
                />
            );
        }
        else {
            return (
                <Box 
                    align="center"
                    style={{
                            padding:"40px"
                            }}>   
                    <Typography style={{fontWeight:"bold"}}>You havent added any wines yet!</Typography>
                    <Button 
                        component={Link}
                        to="/add"
                        variant="contained" 
                        style={{marginTop:"20px", 
                                backgroundColor:"#7e0038", 
                                color:"white", 
                                fontWeight:"bold"
                                }}>
                        Add your first wine
                    </Button>
                </Box>
            );
        }  
    }
    
    return(
        <Paper 
            elevation={2} 
            square={true} 
            style={{
                    backgroundColor:"#f4f4f4", 
                    minHeight:"300px"
                    }}>
                
            <Box align="center"
                style={{
                        paddingTop:"20px", 
                        paddingBottom:"20px"
                        }}>
                <Typography>To show full details of your notes, click the wine you want to inspect.</Typography>
                <Typography>You can sort the list by clicking column of your desired criteria.</Typography>
            </Box>
            {MyWines()}
            
            <Dialog
                open={dialog}
                onClose={closeDialog}
                aria-labelledby="alertTitle"
                aria-describedby="alertDesc"
                style={{backgroundColor:"rgba(126, 0, 56, 0.2)"}}>
                    
                <DialogTitle id="alertTitle">Wine notes</DialogTitle>
                <DialogContent style={{width: "400px"}}>
                <DialogContentText id="alertDesc">
                    <Typography style={{fontWeight: "bold"}}>Red or White:</Typography> 
                    <Typography>{wineNotes.redorwhite}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Name:</Typography> 
                    <Typography>{wineNotes.name}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Country:</Typography>
                    <Typography>{wineNotes.country}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Region:</Typography>
                    <Typography>{wineNotes.region}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Grapes:</Typography>
                    <Typography>{wineNotes.grapes}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Year:</Typography>
                    <Typography>{wineNotes.year}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Light - Bold: {wineNotes.lightbold}</Typography>
                    <Slider
                        defaultValue={null}
                        value={wineNotes.lightbold}
                        min={1}
                        max={9}
                        track={false}
                        style={{width:"250px", color:"#7e0038"}}
                    />
                    <Typography style={{fontWeight: "bold"}}>Smooth - Tannic: {wineNotes.smoothtannic}</Typography>
                    <Slider
                        defaultValue={null}
                        value={wineNotes.smoothtannic}
                        min={1}
                        max={9}
                        track={false}
                        style={{width:"250px", color:"#7e0038"}}
                    />
                    <Typography style={{fontWeight: "bold"}}>Dry - Sweet: {wineNotes.drysweet}</Typography>
                    <Slider
                        defaultValue={null}
                        value={wineNotes.drysweet}
                        min={1}
                        max={9}
                        track={false}
                        style={{width:"250px", color:"#7e0038"}}
                    />
                    <Typography style={{fontWeight: "bold"}}>Soft - Acid: {wineNotes.softacid}</Typography>
                    <Slider
                        defaultValue={null}
                        value={wineNotes.softacid}
                        min={1}
                        max={9}
                        track={false}
                        style={{width:"250px", color:"#7e0038"}}
                    />
                    <Typography style={{fontWeight: "bold"}}>Flavor 1:</Typography>
                    <Typography>{wineNotes.flavor1}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Flavor 2:</Typography>
                    <Typography>{wineNotes.flavor2}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Flavor 3:</Typography>
                    <Typography>{wineNotes.flavor3}</Typography>
                    <Typography style={{fontWeight: "bold"}}>Overall rating:</Typography>
                    <Typography>{wineNotes.overall}</Typography>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={closeDialog} color="primary">
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}
export default Mywines;