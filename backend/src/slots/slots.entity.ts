import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('slots')
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz' })
  start_date: Date;

  @Column({ type: 'timestamptz' })
  end_date: Date;

  @Column({ default: false })
  booked: boolean;

  @Column({ nullable: true })
  booked_by: string;
}
