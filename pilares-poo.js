// ============================================================
//   PILARES DE LA PROGRAMACIÓN ORIENTADA A OBJETOS
//   Ejemplo con: Gato, Perro y Loro
// ============================================================

// ============================================================
// 1. ABSTRACCIÓN
//    Definimos una clase base "Animal" que captura lo esencial
//    de cualquier animal, ocultando los detalles específicos.
// ============================================================

class Animal {
  #nombre;   // atributo privado (Encapsulamiento)
  #edad;     // atributo privado (Encapsulamiento)

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  // Getters (Encapsulamiento: acceso controlado a los datos)
  getNombre() {
    return this.#nombre;
  }

  getEdad() {
    return this.#edad;
  }

  // Setter con validación (Encapsulamiento)
  setEdad(nuevaEdad) {
    if (nuevaEdad < 0) {
      console.log("La edad no puede ser negativa.");
      return;
    }
    this.#edad = nuevaEdad;
  }

  // Método abstracto: cada animal lo implementará a su manera (Polimorfismo)
  hacerSonido() {
    throw new Error(`${this.constructor.name} debe implementar hacerSonido()`);
  }

  // Método general compartido por todos los animales (Abstracción)
  presentarse() {
    console.log(`Hola, soy ${this.#nombre}, tengo ${this.#edad} año(s).`);
  }

  comer(alimento) {
    console.log(`${this.#nombre} está comiendo ${alimento}.`);
  }

  dormir() {
    console.log(`${this.#nombre} está durmiendo... 💤`);
  }
}

// ============================================================
// 2. HERENCIA
//    Gato, Perro y Loro heredan de Animal. Reutilizan su
//    comportamiento y agregan el propio.
// ============================================================

class Perro extends Animal {
  #raza;

  constructor(nombre, edad, raza) {
    super(nombre, edad); // llama al constructor de Animal
    this.#raza = raza;
  }

  getRaza() {
    return this.#raza;
  }

  // Polimorfismo: implementación propia de hacerSonido()
  hacerSonido() {
    console.log(`${this.getNombre()} dice: ¡Guau guau!`);
  }

  buscarPelota() {
    console.log(`${this.getNombre()} salió corriendo a buscar la pelota!`);
  }
}

class Gato extends Animal {
  #indoor; // si vive adentro o afuera

  constructor(nombre, edad, indoor) {
    super(nombre, edad);
    this.#indoor = indoor;
  }

  esIndoor() {
    return this.#indoor;
  }

  // Polimorfismo: implementación propia de hacerSonido()
  hacerSonido() {
    console.log(`${this.getNombre()} dice: ¡Miau miau!`);
  }

  ronronear() {
    console.log(`${this.getNombre()} está ronroneando... Purrrr 🐱`);
  }
}

class Loro extends Animal {
  #vocabulario; // palabras que sabe decir

  constructor(nombre, edad, vocabulario) {
    super(nombre, edad);
    this.#vocabulario = vocabulario;
  }

  // Polimorfismo: implementación propia de hacerSonido()
  hacerSonido() {
    console.log(`${this.getNombre()} dice: ¡Crrra crrra!`);
  }

  hablar() {
    if (this.#vocabulario.length === 0) {
      console.log(`${this.getNombre()} no sabe hablar todavía.`);
    } else {
      const frase = this.#vocabulario[Math.floor(Math.random() * this.#vocabulario.length)];
      console.log(`${this.getNombre()} dice: "${frase}"`);
    }
  }

  aprenderPalabra(palabra) {
    this.#vocabulario.push(palabra);
    console.log(`${this.getNombre()} aprendió la palabra: "${palabra}"`);
  }
}

// ============================================================
// 3. POLIMORFISMO
//    Todos los animales responden a hacerSonido() pero cada
//    uno lo hace a su manera.
// ============================================================

function escucharAnimales(animales) {
  console.log("\n--- Hora de escuchar a los animales ---");
  for (const animal of animales) {
    animal.hacerSonido(); // mismo llamado, diferente comportamiento
  }
}

// ============================================================
//   DEMOSTRACIÓN
// ============================================================

console.log("========================================");
console.log("  PILARES DE LA POO - Gato, Perro y Loro");
console.log("========================================\n");

// Instancias
const perro = new Perro("Rex", 3, "Labrador");
const gato  = new Gato("Michi", 5, true);
const loro  = new Loro("Perico", 2, ["Hola", "¡Quiero fruta!"]);

// --- Abstracción y Encapsulamiento ---
console.log("--- Presentaciones ---");
perro.presentarse();
gato.presentarse();
loro.presentarse();

console.log("\n--- Encapsulamiento: acceso controlado ---");
console.log(`Raza de ${perro.getNombre()}: ${perro.getRaza()}`);
console.log(`¿${gato.getNombre()} es indoor? ${gato.esIndoor() ? "Sí" : "No"}`);
perro.setEdad(-1);   // validación activa
perro.setEdad(4);
console.log(`Nueva edad de ${perro.getNombre()}: ${perro.getEdad()}`);

// --- Herencia ---
console.log("\n--- Herencia: comportamientos propios ---");
perro.buscarPelota();
gato.ronronear();
loro.hablar();
loro.aprenderPalabra("¡Buenas noches!");
loro.hablar();

// --- Polimorfismo ---
const animales = [perro, gato, loro];
escucharAnimales(animales);

console.log("\n--- Todos comen (método heredado) ---");
perro.comer("croquetas");
gato.comer("atún");
loro.comer("semillas");

console.log("\n--- Todos duermen (método heredado) ---");
animales.forEach(a => a.dormir());

console.log("\n========================================");
console.log("  Fin de la demostración");
console.log("========================================");
