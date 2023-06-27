import React, { memo } from 'react'
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { FaHome, FaGamepad, FaBook, FaSmile, FaWarehouse } from "react-icons/fa";
import './Sidebar.css'

function SidebarContent() {
    const links = [
        {URL: '/', title: "Home", logo: FaHome},
        {URL: '/games', title: "Games", logo: FaGamepad},
        {URL: '/library', title: "Library", logo: FaBook},
        {URL: '/singo', title: "Singo", logo: FaSmile},
        {URL: '/pawprint-cabin', title: "Cabin", logo: FaWarehouse}
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

export default memo(SidebarContent)
