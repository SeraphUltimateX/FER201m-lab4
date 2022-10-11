import React, { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import { Navbar, Icon, Switch } from 'react-materialize'

import { ThemeContext } from "./ThemeContext"
import { LargeScreenContext } from "./LargeScreenContext";
import './Navigation.css'
export default function Navigation() {
    const { dark, theme, toggle } = useContext(ThemeContext)
    const largeScreen = useContext(LargeScreenContext)
    let activeStyle = {
        backgroundColor: theme.focusedBackgroundColor,
        color: theme.focusedTextColor,
    }

    return (
        <div style={{ position: "relative" }}>
            <Navbar
                alignLinks="left"
                brand={<Link to="/"><span style={{ fontFamily: 'Merienda', fontWeight: 'lighter' }}>Horizon Movies</span></Link>}
                menuIcon={<Icon>menu</Icon>}
                options={{
                    preventScrolling: true
                }}
                style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.contentTextColor }}
            >
                <NavLink to="/" end style={({ isActive }) => isActive ? activeStyle : {}}><Icon left>home</Icon>Home</NavLink>
                <NavLink to="/news" style={({ isActive }) => isActive ? activeStyle : {}}><Icon left>info_outline</Icon>News</NavLink>
                <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : {}}><Icon left>dvr</Icon>About</NavLink>
                <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : {}}><Icon left>contacts</Icon>Contact</NavLink>
            </Navbar>
            <Switch
                className="btn-toggle-theme"
                offLabel={largeScreen ? 'Light Mode' : ''}
                onLabel={largeScreen ? 'Dark Mode' : ''}
                checked={dark}
                onChange={toggle}
            />
        </div>
    )
}