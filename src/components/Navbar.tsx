import React from "react";
import PersonIcon from "@material-ui/icons/Person";

const Navbar: React.FC = () => {
	const navbarStyle: React.CSSProperties = {
		backgroundColor: "#ffffff",
		width: "100%",
		padding: "1rem",
		position: "fixed",
		top: 0,
		left: 0,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		boxSizing: "border-box",
		zIndex: 100,
		borderBottom: "1px solid #e9e9e9",
	};

	const navStyle = {
		display: "flex",
		width: "100%",
		alignItems: "center",
	};

	const linkContainerStyle = {
		display: "flex",
		gap: "2rem",
		alignItems: "center",
	};

	const linkStyle = {
		fontFamily: "Montserrat, sans-serif",
		textDecoration: "none",
		display: "flex",
		alignItems: "center",
		height: "100%",
		color: "#4e4e4e",
		fontSize: "14px",
	};

	const specialLinkStyle = {
		...linkStyle,
		borderRadius: "5px",
		border: "1px solid #e1e1e1",
		padding: "0.5rem 2rem",
		marginLeft: "auto",
	};

	const iconStyle = {
		fontSize: "1rem",
		marginRight: "0.5rem",
	};

	return (
		<div style={navbarStyle}>
			<nav style={navStyle}>
				<div style={linkContainerStyle}>
					<a href="#" style={{ ...linkStyle, marginLeft: "3.5rem" }}>
						What We Do
					</a>
					<a href="#" style={linkStyle}>
						Documentation
					</a>
					<a href="#" style={linkStyle}>
						News and Updates
					</a>
					<a href="#" style={linkStyle}>
						Customer Service
					</a>
				</div>
				<a href="#" style={specialLinkStyle}>
					<PersonIcon style={iconStyle} />
					Saro Lovito
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
