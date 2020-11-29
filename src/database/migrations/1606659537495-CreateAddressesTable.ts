import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAddressesTable1606659537495
  implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'suite',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'zipcode',
            type: 'varchar',
          },
          {
            name: 'lat',
            type: 'float',
          },
          {
            name: 'lng',
            type: 'float',
          },
          {
            name: 'user_id',
            type: 'integer',
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses');
  }

}
