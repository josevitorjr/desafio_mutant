import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AddUserAdressForeignKey1606660771572
  implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'addresses',
      new TableForeignKey({
        name: 'UserAddress',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('addresses', 'UserAddress');
  }

}
