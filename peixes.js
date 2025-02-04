const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

let game = new Phaser.Game(config);

let peixinho;

function preload() {
  this.load.image("mar", "assets/bg_azul-escuro.png");

  // Carrega a logo do Inteli
  this.load.image("logo", "assets/logo-inteli_branco.png");

  // Carrega a imagem do peixinho
  this.load.image("peixe", "assets/peixes/peixinho_laranja.png");

  // Carrega a imagem que eu escolhi
  this.load.image("peixe2", "assets/peixes/baiacu_lado.png");
}

function create() {
  this.add.image(400, 300, "mar");

  // Adiciona o logo na tela
  this.add.image(400, 525, "logo").setScale(0.5);

  this.add.image(400, 400, "peixe2").setScale(0.5);

  // Guarda o peixinho em uma váriavel
  peixinho = this.add.image(400, 300, "peixe");

  peixinho.setOrigin(0.5, 0.5);
  peixinho.setFlip(true, false);
}

function update() {
  peixinho.x = this.input.x;
  peixinho.y = this.input.y;
}
