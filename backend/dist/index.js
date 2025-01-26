import exprress, { urlencoded } from 'express';
import 'dotenv/config';
import { expressMiddleware } from '@apollo/server/express4';
import apolloServer from './config/apolloServer.js';
import cors from 'cors';
const app = exprress();
const port = process.env.PORT || 7000;
app.use(exprress.json());
app.use(urlencoded({ extended: false }));
app.use(cors());
const startApolloServer = async () => {
    await apolloServer.start();
    app.use('/graphql', expressMiddleware(apolloServer));
};
startApolloServer();
app.listen(port, () => console.log('app running well'));
