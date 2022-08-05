import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {Grid, Button, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
  import { FaGithub, FaHome, FaGamepad, FaInfoCircle, FaBook, FaPen, FaSmile } from "react-icons/fa";


function SidebarContent(props) {
    const links = [
        {URL: '#/', title: "Home", logo: FaHome},
        {URL: '#/about', title: "About", logo: FaInfoCircle},
        {URL: '#/games', title: "Games", logo: FaGamepad},
        {URL: '#/library', title: "Library", logo: FaBook},
        {URL: '#/team', title: "Team", logo: FaSmile},
        {URL: '#/blogs', title: "Blog", logo: FaPen},
        {URL: '#/sign-up', title: "Sign Up", logo: FaInfoCircle},
    ]

    return (
        <List>
            {links.map((link) => (
                <ListItemButton key={link.title} href={link.URL} divider sx={{minHeight: 65}}>
                    <ListItemIcon>
                        <link.logo/>
                    </ListItemIcon>
                    <ListItemText primary={link.title}/>
                </ListItemButton>
            ))}
        </List>
    )
}

SidebarContent.propTypes = {}

export default memo(SidebarContent)
