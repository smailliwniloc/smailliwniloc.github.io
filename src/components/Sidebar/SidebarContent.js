import React, { memo } from 'react'
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { FaHome, FaGamepad, FaInfoCircle, FaBook, FaPen, FaSmile, FaRegListAlt } from "react-icons/fa";
import './Sidebar.css'

function SidebarContent(props) {
    const links = [
        {URL: '#/', title: "Home", logo: FaHome},
        {URL: '#/about', title: "About", logo: FaInfoCircle},
        {URL: '#/games', title: "Games", logo: FaGamepad},
        {URL: '#/library', title: "Library", logo: FaBook},
        {URL: '#/team', title: "Team", logo: FaSmile},
        {URL: '#/blogs', title: "Blog", logo: FaPen},
        {URL: '#/sign-up', title: "Sign Up", logo: FaRegListAlt},
    ]

    return (
        <List className="Content">
            {links.map((link) => (
                <ListItemButton key={link.title} href={link.URL} divider sx={{minHeight: 65}}>
                    <ListItemIcon>
                        <link.logo className="Content"/>
                    </ListItemIcon>
                    <ListItemText primary={link.title}/>
                </ListItemButton>
            ))}
        </List>
    )
}

SidebarContent.propTypes = {}

export default memo(SidebarContent)
