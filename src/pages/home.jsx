import React, { useState } from 'react'
import '../styles/home.css';
import hero from "../gif/hero.gif"
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const Home = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: "flex",
        justifyContent : "center",  
        flexDirection : "column"
    };
    
    const [open, setOpen] = useState(false);
    const handle = () => setOpen(!open);
    return (
        <div className='container'>
            <div className='card1'>
                <div className='card'>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className='avatar' />
                    <div classname="container1">
                        <h4><b>NASANBAT</b></h4>
                        <p>GUEST#1234</p>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handle}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Enter your name
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <input />
                    </Typography>
                </Box>
            </Modal>
            <div>
                <div className="title">
                    BATTLE SIMULATOR
                </div>
                <div className='row buttons'>
                    <button class="glow-on-hover" type="button" onClick={handle} >CREATE ROOM</button>
                    <button class="glow-on-hover" type="button">JOIN ROOM</button>
                </div>
            </div>
            <div className='card2'>
                <div className='card'>
                    <button className='shops' >Hero's skin</button>
                    <button className='shops'>Shop</button>

                </div>

            </div>
        </div>
    )
}

export default Home