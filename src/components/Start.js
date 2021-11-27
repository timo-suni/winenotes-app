import { Typography, Paper } from "@material-ui/core";

function Start() {

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
                style={{
                        marginBottom:"20px"
                        }}>
                Welcome to Wine Notes app!
            </Typography>

            <Typography 
                style={{
                        marginTop:"10px", 
                        marginBottom:"10px"
                        }}>
                With this app you can keep all your wine tasting notes in one place.
            </Typography>

            <Typography>
                Start by exploring navigation menu on the top left or jump straight into rating your wine by selecting + icon on the top right.
            </Typography>

            <Typography 
                style={{
                        marginTop:"10px", 
                        marginBottom:"10px",
                        fontStyle: "italic"
                        }}>
                Your notes will be saved to your browsers local storage.
            </Typography>
        </Paper>
        
    )
}
export default Start;