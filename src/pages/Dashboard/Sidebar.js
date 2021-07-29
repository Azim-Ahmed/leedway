import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { UserContext } from '../../app/App';
import userImage from '../../assets/images';
import { IconContext } from 'react-icons';
import { RiContactsFill } from 'react-icons/ri';
import { IoBuildSharp } from 'react-icons/io5';
import { BiBuildingHouse } from 'react-icons/bi';
import { MdLandscape } from 'react-icons/md';




const Sidebar = () => {
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	return (
		<div className="sidebar h-100 p-4">
			<Link style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}} to="/admin/dashboard/home">
				<img src={userImage.bannerLogo} alt="" style={{ maxWidth: "150px", textAlign: 'center', height: '80px', margin: 'auto' }} />
			</Link>
			<div className="sidebar-buttons pt-5">
				<Link to="/admin/dashboard/serviceList" className="btn">
					<IconContext.Provider
						value={{
							color: '#2d6546',
							size: '30px',
							className: 'react-icons',
							style: { marginRight: '10px' }
						}}
					>
						<RiContactsFill />
					</IconContext.Provider>
					<span>Contacts</span>
				</Link>

				<Link to="/admin/dashboard/Land-Development" className="btn">
					<IconContext.Provider
						value={{
							color: '#2d6546',
							size: '30px',
							className: 'react-icons',
							style: { marginRight: '10px' }
						}}
					>
						<MdLandscape />
					</IconContext.Provider>
					<span>Land Developement</span>
				</Link>

				<Link to="/admin/dashboard/construction" className="btn">
					<IconContext.Provider
						value={{
							color: '#2d6546',
							size: '30px',
							className: 'react-icons',
							style: { marginRight: '10px' }
						}}
					>
						<IoBuildSharp />
					</IconContext.Provider>
					<span>Contstraction</span>
				</Link>


				<Link to="/admin/dashboard/Commercial" className="btn">
					<IconContext.Provider
						value={{
							color: '#2d6546',
							size: '30px',
							className: 'react-icons',
							style: { marginRight: '10px' }
						}}
					>
						<BiBuildingHouse />
					</IconContext.Provider>
					<span>Commercial Investment</span>
				</Link>
				<Link to="/admin/dashboard/about" className="btn">
					<IconContext.Provider
						value={{
							color: '#2d6546',
							size: '30px',
							className: 'react-icons',
							style: { marginRight: '10px' }
						}}
					>
						<BiBuildingHouse />
					</IconContext.Provider>
					<span>About</span>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
