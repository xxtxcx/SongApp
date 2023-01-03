import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchPanel } from '../search-panel/search-panel' 
import { SongList }  from '../SongList/SongList';

const AllSongs = (props) => {

    const songs = useSelector((state) => state.allSongs);
    const dispatch = useDispatch();
    // console.log(songs);
    const [term, setTerm] = useState("");
    const [chart, setChart] = useState();
    const {onAddOrDelete} = props;

    // const addOrDeleteSong = (song) => {
    // props.addOrDeleteSong
    // }

    const onUpdateSearch = (term) => {
      setTerm(term);
    }

    const searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.title.indexOf(term) > -1
            || item.artist.indexOf(term) > -1
        })
        
    }

    const onArtistSearch = (term) => {
      setTerm(term);
  }


    const visibleSongList = searchEmp(songs, term);

    return(
        <>
        <div className='search-panel'>
              <SearchPanel 
              onUpdateSearch={onUpdateSearch}
              onArtistSearch={onArtistSearch}
              term = {term}/>
            </div>
            <SongList data = {visibleSongList}
            onArtistSearch={onArtistSearch}
            onAddOrDelete={props.onAddOrDelete}
            chart = {props.chart}/>
        </>
    )
}

export default AllSongs;