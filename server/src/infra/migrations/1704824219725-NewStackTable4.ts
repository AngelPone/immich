import { MigrationInterface, QueryRunner } from "typeorm";

export class NewStackTable41704824219725 implements MigrationInterface {
    name = 'NewStackTable41704824219725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_f15d48fa3ea5e4bda05ca8ab207"`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_f15d48fa3ea5e4bda05ca8ab207" FOREIGN KEY ("stackId") REFERENCES "asset_stack"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_f15d48fa3ea5e4bda05ca8ab207"`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_f15d48fa3ea5e4bda05ca8ab207" FOREIGN KEY ("stackId") REFERENCES "asset_stack"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
