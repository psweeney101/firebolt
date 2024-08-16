import { createReadStream } from 'fs';
import path from 'path';
import { parse } from 'csv-parse';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { PerDiem } from '@firebolt/shared';

interface RawPerDiem {
  Country: string;
  Location: string;
  'Season Code': string;
  'Season Start Date': string;
  'Season End Date': string;
  Lodging: string;
  'Meals & Incidentals': string;
  'Per Diem': string;
  'Effective Date': string;
  'Footnote Reference': string;
  'Location Code': string;
}

export class SeedPerDiem1723896462885 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return new Promise((resolve) => {
      const repository = queryRunner.manager.getRepository(PerDiem);

      createReadStream(path.join(__dirname, 'assets', 'per-diem-rates.csv'))
        .pipe(parse({ columns: true }))
        .on('data', async (data: RawPerDiem) => {
          const perDiem = new PerDiem({
            country: data.Country,
            location: data.Location,
            season_code: data['Season Code'],
            season_start_date: new Date(`${data['Season Start Date']}-2024`),
            season_end_date: new Date(`${data['Season End Date']}-2024`),
            lodging: Number.parseInt(data.Lodging, 10),
            meals_and_incidentals: Number.parseFloat(
              data['Meals & Incidentals']
            ),
            per_diem: Number.parseInt(data['Per Diem'], 10),
            effective_date: new Date(data['Effective Date']),
            location_code: data['Location Code'],
          });
          await repository.save(perDiem);
        })
        .on('close', resolve);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const repository = queryRunner.manager.getRepository(PerDiem);
    await repository.delete({});
  }
}
