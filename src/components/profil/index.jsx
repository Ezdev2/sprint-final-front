import {React, useEffect, useState} from "react";
import axios from "axios";
import './style.scss';

export default function Profil(props) {
    const {profil} = props;
    // const [profil, setProfil] = useState([]);
    // const fetchDataProfil = async function() {
    //     try {
    //         await axios.get(`http://localhost:8080/user/2`)  
    //             .then(res => {  
    //             const data = res.data;  
    //             setProfil(data);
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     fetchDataProfil();
    //     }, []);
    return(
        <div className="profil">
            <img src={profil.profilAvatar} alt="avatar"/>
            <p>{profil.userName}</p>
        </div>
    )
}