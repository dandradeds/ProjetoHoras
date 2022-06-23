import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProject1655670840671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Project',
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
                    name:'created_at',
                    type:'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }))

    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Project')
    }

}
