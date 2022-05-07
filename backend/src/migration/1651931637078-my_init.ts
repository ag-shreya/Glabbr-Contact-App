import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1651931637078 implements MigrationInterface {
    name = 'myInit1651931637078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(300) NOT NULL, "internalComment" character varying(300), "phoneNumber" character varying(10) NOT NULL, "status" boolean NOT NULL DEFAULT true, "location" character varying(300) NOT NULL, "organization" character varying(300) NOT NULL, "isFavorite" boolean NOT NULL DEFAULT false, "tags" character varying(300), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
