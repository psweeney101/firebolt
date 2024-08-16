import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePerDiem1723808600475 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `per_diem` (`country` varchar(255) NOT NULL, `location` varchar(255) NOT NULL, `season_code` varchar(255) NOT NULL, `season_start_date` datetime NOT NULL, `season_end_date` datetime NOT NULL, `lodging` int NOT NULL, `meals_and_incidentals` int NOT NULL, `per_diem` int NOT NULL, `effective_date` datetime NOT NULL, `location_code` varchar(255) NOT NULL, PRIMARY KEY (`season_start_date`, `location_code`)) ENGINE=InnoDB'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `per_diem`');
  }
}
