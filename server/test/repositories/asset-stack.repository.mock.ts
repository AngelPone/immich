import { IAssetStackRepository } from '@app/domain';

export const newAssetStackRepositoryMock = (): jest.Mocked<IAssetStackRepository> => {
  return {
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };
};
