import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/BackToMain.css'
import CottageIcon from '@mui/icons-material/Cottage';

function BackToMain () {
    const navigate = useNavigate();

    return (
        <div className='backToMain'
        onClick={() => {
            navigate("/");
        }}>
            <a href="/">
                <CottageIcon fontSize='large'/>
            </a>
            <p>
                Return to Main Page
            </p>
        </div>
    );
}

export default BackToMain