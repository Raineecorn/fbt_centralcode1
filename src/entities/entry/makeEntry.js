// src/entities/makeEntry.js
const makeEntry = ({}) => {
    return function make({
      trackingNumber,
      date,
      senderName,
      senderContactNumber,
      receiverName,
      receiverContactNumber,
      senderEmail,
      receiverEmail,
      items,
      senderAddress,
      receiverAddress,
      numberOfBoxes,
      boxSize,
      weight,
      dateLoaded,
      remarks,
    } = {}) {
      // Validation for required fields
      if (!trackingNumber) {
        throw new Error("Tracking number must be provided!");
      }
      if (!date) {
        throw new Error("Date must be provided!");
      }
      if (!senderName) {
        throw new Error("Sender name must be provided!");
      }
      if (!senderContactNumber) {
        throw new Error("Sender contact number must be provided!");
      }
      if (!receiverName) {
        throw new Error("Receiver name must be provided!");
      }
      if (!receiverContactNumber) {
        throw new Error("Receiver contact number must be provided!");
      }
      if (!items) {
        throw new Error("Items must be provided!");
      }
      if (!senderAddress) {
        throw new Error("Sender address must be provided!");
      }
      if (!receiverAddress) {
        throw new Error("Receiver address must be provided!");
      }
      if (numberOfBoxes === undefined || numberOfBoxes === null) {
        throw new Error("Number of boxes must be provided!");
      }
      if (!boxSize) {
        throw new Error("Box size must be provided!");
      }
      if (weight === undefined || weight === null) {
        throw new Error("Weight must be provided!");
      }
      if (!dateLoaded) {
        throw new Error("Date loaded must be provided!");
      }
  
      // Optional fields (no need for required checks)
      senderEmail = senderEmail || null;
      receiverEmail = receiverEmail || null;
      remarks = remarks || null;
  
      // Return an immutable object with getter functions
      return Object.freeze({
        getTrackingNumber: () => trackingNumber,
        getDate: () => date,
        getSenderName: () => senderName,
        getSenderContactNumber: () => senderContactNumber,
        getReceiverName: () => receiverName,
        getReceiverContactNumber: () => receiverContactNumber,
        getSenderEmail: () => senderEmail,
        getReceiverEmail: () => receiverEmail,
        getItems: () => items,
        getSenderAddress: () => senderAddress,
        getReceiverAddress: () => receiverAddress,
        getNumberOfBoxes: () => numberOfBoxes,
        getBoxSize: () => boxSize,
        getWeight: () => weight,
        getDateLoaded: () => dateLoaded,
        getRemarks: () => remarks,
      });
    };
  };
  
  module.exports = makeEntry;
  