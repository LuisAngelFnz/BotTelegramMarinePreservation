const FishController = require('./lib/controllers/FishController');  
const TelegramBot    = require("node-telegram-bot-api");
const token          = require('./token')

const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});


bot.on("message", (msg) => {
    const chat_id = msg.chat.id;
    try{
        
        const message = msg.text.trim().toLowerCase();
        if(['/start','help'].includes(message)){
            response = [
                'Hola aqui puedes consultar los peces el peligro de extinción',
                'Opciones:',
                '* All ó Todos (Obtiene todos los peces)',
                '* Names ó Nombres (Consulta los nombres)',
                '* puedes mandar algún nombre para consultar su info',
                '\nTambien puedes escribir "help"'
            ].join('\n')

        }else if(['todos', 'all'].includes(message)){
            response = FishController.getAllFish();
        
        }else if(['nombres', 'names'].includes(message)){
            response = FishController.getAllFishNames();
        }else{
            response = FishController.getFishByName(message);
        }
        
        bot.sendMessage(chat_id, response);

    }catch(error){
        bot.sendMessage(chat_id, 'Servicio temporalmente deshabilitado');        
        console.log('Controlle error', error);
    }
});