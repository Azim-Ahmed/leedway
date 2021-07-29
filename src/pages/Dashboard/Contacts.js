/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";
import { UserContext } from '../../app/App';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';

const Orders = () => {
	const { user } = useContext(UserContext);
	const [loggedInUser] = user;

	const { _id } = useParams();
	const [contactData] = useState([]);
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {

		fetch("https://afternoon-reaches-35522.herokuapp.com/addOrder", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((success) => alert(success))
			.catch((error) => alert(error));
	};
	const location = useLocation()
	const locationData = location.pathname.split('/').pop()

	return (
		<div className="dashboard-wrapper d-flex">
			<HelmetSection title="Contact | LeedWay" />
			<Sidebar />
			<div className="dashboard-data w-75">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>{locationData}</h4>
					{loggedInUser.email ? (
						<div>
							<img src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name.split(" ").slice(0, 1)}</span>
						</div>
					) : (
						<div>
							<i className="fas fa-user"></i>
							<span>User</span>
						</div>
					)}
				</header>
				<main className="p-5">
					<form className="order-form" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<input
								type="text"
								name="name"
								className="form-control"
								placeholder="Your name / company’s name"
								ref={register({ required: true })}
							/>
							{errors.name && <span className="text-danger">Valid name is required</span>}
						</div>
						<div className="form-group">
							<input
								type="email"
								name="email"
								className="form-control"
								placeholder="Your email address"
								ref={register({ required: true })}
							/>
							{errors.email && <span className="text-danger">Valid email is required</span>}
						</div>
						<div className="form-group">
							<input
								type="text"
								name="title"
								className="form-control"
								placeholder="Graphic Design"
								defaultValue={contactData ? contactData.title : "Project categry"}
								ref={register}
							/>
							{errors.title && <span className="text-danger">Valid title is required</span>}
						</div>
						<div className="form-group">
							<textarea
								name="description"
								className="form-control"
								placeholder="Project Details"
								style={{ height: "112px" }}
								defaultValue={contactData ? contactData.description : "Projects Description"}
								ref={register}
							/>
							{errors.description && <span className="text-danger">Valid description is required</span>}
						</div>
						<div className="form-row">
							<div className="form-group col-6">
								<input
									type="number"
									name="price"
									className="form-control"
									placeholder="Price"
									ref={register({ required: true })}
								/>
								{errors.price && <span className="text-danger">Valid price is required</span>}
							</div>
							<div className="form-group col-6">
								<input
									type="file"
									name="projectFile"
									className="form-control"
									placeholder="Upload project file"
									disabled={true}
								/>
							</div>
						</div>
						<button type="submit" className="btn btn-dark">
							Update
						</button>
					</form>
				</main>
			</div>
		</div>
	);
};

export default Orders;




