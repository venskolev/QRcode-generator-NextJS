import React, { useState, useRef } from "react";

import { TextField, Button, Typography, Container, Box } from "@mui/material";
import QRCodeGenerator from "qrcode-generator";
import { Trans, useTranslation } from 'react-i18next';



export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const canvasRef = useRef(null);

  const generateQRCode = () => {
    const typeNumber = 4; // QR Code type (change as needed)
    const errorCorrectionLevel = "L"; // Error correction level (L, M, Q, H)

    const qr = QRCodeGenerator(typeNumber, errorCorrectionLevel);
    qr.addData(text);
    qr.make();

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const moduleCount = qr.getModuleCount();
    const cellSize = canvas.width / moduleCount;
    const { t } = useTranslation();

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";

    for (let row = 0; row < moduleCount; row++) {
      for (let col = 0; col < moduleCount; col++) {
        if (qr.isDark(row, col)) {
          context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }
    const logoSize = 30;
    context.fillStyle = "black";
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, logoSize, 0, 2 * Math.PI);
    context.fill();
  };

  return (
    <Container
    className="no-theme"
      sx={{ minHeight: "calc(100vh - 180px)" }}>
        <Typography className="styleToggle" variant="h4" align="center" gutterBottom>
        <Trans i18nKey="QR Code Generator"></Trans>
        </Typography>
      <TextField
          label="Enter URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      <Button
         className="styleToggle"
        variant="contained"
        onClick={generateQRCode}>
          Generate QR Code
      </Button>
      <Box className="no-theme">
      <canvas
          ref={canvasRef}
          width={256}
          height={256}
          style={{ marginTop: "20px", border: "1px solid #ccc" }}
        ></canvas>
      </Box>
      </Container>
  );
}
