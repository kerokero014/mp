'use client';

import React, { useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessLottie from './SuccessLottie';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  autoHideDuration?: number; // optional override (default 2.5s)
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose, autoHideDuration = 2000 }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, onClose, autoHideDuration]);

  return (
    <AnimatePresence>
      {open && (
        <Modal open={open} onClose={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="flex items-center justify-center h-full w-full"
          >
            <Box
              sx={{
                bgcolor: 'background.paper',
                p: 4,
                borderRadius: 4,
                boxShadow: 24,
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SuccessLottie />
            </Box>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
