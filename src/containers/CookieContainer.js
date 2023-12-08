import React from 'react';
import { Modal, Button, Typography, Box } from '@mui/material';
import { Trans } from 'react-i18next';

const CookieContainer = ({ open, onAccept, onDecline, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        style={{
          padding: '1rem',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: '#ffffff',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '8px',
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          <Trans i18nKey="cookeititle"></Trans>
        </Typography>
        <Typography variant="body2" component="p" style={{ marginTop: 3 }}>
          <Trans i18nKey="cookietext"></Trans>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: "1rem" }}>
        <Button variant="contained" onClick={onAccept} style={{ marginTop: 2 }}>
          <Trans i18nKey="acceptall"></Trans>
        </Button>
        <Button variant="contained" onClick={onDecline} style={{ marginTop: 2 }}>
          <Trans i18nKey="decline"></Trans>
        </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CookieContainer;
