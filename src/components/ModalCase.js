import React, { useContext } from 'react'
import { ThemeContext } from "./ThemeContext";

import './ModalCase.css'
export function ModalCase({ setIsOpen, film }) {

    const { theme } = useContext(ThemeContext)

    return (
        <div className='modal-show' onClick={() => { setIsOpen(false) }}>
            <div id='modal1' className='modal' style={{ display: 'block', top: '17%', backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                <div className='modal-content'>
                    <h4>Trailer for <span style={{ fontStyle: 'italic', fontWeight: '500' }}>{film.Title}</span> </h4>
                    <p>
                        <iframe width="100%" height="100%" src={film.Clip} title={film.Title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
                <span className='modal-close'>&#10006;</span>
            </div>
        </div>
    )
}