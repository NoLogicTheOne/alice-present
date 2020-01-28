const greeting = require('../src/greeting')

const getTestedEvent = (text = "") => ({
	version: 1, 
	session: 2, 
	request: {
		original_utterance: text
	}
})

describe('correct load', () => {
	it('is function ', () => {
		expect(typeof greeting).toEqual('function')
	})
})

describe('greeting', () => {
	it('first phrase', () => {
		let real = greeting().text
		let expected = /зовут Оксана, я помогу Вам с выбором подарка/
		
		expect(real).toMatch(expected)
	})
})