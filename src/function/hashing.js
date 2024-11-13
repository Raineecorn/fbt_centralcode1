 
const hashing = ({bcrypt,dotenv}) => {
    return async function (password)
    {    
        if (!password) return null;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
}

module.exports = hashing 