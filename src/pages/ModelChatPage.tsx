import React from "react";
import ChatComponent from "../components/ChatComponent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ChatPage: React.FC = () => {
	const containerStyle: React.CSSProperties = {
		backgroundColor: "white",
		width: "98vw",
		height: "97vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		position: "relative",
	};

	const chatContainerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "row",
		width: "96%",
		height: "92%",
		marginTop: "4.5rem",
		marginLeft: "3.5rem",
	};

	return (
		<div style={containerStyle}>
			<Navbar />
			<Sidebar />
			<div style={chatContainerStyle}>
				<ChatComponent />
				<ChatComponent />
			</div>
		</div>
	);
};

export default ChatPage;
