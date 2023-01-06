import React from 'react'

import { ReactComponent as AddingIcon } from '../../svgs/plus.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'
import { ReactComponent as RemoveIcon } from '../../svgs/remove.svg'
import { ReactComponent as CheckIcon } from '../../svgs/check.svg'

const Unibutton = (onAddOrDelete, song, boolean, btnAdd) => {
  
    if(boolean === true)
    {
        return(<>
            <CheckIcon className="noteI" onClick={() => onAddOrDelete(song.id)}>{btnAdd}</CheckIcon>
            <RemoveIcon className="playI" onClick={() => onAddOrDelete(song.id)}>{btnAdd}</RemoveIcon>
            </>
        )
    }

    if(boolean === false)
    {
        return(<>
            <NoteIcon className="noteI" onClick={() => onAddOrDelete(song.id)}>{btnAdd}</NoteIcon>
            <AddingIcon className="playI" onClick={() => onAddOrDelete(song.id)}>{btnAdd}</AddingIcon>
            </>
          )
    }

}

export default Unibutton
