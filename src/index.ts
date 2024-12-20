import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', function (socket) {
    console.log('User connected');
    // socket.send("Hello");

    setInterval(() => {
        socket.send('Current Price of Solana is: ' + Math.random());
    }, 500);

    socket.on('message', (e) => {
        //client reaches the server through this
        console.log(e.toString());
    });
});

// wss.on('connection', function (socket) {
//     console.log('User connected');

//     socket.on('message', (e) => {
//         if (e.toString() === 'ping') {
//             socket.send('pong');
//         }
//     });
// });
