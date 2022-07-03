import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
}));

export default function FullScreenDialog() {

    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({});

    const promise = new Promise(function (resolve) {
        resolve(100)
    })
    promise.then(
        setTimeout(() => {
            setOpen(true);
        })
    )
    const ChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const SaveTeam = (event) => {
        event.preventDefault();
        console.log('hit')
        console.log(inputs);
    }
    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        
                        <Typography sx={{ ml: 2, flex: 1 }} variant="div" component="div">
                            Please enter your details.
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{ width: '100%' }}>
                    <form onSubmit={SaveTeam}>
                        <Grid sx={{ padding: '40px' }}
                            container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} md={6}>
                                <Item>
                                    <TextField fullWidth
                                        id="name" name="name" label="Filled" variant="filled" 
                                        required
                                        value={inputs.name || ""}
                                        onChange={ChangeHandler}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item>
                                    <FormControl variant="filled" fullWidth>
                                        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                                        <Select
                                            labelId="category"
                                            id="category"
                                            name="category"
                                            value={inputs.category || ""}
                                            onChange={ChangeHandler}
                                            required
                                        >
                                            {
                                                ['Batsman', 'Bowler', 'All-rounder', 'Wicket keeper'].map(
                                                    (category, index) => {
                                                        return <MenuItem value={category} key={index}>{category}</MenuItem>
                                                    })
                                            }
                                        </Select>
                                    </FormControl>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item sx={{ background: "none" }}>
                                    <FormControlLabel sx={{ color: 'white', mr: 10, }}
                                        label="Captain"
                                        name="Captain"
                                        control={
                                            <Checkbox
                                                labelstyle={{ color: 'white' }}
                                                iconstyle={{ fill: 'white' }}
                                                inputstyle={{ color: 'white' }}
                                                style={{ color: 'white' }}
                                                defaultChecked={false}
                                                onChange={(e) => ChangeHandler({
                                                    target: {
                                                        name: e.target.name,
                                                        value: e.target.checked
                                                    }
                                                })
                                                }
                                            />
                                        }
                                    />
                                    <FormControlLabel sx={{ color: 'white' }}
                                        label="vice-Captain"
                                        name="vice-Captain"
                                        control={
                                            <Checkbox
                                                labelstyle={{ color: 'white' }}
                                                iconstyle={{ fill: 'white' }}
                                                inputstyle={{ color: 'white' }}
                                                style={{ color: 'white' }}
                                                defaultChecked={false}
                                                onChange={(e) => ChangeHandler({
                                                    target: {
                                                        name: e.target.name,
                                                        value: e.target.checked
                                                    }
                                                })
                                                }
                                                
                                            />
                                        }
                                    />
                                </Item>
                            </Grid>

                        </Grid>
                        <Button sx={{ ml: 5 }}
                            variant="contained" type="submit">Save Team</Button>
                    </form>
                </Box>
            </Dialog>
        </div>
    );
}
