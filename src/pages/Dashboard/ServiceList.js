/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { getAllContact, deleteContact } from '../../api';
import { UserContext } from "../../app/App";
import LoadingAnimation from '../../components/SharedComponents/LoadingAnimation/LoadingAnimation';
import Sidebar from "./Sidebar";
import { IconContext } from 'react-icons';
import { AiFillDelete } from 'react-icons/ai';
import NewModal from '../../components/ReusableComponent/Modal'
const ServiceList = () => {
	document.title = "Dashboard | Service List";
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
	const [loading, setLoading] = useState(true);
	const [contactData, setContactData] = useState([]);
	const [open, setOpen] = useState(false)
	const [deleteOpen, setdeleteOpen] = useState(false)
	const [updatedData, setUpdatedData] = useState({})

	useEffect(async () => {
		const { data } = await getAllContact();
		setContactData(data.contact)
		setLoading(false);
	}, []);
	const handleDelete = async (id) => {
		try {
			const { data } = await deleteContact(id)
			if (data.success) {
				const updatedData = contactData.filter(data => data._id !== id)
				setContactData(updatedData)
				setdeleteOpen(false)
			}
		} catch (error) {
		}
	}

	const handleDetails = (list) => {
		setOpen(true)
		setUpdatedData(list)
	}
	const handleDeleteModal = (list) => {
		setdeleteOpen(true)
		setUpdatedData(list)
	}
	const renderModal = () => {
		return (
			<NewModal
				show={open}
				size="md"
				showOrderDetailsModal={true}
				handleClose={() => setOpen(false)}
				modalTitle={`Particular Contact Details`}
			>
				<div className="text-start">
					<p>name: <strong> {updatedData.name}</strong></p>
					<p>Subject: <strong>{updatedData.subject}</strong></p>
					<p>Message: <strong>{updatedData.message}</strong></p>
					<p>Terms & conditions checked: <strong>{updatedData.conditions}</strong></p>
					<p>Generated Date: <strong>{updatedData.createdAt}</strong></p>
				</div>

			</NewModal>
		)
	}


	const renderdeleteModal = () => {
		return (
			<NewModal
				show={deleteOpen}
				size="md"
				showOrderDetailsModal={false}
				handleClose={() => setdeleteOpen(false)}
				modalTitle={`Are you sure to delete Contact Details?`}
			>
				<div className="text-start">
					<p>name: <strong> {updatedData.name}</strong></p>
					<p>Subject: <strong>{updatedData.subject}</strong></p>

					<Button className="mr-3 px-4" variant="success" onClick={() => setdeleteOpen(false)}>
						No
					</Button>
					<Button className="ml-2 px-4" variant="danger" onClick={() => handleDelete(updatedData._id)}>
						Yes
					</Button>
				</div>

			</NewModal>
		)
	}


	const ListCard = ({ list }) => {
		return (
			<div className="col-lg-5 my-lg-0 my-3">
				<div className="service-list-card my-2">
					<div className="d-flex m-auto justify-content-between">
						<button onClick={() => handleDetails(list)} className="btn btn-success btn-sm">Details</button>
						<button onClick={() => handleDeleteModal(list)} className="btn btn-danger btn-sm">
							<IconContext.Provider
								value={{
									color: 'white',
									size: '30px',
									className: 'react-icons',
									style: { marginRight: '10px' }
								}}
							>
								<AiFillDelete />
							</IconContext.Provider>

							Delete</button>
					</div>
					{open && renderModal()}

					<div className="mt-2">
						<h4>{list.name}</h4>
						<h6>{list.subject}</h6>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div className="dashboard-wrapper d-flex">
			<Sidebar></Sidebar>
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Contacts</h4>
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
					{deleteOpen && renderdeleteModal()}
					<div className="service-list container-fluid px-0">
						<div className="row">
							{loading ? (
								<LoadingAnimation />
							) : contactData.length ? (
								contactData.map((list) => <ListCard list={list}></ListCard>)
							) : (
								<div className="alert alert-warning">No Contact data found!</div>
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default ServiceList;
