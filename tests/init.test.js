const handler = require('../src/index').testing

const getTestedEvent = (text = "") => ({
	version: 1, 
	session: 2, 
	request: {
		original_utterance: text
	}
})


describe('correct load', () => {
	it('is function ', () => {
		expect(typeof handler).toEqual('function')
	})
})
