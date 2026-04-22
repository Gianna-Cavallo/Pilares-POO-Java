// HERENCIA: Perro extiende Animal
public class Perro extends Animal {

    // ENCAPSULAMIENTO: atributo propio y privado
    private String raza;

    public Perro(String nombre, int edad, String raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    public String getRaza() { return raza; }

    // POLIMORFISMO: implementación propia de hacerSonido()
    @Override
    public void hacerSonido() {
        System.out.println(getNombre() + " dice: ¡Guau guau!");
    }

    public void buscarPelota() {
        System.out.println(getNombre() + " salio corriendo a buscar la pelota!");
    }
}
