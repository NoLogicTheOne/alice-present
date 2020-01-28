module.exports = tts => ({
    text: tts.replace(/\+|\-/g, ""),
    tts
})