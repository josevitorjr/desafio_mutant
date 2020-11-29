import {
  Column,
  Entity, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('companies')
class Company {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  catchPhrase: string;

  @Column()
  bs: string;
}

export default Company;
