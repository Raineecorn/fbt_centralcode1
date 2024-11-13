const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const useCaseLoginAccount = ({ accountRepository, makeAdmin, jwtSecret, jwtExpiration }) => {
  return async function loginAccount({ username, password }) {
    // Step 1: Validate the input with makeAdmin entity
    const adminEntity = makeAdmin({ username, password });

    // Step 2: Find the account by username
    const account = await accountRepository.findByUsername({ username: adminEntity.getUsername() });
    if (!account) {
      throw new Error('Account not found');
    }

    // Step 3: Verify the password with bcrypt.compare
    const isPasswordValid = await bcrypt.compare(adminEntity.getPassword(), account.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Step 4: Generate JWT token
    const token = jwt.sign({ id: account.id, username: account.username }, jwtSecret, {
      expiresIn: jwtExpiration,
    });

    console.log("WELCOME UNIVERSALSAL HATDOG: ", username);

    return { token };
  };
};

module.exports = useCaseLoginAccount;
