import React from "react";
import "./ConfirmDialog.css";

export default function ConfirmDialog({ message, onDelete, onCancel }) {
  return (
    <div className="dialog-background">
      <div className="dialog-container">
        <p>{message}</p>
        <div className="button-container">
          <button className="Delete" onClick={onDelete}>Delete</button>
          <button className="Cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
