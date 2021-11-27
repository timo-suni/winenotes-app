import { Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Added() {

    return(
        <Paper 
            elevation={2} 
            square={true} 
            style={{
                    backgroundColor:"#f4f4f4", 
                    height:"300px", 
                    padding:"30px"
                    }}>
            <Typography 
                variant="h6" 
                style={{marginBottom:"20px"}}
                >Congrats! You added a new wine to your notes!
            </Typography>
            <Button
                fullWidth 
                component={Link}
                to="/add"
                variant="contained" 
                style={{marginTop:"20px", 
                        backgroundColor:"#7e0038", 
                        color:"white", 
                        fontWeight:"bold"
                        }}
                >Add Another
            </Button>
        </Paper>
        
    )
}
export default Added;