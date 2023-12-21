import { MigrationInterface, QueryRunner } from "typeorm";

export class NewStackTable21704767674313 implements MigrationInterface {
    name = 'NewStackTable21704767674313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_f15d48fa3ea5e4bda05ca8ab207"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "stackId"`);
        await queryRunner.query(`ALTER TABLE "assets" ADD "stackId" uuid`);
        await queryRunner.query(`ALTER TABLE "asset_stack" DROP CONSTRAINT "PK_74a27e7fcbd5852463d0af3034b"`);
        await queryRunner.query(`ALTER TABLE "asset_stack" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "asset_stack" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "asset_stack" ADD CONSTRAINT "PK_74a27e7fcbd5852463d0af3034b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_f15d48fa3ea5e4bda05ca8ab207" FOREIGN KEY ("stackId") REFERENCES "asset_stack"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_f15d48fa3ea5e4bda05ca8ab207"`);
        await queryRunner.query(`ALTER TABLE "asset_stack" DROP CONSTRAINT "PK_74a27e7fcbd5852463d0af3034b"`);
        await queryRunner.query(`ALTER TABLE "asset_stack" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "asset_stack" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "asset_stack" ADD CONSTRAINT "PK_74a27e7fcbd5852463d0af3034b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "stackId"`);
        await queryRunner.query(`ALTER TABLE "assets" ADD "stackId" character varying`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_f15d48fa3ea5e4bda05ca8ab207" FOREIGN KEY ("stackId") REFERENCES "asset_stack"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
