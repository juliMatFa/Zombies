
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;

  this.crash = function(jugador){
    jugador.perderVidas(this.potencia);
    this.potencia = 0;
  }
}
