public class Main {

    // POLIMORFISMO: todos responden a hacerSonido() aunque son distintos
    public static void escucharAnimales(Animal[] animales) {
        System.out.println("\n--- Hora de escuchar a los animales ---");
        for (Animal animal : animales) {
            animal.hacerSonido();
        }
    }

    public static void main(String[] args) {

        System.out.println("========================================");
        System.out.println("  PILARES DE LA POO - Gato, Perro y Loro");
        System.out.println("========================================\n");

        // Instancias
        Perro perro = new Perro("Rex", 3, "Labrador");
        Gato gato   = new Gato("Michi", 5, true);
        Loro loro   = new Loro("Perico", 2);

        // --- Abstracción y Encapsulamiento ---
        System.out.println("--- Presentaciones ---");
        perro.presentarse();
        gato.presentarse();
        loro.presentarse();

        System.out.println("\n--- Encapsulamiento: acceso controlado ---");
        System.out.println("Raza de " + perro.getNombre() + ": " + perro.getRaza());
        System.out.println("¿" + gato.getNombre() + " es indoor? " + (gato.esIndoor() ? "Si" : "No"));
        perro.setEdad(-1);   // validacion activa
        perro.setEdad(4);
        System.out.println("Nueva edad de " + perro.getNombre() + ": " + perro.getEdad());

        // --- Herencia ---
        System.out.println("\n--- Herencia: comportamientos propios ---");
        perro.buscarPelota();
        gato.ronronear();
        loro.aprenderPalabra("Hola");
        loro.aprenderPalabra("¡Quiero fruta!");
        loro.hablar();

        // --- Polimorfismo ---
        Animal[] animales = { perro, gato, loro };
        escucharAnimales(animales);

        System.out.println("\n--- Todos comen (metodo heredado) ---");
        perro.comer("croquetas");
        gato.comer("atun");
        loro.comer("semillas");

        System.out.println("\n--- Todos duermen (metodo heredado) ---");
        for (Animal animal : animales) {
            animal.dormir();
        }

        System.out.println("\n========================================");
        System.out.println("  Fin de la demostracion");
        System.out.println("========================================");
    }
}
