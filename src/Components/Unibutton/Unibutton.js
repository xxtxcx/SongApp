import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { ReactComponent as AddingIcon } from '../../svgs/plus.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'
import { ReactComponent as RemoveIcon } from '../../svgs/remove.svg'
import { ReactComponent as CheckIcon } from '../../svgs/check.svg'



const Unibutton = (onAddOrDelete, song) => {
    const myChart = useSelector((state) => state.myChart);
    if(myChart.map(song => song.id).includes(song.id))
    {
        return(<>
            <CheckIcon className="noteI" onClick={() => onAddOrDelete(song.id)}></CheckIcon>
            <RemoveIcon className="playI" onClick={() => onAddOrDelete(song.id)}></RemoveIcon>
            </>
        )
    }

    if(!myChart.map(song => song.id).includes(song.id))
    {
        return(<>
            <NoteIcon className="noteI" onClick={() => onAddOrDelete(song.id)}></NoteIcon>
            <AddingIcon className="playI" onClick={() => onAddOrDelete(song.id)}></AddingIcon>
            </>
          )
    }

}

export default Unibutton
