module.exports = {
    name: 'prune', 
    description: 'delete arg[0] amount of messages',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if(isNaN(amount)) {
            return message.reply('That doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('You need to enter a number between 1 and 99.');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err); 
            message.channel.send('There was an error trying to prune messages in this channel.');
        }); 
    },
};