import React from "react";

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

const CardModelInfo: React.FC = () => {
	return (
		<div style={modelInfoOverlayStyle}>
			<div style={modelInfoStyle}>
				<p
					style={{
						fontWeight: 500,
						color: "#4e4e4e",
						fontSize: "18px",
						padding: "1%",
					}}
				>
					Model Information
				</p>
				<div style={{ padding: "0 10% 3% 10%" }}>
					<p style={{ color: "#4e4e4e", fontSize: "13px", marginBottom: "10px", textAlign: "left" }}>
						<span style={{ fontWeight: 500, color: "#4e4e4e", marginRight: "10px" }}>Type:</span> Fine-tuned Model
					</p>
					<p style={{ color: "#4e4e4e", marginBottom: "10px", textAlign: "left" }}>
						<span style={{ fontWeight: 500, color: "#4e4e4e", fontSize: "14px", marginRight: "10px" }}>Version:</span>{" "}
						1.0.0
					</p>
					<p style={{ color: "#4e4e4e", marginBottom: "10px", textAlign: "left" }}>
						<span style={{ fontWeight: 500, color: "#4e4e4e", fontSize: "14px", marginRight: "10px" }}>Cost:</span> $2
						per million tokens
					</p>
					<p style={{ color: "#4e4e4e", marginBottom: "10px", textAlign: "left" }}>
						<span style={{ fontWeight: 500, color: "#4e4e4e", fontSize: "14px", marginRight: "10px" }}>
							Training Date:
						</span>{" "}
						January 1, 2024
					</p>
					<p style={{ color: "#4e4e4e", marginBottom: "10px", textAlign: "left" }}>
						<span style={{ fontWeight: 500, color: "#4e4e4e", fontSize: "14px", marginRight: "10px" }}>
							Performance:
						</span>{" "}
						99.9% accuracy, 98% precision, 97% recall
					</p>
					<p style={{ color: "#4e4e4e", marginBottom: "10px", textAlign: "left" }}>
						<span style={{ fontWeight: 500, color: "#4e4e4e", fontSize: "14px", marginRight: "10px" }}>
							Training Dataset:
						</span>{" "}
						Custom dataset with over 1 million entries
					</p>
					<p style={{ color: "#4e4e4e", marginBottom: "10px", textAlign: "left" }}>
						<span style={{ fontWeight: 500, color: "#4e4e4e", fontSize: "14px", marginRight: "10px" }}>
							Limitations:
						</span>{" "}
						May not perform well with sarcastic inputs
					</p>
					<p style={{ color: "#4e4e4e", marginBottom: "10px", textAlign: "left" }}>
						<span style={{ fontWeight: 500, color: "#4e4e4e", fontSize: "14px", marginRight: "10px" }}>
							Recommended Use:
						</span>{" "}
						Customer support chatbots, FAQ bots
					</p>
				</div>
			</div>
		</div>
	);
};

export default CardModelInfo;
