import SpotCard from "./SpotCard"
import { FixedSizeList as List } from 'react-window';
import Box from '@mui/material/Box';

const SpotsList = (props) => {

    const Row = ({ index, style }) => (
        props.spotsList.map(spot => <div>{spot.name}</div>)
        // <div style={style}>Row {index +1 }</div>
    );
    return (
        <div>
            {/* {props.spotsList.map(spot => {
                return <SpotCard key={spot.name} spot={spot}></SpotCard>
            })} */}
            <p>ok {props.spotsList.length}</p>
            {/* {props.spotsList.map(spot => <p>{spot.name}</p>)} */}
            <Box>
                <List
                    height={350}
                    itemCount={props.spotsList.length}
                    itemSize={35}
                    width={500}
                >
                {Row}
                </List>
            </Box>
        </div>
    )
}
export default SpotsList