class Tablero{
    constructor(){
        this.columnas = 10
        this.filas = 20
        this.lado_celda = 25
        this.ancho = this.columnas*this.lado_celda
        this.alto = this.filas * this.lado_celda
        this.posicion = createVector(margenTablero,margenTablero)
    }
    coordenada(x,y){
        return createVector(x,y).mult(this.lado_celda).add(this.posicion)
    }
    dibujar(){
        push()
        stroke("white")
        fill("black")
        for (let columnas = 0; columnas < this.columnas ; columnas++) {
            for (let filas = 0; filas < this.filas ; filas++) {
                
                let c = this.coordenada(columnas,filas)
                rect(c.x , c.y, this.lado_celda)
            }
        }
        pop()
    }
}
