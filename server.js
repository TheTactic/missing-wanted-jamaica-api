const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const router2 = jsonServer.router('db_0.json');
const router3 = jsonServer.router('db_1.json');
const router4 = jsonServer.router('db_2.json');
const router5 = jsonServer.router('db_3.json');
const router6 = jsonServer.router('db_4.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(router2);
server.use(router3);
server.use(router4);
server.use(router5);
server.use(router6);

server.listen(port);