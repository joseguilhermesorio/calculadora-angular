import { CalculadoraModule } from './calculadora.module';

describe('CalculadoraModule', () => {
  let calculadoraModule: CalculadoraModule;

  beforeEach(() => {
    calculadoraModule = new CalculadoraModule();
  });

  it('should create an instance', () => {
    expect(calculadoraModule).toBeTruthy();
  });
});
