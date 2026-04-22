// ABSTRACCIÓN: clase base que define lo esencial de un animal
public abstract class Animal {

    // ENCAPSULAMIENTO: atributos privados
    private String nombre;
    private int edad;

    public Animal(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Getters y Setters (acceso controlado)
    public String getNombre() { return nombre; }
    public int getEdad() { return edad; }

    public void setEdad(int edad) {
        if (edad < 0) {
            System.out.println("La edad no puede ser negativa.");
            return;
        }
        this.edad = edad;
    }

    // POLIMORFISMO: método abstracto que cada subclase implementa a su manera
    public abstract void hacerSonido();

    // Métodos compartidos por todos los animales
    public void presentarse() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " año(s).");
    }

    public void comer(String alimento) {
        System.out.println(nombre + " está comiendo " + alimento + ".");
    }

    public void dormir() {
        System.out.println(nombre + " está durmiendo... Zzz");
    }
}
