import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
//import Teams from './teams.json';
import { Teams } from './TeamsData';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Cards(props) {
    const{setOpenCards} = props;
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const [selectedTeam, setSelectedTeam] = useState({
        objects: Teams
    });

    const SelectedTeams = (index, e) => {
        let CopyselectedArry = [...selectedTeam.objects];
        CopyselectedArry[index].toggled
            ? (CopyselectedArry[index].toggled = false) :
            (CopyselectedArry[index].toggled = true);

        const selectedItems = CopyselectedArry[index].name;

        setSelectedTeam(values => ({ ...values, [selectedItems]: selectedItems }));

        setShow(true)

    }
    const ActiveStyle = (index) => {
        if (selectedTeam.objects[index].toggled) {
            return "active"
        }
        else {
            return ""
        }
    }
    const Continue = () => {
        console.log(selectedTeam);
        setOpenCards(false);
        navigate('/userDetails')
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 12, md: 12 }}
                sx={{ padding: '40px' }}
            >
                {selectedTeam.objects.map((team, index) => (
                    <React.Fragment key={team.id}>
                        <Grid item xs={4} sm={3} md={3}>
                            <Item className={ActiveStyle(index)}>
                                <Card sx={{ boxShadow: 'none', cursor: 'pointer' }}
                                    id={team.id} data-name={team.name} onClick={() => SelectedTeams(index)}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={team.image}
                                        alt="team"
                                    />
                                    <CardContent sx={{ paddingBottom: '0px' }}>
                                        <Typography gutterBottom variant="h5" component="div"
                                            sx={{ textAlign: 'left' }}>
                                            {team.name}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
            <Box
                sx={{ width: '100', display: 'flex', justifyContent: 'right', marginRight: '40px' }}>
                {show ?
                    <Button variant='contained'
                        onClick={Continue}>
                        Continue
                    </Button> : null
                }
            </Box>
        </Box>
    );
}
