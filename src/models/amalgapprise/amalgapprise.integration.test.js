import Amalgapprise from './amalgapprise';

describe('Amalgapprise#integration', () => {
  let amalgapprise;

  beforeEach(() => {
    amalgapprise = new Amalgapprise();
  });

  describe('example test', () => {
    it('should work', () => {
      expect.assertions(1);

      expect(amalgapprise).toBeDefined();
    });
  });
});
