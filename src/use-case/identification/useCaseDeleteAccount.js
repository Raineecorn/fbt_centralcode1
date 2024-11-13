const useCaseDeleteAccount = ({ accountRepository, makeDeleteAccount }) => {
    return async function deleteAccount({ userId }) {
      // Step 1: Validate input with makeDeleteAccount entity
      const accountEntity = makeDeleteAccount({ userId });
  
      // Step 2: Find the account by userId
      const account = await accountRepository.findById(accountEntity.getUserId());
      if (!account) {
        throw new Error('Account not found');
      }
  
      // Step 3: Delete the account
      await accountRepository.deleteAccount(accountEntity.getUserId());
  
      return { message: 'Account successfully deleted' };
    };
  };
  
  module.exports = useCaseDeleteAccount;
  