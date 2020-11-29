import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  street: string;

  @Column()
  suite: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @Column('float')
  lat: number;

  @Column('float')
  lng: number;

  @Column('integer')
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Address;
