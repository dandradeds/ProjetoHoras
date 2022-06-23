import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTasks1655683310572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Tasks',
            columns: [
                {
                    name:'id',
                    type: "integer",
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'title',
                    type:'varchar',
                },
                {
                    name:'description',
                    type:'varchar',
                },
                {
                    name:'initialDate',
                    type:'varchar',
                },
                {
                    name:'finalDate',
                    type:'varchar',
                },
                {
                    name:'task',
                    type:'varchar',
                },
                {
                    name:'tasksName',
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
    }

}
