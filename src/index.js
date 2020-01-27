module.exports.handler = async (event, context) => {
    const {version, session, request} = event;
    const ttsText = tts => ({
        text: tts.replace(/\+/g, ""),
        tts
    })

    let text = 'Меня зовут Оксана, я помогу Вам с выбором под+арка. Ком+у будем дарить?';
  
    return{
        version,
        session,
        response: {
            ...ttsText(text),
            end_session: false      
        }
    } 
};