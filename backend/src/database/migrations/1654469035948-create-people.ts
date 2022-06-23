import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createPeople1654469035948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'People',
            columns: [
                {
                    name:'id',
                    type: "integer",
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'name',
                    type:'varchar',
                },
                {
                    name:'lastName',
                    type:'varchar',
                },
                {
                    name:'created_at',
                    type:'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('People')
    }

}
