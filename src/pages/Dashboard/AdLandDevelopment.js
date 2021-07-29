/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import LoadingAnimation from '../../components/SharedComponents/LoadingAnimation/LoadingAnimation';
import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";
import { UserContext } from '../../app/App';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import { getAllLand, updateLand } from '../../api';
import { Button, Table } from 'react-bootstrap';
import NewModal from '../../components/ReusableComponent/Modal'
const AdLandDevelopment = () => {
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    const { _id } = useParams();
    // const [contactData, setContactData] = useState([]);
    const { register, handleSubmit, errors } = useForm();

    const [loading, setLoading] = useState(true);
    const [landData, setLandData] = useState([]);
    const [open, setOpen] = useState(false)
    const [updatedData, setUpdatedData] = useState({})

    useEffect(async () => {
        const { data } = await getAllLand();
        setLandData(data.land);
        setLoading(false);
    }, []);

    const onSubmit = (data) => {
        const { id, title, description } = data
        const newData = {
            title, description
        }
        updateLand(id, newData)
        setOpen(false)
        getAllLand()

    };

    const location = useLocation()
    const locationData = location.pathname.split('/').pop()

    const handleUpdate = (item) => {
        setUpdatedData(item);
        setOpen(true);
    };

    const renderModal = () => {
        return (
            <NewModal
                show={open}
                size="lg"
                showOrderDetailsModal={false}
                handleClose={() => setOpen(false)}
                modalTitle={`Land Page Update`}
            >
                {renderForm()}
            </NewModal>
        )
    }



    const renderTable = () => {
        return (
            <div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>

                            <th>Title</th>
                            <th>description</th>
                            <th>Id</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {loading ? <LoadingAnimation /> :
                            landData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item._id}</td>
                                    <th><Button onClick={() => handleUpdate(item)}>Edit</Button></th>
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </Table>

            </div>
        )
    }


    const renderForm = () => {
        return (
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        defaultValue={updatedData.title}
                        className="form-control"
                        placeholder="title"
                        ref={register({ required: true })}
                    />
                    {errors.title && <span className="text-danger">Valid title is required</span>}
                </div>
                <div className="form-group">
                    {/* <input
                        type="text"
                        name="subtitle"
                        defaultValue={updatedData.subtitle}
                        className="form-control"
                        placeholder="Enter Your subtitle"
                        ref={register({ required: true })}
                    /> */}
                    <input
                        type="hidden"
                        name="id"
                        defaultValue={updatedData._id}
                        className="form-control"
                        placeholder="Enter Your subtitle"
                        ref={register({ required: true })}
                    />
                    {errors.id && <span className="text-danger">Valid subtitle is required</span>}
                </div>

                <div className="form-group">
                    <textarea
                        name="description"
                        className="form-control"
                        placeholder="Project Details"
                        style={{ height: "112px" }}
                        defaultValue={updatedData.description}
                        ref={register}
                    />
                    {errors.description && <span className="text-danger">Valid description is required</span>}
                </div>

                <button type="submit" className="btn btn-dark">
                    Update
                </button>
            </form>
        )
    }

    return (
        <div className="dashboard-wrapper d-flex">
            <HelmetSection title="Land Development | LeedWay" />
            <Sidebar />
            <div className="dashboard-data w-75">
                <header className="d-flex align-items-center justify-content-between p-4 ">
                    <h4>{locationData}</h4>
                    {loggedInUser.email ? (
                        <div>
                            <img src={loggedInUser.imageUrl} alt="" />
                            <span className="border border-success p-1 rounded">{loggedInUser.name.split(" ").slice(0, 1)}</span>
                        </div>
                    ) : (
                        <div>
                            <i className="fas fa-user"></i>
                            <span>User</span>
                        </div>
                    )}
                </header>
                <main className="p-5">
                    {renderTable()}
                    {
                        open && renderModal()
                    }
                </main>
            </div>
        </div>
    );
};

export default AdLandDevelopment;
