// HERENCIA: Gato extiende Animal
public class Gato extends Animal {

    // ENCAPSULAMIENTO: atributo propio y privado
    private boolean indoor;

    public Gato(String nombre, int edad, boolean indoor) {
        super(nombre, edad);
        this.indoor = indoor;
    }

    public boolean esIndoor() { return indoor; }

    // POLIMORFISMO: implementación propia de hacerSonido()
    @Override
    public void hacerSonido() {
        System.out.println(getNombre() + " dice: ¡Miau miau!");
    }

    public void ronronear() {
        System.out.println(getNombre() + " esta ronroneando... Purrr");
    }
}
