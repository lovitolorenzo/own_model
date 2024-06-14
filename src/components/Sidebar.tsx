import React from "react";
import ClockIcon from "@material-ui/icons/AccessTime";
import AddIcon from "@material-ui/icons/Add";

const Sidebar: React.FC = () => {
	const sidebarStyle: React.CSSProperties = {
		backgroundColor: "white",
		height: "100%",
		width: "3.5rem",
		position: "fixed",
		top: 0,
		left: 0,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		boxSizing: "border-box",
		borderRight: "1px solid #e9e9e9",
	};

	const navStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		alignItems: "center",
	};

	const linkStyle = {
		fontFamily: "Montserrat, sans-serif",
		textDecoration: "none",
		display: "flex",
		alignItems: "center",
		height: "60px",
		color: "#4e4e4e",
		fontSize: "14px",
	};

	const specialLinkStyle = {
		...linkStyle,
		borderRadius: "5px",
		border: "1px solid #e1e1e1",
		padding: "0.5rem 2rem",
		marginTop: "auto",
		marginBottom: "20px",
	};

	const iconStyle = {
		fontSize: "1rem",
	};

	return (
		<div style={sidebarStyle}>
			<nav style={navStyle}>
				<a href="#" style={linkStyle}>
					<AddIcon style={iconStyle} />
				</a>
				<a href="#" style={linkStyle}>
					<AddIcon style={iconStyle} />
				</a>
				<a href="#" style={linkStyle}>
					<ClockIcon style={iconStyle} />
				</a>
			</nav>
		</div>
	);
};

export default Sidebar;
