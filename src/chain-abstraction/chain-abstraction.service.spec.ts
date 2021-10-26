import { Test, TestingModule } from '@nestjs/testing';
import { ChainClient } from './chain-abstraction.service';

describe('ChainAbstractionService', () => {
  let service: ChainClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChainClient],
    }).compile();

    service = module.get<ChainClient>(ChainClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});