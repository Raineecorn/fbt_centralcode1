const buildConditions = () => {
    return Object.freeze({
        opConditions
      });
      async function opConditions(params){
        let conditions = [];
        for (const key in params) {
            if (params[key]) {
                let condition = {};
                condition[key] = params[key];
                conditions.push(condition);
            }
        }
        return conditions;
    }
}

module.exports = buildConditions