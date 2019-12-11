import { Calculator } from './calculator';

describe('Test for Calculator', () => {

  let calculator;

  beforeEach(() => calculator = new Calculator()); // Con esta declaración instancio la clase para todo el set de pruebas unitarias

  it('Test for multiply should return nine', () => { // Qué deberia de retornar

    // Act
    const result = calculator.multiply(3, 3);

    // Assert
    expect(result).toEqual(9);
  });

  it('Test for multiply should return four', () => { // Qué deberia de retornar
    // Act
    const result = calculator.multiply(1, 4);

    // Assert
    expect(result).toEqual(4);
  });

  it('Test for divide should return two', () => { // Qué deberia de retornar

    // Act
    const result = calculator.divide(4, 2);

    // Assert
    expect(result).toEqual(2);
  });

  it('Test for divide should return null', () => { // Qué deberia de retornar

    // Act
    const result = calculator.divide(2, 0);

    // Assert
    expect(result).toBeNull();
  });

  it('Test for divide should return zero', () => { // Qué deberia de retornar

    // Act
    const result = calculator.divide(0, 2);

    // Assert
    expect(result).toEqual(0);
  });

  it('Test of matchers', () => { // Set de pruebas para comparar
    const name = 'danilo';
    let name2;

    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1 + 2 === 3).toBeTruthy();
    expect(1 + 1 === 3).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(20).toBeGreaterThan(10);

    expect('1234567').toMatch(/123/);

    expect(['apples', 'oranges', 'pears']).toContain('pears');

  });

});

