import { FlyTripsModule } from './fly-trips.module';

describe('FlyTripsModule', () => {
  let flyTripsModule: FlyTripsModule;

  beforeEach(() => {
    flyTripsModule = new FlyTripsModule();
  });

  it('should create an instance', () => {
    expect(flyTripsModule).toBeTruthy();
  });
});
