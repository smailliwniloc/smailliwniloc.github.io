import React, { memo, Fragment } from 'react'
import { Drawer } from "@mui/material"
import SidebarContent from './SidebarContent'
import './Sidebar.css'


function Sidebar(props) {
    const { isOpen, handleDrawerToggle } = props

    return (
        <Fragment>
            <Drawer variant='temporary' open={isOpen} onClose={handleDrawerToggle} ModalProps={{
                keepMounted: true,
            }}
                sx={{
                    display: {sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240,  },
                }}
                PaperProps={{sx: {backgroundColor: "gray"}}}
                >
                <SidebarContent />
            </Drawer>
        </Fragment>
    )
}

Sidebar.propTypes = {}

export default memo(Sidebar)
