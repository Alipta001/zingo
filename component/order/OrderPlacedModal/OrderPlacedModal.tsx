"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Modal, Button } from "@mui/material";
import { CheckCircle } from "lucide-react";

interface OrderPlacedModalProps {
  open: boolean;
  orderId?: string;
  onClose?: () => void;
}

export default function OrderPlacedModal({ open, orderId, onClose }: OrderPlacedModalProps) {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) onClose();
    // Redirect to live tracking
    router.push("/pages/liveTracking");
  };

  useEffect(() => {
    if (open && orderId) {
      // Optionally store orderId for live tracking
      localStorage.setItem("currentOrderId", orderId);
    }
  }, [open, orderId]);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="order-modal">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          padding: "48px 32px",
          textAlign: "center",
          minWidth: "320px",
          maxWidth: "420px",
          zIndex: 1000,
        }}
      >
        {/* Success Icon */}
        <div style={{ marginBottom: "24px" }}>
          <CheckCircle
            size={64}
            color="#22c55e"
            style={{
              margin: "0 auto",
              animation: "scaleIn 0.6s ease-in-out",
            }}
          />
        </div>

        {/* Title */}
        <h2
          id="order-modal"
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#1a1a1a",
            marginBottom: "12px",
            marginTop: 0,
          }}
        >
          Order Placed! ✨
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            marginBottom: "12px",
            lineHeight: "1.6",
          }}
        >
          Your order has been successfully placed and confirmed by the restaurant.
        </p>

        {/* Order ID (if available) */}
        {orderId && (
          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "12px 16px",
              borderRadius: "8px",
              marginBottom: "24px",
              border: "1px solid #e0e0e0",
            }}
          >
            <p style={{ fontSize: "12px", color: "#999", marginTop: 0, marginBottom: "4px" }}>
              Order ID
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#e23744",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              #{orderId}
            </p>
          </div>
        )}

        {/* Info Text */}
        <p
          style={{
            fontSize: "14px",
            color: "#666",
            marginBottom: "32px",
            marginTop: "16px",
          }}
        >
          Track your order in real-time. You can view the status and estimated delivery time.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            style={{
              backgroundColor: "#e23744",
              color: "white",
              fontSize: "14px",
              fontWeight: "700",
              padding: "12px 32px",
              borderRadius: "8px",
              textTransform: "uppercase",
              flex: 1,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#c91f2a";
              (e.target as HTMLButtonElement).style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#e23744";
              (e.target as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            Track Order
          </Button>
        </div>

        {/* CSS Animation */}
        <style>{`
          @keyframes scaleIn {
            from {
              transform: scale(0);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </Modal>
  );
}
