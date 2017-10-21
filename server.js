import config, {nodeEnv, logMessage} from './config';
// import http from "http";
import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './api';
// import path from 'path';
import serverRender from './serverRender';
// import sassMiddleware from 'node-sass-middleware';

const server = express();
server.use(bodyParser.json());
// console.log(config, nodeEnv);
logMessage(nodeEnv);
logMessage('Hello function');

/*const server = http.createServer((req, res) => {
    res.write("Hello HTTP!\n");
    setTimeout(() => {
        res.write("I can stream!");
        res.end();
    }, 3000);
});*/

// server.use(sassMiddleware({
//   src: __dirname,
//   dest: path.join(__dirname, 'public')
// }));
// server.use('/public', express.static(path.join(__dirname, 'public')));
server.set('view engine', 'ejs');

server.get(['/', '/contest/:contestId'], (req, res) => {
  // res.send("Hello from Express!");

  serverRender(req.params.contestId)
    .then(({initialMarkup, initialData}) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
      console.error(error);
      res.status(404).send('Bad request');
    });
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express server is listening on port: ', config.port);
});
