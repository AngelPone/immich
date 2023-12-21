import { AssetStackEntity } from '@app/infra/entities/asset-stack.entity';

export const IAssetStackRepository = 'IAssetStackRepository';

export interface IAssetStackRepository {
  create(assetStack: Partial<AssetStackEntity>): Promise<AssetStackEntity>;
  save(asset: Pick<AssetStackEntity, 'id'> & Partial<AssetStackEntity>): Promise<AssetStackEntity>;
  delete(id: string): Promise<void>;
}
