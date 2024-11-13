// src/entities/makeUpdateEntry.js
const makeUpdateEntry = () => {
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
    
    // Validation for required fields in update context
    if (!trackingNumber) {
      throw new Error("Tracking number must be provided for update!");
    }

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

module.exports = makeUpdateEntry;
