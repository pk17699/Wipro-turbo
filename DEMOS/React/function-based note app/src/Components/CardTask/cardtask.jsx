import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {deleteTask} from '../../Services/taskService'

const CardTask = ({task}) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {task.taskName}
                    </Typography>                   
                  
                    <Typography variant="body2">
                       {task.taskDescription}
                        <br />
                       
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={e => deleteTask(task.id, e)}>Delete</Button>
                </CardActions>
            </Card>
        </Box>
    )

}

export default CardTask