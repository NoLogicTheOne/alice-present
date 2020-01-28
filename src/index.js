const greeting = require('./greeting')

const realFunction = (event, context) => {
    const {version, session, request} = event;

    return {
        version,
        session,
        response: greeting()
    }
}

module.exports.handler = async (event, context) => {
    return realFunction(event, context)
};

module.exports.testing = realFunction