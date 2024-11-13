const dateconv = ({}) => {
    return function date(date)
    {
        let options = {  
            year: "numeric",  
            month: "numeric",  
            day: "numeric" };  
            let newDateFormat = new Date(date).toLocaleDateString("en-US", options);
        return newDateFormat
    }
}


module.exports = dateconv