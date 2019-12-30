
var Jugador = {
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 10,

  //Player movement
  mover: function (movX, movY) {
    this.x += movX;
    this.y += movY;
  },

  //Player direction
  changeDir: function (direccion) {
    switch (direccion) {
      case 'izq':
        if (this.sprite != 'imagenes/auto_rojo_izquierda.png') {
          this.sprite = 'imagenes/auto_rojo_izquierda.png';
          this.ancho = 30;
          this.alto = 15;
        }
        break;
      case 'arriba':
        if (this.sprite != 'imagenes/auto_rojo_arriba.png') {
          this.sprite = 'imagenes/auto_rojo_arriba.png';
          this.ancho = 15;
          this.alto = 30;
        }
        break;
      case 'der':
        if (this.sprite != 'imagenes/auto_rojo_derecha.png') {
          this.sprite = 'imagenes/auto_rojo_derecha.png';
          this.ancho = 30;
          this.alto = 15;
        }
        break;
      case 'abajo':
        if (this.sprite != 'imagenes/auto_rojo_abajo.png') {
          this.sprite = 'imagenes/auto_rojo_abajo.png';
          this.ancho = 15;
          this.alto = 30;
        }
        break;
      default:
    };
  },

  //-Life
  perderVidas: function (cantVidas) {
    this.vidas -= cantVidas;
  }
};

