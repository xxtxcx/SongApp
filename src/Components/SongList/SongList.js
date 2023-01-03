import { SongItem } from '../SongItem/SongItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const SongList = (props) => {
    const { onAddOrDelete, onArtistSearch, data} = props;
    // const songs = useSelector((state) => state.allSongs);
    const newData = data.map((data) => {
    return(
        <SongItem song={data}
         key={data.id}
         onArtistSearch={onArtistSearch}
         onAddOrDelete={onAddOrDelete}
         />

    )})

    return(
        <>
        {newData.length > 0 ?
            <div>{newData}</div>
            :
            <div style={{fontSize:"2rem", marginTop:20}}>No Founded</div>
    }

        </>
    )
};

export const ChartList = (props) => {
    const newData = props.data.map((data) => {
        return(
            <SongItem song={data}
            key={data.id}
            />
        )})
        return(
            <>
            <div>{newData}</div>
            </>
        )

};

// const mapStateToProps = (state) => {
//     return {
//         myChart: state.myChart.myChart
//     }
// }

// export default connect(mapStateToProps)(ChartList);
