function orderPizza(type, name, callback) {
    let pizza=type+' '+name;
    console.log(new Date()+' '+pizza+' Pizza ordered...');
    console.log(new Date()+' '+pizza+' Pizza is being prepared');
    setTimeout(function () {
        let msg = new Date()+' Your '+pizza+' is ready! The total bill is $13';
        callback(msg);
    }, 3000);
}

function notify(message){
	console.log(message);
}
orderPizza('Veg', 'Cheese Barbeque',notify);