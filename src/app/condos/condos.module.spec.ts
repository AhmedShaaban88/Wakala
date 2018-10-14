import { CondosModule } from './condos.module';

describe('CondosModule', () => {
  let condosModule: CondosModule;

  beforeEach(() => {
    condosModule = new CondosModule();
  });

  it('should create an instance', () => {
    expect(condosModule).toBeTruthy();
  });
});
