import React, { useContext } from "react";
import { UserContext } from '../../app/App';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import Sidebar from "./Sidebar";

const Dashboard = () => {
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
	return (
		<div className="dashboard-wrapper d-flex flex-wrap">
			<HelmetSection title="Dashboard | LeedWay" />
			<Sidebar />
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Dashboard</h4>
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
					<div className="row">
						{!loggedInUser.email ? <div className="alert alert-warning">No data found!</div> :

							<h1 className="text-center">Welcome To the Dashboard</h1>
						}
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
