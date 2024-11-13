// src/entities/makeGetEntry.js
const makeGetEntry = ({}) => {
    return function make({
      trackingNumber,
      date,
      senderName,
      receiverName,
    } = {}) {
      // Validation for at least one identifying field
      if (!trackingNumber && !date && !senderName && !receiverName) {
        throw new Error("At least one search criteria must be provided!");
      }
  
      // Return an immutable object with getter functions
      return Object.freeze({
        getTrackingNumber: () => trackingNumber,
        getDate: () => date,
        getSenderName: () => senderName,
        getReceiverName: () => receiverName,
      });
    };
  };
  
  module.exports = makeGetEntry;
  