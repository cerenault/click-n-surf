import SpotCard from "./SpotCard"
import { FixedSizeList } from 'react-window';
import Box from '@mui/material/Box';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { padding } from "@mui/system";


const SpotsList = (props) => {
    
    const regionList = []
    props.spotsList.map(spot => regionList.push(spot.region))
    const uniqRegionList = [...new Set(regionList)]
    
    const Row = ({ index, style }) => (
        
        //uniqRegionList.map(region => <div key={region}>{region}</div>)
        props.spotsList.map(spot => {
            return (
                <ListItemButton sx={{
                    borderBottom: 1,
                    borderColor: 'primary.main',
                    margin: 0.5
                }} key={index}>
                        <ListItemText>{spot.name}</ListItemText>
                    </ListItemButton>

                // <ListItem style={style} key={index} component="div">
                //     <ListItemButton>
                //         <ListItemText primary={spot.name} />
                //     </ListItemButton>
                // </ListItem>
            )
        })
    );
    
    return (
        <div>
            <Box>
                <FixedSizeList
                    height={600}
                    itemCount={1}
                    itemSize={20}
                    width={500}
                >
                    {Row}
                </FixedSizeList>
            </Box>
        </div>
    )
}
export default SpotsList