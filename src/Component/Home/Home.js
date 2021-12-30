import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { ContentCopy } from '@material-ui/icons';

// import { shadows } from '@mui/system';
import Questions from '../Questions/Questions';
import Questions2 from '../Questions2/Questions2';
import SideNav from '../SideNav/SideNav';
import EventIcon from '@mui/icons-material/Event';

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));
    return (
      <div style={{
        width: '50%',
        margin: 'auto',
    }}>
        <div style={{

        }}>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                    marginTop: '3%'
                }}
            >
                <p style={{ textAlign: 'left' }}>Quiz Title <span style={{ color: "red" }}>*</span></p>
                <TextField fullWidth id="fullWidth" />
            </Box>
            <Box sx={{ width: '100%', marginTop: '2%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <TextField
                            id="date"
                            // label="Date"
                            // type="date"
                            defaultValue="Set Due Date"
                            sx={{ width: '100%' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                              endAdornment: (
                                  <EventIcon></EventIcon>
                              ),
                          }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="time"
                            // label="Time"
                            // type="time"
                            defaultValue="Set Time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            sx={{ width: '100%' }}
                            InputProps={{
                              endAdornment: (
                                  <AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>
                              ),
                          }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
        <div style={{
            display: 'flex'
        }}>
            <div style={{
                width: '95%'
            }}>
                <Questions></Questions>
                <Questions2></Questions2>
            </div>
            <div style={{
                width: '5%',
                marginTop: '35%'
            }}>
                <SideNav></SideNav>
            </div>
        </div>
    </div>
    );
};

export default Home;