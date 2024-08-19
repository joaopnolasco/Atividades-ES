const { Zoo, Animal } = require("./zoo");

describe("Zoo Class Tests", () => {
  let zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test("Adiciona um animal ao zoológico", () => {
    zoo.addAnimal(new Animal("Leo", "Lion", 5));
    if (zoo.getAllAnimals().length !== 1) {
      throw new Error("Failed: Adicionar animal ao zoológico");
    }
  });

  test("Remove um animal do zoológico", () => {
    zoo.addAnimal(new Animal("Leo", "Lion", 5));
    zoo.removeAnimal("Leo");
    if (zoo.getAllAnimals().length !== 0) {
      throw new Error("Failed: Remover animal do zoológico");
    }
  });

  test("Obtém um animal pelo nome", () => {
    zoo.addAnimal(new Animal("Leo", "Lion", 5));
    const animal = zoo.getAnimal("Leo");
    if (!animal || animal.name !== "Leo") {
      throw new Error("Failed: Obter animal pelo nome");
    }
  });

  test("Retorna undefined ao buscar um animal que não existe", () => {
    const animal = zoo.getAnimal("Unknown");
    if (animal !== undefined) {
      throw new Error("Failed: Retorna undefined ao buscar animal inexistente");
    }
  });

  test("Obtém todos os animais de uma espécie específica", () => {
    zoo.addAnimal(new Animal("Leo", "Lion", 5));
    zoo.addAnimal(new Animal("Simba", "Lion", 4));
    zoo.addAnimal(new Animal("Shere Khan", "Tiger", 3));
    const lions = zoo.getAnimalsBySpecies("Lion");
    if (lions.length !== 2) {
      throw new Error(
        "Failed: Obter todos os animais de uma espécie específica"
      );
    }
  });

  test("Retorna um array vazio ao buscar uma espécie que não existe", () => {
    const elephants = zoo.getAnimalsBySpecies("Elephant");
    if (elephants.length !== 0) {
      throw new Error(
        "Failed: Retorna array vazio ao buscar espécie inexistente"
      );
    }
  });

  test("Calcula a idade média dos animais", () => {
    zoo.addAnimal(new Animal("Leo", "Lion", 5));
    zoo.addAnimal(new Animal("Simba", "Lion", 3));
    const averageAge = zoo.getAverageAge();
    if (averageAge !== 4) {
      throw new Error("Failed: Calcular a idade média dos animais");
    }
  });

  test("Retorna 0 como idade média quando não há animais", () => {
    const averageAge = zoo.getAverageAge();
    if (averageAge !== 0) {
      throw new Error(
        "Failed: Retornar 0 como idade média quando não há animais"
      );
    }
  });
});

try {
  describe("Zoo Class Tests");
  console.log("Todos os testes foram concluídos com sucesso.");
} catch (error) {
  console.error(error.message);
}
