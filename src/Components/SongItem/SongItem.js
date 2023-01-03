import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSongs, selectedSong, removeSelectedSong } from '../../redux/actions/songActions';
import Collapse from 'react-bootstrap/Collapse'
import './SongItem.css'

export const SongItem = (props) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(false);
    const { title, artist, bpm, originalKey } = props.song;
    const { song } = props;
    const chords = props.song.chords.toString().split(/(\s+)/).filter( e => e.trim().length > 0)
    const [chordProgression, setChordProgression] = useState(chords);
    const [term, setTerm] = useState("");
    const [currKey, setCurrKey] = useState(originalKey);
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.allSongs);
    const myChart = useSelector((state) => state.myChart);

    // useEffect(() => {
    // }, [myChart]);

    function transpose(chord, increment){
        const keyWords = ['Intro:', 'Verse:', 'Chorus:', 'Interlude:', 'Pre-Chorus:', 'Bridge:', '//', '///', '////', '\n', 'xyz', '<b>'];
        if(!keyWords.includes(chord)){
        var cycle = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        var el = chord.charAt(0);
        if(chord.length > 1 && chord.charAt(1) === '#'){
            el += "#";   
            }
        var ind = cycle.indexOf(el);
        var newInd = (ind + increment + cycle.length) % cycle.length;
        var newChord = cycle[newInd];
        return newChord + chord.substring(el.length);
        }
        return chord
    }

    function changeKey(i, arr, originalKey) {
        const newPr = arr.map(item => transpose(item, i))
        const currKey = transpose(originalKey, i)
        setChordProgression(newPr);
        setCurrKey(currKey);
    }

    const onArtistSearch = (term) => {
        setTerm(term);
        props.onArtistSearch(term);
        console.log(term);
    }

    const selectedItem = (id) => {
        
        return{
               song: songs.find(item => item.id == id)
    }
        }

    const onAddOrDelete = (id) => {
        console.log(id)
        setSelected(!selected)
        const song = selectedItem(id);
        if(!myChart.map(song => song.id).includes(song.song.id)){
        dispatch(selectedSong(song))
        }
        else{ 
        dispatch(removeSelectedSong(song))
        }
        };

    const btnAdd = selected ? "X" : "+"
    const ver1 = chordProgression.toString();
    const ver2 = ver1.replaceAll(',',' ');
    const visualChords = ver2.replaceAll('xyz','\n');
    const className = open ? "list-group-item open-collapse" : "list-group-item"

    return (
        <>
        <div className={className}>
            <a className="row-item btn-add"
            onClick={() => onAddOrDelete(song.id)}
            >{btnAdd}</a>
            <div className='first-block'>
            <img className="image-title"
            alt=''
            aria-hidden="false"
            draggable="false"
            loading="eager"
            src="https://i.scdn.co/image/ab67616d0000485196ab64f52273635308b6bf27"
            width="40" height="40">
            </img>
            <div className="title-column">
            <div
            className="standalone-ellipsis-one-line"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            >
            {title}
            </div>
            <span className="row-item-artist"
            onClick={() => onArtistSearch(artist)}
            >{artist}</span>
            </div>
            </div>
            <div className="row-item"><b>{originalKey}</b></div>
            <div className="row-item">{bpm}</div>
        </div>
        <Collapse in={open}>
            <div className='display-linebreak' id="example-collapse-text">
            <h6>Current Key: {currKey}</h6>
            {visualChords }
            <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        variant="info"
                        onClick={() => changeKey(-1, chordProgression, currKey)}>-1
                    </button>

                    <button type="button"
                        variant="info"
                        onClick={() => changeKey(+1, chordProgression, currKey)}>+1
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </Collapse>        
        </>
    )
}
