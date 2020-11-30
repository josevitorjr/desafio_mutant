import request from 'supertest';
import { Connection, getRepository, getConnection, Like } from 'typeorm';
import createConnection from '../database';

import User from '../models/User';
import Company from '../models/Company';
import Address from '../models/Address';

import app from '../app';

let connection: Connection;

jest.setTimeout(30000);

describe('User', () => {
  beforeAll(async () => {
    connection = await createConnection('test-connection');

    await connection.query('DROP TABLE IF EXISTS addresses');
    await connection.query('DROP TABLE IF EXISTS users');
    await connection.query('DROP TABLE IF EXISTS companies');
    await connection.query('DROP TABLE IF EXISTS migrations');

    await connection.runMigrations();
  });


  beforeEach(async () => {
    await connection.query('DELETE FROM addresses');
    await connection.query('DELETE FROM users');
    await connection.query('DELETE FROM companies');
  });


  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });

  it('should be able to list users', async () => {
    const response = await request(app).get('/users');

    expect(response.body).toHaveLength(10);
  });

  it('should be able to create a new users', async () => {
    const addressesRepository = getRepository(Address);

    const usersJson = await request(app).get('/users');

    await request(app).post('/users').send(usersJson.body);

    const usersWhoLivesInApartments = await addressesRepository.find({
      where: {
        suite: Like('Apt'),
      },
    });

    const expectedUsersWhoLivesInApartments: [] = [];

    expect(usersWhoLivesInApartments).toEqual(expect.arrayContaining(expectedUsersWhoLivesInApartments));
  });
});
