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

describe('greeting', () => {
	it('first phrase', () => {
		let real = handler(getTestedEvent()).response.text
		let expected = "Меня зовут Оксана, я помогу Вам с выбором подарка. Кому будем дарить?"
		
		expect(real).toEqual(expected)
	})

})