import { Column, PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class PerDiem {
  @Column()
  country!: string;

  @Column()
  location!: string;

  @Column()
  season_code!: string;

  @PrimaryColumn()
  season_start_date!: Date;

  @Column()
  season_end_date!: Date;

  @Column()
  lodging!: number;

  @Column()
  meals_and_incidentals!: number;

  @Column()
  per_diem!: number;

  @Column()
  effective_date!: Date;

  @PrimaryColumn()
  location_code!: string;

  constructor(perDiem: PerDiem) {
    Object.assign(this, perDiem);
  }
}
