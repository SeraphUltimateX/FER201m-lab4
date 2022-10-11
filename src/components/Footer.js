import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Footer as NavFooter } from 'react-materialize'

import { ThemeContext } from "./ThemeContext"
import './Footer.css'
export default function Footer() {
    const { theme } = useContext(ThemeContext)
    return (
        <NavFooter
            style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.focusedTextColor }}
            copyrights="&copy; Horizon Corp 1927-2022 All Rights Reserved"
            links={
                <ul style={{textAlign: 'left'}}>
                    <li>
                        <Link to="/" className="grey-text text-lighten-3" >What's new</Link>
                    </li>
                    <li>
                        <Link to="/news" className="grey-text text-lighten-3" >Updates</Link>
                    </li>
                    <li>
                        <Link to="/about" className="grey-text text-lighten-3" >Reviews</Link>
                    </li>
                    <li>
                        <Link to="contact" className="grey-text text-lighten-3" >API</Link>
                    </li>
                </ul>
            }
        >
            <h4 className="grey-text text-lighten-3">Horizon High Quality Streaming</h4>
            <p className="grey-text text-lighten-3">Not even the curvature of the Earth could stop us from delivering movies to you</p>
        </NavFooter>
    );
}