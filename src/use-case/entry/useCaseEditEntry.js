// src/use-cases/entry/useCaseEditEntry.js
const useCaseEditEntry = ({ makeUpdateEntrys, query }) => {
  return async function put(trackingNumber, entryData) {
    // Validate and create update entity
    const entry = makeUpdateEntrys(entryData); // `entryData` should contain fields to update

    // Check if an entry with the same tracking number exists
    const existingEntry = await query.fetchData({ trackingNumber });
    if (existingEntry.length === 0) {
      throw new Error(`Entry with tracking number ${trackingNumber} not found.`);
    }

    // Update the entry in the database
    const result = await query.updateData(trackingNumber, {
      trackingNumber: entry.getTrackingNumber(),
      date: entry.getDate(),
      senderName: entry.getSenderName(),
      senderContactNumber: entry.getSenderContactNumber(),
      receiverName: entry.getReceiverName(),
      receiverContactNumber: entry.getReceiverContactNumber(),
      senderEmail: entry.getSenderEmail(),
      receiverEmail: entry.getReceiverEmail(),
      items: entry.getItems(),
      senderAddress: entry.getSenderAddress(),
      receiverAddress: entry.getReceiverAddress(),
      numberOfBoxes: entry.getNumberOfBoxes(),
      boxSize: entry.getBoxSize(),
      weight: entry.getWeight(),
      dateLoaded: entry.getDateLoaded(),
      remarks: entry.getRemarks(),
    });

    return result;
  };
};

module.exports = useCaseEditEntry;
