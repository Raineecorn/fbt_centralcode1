const useCaseAddEntry = ({ makeEntrys, query }) => {
  return async function post(entryData) {
    console.log("Query object:", query);
    const entry = makeEntrys(entryData);

    // Check if the tracking number already exists in the database
    const existingEntry = await query.fetchData({ trackingNumber: entry });
    if (existingEntry.length > 0) {
      throw new Error('Tracking number already exists. Please try a new one.');
    }

    // Create the entry record in the database
    const result = await query.createData({
      data: {
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
      }
    });

    return result;
  };
};

module.exports = useCaseAddEntry;
