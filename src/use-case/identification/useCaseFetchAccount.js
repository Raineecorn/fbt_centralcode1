const useCaseFetchAccount = ({ accountRepository }) => {
  return async function fetchAccount({  }) {
    // Step 1: Validate input with makeFetchAccount entity

    
    // Step 2: Find account by userId
    const account = await accountRepository.fetchAllData();
    if (!account) {
      throw new Error('Account not found');
    }

    return account;
  };
};

module.exports = useCaseFetchAccount;
