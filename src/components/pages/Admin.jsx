import React from 'react';
import '../../App.css';
import '../CustomButton.css';
import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { CustomButton } from '../CustomButton';
import {useState} from 'react'
import { useEffect } from 'react';
import axios from "axios";

export default function Admin() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        };
    const [centers, setCenters] = useState([]);

    async function fetchData() {
        const centers = await axios.get('https://localhost:7115/api/BoulderingLocations');
        setCenters(centers.data);
    }  
        
    const YourComponent = () => {
        useEffect(() => {
          fetchData();
        }, []);
    }

    YourComponent();

        const handleDelete = (id) => {
            if (window.confirm("Are you sure you wish to delete this location?") ==true) {
                axios.delete(`https://localhost:7115/api/BoulderingLocations/${id}`)
                .then((result)=>{
                    if(result.status === 200)
                    {
                        window.alert("Location deleted");
                        fetchData();
                    }
                })
                .catch((error)=>{
                    window.alert(error);
                })
            }
        }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Src</th>
                        <th>Title</th>
                        <th>Label</th>
                        <th>Path</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        centers && centers.length > 0 ?
                            centers.map((item, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{item.id}</td>
                                        <td>{item.src}</td>
                                        <td>{item.title}</td>
                                        <td>{item.label}</td>
                                        <td>{item.path}</td>
                                        <td>{item.text}</td>
                                        <td className="admin-btn-col" colSpan={2}>
                                        <div  className="admin-btn-cont">
                                        <button 
                                                className="btn--blue btn--small"
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                className="btn--red btn--small"
                                                onClick={()=> handleDelete(item.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }
                </tbody>
            </Table>



            {/* <Accordion defaultActiveKey="0" className='admin-wrapper'>
                <Accordion.Item eventKey="0" className='admin-item'>
                    <Accordion.Header>Get All Bouldering Locations</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='admin-item'>
                    <Accordion.Header>Get a Single Bouldering Location</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='admin-item'>
                    <Accordion.Header>Update a Single Bouldering Location</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='admin-item'>
                    <Accordion.Header>Add a New Bouldering Location</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='admin-item'>
                    <Accordion.Header>Delete a Bouldering Location</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </>
    );
}