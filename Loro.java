import java.util.ArrayList;

// HERENCIA: Loro extiende Animal
public class Loro extends Animal {

    // ENCAPSULAMIENTO: atributo propio y privado
    private ArrayList<String> vocabulario;

    public Loro(String nombre, int edad) {
        super(nombre, edad);
        this.vocabulario = new ArrayList<>();
    }

    // POLIMORFISMO: implementación propia de hacerSonido()
    @Override
    public void hacerSonido() {
        System.out.println(getNombre() + " dice: ¡Crrra crrra!");
    }

    public void aprenderPalabra(String palabra) {
        vocabulario.add(palabra);
        System.out.println(getNombre() + " aprendio la palabra: \"" + palabra + "\"");
    }

    public void hablar() {
        if (vocabulario.isEmpty()) {
            System.out.println(getNombre() + " no sabe hablar todavia.");
        } else {
            int indice = (int) (Math.random() * vocabulario.size());
            System.out.println(getNombre() + " dice: \"" + vocabulario.get(indice) + "\"");
        }
    }
}
