import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.postress;
const a = config.aws;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
});

