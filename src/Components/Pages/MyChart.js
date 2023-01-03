import { useState } from 'react';
import { SongList } from '../SongList/SongList';
import { useSelector } from 'react-redux';
import data from '../../data/songs.json'
import { ChartList } from '../SongList/SongList';

const MyChart = () => {

    const myChart = useSelector((state) => state.myChart);

return(
    <>
        <ChartList data={myChart}/>
    </>
)
}

export default MyChart;
