const useCaseRegisterAccount = ({ accountRepository, makeAdmin }) => {
  return async function registerAccount(accountData) {
    // Validate the input with makeAdmin entity
    const adminEntity = makeAdmin(accountData);

    // Check if the username is already taken
    const existingAccount = await accountRepository.findByUsername({ username: adminEntity.getUsername() });
    if (existingAccount) {
      throw new Error('Username is already in use');
    }

    // Log username before calling createData
    console.log("registerAccount - Username:", adminEntity.getUsername());

    // Create the account in the database (hook will handle hashing)
    const newAccount = await accountRepository.createData({
      username: adminEntity.getUsername(),
      password: adminEntity.getPassword(), // Pass plaintext password here
    });

    return newAccount;
  };
};

module.exports = useCaseRegisterAccount;
