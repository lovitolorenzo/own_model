import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import CardModelInfo from "./CardModelInfo";

const ChatComponent: React.FC = () => {
	interface Message {
		text: string;
		from: "user" | "server";
	}

	const [inputMessage, setInputMessage] = useState(""); // Stato per l'input dell'utente
	const [responseMessage, setResponseMessage] = useState(""); // Stato per la risposta del backend
	const [messages, setMessages] = useState<Message[]>([]);
	const [showModelInfo, setShowModelInfo] = useState(true); // Stato per la visibilità della card del modello

	let ws: any;

	const sendMessage = () => {
		// Aggiungi il messaggio dell'utente alla lista dei messaggi
		setMessages([...messages, { text: inputMessage, from: "user" }]);
		// Invia il messaggio al backend tramite WebSocket
		//ws.send(inputMessage);
		setInputMessage(""); // Resetta l'input dell'utente dopo l'invio
	};

	useEffect(() => {
		// Crea la connessione WebSocket quando il componente viene montato
		ws = new W3CWebSocket("wss://echo.websocket.org"); //url_del_tuo_backend_websocket

		// Aggiorna la risposta del backend quando ricevi un nuovo messaggio
		ws.onmessage = (message: any) => {
			setResponseMessage(message.data);
			// Aggiungi il messaggio del backend alla lista dei messaggi
			setMessages([...messages, { text: message.data, from: "server" }]);
		};

		// Chiudi la connessione WebSocket quando il componente viene smontato
		return () => {
			ws.close();
		};
	}, []);

	return (
		<div style={chatStyle}>
			{showModelInfo && <CardModelInfo />}

			<div style={{ ...contentStyle, borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
				<div style={modelStyle}>
					<span style={{ marginLeft: "7%", fontWeight: 100, color: "#52525B", fontSize: "14px" }}>Model 1</span>
				</div>
			</div>

			<div style={{ height: "80%", overflowY: "scroll" }}>
				{/* Mostra tutti i messaggi */}
				{messages.map((message, index) => (
					<div key={index} style={message.from === "user" ? userMessageStyle : serverMessageStyle}>
						{message.text}
					</div>
				))}
			</div>
			<div style={bottomStyle}>
				{/* Input dell'utente */}
				<input
					type="text"
					style={inputStyle}
					value={inputMessage}
					onFocus={() => setShowModelInfo(false)} // Nascondi la card quando l'utente seleziona l'input di testo
					onChange={(e) => setInputMessage(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === "Enter" && inputMessage.trim() !== "") {
							sendMessage();
						}
					}}
					placeholder="Write your message"
				/>
				{/* Invio del messaggio */}
				<span
					style={iconStyle}
					onClick={() => {
						if (inputMessage.trim() !== "") {
							sendMessage();
						}
					}}
				>
					&#10148;
				</span>
			</div>
		</div>
	);
};

export default ChatComponent;

const chatStyle: React.CSSProperties = {
	flex: "1",
	margin: "0 10px",
	border: "1px solid #e1e1e1",
	borderRadius: "8px",
	position: "relative" as "relative",
};
const modelInfoOverlayStyle: React.CSSProperties = {
	position: "absolute" as "absolute",
	top: "0",
	left: "0",
	right: "0",
	bottom: "0",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	zIndex: 1,
};

const modelInfoStyle: React.CSSProperties = {
	backgroundColor: "#FAFAFA",
	borderRadius: "8px",
	boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
	textAlign: "center" as "center",
	width: "100%",
	fontWeight: 100,
	color: "#52525B",
	fontSize: "14px",
	fontFamily: "Montserrat, sans-serif",
	maxWidth: "500px",
};

const bottomStyle = {
	height: "10%",
	backgroundColor: "#FAFAFA",
	borderBottomLeftRadius: "8px",
	borderBottomRightRadius: "8px",
	boxShadow: "0px 2px 2px #e1e1e1",
	borderBottom: "1px solid #e1e1e1",
	borderTop: "1px solid #e1e1e1",
	display: "flex",
	alignItems: "center",
	position: "relative" as "relative",
	zIndex: 2,
};

const inputStyle = {
	borderRadius: "5px 0 0 5px",
	border: "1px solid #e9e9e9",
	width: "86%",
	height: "45%",
	marginLeft: "4%",
	fontFamily: "Montserrat, sans-serif",
	fontWeight: 100,
	color: "#52525B",
	fontSize: "14px",
	paddingLeft: "2%",
};

const iconStyle = {
	backgroundColor: "#f4f4f4",
	border: "1px solid #e9e9e9",
	borderLeft: "none",
	borderRadius: "0 5px 5px 0",
	height: "50%",
	cursor: "pointer",
	width: "5%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const userMessageStyle = {
	backgroundColor: "#d3f4ff",
	padding: "5px",
	margin: "5px",
	borderRadius: "5px",
	fontFamily: "Montserrat, sans-serif",
	fontWeight: 100,
	color: "#52525B",
	fontSize: "14px",
};

const serverMessageStyle = {
	backgroundColor: "#ffffff",
	padding: "5px",
	margin: "5px",
	borderRadius: "5px",
	fontFamily: "Montserrat, sans-serif",
	fontWeight: 100,
	color: "#52525B",
	fontSize: "14px",
};

const contentStyle = {
	height: "10%",
	backgroundColor: "#FAFAFA",
	borderBottom: "1px solid #e1e1e1",
	display: "flex",
	alignItems: "center",
};

const modelStyle = {
	fontFamily: "Montserrat, sans-serif",
	height: "60%",
	width: "70%",
	backgroundColor: "#ffffff",
	borderRadius: "5px",
	border: "1px solid #e1e1e1",
	marginLeft: "4%",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
};
