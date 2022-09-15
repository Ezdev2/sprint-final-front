// import { Button } from "antd";
import { Button, Modal, Popover } from 'antd';
import axios from "axios";
import { useState, useEffect } from "react";
import { SearchBar } from "../../components/display/search";
import { Friend } from "../../components/friend";
import { Posts } from "../../components/posts";
import Profil from '../../components/profil';
import './style.scss';

export function Actuality() {
    const [post, setPost] = useState([]);
    const [profil, setProfil] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const fetchDataPost = async function() {
        try {
            await axios.get(`https://virtserver.swaggerhub.com/FANSOAEZRA/social_media_api/0.0.1/posts`)  
                .then(res => {  
                const testData = res.data;  
                setPost(testData);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const fetchDataProfil = async function() {
        try {
            await axios.get(`http://localhost:8080/user/2`)  
                .then(res => {  
                const data = res.data;  
                setProfil(data);
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchDataPost();
        fetchDataProfil();
        }, []);
    return (
        <div>
            <div className="actuality__container">
                <div className="actuality__leftBar">
                    <SearchBar/>
                    <Friend />
                </div>
                <div className="actuality__content">
                    <div className="header">
                        <h1>Actualités</h1>
                        <div className="head-menu">
                            <div className="new-post">
                                <Button className="boldText" onClick={showModal}>Nouvelle publication</Button>
                                <Modal title="Créer une publication" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                                    <p>hello</p>
                                </Modal>
                            </div>
                            <div className="profil_entrie">
                                <Popover placement="bottomRight" title="Mon profil" content={<Profil profil={profil}/>} trigger="click">
                                    <Button>Mon profil</Button>
                                </Popover>
                                <img src={profil.profilAvatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                    <div className="posts">
                        {post.length > 0 &&
                            post.map((items, index) => (
                            <Posts img={items.image} description={items.description} date={items.postingDate} key={index} />
                        ))}
                    </div>
                </div>
                <div className="actuality__rightBar">Bienvenue</div>
            </div>
        </div>
    );
}
