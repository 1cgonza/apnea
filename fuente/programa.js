import './scss/estilos.scss';
import createjs from './popo';
import metadatos from './metadatos';
import propiedades from './propiedades';

var AdobeAn;

(function (cjs, an) {
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = metadatos;

  class Animacion extends cjs.MovieClip {
    constructor() {
      super();
      this.actionFrames = [];
      this.ignorePause = false;
    }

    gotoAndPlay(positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    }

    play() {
      cjs.MovieClip.prototype.play.call(this);
    }

    gotoAndStop(positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    }

    stop() {
      cjs.MovieClip.prototype.stop.call(this);
    }
  }

  let p = new Animacion();
  lib.AnMovieClip = p;

  // symbols:

  metadatos.forEach((atlas) => {
    // console.log(atlas.name);
  });

  console.log(lib);

  lib.AP1 = () => {
    const imagen = new cjs.Sprite();
    imagen.initialize(ss['proyecto_atlas_604']);
    imagen.gotoAndStop(0);
    return imagen;
  };

  lib.AP11 = () => {
    const imagen = new cjs.Sprite();
    imagen.initialize(ss['proyecto_atlas_603']);
    imagen.gotoAndStop(0);
    return imagen;
  };

  lib.AP12 = () => {
    const imagen = new cjs.Sprite();
    imagen.initialize(ss['proyecto_atlas_602']);
    imagen.gotoAndStop(0);
    return imagen;
  };

  (lib.AP13 = () => {
    this.initialize(ss['proyecto_atlas_601']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.AP2 = () => {
    this.initialize(ss['proyecto_atlas_600']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.AP3 = () => {
    this.initialize(ss['proyecto_atlas_599']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.AP4 = () => {
    this.initialize(ss['proyecto_atlas_598']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.AP5 = () => {
    this.initialize(ss['proyecto_atlas_597']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.AP6 = () => {
    this.initialize(ss['proyecto_atlas_596']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.AP7 = () => {
    this.initialize(ss['proyecto_atlas_595']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.AP8 = () => {
    this.initialize(ss['proyecto_atlas_594']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.AP9 = () => {
    this.initialize(ss['proyecto_atlas_593']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.BP1 = () => {
    this.initialize(ss['proyecto_atlas_592']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.BP2 = () => {
    this.initialize(ss['proyecto_atlas_591']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.BP4 = () => {
    this.initialize(ss['proyecto_atlas_590']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.BP6 = () => {
    this.initialize(ss['proyecto_atlas_589']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.BP7 = () => {
    this.initialize(ss['proyecto_atlas_588']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.boton = () => {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.cp10 = () => {
    this.initialize(ss['proyecto_atlas_587']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.cp11 = () => {
    this.initialize(ss['proyecto_atlas_586']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.cp13 = () => {
    this.initialize(ss['proyecto_atlas_585']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CP3 = () => {
    this.initialize(ss['proyecto_atlas_584']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CP4 = () => {
    this.initialize(ss['proyecto_atlas_583']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CP5 = function () {
    this.initialize(ss['proyecto_atlas_582']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CP6 = function () {
    this.initialize(ss['proyecto_atlas_581']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CP7 = function () {
    this.initialize(ss['proyecto_atlas_580']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.C_0000 = function () {
    this.initialize(ss['proyecto_atlas_579']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.C_0001 = function () {
    this.initialize(ss['proyecto_atlas_578']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.C_0002 = function () {
    this.initialize(ss['proyecto_atlas_577']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.C_0003 = function () {
    this.initialize(ss['proyecto_atlas_576']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHA = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng10 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng11 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng12 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng13 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng14 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng15 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng16 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng17 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(9);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng18 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(10);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng19 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(11);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng2 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(12);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng3 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(13);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng4 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(14);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng5 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(15);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng6 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(16);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng7 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(17);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng8 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(18);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaEXP_FLECHApng9 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(19);
  }).prototype = p = new cjs.Sprite();

  (lib.copiajp3 = function () {
    this.initialize(ss['proyecto_atlas_575']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0000 = function () {
    this.initialize(ss['proyecto_atlas_574']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0000png2 = function () {
    this.initialize(ss['proyecto_atlas_573']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0000png3 = function () {
    this.initialize(ss['proyecto_atlas_572']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0001 = function () {
    this.initialize(ss['proyecto_atlas_571']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0001png2 = function () {
    this.initialize(ss['proyecto_atlas_570']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0001png3 = function () {
    this.initialize(ss['proyecto_atlas_569']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0002 = function () {
    this.initialize(ss['proyecto_atlas_568']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0002png2 = function () {
    this.initialize(ss['proyecto_atlas_567']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0002png3 = function () {
    this.initialize(ss['proyecto_atlas_566']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0003 = function () {
    this.initialize(ss['proyecto_atlas_565']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0003png2 = function () {
    this.initialize(ss['proyecto_atlas_564']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0003png3 = function () {
    this.initialize(ss['proyecto_atlas_563']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0004 = function () {
    this.initialize(ss['proyecto_atlas_562']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0004png2 = function () {
    this.initialize(ss['proyecto_atlas_561']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0004png3 = function () {
    this.initialize(ss['proyecto_atlas_560']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0005 = function () {
    this.initialize(ss['proyecto_atlas_559']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0005png2 = function () {
    this.initialize(ss['proyecto_atlas_558']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0005png3 = function () {
    this.initialize(ss['proyecto_atlas_557']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0006 = function () {
    this.initialize(ss['proyecto_atlas_556']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0006png2 = function () {
    this.initialize(ss['proyecto_atlas_555']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0006png3 = function () {
    this.initialize(ss['proyecto_atlas_554']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0007 = function () {
    this.initialize(ss['proyecto_atlas_553']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0007png2 = function () {
    this.initialize(ss['proyecto_atlas_552']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0007png3 = function () {
    this.initialize(ss['proyecto_atlas_551']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0008 = function () {
    this.initialize(ss['proyecto_atlas_550']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0008png2 = function () {
    this.initialize(ss['proyecto_atlas_549']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0008png3 = function () {
    this.initialize(ss['proyecto_atlas_548']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0009 = function () {
    this.initialize(ss['proyecto_atlas_547']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0009png2 = function () {
    this.initialize(ss['proyecto_atlas_546']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0009png3 = function () {
    this.initialize(ss['proyecto_atlas_545']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0010 = function () {
    this.initialize(ss['proyecto_atlas_544']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0010png2 = function () {
    this.initialize(ss['proyecto_atlas_543']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0010png3 = function () {
    this.initialize(ss['proyecto_atlas_542']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0011 = function () {
    this.initialize(ss['proyecto_atlas_541']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0011png2 = function () {
    this.initialize(ss['proyecto_atlas_540']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0011png3 = function () {
    this.initialize(ss['proyecto_atlas_539']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0012 = function () {
    this.initialize(ss['proyecto_atlas_538']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0012png2 = function () {
    this.initialize(ss['proyecto_atlas_537']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0012png3 = function () {
    this.initialize(ss['proyecto_atlas_536']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0013 = function () {
    this.initialize(ss['proyecto_atlas_535']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0013png2 = function () {
    this.initialize(ss['proyecto_atlas_534']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0013png3 = function () {
    this.initialize(ss['proyecto_atlas_533']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0014 = function () {
    this.initialize(ss['proyecto_atlas_532']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0014png2 = function () {
    this.initialize(ss['proyecto_atlas_531']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0014png3 = function () {
    this.initialize(ss['proyecto_atlas_530']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0015 = function () {
    this.initialize(ss['proyecto_atlas_529']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0015png2 = function () {
    this.initialize(ss['proyecto_atlas_528']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0015png3 = function () {
    this.initialize(ss['proyecto_atlas_527']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0016 = function () {
    this.initialize(ss['proyecto_atlas_526']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0016png2 = function () {
    this.initialize(ss['proyecto_atlas_525']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0016png3 = function () {
    this.initialize(ss['proyecto_atlas_524']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0017 = function () {
    this.initialize(ss['proyecto_atlas_523']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0017png2 = function () {
    this.initialize(ss['proyecto_atlas_522']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0017png3 = function () {
    this.initialize(ss['proyecto_atlas_521']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0018 = function () {
    this.initialize(ss['proyecto_atlas_520']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0018png2 = function () {
    this.initialize(ss['proyecto_atlas_519']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0018png3 = function () {
    this.initialize(ss['proyecto_atlas_518']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0019 = function () {
    this.initialize(ss['proyecto_atlas_517']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0019png2 = function () {
    this.initialize(ss['proyecto_atlas_516']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0019png3 = function () {
    this.initialize(ss['proyecto_atlas_515']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0020 = function () {
    this.initialize(ss['proyecto_atlas_514']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0020png2 = function () {
    this.initialize(ss['proyecto_atlas_513']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0020png3 = function () {
    this.initialize(ss['proyecto_atlas_512']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0021 = function () {
    this.initialize(ss['proyecto_atlas_511']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0021png2 = function () {
    this.initialize(ss['proyecto_atlas_510']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0021png3 = function () {
    this.initialize(ss['proyecto_atlas_509']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0022 = function () {
    this.initialize(ss['proyecto_atlas_508']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0022png2 = function () {
    this.initialize(ss['proyecto_atlas_507']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0022png3 = function () {
    this.initialize(ss['proyecto_atlas_506']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0023 = function () {
    this.initialize(ss['proyecto_atlas_505']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0023png2 = function () {
    this.initialize(ss['proyecto_atlas_504']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA2GEN_0023png3 = function () {
    this.initialize(ss['proyecto_atlas_503']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFA3GEN_0000 = function () {
    this.initialize(img.copiaMFA3GEN_0000);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0000png2 = function () {
    this.initialize(img.copiaMFA3GEN_0000png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0000png3 = function () {
    this.initialize(img.copiaMFA3GEN_0000png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0001 = function () {
    this.initialize(img.copiaMFA3GEN_0001);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0001png2 = function () {
    this.initialize(img.copiaMFA3GEN_0001png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0001png3 = function () {
    this.initialize(img.copiaMFA3GEN_0001png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0002 = function () {
    this.initialize(img.copiaMFA3GEN_0002);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0002png2 = function () {
    this.initialize(img.copiaMFA3GEN_0002png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0002png3 = function () {
    this.initialize(img.copiaMFA3GEN_0002png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0003 = function () {
    this.initialize(img.copiaMFA3GEN_0003);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0003png2 = function () {
    this.initialize(img.copiaMFA3GEN_0003png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0003png3 = function () {
    this.initialize(img.copiaMFA3GEN_0003png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0004 = function () {
    this.initialize(img.copiaMFA3GEN_0004);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0004png2 = function () {
    this.initialize(img.copiaMFA3GEN_0004png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0004png3 = function () {
    this.initialize(img.copiaMFA3GEN_0004png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0005 = function () {
    this.initialize(img.copiaMFA3GEN_0005);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0005png2 = function () {
    this.initialize(img.copiaMFA3GEN_0005png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0005png3 = function () {
    this.initialize(img.copiaMFA3GEN_0005png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0006 = function () {
    this.initialize(img.copiaMFA3GEN_0006);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0006png2 = function () {
    this.initialize(img.copiaMFA3GEN_0006png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0006png3 = function () {
    this.initialize(img.copiaMFA3GEN_0006png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0007 = function () {
    this.initialize(img.copiaMFA3GEN_0007);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0007png2 = function () {
    this.initialize(img.copiaMFA3GEN_0007png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0007png3 = function () {
    this.initialize(img.copiaMFA3GEN_0007png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0008 = function () {
    this.initialize(img.copiaMFA3GEN_0008);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0008png2 = function () {
    this.initialize(img.copiaMFA3GEN_0008png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0008png3 = function () {
    this.initialize(img.copiaMFA3GEN_0008png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0009 = function () {
    this.initialize(img.copiaMFA3GEN_0009);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0009png2 = function () {
    this.initialize(img.copiaMFA3GEN_0009png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0009png3 = function () {
    this.initialize(img.copiaMFA3GEN_0009png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0010 = function () {
    this.initialize(img.copiaMFA3GEN_0010);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0010png2 = function () {
    this.initialize(img.copiaMFA3GEN_0010png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0010png3 = function () {
    this.initialize(img.copiaMFA3GEN_0010png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0011 = function () {
    this.initialize(img.copiaMFA3GEN_0011);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0011png2 = function () {
    this.initialize(img.copiaMFA3GEN_0011png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0011png3 = function () {
    this.initialize(img.copiaMFA3GEN_0011png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0012 = function () {
    this.initialize(img.copiaMFA3GEN_0012);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0012png2 = function () {
    this.initialize(img.copiaMFA3GEN_0012png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0012png3 = function () {
    this.initialize(img.copiaMFA3GEN_0012png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0013 = function () {
    this.initialize(img.copiaMFA3GEN_0013);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0013png2 = function () {
    this.initialize(img.copiaMFA3GEN_0013png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0013png3 = function () {
    this.initialize(img.copiaMFA3GEN_0013png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0014 = function () {
    this.initialize(img.copiaMFA3GEN_0014);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0014png2 = function () {
    this.initialize(img.copiaMFA3GEN_0014png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0014png3 = function () {
    this.initialize(img.copiaMFA3GEN_0014png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0015 = function () {
    this.initialize(img.copiaMFA3GEN_0015);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0015png2 = function () {
    this.initialize(img.copiaMFA3GEN_0015png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0015png3 = function () {
    this.initialize(img.copiaMFA3GEN_0015png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0016 = function () {
    this.initialize(img.copiaMFA3GEN_0016);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0016png2 = function () {
    this.initialize(img.copiaMFA3GEN_0016png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0016png3 = function () {
    this.initialize(img.copiaMFA3GEN_0016png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0017 = function () {
    this.initialize(img.copiaMFA3GEN_0017);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0017png2 = function () {
    this.initialize(img.copiaMFA3GEN_0017png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0017png3 = function () {
    this.initialize(img.copiaMFA3GEN_0017png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0018 = function () {
    this.initialize(img.copiaMFA3GEN_0018);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0018png2 = function () {
    this.initialize(img.copiaMFA3GEN_0018png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0018png3 = function () {
    this.initialize(img.copiaMFA3GEN_0018png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0019 = function () {
    this.initialize(img.copiaMFA3GEN_0019);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0019png2 = function () {
    this.initialize(img.copiaMFA3GEN_0019png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0019png3 = function () {
    this.initialize(img.copiaMFA3GEN_0019png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0020 = function () {
    this.initialize(img.copiaMFA3GEN_0020);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0020png2 = function () {
    this.initialize(img.copiaMFA3GEN_0020png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0020png3 = function () {
    this.initialize(img.copiaMFA3GEN_0020png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0021 = function () {
    this.initialize(img.copiaMFA3GEN_0021);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0021png2 = function () {
    this.initialize(img.copiaMFA3GEN_0021png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0021png3 = function () {
    this.initialize(img.copiaMFA3GEN_0021png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0022 = function () {
    this.initialize(img.copiaMFA3GEN_0022);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0022png2 = function () {
    this.initialize(img.copiaMFA3GEN_0022png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0022png3 = function () {
    this.initialize(img.copiaMFA3GEN_0022png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0023 = function () {
    this.initialize(img.copiaMFA3GEN_0023);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0023png2 = function () {
    this.initialize(img.copiaMFA3GEN_0023png2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFA3GEN_0023png3 = function () {
    this.initialize(img.copiaMFA3GEN_0023png3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.copiaMFAGEN_0000 = function () {
    this.initialize(ss['proyecto_atlas_502']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0000png2 = function () {
    this.initialize(ss['proyecto_atlas_501']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0000png3 = function () {
    this.initialize(ss['proyecto_atlas_500']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0001 = function () {
    this.initialize(ss['proyecto_atlas_499']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0001png2 = function () {
    this.initialize(ss['proyecto_atlas_498']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0001png3 = function () {
    this.initialize(ss['proyecto_atlas_497']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0002 = function () {
    this.initialize(ss['proyecto_atlas_496']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0002png2 = function () {
    this.initialize(ss['proyecto_atlas_495']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0002png3 = function () {
    this.initialize(ss['proyecto_atlas_494']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0003 = function () {
    this.initialize(ss['proyecto_atlas_493']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0003png2 = function () {
    this.initialize(ss['proyecto_atlas_492']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0003png3 = function () {
    this.initialize(ss['proyecto_atlas_491']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0003png4 = function () {
    this.initialize(ss['proyecto_atlas_490']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0004 = function () {
    this.initialize(ss['proyecto_atlas_489']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0004png2 = function () {
    this.initialize(ss['proyecto_atlas_488']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0004png3 = function () {
    this.initialize(ss['proyecto_atlas_487']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0004png4 = function () {
    this.initialize(ss['proyecto_atlas_486']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0004png5 = function () {
    this.initialize(ss['proyecto_atlas_485']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0005 = function () {
    this.initialize(ss['proyecto_atlas_484']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0005png2 = function () {
    this.initialize(ss['proyecto_atlas_483']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0005png3 = function () {
    this.initialize(ss['proyecto_atlas_482']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0005png4 = function () {
    this.initialize(ss['proyecto_atlas_481']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0005png5 = function () {
    this.initialize(ss['proyecto_atlas_480']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0006 = function () {
    this.initialize(ss['proyecto_atlas_479']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0006png2 = function () {
    this.initialize(ss['proyecto_atlas_478']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0006png3 = function () {
    this.initialize(ss['proyecto_atlas_477']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0006png4 = function () {
    this.initialize(ss['proyecto_atlas_476']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0006png5 = function () {
    this.initialize(ss['proyecto_atlas_475']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0007 = function () {
    this.initialize(ss['proyecto_atlas_474']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0007png2 = function () {
    this.initialize(ss['proyecto_atlas_473']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0007png3 = function () {
    this.initialize(ss['proyecto_atlas_472']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0007png4 = function () {
    this.initialize(ss['proyecto_atlas_471']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0007png5 = function () {
    this.initialize(ss['proyecto_atlas_470']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0008 = function () {
    this.initialize(ss['proyecto_atlas_469']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0008png2 = function () {
    this.initialize(ss['proyecto_atlas_468']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0008png3 = function () {
    this.initialize(ss['proyecto_atlas_467']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0008png4 = function () {
    this.initialize(ss['proyecto_atlas_466']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0008png5 = function () {
    this.initialize(ss['proyecto_atlas_465']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0009 = function () {
    this.initialize(ss['proyecto_atlas_464']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0009png2 = function () {
    this.initialize(ss['proyecto_atlas_463']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0009png3 = function () {
    this.initialize(ss['proyecto_atlas_462']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0009png4 = function () {
    this.initialize(ss['proyecto_atlas_461']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0009png5 = function () {
    this.initialize(ss['proyecto_atlas_460']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0010 = function () {
    this.initialize(ss['proyecto_atlas_459']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0010png2 = function () {
    this.initialize(ss['proyecto_atlas_458']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0010png3 = function () {
    this.initialize(ss['proyecto_atlas_457']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0010png4 = function () {
    this.initialize(ss['proyecto_atlas_456']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0010png5 = function () {
    this.initialize(ss['proyecto_atlas_455']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0011 = function () {
    this.initialize(ss['proyecto_atlas_454']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0011png2 = function () {
    this.initialize(ss['proyecto_atlas_453']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0011png3 = function () {
    this.initialize(ss['proyecto_atlas_452']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0011png4 = function () {
    this.initialize(ss['proyecto_atlas_451']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0011png5 = function () {
    this.initialize(ss['proyecto_atlas_450']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0012 = function () {
    this.initialize(ss['proyecto_atlas_449']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0012png2 = function () {
    this.initialize(ss['proyecto_atlas_448']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0012png3 = function () {
    this.initialize(ss['proyecto_atlas_447']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0012png4 = function () {
    this.initialize(ss['proyecto_atlas_446']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0012png5 = function () {
    this.initialize(ss['proyecto_atlas_445']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0013 = function () {
    this.initialize(ss['proyecto_atlas_444']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0013png2 = function () {
    this.initialize(ss['proyecto_atlas_443']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0013png3 = function () {
    this.initialize(ss['proyecto_atlas_442']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0013png4 = function () {
    this.initialize(ss['proyecto_atlas_441']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0013png5 = function () {
    this.initialize(ss['proyecto_atlas_440']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0014 = function () {
    this.initialize(ss['proyecto_atlas_439']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0014png2 = function () {
    this.initialize(ss['proyecto_atlas_438']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0014png3 = function () {
    this.initialize(ss['proyecto_atlas_437']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0014png4 = function () {
    this.initialize(ss['proyecto_atlas_436']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0014png5 = function () {
    this.initialize(ss['proyecto_atlas_435']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0015 = function () {
    this.initialize(ss['proyecto_atlas_434']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0015png2 = function () {
    this.initialize(ss['proyecto_atlas_433']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0015png3 = function () {
    this.initialize(ss['proyecto_atlas_432']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0015png4 = function () {
    this.initialize(ss['proyecto_atlas_431']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0015png5 = function () {
    this.initialize(ss['proyecto_atlas_430']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0016 = function () {
    this.initialize(ss['proyecto_atlas_429']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0016png2 = function () {
    this.initialize(ss['proyecto_atlas_428']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0016png3 = function () {
    this.initialize(ss['proyecto_atlas_427']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0016png4 = function () {
    this.initialize(ss['proyecto_atlas_426']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0016png5 = function () {
    this.initialize(ss['proyecto_atlas_425']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0017 = function () {
    this.initialize(ss['proyecto_atlas_424']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0017png2 = function () {
    this.initialize(ss['proyecto_atlas_423']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0017png3 = function () {
    this.initialize(ss['proyecto_atlas_422']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0017png4 = function () {
    this.initialize(ss['proyecto_atlas_421']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0017png5 = function () {
    this.initialize(ss['proyecto_atlas_420']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0018 = function () {
    this.initialize(ss['proyecto_atlas_419']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0018png2 = function () {
    this.initialize(ss['proyecto_atlas_418']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0018png3 = function () {
    this.initialize(ss['proyecto_atlas_417']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0018png4 = function () {
    this.initialize(ss['proyecto_atlas_416']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0018png5 = function () {
    this.initialize(ss['proyecto_atlas_415']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0019 = function () {
    this.initialize(ss['proyecto_atlas_414']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0019png2 = function () {
    this.initialize(ss['proyecto_atlas_413']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0019png3 = function () {
    this.initialize(ss['proyecto_atlas_412']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0019png4 = function () {
    this.initialize(ss['proyecto_atlas_411']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0019png5 = function () {
    this.initialize(ss['proyecto_atlas_410']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0020 = function () {
    this.initialize(ss['proyecto_atlas_409']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0020png2 = function () {
    this.initialize(ss['proyecto_atlas_408']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0020png3 = function () {
    this.initialize(ss['proyecto_atlas_407']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0020png4 = function () {
    this.initialize(ss['proyecto_atlas_406']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0020png5 = function () {
    this.initialize(ss['proyecto_atlas_405']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0021 = function () {
    this.initialize(ss['proyecto_atlas_404']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0021png2 = function () {
    this.initialize(ss['proyecto_atlas_403']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0021png3 = function () {
    this.initialize(ss['proyecto_atlas_402']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0021png4 = function () {
    this.initialize(ss['proyecto_atlas_401']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0021png5 = function () {
    this.initialize(ss['proyecto_atlas_400']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0022 = function () {
    this.initialize(ss['proyecto_atlas_399']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0022png2 = function () {
    this.initialize(ss['proyecto_atlas_398']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0022png3 = function () {
    this.initialize(ss['proyecto_atlas_397']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0022png4 = function () {
    this.initialize(ss['proyecto_atlas_396']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0022png5 = function () {
    this.initialize(ss['proyecto_atlas_395']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0023 = function () {
    this.initialize(ss['proyecto_atlas_394']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0023png2 = function () {
    this.initialize(ss['proyecto_atlas_393']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0023png3 = function () {
    this.initialize(ss['proyecto_atlas_392']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0023png4 = function () {
    this.initialize(ss['proyecto_atlas_391']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFAGEN_0023png5 = function () {
    this.initialize(ss['proyecto_atlas_390']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFB1 = function () {
    this.initialize(ss['proyecto_atlas_389']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFB1png2 = function () {
    this.initialize(ss['proyecto_atlas_388']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFB1png3 = function () {
    this.initialize(ss['proyecto_atlas_387']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFB1png4 = function () {
    this.initialize(ss['proyecto_atlas_386']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFB2_0000 = function () {
    this.initialize(ss['proyecto_atlas_385']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFB2_0001 = function () {
    this.initialize(ss['proyecto_atlas_384']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0000 = function () {
    this.initialize(ss['proyecto_atlas_383']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0000png2 = function () {
    this.initialize(ss['proyecto_atlas_382']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0000png3 = function () {
    this.initialize(ss['proyecto_atlas_381']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0001 = function () {
    this.initialize(ss['proyecto_atlas_380']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0001png2 = function () {
    this.initialize(ss['proyecto_atlas_379']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0001png3 = function () {
    this.initialize(ss['proyecto_atlas_378']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0002 = function () {
    this.initialize(ss['proyecto_atlas_377']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0002png2 = function () {
    this.initialize(ss['proyecto_atlas_376']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0002png3 = function () {
    this.initialize(ss['proyecto_atlas_375']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0003 = function () {
    this.initialize(ss['proyecto_atlas_374']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0003png2 = function () {
    this.initialize(ss['proyecto_atlas_373']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0003png3 = function () {
    this.initialize(ss['proyecto_atlas_372']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0004 = function () {
    this.initialize(ss['proyecto_atlas_371']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0004png2 = function () {
    this.initialize(ss['proyecto_atlas_370']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0004png3 = function () {
    this.initialize(ss['proyecto_atlas_369']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0005 = function () {
    this.initialize(ss['proyecto_atlas_368']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0005png2 = function () {
    this.initialize(ss['proyecto_atlas_367']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0005png3 = function () {
    this.initialize(ss['proyecto_atlas_366']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0006 = function () {
    this.initialize(ss['proyecto_atlas_365']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0006png2 = function () {
    this.initialize(ss['proyecto_atlas_364']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0006png3 = function () {
    this.initialize(ss['proyecto_atlas_363']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0007 = function () {
    this.initialize(ss['proyecto_atlas_362']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0007png2 = function () {
    this.initialize(ss['proyecto_atlas_361']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0007png3 = function () {
    this.initialize(ss['proyecto_atlas_360']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0008 = function () {
    this.initialize(ss['proyecto_atlas_359']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0008png2 = function () {
    this.initialize(ss['proyecto_atlas_358']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0008png3 = function () {
    this.initialize(ss['proyecto_atlas_357']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0009 = function () {
    this.initialize(ss['proyecto_atlas_356']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0009png2 = function () {
    this.initialize(ss['proyecto_atlas_355']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0009png3 = function () {
    this.initialize(ss['proyecto_atlas_354']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0010 = function () {
    this.initialize(ss['proyecto_atlas_353']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0010png2 = function () {
    this.initialize(ss['proyecto_atlas_352']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0010png3 = function () {
    this.initialize(ss['proyecto_atlas_351']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0011 = function () {
    this.initialize(ss['proyecto_atlas_350']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0011png2 = function () {
    this.initialize(ss['proyecto_atlas_349']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0011png3 = function () {
    this.initialize(ss['proyecto_atlas_348']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0012 = function () {
    this.initialize(ss['proyecto_atlas_347']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0012png2 = function () {
    this.initialize(ss['proyecto_atlas_346']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0012png3 = function () {
    this.initialize(ss['proyecto_atlas_345']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0013 = function () {
    this.initialize(ss['proyecto_atlas_344']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0013png2 = function () {
    this.initialize(ss['proyecto_atlas_343']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0013png3 = function () {
    this.initialize(ss['proyecto_atlas_342']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0014 = function () {
    this.initialize(ss['proyecto_atlas_341']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0014png2 = function () {
    this.initialize(ss['proyecto_atlas_340']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0014png3 = function () {
    this.initialize(ss['proyecto_atlas_339']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0015 = function () {
    this.initialize(ss['proyecto_atlas_338']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0015png2 = function () {
    this.initialize(ss['proyecto_atlas_337']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0015png3 = function () {
    this.initialize(ss['proyecto_atlas_336']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0016 = function () {
    this.initialize(ss['proyecto_atlas_335']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0016png2 = function () {
    this.initialize(ss['proyecto_atlas_334']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0016png3 = function () {
    this.initialize(ss['proyecto_atlas_333']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0017 = function () {
    this.initialize(ss['proyecto_atlas_332']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0017png2 = function () {
    this.initialize(ss['proyecto_atlas_331']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0017png3 = function () {
    this.initialize(ss['proyecto_atlas_330']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0018 = function () {
    this.initialize(ss['proyecto_atlas_329']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0018png2 = function () {
    this.initialize(ss['proyecto_atlas_328']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0018png3 = function () {
    this.initialize(ss['proyecto_atlas_327']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0019 = function () {
    this.initialize(ss['proyecto_atlas_326']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0019png2 = function () {
    this.initialize(ss['proyecto_atlas_325']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0019png3 = function () {
    this.initialize(ss['proyecto_atlas_324']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0020 = function () {
    this.initialize(ss['proyecto_atlas_323']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0020png2 = function () {
    this.initialize(ss['proyecto_atlas_322']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0020png3 = function () {
    this.initialize(ss['proyecto_atlas_321']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0021 = function () {
    this.initialize(ss['proyecto_atlas_320']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0021png2 = function () {
    this.initialize(ss['proyecto_atlas_319']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0021png3 = function () {
    this.initialize(ss['proyecto_atlas_318']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0022 = function () {
    this.initialize(ss['proyecto_atlas_317']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0022png2 = function () {
    this.initialize(ss['proyecto_atlas_316']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0022png3 = function () {
    this.initialize(ss['proyecto_atlas_315']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0023 = function () {
    this.initialize(ss['proyecto_atlas_314']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0023png2 = function () {
    this.initialize(ss['proyecto_atlas_313']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0023png3 = function () {
    this.initialize(ss['proyecto_atlas_312']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0024 = function () {
    this.initialize(ss['proyecto_atlas_311']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0024png2 = function () {
    this.initialize(ss['proyecto_atlas_310']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0024png3 = function () {
    this.initialize(ss['proyecto_atlas_309']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0025 = function () {
    this.initialize(ss['proyecto_atlas_308']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0025png2 = function () {
    this.initialize(ss['proyecto_atlas_307']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0025png3 = function () {
    this.initialize(ss['proyecto_atlas_306']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0026 = function () {
    this.initialize(ss['proyecto_atlas_305']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0026png2 = function () {
    this.initialize(ss['proyecto_atlas_304']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0026png3 = function () {
    this.initialize(ss['proyecto_atlas_303']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0027 = function () {
    this.initialize(ss['proyecto_atlas_302']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0027png2 = function () {
    this.initialize(ss['proyecto_atlas_301']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFE1_0027png3 = function () {
    this.initialize(ss['proyecto_atlas_300']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0001 = function () {
    this.initialize(ss['proyecto_atlas_299']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0002 = function () {
    this.initialize(ss['proyecto_atlas_298']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0003 = function () {
    this.initialize(ss['proyecto_atlas_297']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0004 = function () {
    this.initialize(ss['proyecto_atlas_296']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0005 = function () {
    this.initialize(ss['proyecto_atlas_295']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0006 = function () {
    this.initialize(ss['proyecto_atlas_294']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0007 = function () {
    this.initialize(ss['proyecto_atlas_293']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0008 = function () {
    this.initialize(ss['proyecto_atlas_292']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0009 = function () {
    this.initialize(ss['proyecto_atlas_291']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0010 = function () {
    this.initialize(ss['proyecto_atlas_290']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0011 = function () {
    this.initialize(ss['proyecto_atlas_289']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0012 = function () {
    this.initialize(ss['proyecto_atlas_288']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0013 = function () {
    this.initialize(ss['proyecto_atlas_287']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0014 = function () {
    this.initialize(ss['proyecto_atlas_286']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0015 = function () {
    this.initialize(ss['proyecto_atlas_285']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0016 = function () {
    this.initialize(ss['proyecto_atlas_284']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0017 = function () {
    this.initialize(ss['proyecto_atlas_283']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0018 = function () {
    this.initialize(ss['proyecto_atlas_282']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0019 = function () {
    this.initialize(ss['proyecto_atlas_281']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0020 = function () {
    this.initialize(ss['proyecto_atlas_280']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0021 = function () {
    this.initialize(ss['proyecto_atlas_279']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0022 = function () {
    this.initialize(ss['proyecto_atlas_278']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFEXPGEN_0023 = function () {
    this.initialize(ss['proyecto_atlas_277']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFI1 = function () {
    this.initialize(ss['proyecto_atlas_276']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFI1png2 = function () {
    this.initialize(ss['proyecto_atlas_275']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFI1png3 = function () {
    this.initialize(ss['proyecto_atlas_274']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFI1png4 = function () {
    this.initialize(ss['proyecto_atlas_273']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFI1png5 = function () {
    this.initialize(ss['proyecto_atlas_272']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0000 = function () {
    this.initialize(ss['proyecto_atlas_271']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0001 = function () {
    this.initialize(ss['proyecto_atlas_270']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0002 = function () {
    this.initialize(ss['proyecto_atlas_269']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0003 = function () {
    this.initialize(ss['proyecto_atlas_268']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0004 = function () {
    this.initialize(ss['proyecto_atlas_267']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0005 = function () {
    this.initialize(ss['proyecto_atlas_266']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0006 = function () {
    this.initialize(ss['proyecto_atlas_265']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0007 = function () {
    this.initialize(ss['proyecto_atlas_264']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0008 = function () {
    this.initialize(ss['proyecto_atlas_263']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0009 = function () {
    this.initialize(ss['proyecto_atlas_262']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0010 = function () {
    this.initialize(ss['proyecto_atlas_261']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0011 = function () {
    this.initialize(ss['proyecto_atlas_260']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0012 = function () {
    this.initialize(ss['proyecto_atlas_259']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0013 = function () {
    this.initialize(ss['proyecto_atlas_258']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0014 = function () {
    this.initialize(ss['proyecto_atlas_257']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0015 = function () {
    this.initialize(ss['proyecto_atlas_256']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0016 = function () {
    this.initialize(ss['proyecto_atlas_255']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0017 = function () {
    this.initialize(ss['proyecto_atlas_254']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0018 = function () {
    this.initialize(ss['proyecto_atlas_253']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0019 = function () {
    this.initialize(ss['proyecto_atlas_252']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0020 = function () {
    this.initialize(ss['proyecto_atlas_251']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0021 = function () {
    this.initialize(ss['proyecto_atlas_250']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0022 = function () {
    this.initialize(ss['proyecto_atlas_249']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiaMFJ1_0023 = function () {
    this.initialize(ss['proyecto_atlas_248']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1a = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(20);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1apng2 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(21);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1apng3 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(22);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1b = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(23);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1bpng2 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(24);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1bpng3 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(25);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1bpng4 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(26);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1bpng5 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(27);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1bpng6 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(28);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1bpng7 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(29);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1bpng8 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(30);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1c = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(31);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1cpng2 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(32);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1cpng3 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(33);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1cpng4 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(34);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1cpng5 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(35);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1d = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(36);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1dpng2 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(37);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1dpng3 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(38);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1dpng4 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(39);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1dpng5 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(40);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1dpng6 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(41);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap1dpng7 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(42);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap15a = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(43);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap15b = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(44);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap20d = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(45);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap21a = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(46);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap21apng2 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(47);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap27a = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(48);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap27apng2 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(49);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5d = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(50);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5dpng2 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(51);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5dpng3 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(52);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5dpng4 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(53);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5dpng5 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(54);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5dpng6 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(55);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5dpng7 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(56);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5dpng8 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(57);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap5dpng9 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6apng2 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6apng3 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6bpng2 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6bpng3 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6bpng4 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6cpng2 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(9);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6cpng3 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(10);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(11);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6png2 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(12);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap6png3 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(13);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap7a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(14);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap7apng2 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(15);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap7apng3 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(16);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap7b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(17);
  }).prototype = p = new cjs.Sprite();

  (lib.copiap7bpng2 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(18);
  }).prototype = p = new cjs.Sprite();

  (lib.dp1 = function () {
    this.initialize(ss['proyecto_atlas_247']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.DP5 = function () {
    this.initialize(ss['proyecto_atlas_246']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.DP7 = function () {
    this.initialize(ss['proyecto_atlas_245']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.DP8 = function () {
    this.initialize(ss['proyecto_atlas_244']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.EP1 = function () {
    this.initialize(ss['proyecto_atlas_243']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.EP2 = function () {
    this.initialize(ss['proyecto_atlas_242']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.EP4 = function () {
    this.initialize(ss['proyecto_atlas_241']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.EP5 = function () {
    this.initialize(ss['proyecto_atlas_240']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.EXP_FLECHA = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(19);
  }).prototype = p = new cjs.Sprite();

  (lib.EXP_TEXTO = function () {
    this.initialize(ss['proyecto_atlas_239']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.hp1 = function () {
    this.initialize(ss['proyecto_atlas_238']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.hp2 = function () {
    this.initialize(ss['proyecto_atlas_237']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.HP4 = function () {
    this.initialize(ss['proyecto_atlas_236']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.HP5 = function () {
    this.initialize(ss['proyecto_atlas_235']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.IP1 = function () {
    this.initialize(ss['proyecto_atlas_234']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.ip2 = function () {
    this.initialize(ss['proyecto_atlas_233']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.ip4 = function () {
    this.initialize(ss['proyecto_atlas_232']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.ip6 = function () {
    this.initialize(ss['proyecto_atlas_231']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.ip7 = function () {
    this.initialize(ss['proyecto_atlas_230']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.ip8 = function () {
    this.initialize(ss['proyecto_atlas_229']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.JP1 = function () {
    this.initialize(ss['proyecto_atlas_228']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.jp2 = function () {
    this.initialize(ss['proyecto_atlas_227']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0000 = function () {
    this.initialize(ss['proyecto_atlas_226']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0001 = function () {
    this.initialize(ss['proyecto_atlas_225']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0002 = function () {
    this.initialize(ss['proyecto_atlas_224']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0003 = function () {
    this.initialize(ss['proyecto_atlas_223']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0004 = function () {
    this.initialize(ss['proyecto_atlas_222']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0005 = function () {
    this.initialize(ss['proyecto_atlas_221']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0006 = function () {
    this.initialize(ss['proyecto_atlas_220']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0007 = function () {
    this.initialize(ss['proyecto_atlas_219']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0008 = function () {
    this.initialize(ss['proyecto_atlas_218']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0009 = function () {
    this.initialize(ss['proyecto_atlas_217']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0010 = function () {
    this.initialize(ss['proyecto_atlas_216']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0011 = function () {
    this.initialize(ss['proyecto_atlas_215']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0012 = function () {
    this.initialize(ss['proyecto_atlas_214']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0013 = function () {
    this.initialize(ss['proyecto_atlas_213']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0014 = function () {
    this.initialize(ss['proyecto_atlas_212']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0015 = function () {
    this.initialize(ss['proyecto_atlas_211']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0016 = function () {
    this.initialize(ss['proyecto_atlas_210']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0017 = function () {
    this.initialize(ss['proyecto_atlas_209']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0018 = function () {
    this.initialize(ss['proyecto_atlas_208']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0019 = function () {
    this.initialize(ss['proyecto_atlas_207']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0020 = function () {
    this.initialize(ss['proyecto_atlas_206']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0021 = function () {
    this.initialize(ss['proyecto_atlas_205']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0022 = function () {
    this.initialize(ss['proyecto_atlas_204']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA2GEN_0023 = function () {
    this.initialize(ss['proyecto_atlas_203']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFA3GEN_0000 = function () {
    this.initialize(img.MFA3GEN_0000);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0001 = function () {
    this.initialize(img.MFA3GEN_0001);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0002 = function () {
    this.initialize(img.MFA3GEN_0002);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0003 = function () {
    this.initialize(img.MFA3GEN_0003);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0004 = function () {
    this.initialize(img.MFA3GEN_0004);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0005 = function () {
    this.initialize(img.MFA3GEN_0005);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0006 = function () {
    this.initialize(img.MFA3GEN_0006);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0007 = function () {
    this.initialize(img.MFA3GEN_0007);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0008 = function () {
    this.initialize(img.MFA3GEN_0008);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0009 = function () {
    this.initialize(img.MFA3GEN_0009);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0010 = function () {
    this.initialize(img.MFA3GEN_0010);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0011 = function () {
    this.initialize(img.MFA3GEN_0011);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0012 = function () {
    this.initialize(img.MFA3GEN_0012);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0013 = function () {
    this.initialize(img.MFA3GEN_0013);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0014 = function () {
    this.initialize(img.MFA3GEN_0014);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0015 = function () {
    this.initialize(img.MFA3GEN_0015);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0016 = function () {
    this.initialize(img.MFA3GEN_0016);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0017 = function () {
    this.initialize(img.MFA3GEN_0017);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0018 = function () {
    this.initialize(img.MFA3GEN_0018);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0019 = function () {
    this.initialize(img.MFA3GEN_0019);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0020 = function () {
    this.initialize(img.MFA3GEN_0020);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0021 = function () {
    this.initialize(img.MFA3GEN_0021);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0022 = function () {
    this.initialize(img.MFA3GEN_0022);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFA3GEN_0023 = function () {
    this.initialize(img.MFA3GEN_0023);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 2160);

  (lib.MFAGEN_0000 = function () {
    this.initialize(ss['proyecto_atlas_202']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0001 = function () {
    this.initialize(ss['proyecto_atlas_201']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0002 = function () {
    this.initialize(ss['proyecto_atlas_200']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0003 = function () {
    this.initialize(ss['proyecto_atlas_199']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0004 = function () {
    this.initialize(ss['proyecto_atlas_198']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0005 = function () {
    this.initialize(ss['proyecto_atlas_197']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0006 = function () {
    this.initialize(ss['proyecto_atlas_196']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0007 = function () {
    this.initialize(ss['proyecto_atlas_195']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0008 = function () {
    this.initialize(ss['proyecto_atlas_194']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0009 = function () {
    this.initialize(ss['proyecto_atlas_193']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0010 = function () {
    this.initialize(ss['proyecto_atlas_192']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0011 = function () {
    this.initialize(ss['proyecto_atlas_191']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0012 = function () {
    this.initialize(ss['proyecto_atlas_190']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0013 = function () {
    this.initialize(ss['proyecto_atlas_189']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0014 = function () {
    this.initialize(ss['proyecto_atlas_188']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0015 = function () {
    this.initialize(ss['proyecto_atlas_187']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0016 = function () {
    this.initialize(ss['proyecto_atlas_186']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0017 = function () {
    this.initialize(ss['proyecto_atlas_185']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0018 = function () {
    this.initialize(ss['proyecto_atlas_184']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0019 = function () {
    this.initialize(ss['proyecto_atlas_183']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0020 = function () {
    this.initialize(ss['proyecto_atlas_182']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0021 = function () {
    this.initialize(ss['proyecto_atlas_181']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFAGEN_0022 = function () {
    this.initialize(ss['proyecto_atlas_180']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFB1 = function () {
    this.initialize(ss['proyecto_atlas_179']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFB2_0000 = function () {
    this.initialize(ss['proyecto_atlas_178']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFB2_0001 = function () {
    this.initialize(ss['proyecto_atlas_177']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFB2_0002 = function () {
    this.initialize(ss['proyecto_atlas_176']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFB2_0003 = function () {
    this.initialize(ss['proyecto_atlas_175']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFB2_0009 = function () {
    this.initialize(ss['proyecto_atlas_174']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFD1_0000 = function () {
    this.initialize(ss['proyecto_atlas_173']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFD1_0001 = function () {
    this.initialize(ss['proyecto_atlas_172']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFD1_0002 = function () {
    this.initialize(ss['proyecto_atlas_171']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFD1_0003 = function () {
    this.initialize(ss['proyecto_atlas_170']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0000 = function () {
    this.initialize(ss['proyecto_atlas_169']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0001 = function () {
    this.initialize(ss['proyecto_atlas_168']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0002 = function () {
    this.initialize(ss['proyecto_atlas_167']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0003 = function () {
    this.initialize(ss['proyecto_atlas_166']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0004 = function () {
    this.initialize(ss['proyecto_atlas_165']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0005 = function () {
    this.initialize(ss['proyecto_atlas_164']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0006 = function () {
    this.initialize(ss['proyecto_atlas_163']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0007 = function () {
    this.initialize(ss['proyecto_atlas_162']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0008 = function () {
    this.initialize(ss['proyecto_atlas_161']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0009 = function () {
    this.initialize(ss['proyecto_atlas_160']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0010 = function () {
    this.initialize(ss['proyecto_atlas_159']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0011 = function () {
    this.initialize(ss['proyecto_atlas_158']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0012 = function () {
    this.initialize(ss['proyecto_atlas_157']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0013 = function () {
    this.initialize(ss['proyecto_atlas_156']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0014 = function () {
    this.initialize(ss['proyecto_atlas_155']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0015 = function () {
    this.initialize(ss['proyecto_atlas_154']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0016 = function () {
    this.initialize(ss['proyecto_atlas_153']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0017 = function () {
    this.initialize(ss['proyecto_atlas_152']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0018 = function () {
    this.initialize(ss['proyecto_atlas_151']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0019 = function () {
    this.initialize(ss['proyecto_atlas_150']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0020 = function () {
    this.initialize(ss['proyecto_atlas_149']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0021 = function () {
    this.initialize(ss['proyecto_atlas_148']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0022 = function () {
    this.initialize(ss['proyecto_atlas_147']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0023 = function () {
    this.initialize(ss['proyecto_atlas_146']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0024 = function () {
    this.initialize(ss['proyecto_atlas_145']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0025 = function () {
    this.initialize(ss['proyecto_atlas_144']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0026 = function () {
    this.initialize(ss['proyecto_atlas_143']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFE1_0027 = function () {
    this.initialize(ss['proyecto_atlas_142']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFEXPGEN_0000 = function () {
    this.initialize(ss['proyecto_atlas_141']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFH1_0000 = function () {
    this.initialize(ss['proyecto_atlas_140']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFH1_0001 = function () {
    this.initialize(ss['proyecto_atlas_139']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFH1_0002 = function () {
    this.initialize(ss['proyecto_atlas_138']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFH1_0003 = function () {
    this.initialize(ss['proyecto_atlas_137']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFI1 = function () {
    this.initialize(ss['proyecto_atlas_136']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0000 = function () {
    this.initialize(ss['proyecto_atlas_135']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0001 = function () {
    this.initialize(ss['proyecto_atlas_134']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0002 = function () {
    this.initialize(ss['proyecto_atlas_133']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0003 = function () {
    this.initialize(ss['proyecto_atlas_132']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0004 = function () {
    this.initialize(ss['proyecto_atlas_131']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0005 = function () {
    this.initialize(ss['proyecto_atlas_130']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0006 = function () {
    this.initialize(ss['proyecto_atlas_129']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0007 = function () {
    this.initialize(ss['proyecto_atlas_128']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0008 = function () {
    this.initialize(ss['proyecto_atlas_127']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0009 = function () {
    this.initialize(ss['proyecto_atlas_126']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0010 = function () {
    this.initialize(ss['proyecto_atlas_125']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0011 = function () {
    this.initialize(ss['proyecto_atlas_124']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0012 = function () {
    this.initialize(ss['proyecto_atlas_123']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0013 = function () {
    this.initialize(ss['proyecto_atlas_122']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0014 = function () {
    this.initialize(ss['proyecto_atlas_121']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0015 = function () {
    this.initialize(ss['proyecto_atlas_120']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0016 = function () {
    this.initialize(ss['proyecto_atlas_119']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0017 = function () {
    this.initialize(ss['proyecto_atlas_118']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0018 = function () {
    this.initialize(ss['proyecto_atlas_117']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0019 = function () {
    this.initialize(ss['proyecto_atlas_116']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0020 = function () {
    this.initialize(ss['proyecto_atlas_115']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0021 = function () {
    this.initialize(ss['proyecto_atlas_114']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0022 = function () {
    this.initialize(ss['proyecto_atlas_113']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0023 = function () {
    this.initialize(ss['proyecto_atlas_112']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0024 = function () {
    this.initialize(ss['proyecto_atlas_111']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0025 = function () {
    this.initialize(ss['proyecto_atlas_110']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0026 = function () {
    this.initialize(ss['proyecto_atlas_109']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0027 = function () {
    this.initialize(ss['proyecto_atlas_108']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0028 = function () {
    this.initialize(ss['proyecto_atlas_107']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0029 = function () {
    this.initialize(ss['proyecto_atlas_106']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0030 = function () {
    this.initialize(ss['proyecto_atlas_105']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0031 = function () {
    this.initialize(ss['proyecto_atlas_104']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0032 = function () {
    this.initialize(ss['proyecto_atlas_103']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0033 = function () {
    this.initialize(ss['proyecto_atlas_102']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0034 = function () {
    this.initialize(ss['proyecto_atlas_101']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFINTROGEN_0035 = function () {
    this.initialize(ss['proyecto_atlas_100']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0000 = function () {
    this.initialize(ss['proyecto_atlas_99']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0001 = function () {
    this.initialize(ss['proyecto_atlas_98']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0002 = function () {
    this.initialize(ss['proyecto_atlas_97']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0003 = function () {
    this.initialize(ss['proyecto_atlas_96']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0004 = function () {
    this.initialize(ss['proyecto_atlas_95']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0005 = function () {
    this.initialize(ss['proyecto_atlas_94']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0006 = function () {
    this.initialize(ss['proyecto_atlas_93']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0007 = function () {
    this.initialize(ss['proyecto_atlas_92']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0008 = function () {
    this.initialize(ss['proyecto_atlas_91']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0009 = function () {
    this.initialize(ss['proyecto_atlas_90']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0010 = function () {
    this.initialize(ss['proyecto_atlas_89']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0011 = function () {
    this.initialize(ss['proyecto_atlas_88']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0012 = function () {
    this.initialize(ss['proyecto_atlas_87']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0013 = function () {
    this.initialize(ss['proyecto_atlas_86']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0014 = function () {
    this.initialize(ss['proyecto_atlas_85']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0015 = function () {
    this.initialize(ss['proyecto_atlas_84']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0016 = function () {
    this.initialize(ss['proyecto_atlas_83']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0017 = function () {
    this.initialize(ss['proyecto_atlas_82']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0018 = function () {
    this.initialize(ss['proyecto_atlas_81']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0019 = function () {
    this.initialize(ss['proyecto_atlas_80']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0020 = function () {
    this.initialize(ss['proyecto_atlas_79']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0021 = function () {
    this.initialize(ss['proyecto_atlas_78']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0022 = function () {
    this.initialize(ss['proyecto_atlas_77']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFJ1_0023 = function () {
    this.initialize(ss['proyecto_atlas_76']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0000 = function () {
    this.initialize(ss['proyecto_atlas_75']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0001 = function () {
    this.initialize(ss['proyecto_atlas_74']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0002 = function () {
    this.initialize(ss['proyecto_atlas_73']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0003 = function () {
    this.initialize(ss['proyecto_atlas_72']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0004 = function () {
    this.initialize(ss['proyecto_atlas_71']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0005 = function () {
    this.initialize(ss['proyecto_atlas_70']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0006 = function () {
    this.initialize(ss['proyecto_atlas_69']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0007 = function () {
    this.initialize(ss['proyecto_atlas_68']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0008 = function () {
    this.initialize(ss['proyecto_atlas_67']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0009 = function () {
    this.initialize(ss['proyecto_atlas_66']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0010 = function () {
    this.initialize(ss['proyecto_atlas_65']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0011 = function () {
    this.initialize(ss['proyecto_atlas_64']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0012 = function () {
    this.initialize(ss['proyecto_atlas_63']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0013 = function () {
    this.initialize(ss['proyecto_atlas_62']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0014 = function () {
    this.initialize(ss['proyecto_atlas_61']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0015 = function () {
    this.initialize(ss['proyecto_atlas_60']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0016 = function () {
    this.initialize(ss['proyecto_atlas_59']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0017 = function () {
    this.initialize(ss['proyecto_atlas_58']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0018 = function () {
    this.initialize(ss['proyecto_atlas_57']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0019 = function () {
    this.initialize(ss['proyecto_atlas_56']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0020 = function () {
    this.initialize(ss['proyecto_atlas_55']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0021 = function () {
    this.initialize(ss['proyecto_atlas_54']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0022 = function () {
    this.initialize(ss['proyecto_atlas_53']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0023 = function () {
    this.initialize(ss['proyecto_atlas_52']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0024 = function () {
    this.initialize(ss['proyecto_atlas_51']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0025 = function () {
    this.initialize(ss['proyecto_atlas_50']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0026 = function () {
    this.initialize(ss['proyecto_atlas_49']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0027 = function () {
    this.initialize(ss['proyecto_atlas_48']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0028 = function () {
    this.initialize(ss['proyecto_atlas_47']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0029 = function () {
    this.initialize(ss['proyecto_atlas_46']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0030 = function () {
    this.initialize(ss['proyecto_atlas_45']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0031 = function () {
    this.initialize(ss['proyecto_atlas_44']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0032 = function () {
    this.initialize(ss['proyecto_atlas_43']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0033 = function () {
    this.initialize(ss['proyecto_atlas_42']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0034 = function () {
    this.initialize(ss['proyecto_atlas_41']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0035 = function () {
    this.initialize(ss['proyecto_atlas_40']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0036 = function () {
    this.initialize(ss['proyecto_atlas_39']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0037 = function () {
    this.initialize(ss['proyecto_atlas_38']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0038 = function () {
    this.initialize(ss['proyecto_atlas_37']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0039 = function () {
    this.initialize(ss['proyecto_atlas_36']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0040 = function () {
    this.initialize(ss['proyecto_atlas_35']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0041 = function () {
    this.initialize(ss['proyecto_atlas_34']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0042 = function () {
    this.initialize(ss['proyecto_atlas_33']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0043 = function () {
    this.initialize(ss['proyecto_atlas_32']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0044 = function () {
    this.initialize(ss['proyecto_atlas_31']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0045 = function () {
    this.initialize(ss['proyecto_atlas_30']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0046 = function () {
    this.initialize(ss['proyecto_atlas_29']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0047 = function () {
    this.initialize(ss['proyecto_atlas_28']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0048 = function () {
    this.initialize(ss['proyecto_atlas_27']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0049 = function () {
    this.initialize(ss['proyecto_atlas_26']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0050 = function () {
    this.initialize(ss['proyecto_atlas_25']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0051 = function () {
    this.initialize(ss['proyecto_atlas_24']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0052 = function () {
    this.initialize(ss['proyecto_atlas_23']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0053 = function () {
    this.initialize(ss['proyecto_atlas_22']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0054 = function () {
    this.initialize(ss['proyecto_atlas_21']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0055 = function () {
    this.initialize(ss['proyecto_atlas_20']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0056 = function () {
    this.initialize(ss['proyecto_atlas_19']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0057 = function () {
    this.initialize(ss['proyecto_atlas_18']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0058 = function () {
    this.initialize(ss['proyecto_atlas_17']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0059 = function () {
    this.initialize(ss['proyecto_atlas_16']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0060 = function () {
    this.initialize(ss['proyecto_atlas_15']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0061 = function () {
    this.initialize(ss['proyecto_atlas_14']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0062 = function () {
    this.initialize(ss['proyecto_atlas_13']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0063 = function () {
    this.initialize(ss['proyecto_atlas_12']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0064 = function () {
    this.initialize(ss['proyecto_atlas_11']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0065 = function () {
    this.initialize(ss['proyecto_atlas_10']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0066 = function () {
    this.initialize(ss['proyecto_atlas_9']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0067 = function () {
    this.initialize(ss['proyecto_atlas_8']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0068 = function () {
    this.initialize(ss['proyecto_atlas_7']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0069 = function () {
    this.initialize(ss['proyecto_atlas_6']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0070 = function () {
    this.initialize(ss['proyecto_atlas_5']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0071 = function () {
    this.initialize(ss['proyecto_atlas_4']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0072 = function () {
    this.initialize(ss['proyecto_atlas_3']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.MFK1_0073 = function () {
    this.initialize(ss['proyecto_atlas_2']);
    this.gotoAndStop(58);
  }).prototype = p = new cjs.Sprite();

  (lib.p22c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(20);
  }).prototype = p = new cjs.Sprite();

  (lib.p1a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(21);
  }).prototype = p = new cjs.Sprite();

  (lib.p1b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(22);
  }).prototype = p = new cjs.Sprite();

  (lib.p1c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(23);
  }).prototype = p = new cjs.Sprite();

  (lib.p1d = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(24);
  }).prototype = p = new cjs.Sprite();

  (lib.p11a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(25);
  }).prototype = p = new cjs.Sprite();

  (lib.p11b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(26);
  }).prototype = p = new cjs.Sprite();

  (lib.p11c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(27);
  }).prototype = p = new cjs.Sprite();

  (lib.p11d = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(28);
  }).prototype = p = new cjs.Sprite();

  (lib.p12a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(29);
  }).prototype = p = new cjs.Sprite();

  (lib.p15a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(30);
  }).prototype = p = new cjs.Sprite();

  (lib.p15b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(31);
  }).prototype = p = new cjs.Sprite();

  (lib.P2A = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(32);
  }).prototype = p = new cjs.Sprite();

  (lib.P2B = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(33);
  }).prototype = p = new cjs.Sprite();

  (lib.p201 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(34);
  }).prototype = p = new cjs.Sprite();

  (lib.p20b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(35);
  }).prototype = p = new cjs.Sprite();

  (lib.p20c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(36);
  }).prototype = p = new cjs.Sprite();

  (lib.p20d = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(37);
  }).prototype = p = new cjs.Sprite();

  (lib.p21a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(38);
  }).prototype = p = new cjs.Sprite();

  (lib.p21b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(39);
  }).prototype = p = new cjs.Sprite();

  (lib.p22a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(40);
  }).prototype = p = new cjs.Sprite();

  (lib.p22b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(41);
  }).prototype = p = new cjs.Sprite();

  (lib.p27a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(42);
  }).prototype = p = new cjs.Sprite();

  (lib.p3a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(43);
  }).prototype = p = new cjs.Sprite();

  (lib.p3b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(44);
  }).prototype = p = new cjs.Sprite();

  (lib.p30a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(45);
  }).prototype = p = new cjs.Sprite();

  (lib.p31a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(46);
  }).prototype = p = new cjs.Sprite();

  (lib.p31b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(47);
  }).prototype = p = new cjs.Sprite();

  (lib.p31c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(48);
  }).prototype = p = new cjs.Sprite();

  (lib.p31d = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(49);
  }).prototype = p = new cjs.Sprite();

  (lib.p4a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(50);
  }).prototype = p = new cjs.Sprite();

  (lib.p4b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(51);
  }).prototype = p = new cjs.Sprite();

  (lib.p4c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(52);
  }).prototype = p = new cjs.Sprite();

  (lib.p5a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(53);
  }).prototype = p = new cjs.Sprite();

  (lib.p5b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(54);
  }).prototype = p = new cjs.Sprite();

  (lib.p5c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(55);
  }).prototype = p = new cjs.Sprite();

  (lib.p5d = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(56);
  }).prototype = p = new cjs.Sprite();

  (lib.p6a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(57);
  }).prototype = p = new cjs.Sprite();

  (lib.p6b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(58);
  }).prototype = p = new cjs.Sprite();

  (lib.p6c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(59);
  }).prototype = p = new cjs.Sprite();

  (lib.p6 = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(60);
  }).prototype = p = new cjs.Sprite();

  (lib.p7a = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(61);
  }).prototype = p = new cjs.Sprite();

  (lib.p7b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(62);
  }).prototype = p = new cjs.Sprite();

  (lib.p8b = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(63);
  }).prototype = p = new cjs.Sprite();

  (lib.p8c = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(64);
  }).prototype = p = new cjs.Sprite();

  (lib.p8d = function () {
    this.initialize(ss['proyecto_atlas_1']);
    this.gotoAndStop(65);
  }).prototype = p = new cjs.Sprite();
  // helper functions:

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);

    prototype.clone = () => {
      var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
      clone.gotoAndStop(this.currentFrame);
      clone.paused = this.paused;
      clone.framerate = this.framerate;
      return clone;
    };

    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Símbolo175 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng18();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo174 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng17();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo173 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng16();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo172 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng15();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo171 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1dpng7();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo170 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap5dpng9();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo169 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap15a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo168 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap15b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo167 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng14();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo166 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1apng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo165 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1bpng7();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo164 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1cpng4();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo163 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1dpng6();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo162 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng13();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo161 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6png3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo160 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap7apng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo159 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap7bpng2();

    this.instance_1 = new lib.copiap7apng2();

    this.instance_2 = new lib.copiap6png2();

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo158 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng12();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo157 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng11();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo156 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1cpng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo155 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap5dpng8();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo154 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6bpng4();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo153 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap21apng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo152 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1bpng6();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo151 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap5dpng7();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo150 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6bpng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo149 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap27apng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo148 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1apng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo147 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1bpng8();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo146 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1cpng5();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo145 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap27a();

    this.instance_1 = new lib.copiap6bpng2();

    this.instance_2 = new lib.copiap5dpng6();

    this.instance_3 = new lib.copiap1bpng5();

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo144 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng10();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo143 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng9();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo142 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p31a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo141 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p31b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo140 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p31c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo139 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p31d();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo138 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1bpng4();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo137 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap5dpng5();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo136 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap21a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo135 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p30a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo134 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng8();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo133 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng7();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo132 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6apng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo131 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo130 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6cpng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo129 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p27a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo128 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng6();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo127 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6cpng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo126 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1bpng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo125 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1dpng5();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo124 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng5();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo123 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng4();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo122 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap5dpng4();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo121 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p22a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo120 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p22b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo119 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p22c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo118 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap5dpng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo117 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap20d();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo116 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p21a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo115 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p21b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo114 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p201();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo113 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p20b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo112 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p20d();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo111 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p20c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo110 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1dpng4();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo109 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p15b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo108 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p15a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo107 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap5dpng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo106 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo105 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo104 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHA();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo103 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1bpng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo102 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1dpng3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo101 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1cpng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo100 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo99 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p12a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo98 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6apng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo97 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap5d();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo96 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo95 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p11d();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo94 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p11c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo93 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p11b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo92 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p11a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo91 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap7a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo90 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap7b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo89 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo88 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo87 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1dpng2();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo86 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap1b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo85 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p8d();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo84 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p8c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo83 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p8b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo82 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiap6a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo81 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p7b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo80 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p6();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo79 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p7a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo78 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p6a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo77 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p6c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo76 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p6b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo75 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p5d();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo74 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p5c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo73 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p5b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo72 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p5a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo71 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p4c();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo70 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p4b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo69 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p4a();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo67 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p3b();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo64 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p3a();
    this.instance.setTransform(-79.5, -80);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo64, new cjs.Rectangle(-79.5, -80, 159, 160), null);

  (lib.Símbolo63 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.P2B();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo62 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.P2A();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 159, 160);

  (lib.Símbolo61 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaEXP_FLECHApng19();
    this.instance.setTransform(159, 160, 1, 1, 180);

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.0781, scaleY: 1.0781, x: 165.4, y: 166.5 }, 0).wait(3)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-6, -6, 171.4, 172.5);

  (lib.Símbolo60 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p1c();
    this.instance.setTransform(-79.5, -80);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo60, new cjs.Rectangle(-79.5, -80, 159, 160), null);

  (lib.Símbolo59 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p1d();
    this.instance.setTransform(-90.35, -90.95, 1.1369, 1.1369);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo59, new cjs.Rectangle(-90.3, -90.9, 180.7, 181.9), null);

  (lib.Símbolo58 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p1b();
    this.instance.setTransform(-79.5, -80);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo58, new cjs.Rectangle(-79.5, -80, 159, 160), null);

  (lib.Símbolo57 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p1a();
    this.instance.setTransform(-79.5, -80);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo57, new cjs.Rectangle(-79.5, -80, 159, 160), null);

  (lib.Símbolo56 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.copiajp3();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(74));

    // Capa_1
    this.instance_1 = new lib.MFK1_0000();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.MFK1_0001();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.MFK1_0002();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.MFK1_0003();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.MFK1_0004();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.MFK1_0005();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.MFK1_0006();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.MFK1_0007();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.MFK1_0008();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.MFK1_0009();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.MFK1_0010();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.MFK1_0011();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.MFK1_0012();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.MFK1_0013();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.MFK1_0014();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.MFK1_0015();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.MFK1_0016();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.MFK1_0017();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.MFK1_0018();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.MFK1_0019();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.MFK1_0020();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.MFK1_0021();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.MFK1_0022();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.MFK1_0023();
    this.instance_24.setTransform(-960, -540);

    this.instance_25 = new lib.MFK1_0024();
    this.instance_25.setTransform(-960, -540);

    this.instance_26 = new lib.MFK1_0025();
    this.instance_26.setTransform(-960, -540);

    this.instance_27 = new lib.MFK1_0026();
    this.instance_27.setTransform(-960, -540);

    this.instance_28 = new lib.MFK1_0027();
    this.instance_28.setTransform(-960, -540);

    this.instance_29 = new lib.MFK1_0028();
    this.instance_29.setTransform(-960, -540);

    this.instance_30 = new lib.MFK1_0029();
    this.instance_30.setTransform(-960, -540);

    this.instance_31 = new lib.MFK1_0030();
    this.instance_31.setTransform(-960, -540);

    this.instance_32 = new lib.MFK1_0031();
    this.instance_32.setTransform(-960, -540);

    this.instance_33 = new lib.MFK1_0032();
    this.instance_33.setTransform(-960, -540);

    this.instance_34 = new lib.MFK1_0033();
    this.instance_34.setTransform(-960, -540);

    this.instance_35 = new lib.MFK1_0034();
    this.instance_35.setTransform(-960, -540);

    this.instance_36 = new lib.MFK1_0035();
    this.instance_36.setTransform(-960, -540);

    this.instance_37 = new lib.MFK1_0036();
    this.instance_37.setTransform(-960, -540);

    this.instance_38 = new lib.MFK1_0037();
    this.instance_38.setTransform(-960, -540);

    this.instance_39 = new lib.MFK1_0038();
    this.instance_39.setTransform(-960, -540);

    this.instance_40 = new lib.MFK1_0039();
    this.instance_40.setTransform(-960, -540);

    this.instance_41 = new lib.MFK1_0040();
    this.instance_41.setTransform(-960, -540);

    this.instance_42 = new lib.MFK1_0041();
    this.instance_42.setTransform(-960, -540);

    this.instance_43 = new lib.MFK1_0042();
    this.instance_43.setTransform(-960, -540);

    this.instance_44 = new lib.MFK1_0043();
    this.instance_44.setTransform(-960, -540);

    this.instance_45 = new lib.MFK1_0044();
    this.instance_45.setTransform(-960, -540);

    this.instance_46 = new lib.MFK1_0045();
    this.instance_46.setTransform(-960, -540);

    this.instance_47 = new lib.MFK1_0046();
    this.instance_47.setTransform(-960, -540);

    this.instance_48 = new lib.MFK1_0047();
    this.instance_48.setTransform(-960, -540);

    this.instance_49 = new lib.MFK1_0048();
    this.instance_49.setTransform(-960, -540);

    this.instance_50 = new lib.MFK1_0049();
    this.instance_50.setTransform(-960, -540);

    this.instance_51 = new lib.MFK1_0050();
    this.instance_51.setTransform(-960, -540);

    this.instance_52 = new lib.MFK1_0051();
    this.instance_52.setTransform(-960, -540);

    this.instance_53 = new lib.MFK1_0052();
    this.instance_53.setTransform(-960, -540);

    this.instance_54 = new lib.MFK1_0053();
    this.instance_54.setTransform(-960, -540);

    this.instance_55 = new lib.MFK1_0054();
    this.instance_55.setTransform(-960, -540);

    this.instance_56 = new lib.MFK1_0055();
    this.instance_56.setTransform(-960, -540);

    this.instance_57 = new lib.MFK1_0056();
    this.instance_57.setTransform(-960, -540);

    this.instance_58 = new lib.MFK1_0057();
    this.instance_58.setTransform(-960, -540);

    this.instance_59 = new lib.MFK1_0058();
    this.instance_59.setTransform(-960, -540);

    this.instance_60 = new lib.MFK1_0059();
    this.instance_60.setTransform(-960, -540);

    this.instance_61 = new lib.MFK1_0060();
    this.instance_61.setTransform(-960, -540);

    this.instance_62 = new lib.MFK1_0061();
    this.instance_62.setTransform(-960, -540);

    this.instance_63 = new lib.MFK1_0062();
    this.instance_63.setTransform(-960, -540);

    this.instance_64 = new lib.MFK1_0063();
    this.instance_64.setTransform(-960, -540);

    this.instance_65 = new lib.MFK1_0064();
    this.instance_65.setTransform(-960, -540);

    this.instance_66 = new lib.MFK1_0065();
    this.instance_66.setTransform(-960, -540);

    this.instance_67 = new lib.MFK1_0066();
    this.instance_67.setTransform(-960, -540);

    this.instance_68 = new lib.MFK1_0067();
    this.instance_68.setTransform(-960, -540);

    this.instance_69 = new lib.MFK1_0068();
    this.instance_69.setTransform(-960, -540);

    this.instance_70 = new lib.MFK1_0069();
    this.instance_70.setTransform(-960, -540);

    this.instance_71 = new lib.MFK1_0070();
    this.instance_71.setTransform(-960, -540);

    this.instance_72 = new lib.MFK1_0071();
    this.instance_72.setTransform(-960, -540);

    this.instance_73 = new lib.MFK1_0072();
    this.instance_73.setTransform(-960, -540);

    this.instance_74 = new lib.MFK1_0073();
    this.instance_74.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .to({ state: [{ t: this.instance_25 }] }, 1)
        .to({ state: [{ t: this.instance_26 }] }, 1)
        .to({ state: [{ t: this.instance_27 }] }, 1)
        .to({ state: [{ t: this.instance_28 }] }, 1)
        .to({ state: [{ t: this.instance_29 }] }, 1)
        .to({ state: [{ t: this.instance_30 }] }, 1)
        .to({ state: [{ t: this.instance_31 }] }, 1)
        .to({ state: [{ t: this.instance_32 }] }, 1)
        .to({ state: [{ t: this.instance_33 }] }, 1)
        .to({ state: [{ t: this.instance_34 }] }, 1)
        .to({ state: [{ t: this.instance_35 }] }, 1)
        .to({ state: [{ t: this.instance_36 }] }, 1)
        .to({ state: [{ t: this.instance_37 }] }, 1)
        .to({ state: [{ t: this.instance_38 }] }, 1)
        .to({ state: [{ t: this.instance_39 }] }, 1)
        .to({ state: [{ t: this.instance_40 }] }, 1)
        .to({ state: [{ t: this.instance_41 }] }, 1)
        .to({ state: [{ t: this.instance_42 }] }, 1)
        .to({ state: [{ t: this.instance_43 }] }, 1)
        .to({ state: [{ t: this.instance_44 }] }, 1)
        .to({ state: [{ t: this.instance_45 }] }, 1)
        .to({ state: [{ t: this.instance_46 }] }, 1)
        .to({ state: [{ t: this.instance_47 }] }, 1)
        .to({ state: [{ t: this.instance_48 }] }, 1)
        .to({ state: [{ t: this.instance_49 }] }, 1)
        .to({ state: [{ t: this.instance_50 }] }, 1)
        .to({ state: [{ t: this.instance_51 }] }, 1)
        .to({ state: [{ t: this.instance_52 }] }, 1)
        .to({ state: [{ t: this.instance_53 }] }, 1)
        .to({ state: [{ t: this.instance_54 }] }, 1)
        .to({ state: [{ t: this.instance_55 }] }, 1)
        .to({ state: [{ t: this.instance_56 }] }, 1)
        .to({ state: [{ t: this.instance_57 }] }, 1)
        .to({ state: [{ t: this.instance_58 }] }, 1)
        .to({ state: [{ t: this.instance_59 }] }, 1)
        .to({ state: [{ t: this.instance_60 }] }, 1)
        .to({ state: [{ t: this.instance_61 }] }, 1)
        .to({ state: [{ t: this.instance_62 }] }, 1)
        .to({ state: [{ t: this.instance_63 }] }, 1)
        .to({ state: [{ t: this.instance_64 }] }, 1)
        .to({ state: [{ t: this.instance_65 }] }, 1)
        .to({ state: [{ t: this.instance_66 }] }, 1)
        .to({ state: [{ t: this.instance_67 }] }, 1)
        .to({ state: [{ t: this.instance_68 }] }, 1)
        .to({ state: [{ t: this.instance_69 }] }, 1)
        .to({ state: [{ t: this.instance_70 }] }, 1)
        .to({ state: [{ t: this.instance_71 }] }, 1)
        .to({ state: [{ t: this.instance_72 }] }, 1)
        .to({ state: [{ t: this.instance_73 }] }, 1)
        .to({ state: [{ t: this.instance_74 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo53 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.jp2();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFJ1_0000();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFJ1_0001();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFJ1_0002();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFJ1_0003();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFJ1_0004();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFJ1_0005();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFJ1_0006();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFJ1_0007();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFJ1_0008();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFJ1_0009();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFJ1_0010();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFJ1_0011();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFJ1_0012();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFJ1_0013();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFJ1_0014();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFJ1_0015();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFJ1_0016();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFJ1_0017();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFJ1_0018();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFJ1_0019();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFJ1_0020();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFJ1_0021();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFJ1_0022();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFJ1_0023();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo52 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.JP1();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.MFJ1_0000();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.MFJ1_0001();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.MFJ1_0002();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.MFJ1_0003();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.MFJ1_0004();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.MFJ1_0005();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.MFJ1_0006();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.MFJ1_0007();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.MFJ1_0008();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.MFJ1_0009();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.MFJ1_0010();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.MFJ1_0011();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.MFJ1_0012();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.MFJ1_0013();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.MFJ1_0014();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.MFJ1_0015();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.MFJ1_0016();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.MFJ1_0017();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.MFJ1_0018();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.MFJ1_0019();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.MFJ1_0020();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.MFJ1_0021();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.MFJ1_0022();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.MFJ1_0023();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo51 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.ip8();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFI1png5();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo51, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo50 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.ip7();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFI1png4();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo50, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo49 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.ip6();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFI1png3();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo49, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo48 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.ip4();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFI1png2();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo48, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo47 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.ip2();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFI1();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo47, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo46 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.IP1();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFI1();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo46, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo45 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.HP5();
    this.instance.setTransform(-959, -538);

    this.instance_1 = new lib.MFH1_0003();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo45, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo44 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.HP4();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFH1_0002();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo44, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo43 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.hp2();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFH1_0001();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo43, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo42 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.hp1();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFH1_0000();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo42, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo41 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.EP5();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

    // Capa_1
    this.instance_1 = new lib.copiaMFE1_0000png3();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFE1_0001png3();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFE1_0002png3();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFE1_0003png3();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFE1_0004png3();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFE1_0005png3();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFE1_0006png3();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFE1_0007png3();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFE1_0008png3();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFE1_0009png3();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFE1_0010png3();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFE1_0011png3();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFE1_0012png3();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFE1_0013png3();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFE1_0014png3();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFE1_0015png3();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFE1_0016png3();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFE1_0017png3();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFE1_0018png3();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFE1_0019png3();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFE1_0020png3();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFE1_0021png3();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFE1_0022png3();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFE1_0023png3();
    this.instance_24.setTransform(-960, -540);

    this.instance_25 = new lib.copiaMFE1_0024png3();
    this.instance_25.setTransform(-960, -540);

    this.instance_26 = new lib.copiaMFE1_0025png3();
    this.instance_26.setTransform(-960, -540);

    this.instance_27 = new lib.copiaMFE1_0026png3();
    this.instance_27.setTransform(-960, -540);

    this.instance_28 = new lib.copiaMFE1_0027png3();
    this.instance_28.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .to({ state: [{ t: this.instance_25 }] }, 1)
        .to({ state: [{ t: this.instance_26 }] }, 1)
        .to({ state: [{ t: this.instance_27 }] }, 1)
        .to({ state: [{ t: this.instance_28 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo40 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.EP4();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

    // Capa_1
    this.instance_1 = new lib.copiaMFE1_0000png2();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFE1_0001png2();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFE1_0002png2();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFE1_0003png2();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFE1_0004png2();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFE1_0005png2();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFE1_0006png2();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFE1_0007png2();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFE1_0008png2();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFE1_0009png2();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFE1_0010png2();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFE1_0011png2();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFE1_0012png2();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFE1_0013png2();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFE1_0014png2();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFE1_0015png2();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFE1_0016png2();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFE1_0017png2();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFE1_0018png2();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFE1_0019png2();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFE1_0020png2();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFE1_0021png2();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFE1_0022png2();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFE1_0023png2();
    this.instance_24.setTransform(-960, -540);

    this.instance_25 = new lib.copiaMFE1_0024png2();
    this.instance_25.setTransform(-960, -540);

    this.instance_26 = new lib.copiaMFE1_0025png2();
    this.instance_26.setTransform(-960, -540);

    this.instance_27 = new lib.copiaMFE1_0026png2();
    this.instance_27.setTransform(-960, -540);

    this.instance_28 = new lib.copiaMFE1_0027png2();
    this.instance_28.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .to({ state: [{ t: this.instance_25 }] }, 1)
        .to({ state: [{ t: this.instance_26 }] }, 1)
        .to({ state: [{ t: this.instance_27 }] }, 1)
        .to({ state: [{ t: this.instance_28 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo39 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.EP2();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

    // Capa_1
    this.instance_1 = new lib.copiaMFE1_0000();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFE1_0001();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFE1_0002();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFE1_0003();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFE1_0004();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFE1_0005();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFE1_0006();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFE1_0007();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFE1_0008();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFE1_0009();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFE1_0010();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFE1_0011();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFE1_0012();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFE1_0013();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFE1_0014();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFE1_0015();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFE1_0016();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFE1_0017();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFE1_0018();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFE1_0019();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFE1_0020();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFE1_0021();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFE1_0022();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFE1_0023();
    this.instance_24.setTransform(-960, -540);

    this.instance_25 = new lib.copiaMFE1_0024();
    this.instance_25.setTransform(-960, -540);

    this.instance_26 = new lib.copiaMFE1_0025();
    this.instance_26.setTransform(-960, -540);

    this.instance_27 = new lib.copiaMFE1_0026();
    this.instance_27.setTransform(-960, -540);

    this.instance_28 = new lib.copiaMFE1_0027();
    this.instance_28.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .to({ state: [{ t: this.instance_25 }] }, 1)
        .to({ state: [{ t: this.instance_26 }] }, 1)
        .to({ state: [{ t: this.instance_27 }] }, 1)
        .to({ state: [{ t: this.instance_28 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo38 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.EP1();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

    // Capa_1
    this.instance_1 = new lib.MFE1_0000();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.MFE1_0001();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.MFE1_0002();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.MFE1_0003();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.MFE1_0004();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.MFE1_0005();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.MFE1_0006();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.MFE1_0007();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.MFE1_0008();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.MFE1_0009();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.MFE1_0010();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.MFE1_0011();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.MFE1_0012();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.MFE1_0013();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.MFE1_0014();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.MFE1_0015();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.MFE1_0016();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.MFE1_0017();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.MFE1_0018();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.MFE1_0019();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.MFE1_0020();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.MFE1_0021();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.MFE1_0022();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.MFE1_0023();
    this.instance_24.setTransform(-960, -540);

    this.instance_25 = new lib.MFE1_0024();
    this.instance_25.setTransform(-960, -540);

    this.instance_26 = new lib.MFE1_0025();
    this.instance_26.setTransform(-960, -540);

    this.instance_27 = new lib.MFE1_0026();
    this.instance_27.setTransform(-960, -540);

    this.instance_28 = new lib.MFE1_0027();
    this.instance_28.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .to({ state: [{ t: this.instance_25 }] }, 1)
        .to({ state: [{ t: this.instance_26 }] }, 1)
        .to({ state: [{ t: this.instance_27 }] }, 1)
        .to({ state: [{ t: this.instance_28 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo37 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.DP8();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFD1_0003();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo37, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo36 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.DP7();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFD1_0002();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo36, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo35 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.DP5();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFD1_0001();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo35, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo34 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.dp1();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFD1_0000();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo34, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo33 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.CP7();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.C_0000();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo33, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo32 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.cp10();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.C_0001();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo32, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo31 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.cp11();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.C_0002();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo31, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo30 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.cp13();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.C_0003();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo30, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo29 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.CP6();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFB2_0009();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo29, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo28 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.CP5();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFB2_0001();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo28, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo27 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.CP4();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFB2_0000();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo27, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo26 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.CP3();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFB2_0003();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo26, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo25 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.BP7();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFB1png4();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo25, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo24 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.BP6();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFB1png3();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo24, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo23 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.BP4();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFB1png2();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo23, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo22 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.BP2();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.copiaMFB1();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo22, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo21 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.BP1();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Capa_1
    this.instance_1 = new lib.MFB1();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo21, new cjs.Rectangle(-960, -540, 1921, 1082), null);

  (lib.Símbolo20 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP13();
    this.instance.setTransform(-959, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFA3GEN_0000png3();
    this.instance_1.setTransform(-960, -1080);

    this.instance_2 = new lib.copiaMFA3GEN_0001png3();
    this.instance_2.setTransform(-960, -1080);

    this.instance_3 = new lib.copiaMFA3GEN_0002png3();
    this.instance_3.setTransform(-960, -1080);

    this.instance_4 = new lib.copiaMFA3GEN_0003png3();
    this.instance_4.setTransform(-960, -1080);

    this.instance_5 = new lib.copiaMFA3GEN_0004png3();
    this.instance_5.setTransform(-960, -1080);

    this.instance_6 = new lib.copiaMFA3GEN_0005png3();
    this.instance_6.setTransform(-960, -1080);

    this.instance_7 = new lib.copiaMFA3GEN_0006png3();
    this.instance_7.setTransform(-960, -1080);

    this.instance_8 = new lib.copiaMFA3GEN_0007png3();
    this.instance_8.setTransform(-960, -1080);

    this.instance_9 = new lib.copiaMFA3GEN_0008png3();
    this.instance_9.setTransform(-960, -1080);

    this.instance_10 = new lib.copiaMFA3GEN_0009png3();
    this.instance_10.setTransform(-960, -1080);

    this.instance_11 = new lib.copiaMFA3GEN_0010png3();
    this.instance_11.setTransform(-960, -1080);

    this.instance_12 = new lib.copiaMFA3GEN_0011png3();
    this.instance_12.setTransform(-960, -1080);

    this.instance_13 = new lib.copiaMFA3GEN_0012png3();
    this.instance_13.setTransform(-960, -1080);

    this.instance_14 = new lib.copiaMFA3GEN_0013png3();
    this.instance_14.setTransform(-960, -1080);

    this.instance_15 = new lib.copiaMFA3GEN_0014png3();
    this.instance_15.setTransform(-960, -1080);

    this.instance_16 = new lib.copiaMFA3GEN_0015png3();
    this.instance_16.setTransform(-960, -1080);

    this.instance_17 = new lib.copiaMFA3GEN_0016png3();
    this.instance_17.setTransform(-960, -1080);

    this.instance_18 = new lib.copiaMFA3GEN_0017png3();
    this.instance_18.setTransform(-960, -1080);

    this.instance_19 = new lib.copiaMFA3GEN_0018png3();
    this.instance_19.setTransform(-960, -1080);

    this.instance_20 = new lib.copiaMFA3GEN_0019png3();
    this.instance_20.setTransform(-960, -1080);

    this.instance_21 = new lib.copiaMFA3GEN_0020png3();
    this.instance_21.setTransform(-960, -1080);

    this.instance_22 = new lib.copiaMFA3GEN_0021png3();
    this.instance_22.setTransform(-960, -1080);

    this.instance_23 = new lib.copiaMFA3GEN_0022png3();
    this.instance_23.setTransform(-960, -1080);

    this.instance_24 = new lib.copiaMFA3GEN_0023png3();
    this.instance_24.setTransform(-960, -1080);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -1080, 1921, 2160);

  (lib.Símbolo19 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP12();
    this.instance.setTransform(-959, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFA3GEN_0000png2();
    this.instance_1.setTransform(-960, -1080);

    this.instance_2 = new lib.copiaMFA3GEN_0001png2();
    this.instance_2.setTransform(-960, -1080);

    this.instance_3 = new lib.copiaMFA3GEN_0002png2();
    this.instance_3.setTransform(-960, -1080);

    this.instance_4 = new lib.copiaMFA3GEN_0003png2();
    this.instance_4.setTransform(-960, -1080);

    this.instance_5 = new lib.copiaMFA3GEN_0004png2();
    this.instance_5.setTransform(-960, -1080);

    this.instance_6 = new lib.copiaMFA3GEN_0005png2();
    this.instance_6.setTransform(-960, -1080);

    this.instance_7 = new lib.copiaMFA3GEN_0006png2();
    this.instance_7.setTransform(-960, -1080);

    this.instance_8 = new lib.copiaMFA3GEN_0007png2();
    this.instance_8.setTransform(-960, -1080);

    this.instance_9 = new lib.copiaMFA3GEN_0008png2();
    this.instance_9.setTransform(-960, -1080);

    this.instance_10 = new lib.copiaMFA3GEN_0009png2();
    this.instance_10.setTransform(-960, -1080);

    this.instance_11 = new lib.copiaMFA3GEN_0010png2();
    this.instance_11.setTransform(-960, -1080);

    this.instance_12 = new lib.copiaMFA3GEN_0011png2();
    this.instance_12.setTransform(-960, -1080);

    this.instance_13 = new lib.copiaMFA3GEN_0012png2();
    this.instance_13.setTransform(-960, -1080);

    this.instance_14 = new lib.copiaMFA3GEN_0013png2();
    this.instance_14.setTransform(-960, -1080);

    this.instance_15 = new lib.copiaMFA3GEN_0014png2();
    this.instance_15.setTransform(-960, -1080);

    this.instance_16 = new lib.copiaMFA3GEN_0015png2();
    this.instance_16.setTransform(-960, -1080);

    this.instance_17 = new lib.copiaMFA3GEN_0016png2();
    this.instance_17.setTransform(-960, -1080);

    this.instance_18 = new lib.copiaMFA3GEN_0017png2();
    this.instance_18.setTransform(-960, -1080);

    this.instance_19 = new lib.copiaMFA3GEN_0018png2();
    this.instance_19.setTransform(-960, -1080);

    this.instance_20 = new lib.copiaMFA3GEN_0019png2();
    this.instance_20.setTransform(-960, -1080);

    this.instance_21 = new lib.copiaMFA3GEN_0020png2();
    this.instance_21.setTransform(-960, -1080);

    this.instance_22 = new lib.copiaMFA3GEN_0021png2();
    this.instance_22.setTransform(-960, -1080);

    this.instance_23 = new lib.copiaMFA3GEN_0022png2();
    this.instance_23.setTransform(-960, -1080);

    this.instance_24 = new lib.copiaMFA3GEN_0023png2();
    this.instance_24.setTransform(-960, -1080);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -1080, 1921, 2160);

  (lib.Símbolo18 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = lib.AP11();
    this.instance.setTransform(-959, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFA3GEN_0000();
    this.instance_1.setTransform(-960, -1080);

    this.instance_2 = new lib.copiaMFA3GEN_0001();
    this.instance_2.setTransform(-960, -1080);

    this.instance_3 = new lib.copiaMFA3GEN_0002();
    this.instance_3.setTransform(-960, -1080);

    this.instance_4 = new lib.copiaMFA3GEN_0003();
    this.instance_4.setTransform(-960, -1080);

    this.instance_5 = new lib.copiaMFA3GEN_0004();
    this.instance_5.setTransform(-960, -1080);

    this.instance_6 = new lib.copiaMFA3GEN_0005();
    this.instance_6.setTransform(-960, -1080);

    this.instance_7 = new lib.copiaMFA3GEN_0006();
    this.instance_7.setTransform(-960, -1080);

    this.instance_8 = new lib.copiaMFA3GEN_0007();
    this.instance_8.setTransform(-960, -1080);

    this.instance_9 = new lib.copiaMFA3GEN_0008();
    this.instance_9.setTransform(-960, -1080);

    this.instance_10 = new lib.copiaMFA3GEN_0009();
    this.instance_10.setTransform(-960, -1080);

    this.instance_11 = new lib.copiaMFA3GEN_0010();
    this.instance_11.setTransform(-960, -1080);

    this.instance_12 = new lib.copiaMFA3GEN_0011();
    this.instance_12.setTransform(-960, -1080);

    this.instance_13 = new lib.copiaMFA3GEN_0012();
    this.instance_13.setTransform(-960, -1080);

    this.instance_14 = new lib.copiaMFA3GEN_0013();
    this.instance_14.setTransform(-960, -1080);

    this.instance_15 = new lib.copiaMFA3GEN_0014();
    this.instance_15.setTransform(-960, -1080);

    this.instance_16 = new lib.copiaMFA3GEN_0015();
    this.instance_16.setTransform(-960, -1080);

    this.instance_17 = new lib.copiaMFA3GEN_0016();
    this.instance_17.setTransform(-960, -1080);

    this.instance_18 = new lib.copiaMFA3GEN_0017();
    this.instance_18.setTransform(-960, -1080);

    this.instance_19 = new lib.copiaMFA3GEN_0018();
    this.instance_19.setTransform(-960, -1080);

    this.instance_20 = new lib.copiaMFA3GEN_0019();
    this.instance_20.setTransform(-960, -1080);

    this.instance_21 = new lib.copiaMFA3GEN_0020();
    this.instance_21.setTransform(-960, -1080);

    this.instance_22 = new lib.copiaMFA3GEN_0021();
    this.instance_22.setTransform(-960, -1080);

    this.instance_23 = new lib.copiaMFA3GEN_0022();
    this.instance_23.setTransform(-960, -1080);

    this.instance_24 = new lib.copiaMFA3GEN_0023();
    this.instance_24.setTransform(-960, -1080);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -1080, 1921, 2160);

  (lib.Símbolo17 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP9();
    this.instance.setTransform(-959, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.MFA3GEN_0000();
    this.instance_1.setTransform(-960, -1080);

    this.instance_2 = new lib.MFA3GEN_0001();
    this.instance_2.setTransform(-960, -1080);

    this.instance_3 = new lib.MFA3GEN_0002();
    this.instance_3.setTransform(-960, -1080);

    this.instance_4 = new lib.MFA3GEN_0003();
    this.instance_4.setTransform(-960, -1080);

    this.instance_5 = new lib.MFA3GEN_0004();
    this.instance_5.setTransform(-960, -1080);

    this.instance_6 = new lib.MFA3GEN_0005();
    this.instance_6.setTransform(-960, -1080);

    this.instance_7 = new lib.MFA3GEN_0006();
    this.instance_7.setTransform(-960, -1080);

    this.instance_8 = new lib.MFA3GEN_0007();
    this.instance_8.setTransform(-960, -1080);

    this.instance_9 = new lib.MFA3GEN_0008();
    this.instance_9.setTransform(-960, -1080);

    this.instance_10 = new lib.MFA3GEN_0009();
    this.instance_10.setTransform(-960, -1080);

    this.instance_11 = new lib.MFA3GEN_0010();
    this.instance_11.setTransform(-960, -1080);

    this.instance_12 = new lib.MFA3GEN_0011();
    this.instance_12.setTransform(-960, -1080);

    this.instance_13 = new lib.MFA3GEN_0012();
    this.instance_13.setTransform(-960, -1080);

    this.instance_14 = new lib.MFA3GEN_0013();
    this.instance_14.setTransform(-960, -1080);

    this.instance_15 = new lib.MFA3GEN_0014();
    this.instance_15.setTransform(-960, -1080);

    this.instance_16 = new lib.MFA3GEN_0015();
    this.instance_16.setTransform(-960, -1080);

    this.instance_17 = new lib.MFA3GEN_0016();
    this.instance_17.setTransform(-960, -1080);

    this.instance_18 = new lib.MFA3GEN_0017();
    this.instance_18.setTransform(-960, -1080);

    this.instance_19 = new lib.MFA3GEN_0018();
    this.instance_19.setTransform(-960, -1080);

    this.instance_20 = new lib.MFA3GEN_0019();
    this.instance_20.setTransform(-960, -1080);

    this.instance_21 = new lib.MFA3GEN_0020();
    this.instance_21.setTransform(-960, -1080);

    this.instance_22 = new lib.MFA3GEN_0021();
    this.instance_22.setTransform(-960, -1080);

    this.instance_23 = new lib.MFA3GEN_0022();
    this.instance_23.setTransform(-960, -1080);

    this.instance_24 = new lib.MFA3GEN_0023();
    this.instance_24.setTransform(-960, -1080);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -1080, 1921, 2160);

  (lib.Símbolo16 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP8();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFA2GEN_0000png3();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFA2GEN_0001png3();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFA2GEN_0002png3();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFA2GEN_0003png3();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFA2GEN_0004png3();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFA2GEN_0005png3();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFA2GEN_0006png3();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFA2GEN_0007png3();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFA2GEN_0008png3();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFA2GEN_0009png3();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFA2GEN_0010png3();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFA2GEN_0011png3();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFA2GEN_0012png3();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFA2GEN_0013png3();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFA2GEN_0014png3();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFA2GEN_0015png3();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFA2GEN_0016png3();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFA2GEN_0017png3();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFA2GEN_0018png3();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFA2GEN_0019png3();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFA2GEN_0020png3();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFA2GEN_0021png3();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFA2GEN_0022png3();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFA2GEN_0023png3();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo15 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP7();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFA2GEN_0000png2();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFA2GEN_0001png2();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFA2GEN_0002png2();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFA2GEN_0003png2();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFA2GEN_0004png2();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFA2GEN_0005png2();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFA2GEN_0006png2();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFA2GEN_0007png2();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFA2GEN_0008png2();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFA2GEN_0009png2();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFA2GEN_0010png2();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFA2GEN_0011png2();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFA2GEN_0012png2();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFA2GEN_0013png2();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFA2GEN_0014png2();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFA2GEN_0015png2();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFA2GEN_0016png2();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFA2GEN_0017png2();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFA2GEN_0018png2();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFA2GEN_0019png2();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFA2GEN_0020png2();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFA2GEN_0021png2();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFA2GEN_0022png2();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFA2GEN_0023png2();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP6();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFA2GEN_0000();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFA2GEN_0001();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFA2GEN_0002();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFA2GEN_0003();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFA2GEN_0004();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFA2GEN_0005();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFA2GEN_0006();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFA2GEN_0007();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFA2GEN_0008();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFA2GEN_0009();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFA2GEN_0010();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFA2GEN_0011();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFA2GEN_0012();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFA2GEN_0013();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFA2GEN_0014();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFA2GEN_0015();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFA2GEN_0016();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFA2GEN_0017();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFA2GEN_0018();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFA2GEN_0019();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFA2GEN_0020();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFA2GEN_0021();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFA2GEN_0022();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFA2GEN_0023();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP5();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.MFA2GEN_0000();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.MFA2GEN_0001();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.MFA2GEN_0002();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.MFA2GEN_0003();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.MFA2GEN_0004();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.MFA2GEN_0005();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.MFA2GEN_0006();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.MFA2GEN_0007();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.MFA2GEN_0008();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.MFA2GEN_0009();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.MFA2GEN_0010();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.MFA2GEN_0011();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.MFA2GEN_0012();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.MFA2GEN_0013();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.MFA2GEN_0014();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.MFA2GEN_0015();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.MFA2GEN_0016();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.MFA2GEN_0017();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.MFA2GEN_0018();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.MFA2GEN_0019();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.MFA2GEN_0020();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.MFA2GEN_0021();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.MFA2GEN_0022();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.MFA2GEN_0023();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP4();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFAGEN_0000png3();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFAGEN_0001png3();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFAGEN_0023png3();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFAGEN_0022png3();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFAGEN_0021png3();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFAGEN_0020png3();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFAGEN_0019png3();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFAGEN_0018png3();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFAGEN_0017png3();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFAGEN_0016png3();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFAGEN_0015png3();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFAGEN_0014png3();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFAGEN_0013png3();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFAGEN_0012png3();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFAGEN_0011png3();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFAGEN_0010png3();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFAGEN_0009png3();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFAGEN_0008png3();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFAGEN_0007png3();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFAGEN_0006png3();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFAGEN_0005png3();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFAGEN_0004png3();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFAGEN_0003png3();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFAGEN_0002png3();
    this.instance_24.setTransform(-960, -540);

    this.instance_25 = new lib.copiaMFAGEN_0023png4();
    this.instance_25.setTransform(-960, -540);

    this.instance_26 = new lib.copiaMFAGEN_0022png4();
    this.instance_26.setTransform(-960, -540);

    this.instance_27 = new lib.copiaMFAGEN_0021png4();
    this.instance_27.setTransform(-960, -540);

    this.instance_28 = new lib.copiaMFAGEN_0020png4();
    this.instance_28.setTransform(-960, -540);

    this.instance_29 = new lib.copiaMFAGEN_0019png4();
    this.instance_29.setTransform(-960, -540);

    this.instance_30 = new lib.copiaMFAGEN_0018png4();
    this.instance_30.setTransform(-960, -540);

    this.instance_31 = new lib.copiaMFAGEN_0017png4();
    this.instance_31.setTransform(-960, -540);

    this.instance_32 = new lib.copiaMFAGEN_0016png4();
    this.instance_32.setTransform(-960, -540);

    this.instance_33 = new lib.copiaMFAGEN_0015png4();
    this.instance_33.setTransform(-960, -540);

    this.instance_34 = new lib.copiaMFAGEN_0014png4();
    this.instance_34.setTransform(-960, -540);

    this.instance_35 = new lib.copiaMFAGEN_0013png4();
    this.instance_35.setTransform(-960, -540);

    this.instance_36 = new lib.copiaMFAGEN_0012png4();
    this.instance_36.setTransform(-960, -540);

    this.instance_37 = new lib.copiaMFAGEN_0011png4();
    this.instance_37.setTransform(-960, -540);

    this.instance_38 = new lib.copiaMFAGEN_0010png4();
    this.instance_38.setTransform(-960, -540);

    this.instance_39 = new lib.copiaMFAGEN_0009png4();
    this.instance_39.setTransform(-960, -540);

    this.instance_40 = new lib.copiaMFAGEN_0008png4();
    this.instance_40.setTransform(-960, -540);

    this.instance_41 = new lib.copiaMFAGEN_0007png4();
    this.instance_41.setTransform(-960, -540);

    this.instance_42 = new lib.copiaMFAGEN_0006png4();
    this.instance_42.setTransform(-960, -540);

    this.instance_43 = new lib.copiaMFAGEN_0005png4();
    this.instance_43.setTransform(-960, -540);

    this.instance_44 = new lib.copiaMFAGEN_0004png4();
    this.instance_44.setTransform(-960, -540);

    this.instance_45 = new lib.copiaMFAGEN_0003png4();
    this.instance_45.setTransform(-960, -540);

    this.instance_46 = new lib.copiaMFAGEN_0004png5();
    this.instance_46.setTransform(-960, -540);

    this.instance_47 = new lib.copiaMFAGEN_0005png5();
    this.instance_47.setTransform(-960, -540);

    this.instance_48 = new lib.copiaMFAGEN_0006png5();
    this.instance_48.setTransform(-960, -540);

    this.instance_49 = new lib.copiaMFAGEN_0007png5();
    this.instance_49.setTransform(-960, -540);

    this.instance_50 = new lib.copiaMFAGEN_0008png5();
    this.instance_50.setTransform(-960, -540);

    this.instance_51 = new lib.copiaMFAGEN_0009png5();
    this.instance_51.setTransform(-960, -540);

    this.instance_52 = new lib.copiaMFAGEN_0010png5();
    this.instance_52.setTransform(-960, -540);

    this.instance_53 = new lib.copiaMFAGEN_0011png5();
    this.instance_53.setTransform(-960, -540);

    this.instance_54 = new lib.copiaMFAGEN_0012png5();
    this.instance_54.setTransform(-960, -540);

    this.instance_55 = new lib.copiaMFAGEN_0013png5();
    this.instance_55.setTransform(-960, -540);

    this.instance_56 = new lib.copiaMFAGEN_0014png5();
    this.instance_56.setTransform(-960, -540);

    this.instance_57 = new lib.copiaMFAGEN_0015png5();
    this.instance_57.setTransform(-960, -540);

    this.instance_58 = new lib.copiaMFAGEN_0016png5();
    this.instance_58.setTransform(-960, -540);

    this.instance_59 = new lib.copiaMFAGEN_0017png5();
    this.instance_59.setTransform(-960, -540);

    this.instance_60 = new lib.copiaMFAGEN_0018png5();
    this.instance_60.setTransform(-960, -540);

    this.instance_61 = new lib.copiaMFAGEN_0019png5();
    this.instance_61.setTransform(-960, -540);

    this.instance_62 = new lib.copiaMFAGEN_0020png5();
    this.instance_62.setTransform(-960, -540);

    this.instance_63 = new lib.copiaMFAGEN_0021png5();
    this.instance_63.setTransform(-960, -540);

    this.instance_64 = new lib.copiaMFAGEN_0022png5();
    this.instance_64.setTransform(-960, -540);

    this.instance_65 = new lib.copiaMFAGEN_0023png5();
    this.instance_65.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to(
          {
            state: [
              { t: this.instance_24 },
              { t: this.instance_23 },
              { t: this.instance_22 },
              { t: this.instance_21 },
              { t: this.instance_20 },
              { t: this.instance_19 },
              { t: this.instance_18 },
              { t: this.instance_17 },
              { t: this.instance_16 },
              { t: this.instance_15 },
              { t: this.instance_14 },
              { t: this.instance_13 },
              { t: this.instance_12 },
              { t: this.instance_11 },
              { t: this.instance_10 },
              { t: this.instance_9 },
              { t: this.instance_8 },
              { t: this.instance_7 },
              { t: this.instance_6 },
              { t: this.instance_5 },
              { t: this.instance_4 },
              { t: this.instance_3 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_45 },
              { t: this.instance_44 },
              { t: this.instance_43 },
              { t: this.instance_42 },
              { t: this.instance_41 },
              { t: this.instance_40 },
              { t: this.instance_39 },
              { t: this.instance_38 },
              { t: this.instance_37 },
              { t: this.instance_36 },
              { t: this.instance_35 },
              { t: this.instance_34 },
              { t: this.instance_33 },
              { t: this.instance_32 },
              { t: this.instance_31 },
              { t: this.instance_30 },
              { t: this.instance_29 },
              { t: this.instance_28 },
              { t: this.instance_27 },
              { t: this.instance_26 },
              { t: this.instance_25 },
            ],
          },
          1
        )
        .to({ state: [{ t: this.instance_46 }] }, 1)
        .to({ state: [{ t: this.instance_47 }] }, 1)
        .to({ state: [{ t: this.instance_48 }] }, 1)
        .to({ state: [{ t: this.instance_49 }] }, 1)
        .to({ state: [{ t: this.instance_50 }] }, 1)
        .to({ state: [{ t: this.instance_51 }] }, 1)
        .to({ state: [{ t: this.instance_52 }] }, 1)
        .to({ state: [{ t: this.instance_53 }] }, 1)
        .to({ state: [{ t: this.instance_54 }] }, 1)
        .to({ state: [{ t: this.instance_55 }] }, 1)
        .to({ state: [{ t: this.instance_56 }] }, 1)
        .to({ state: [{ t: this.instance_57 }] }, 1)
        .to({ state: [{ t: this.instance_58 }] }, 1)
        .to({ state: [{ t: this.instance_59 }] }, 1)
        .to({ state: [{ t: this.instance_60 }] }, 1)
        .to({ state: [{ t: this.instance_61 }] }, 1)
        .to({ state: [{ t: this.instance_62 }] }, 1)
        .to({ state: [{ t: this.instance_63 }] }, 1)
        .to({ state: [{ t: this.instance_64 }] }, 1)
        .to({ state: [{ t: this.instance_65 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP3();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFAGEN_0000png2();
    this.instance_1.setTransform(-960, -540);

    this.instance_2 = new lib.copiaMFAGEN_0001png2();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFAGEN_0002png2();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFAGEN_0003png2();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFAGEN_0004png2();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFAGEN_0005png2();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFAGEN_0006png2();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFAGEN_0007png2();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFAGEN_0008png2();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFAGEN_0009png2();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFAGEN_0010png2();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFAGEN_0011png2();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFAGEN_0012png2();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFAGEN_0013png2();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFAGEN_0014png2();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFAGEN_0015png2();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFAGEN_0016png2();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFAGEN_0017png2();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFAGEN_0018png2();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFAGEN_0019png2();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFAGEN_0020png2();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFAGEN_0021png2();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFAGEN_0022png2();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFAGEN_0023png2();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.Símbolo10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0010();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0009();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0008();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0007();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0006();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0005();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0004();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0003();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0002();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.Símbolo1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.copiaMFAGEN_0001();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.EXP_FLECHA_ANIM = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.EXP_FLECHA();
    this.instance.setTransform(-86, -86, 1.0792, 1.0792);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.EXP_FLECHA_ANIM, new cjs.Rectangle(-86, -86, 171.6, 172.7), null);

  (lib.ESC_INTRO_36 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0035();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_36, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_35 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0034();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_35, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_33 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0032();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_33, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_32 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0031();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_32, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_31 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0030();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_31, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_30 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0029();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_30, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_29 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0028();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_29, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_28 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0027();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_28, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_27 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0026();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_27, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_26 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0025();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_26, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_25 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0024();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_25, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_24 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0023();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_24, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_23 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0022();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_23, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_22 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0021();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_22, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_21 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0020();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_21, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_20 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0019();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_20, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_19 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0018();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_19, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_18 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0017();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_18, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_17 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0016();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_17, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_16 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0015();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_16, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_15 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0014();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_15, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0013();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_14, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0012();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_13, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0011();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_12, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0010();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_11, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0009();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_10, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0008();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_9, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0007();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_8, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0006();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_7, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0005();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_6, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0004();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_5, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0003();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_4, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0002();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_3, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0001();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_2, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_INTRO_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0000();
    this.instance.setTransform(-960, -540);

    this.instance_1 = new lib.MFINTROGEN_0000();
    this.instance_1.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_INTRO_1, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.ESC_EXP_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFEXPGEN_0000();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ESC_EXP_1, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.BT_COMENZARANIM = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.boton();
    this.instance.setTransform(-269, -81, 1.0287, 1.0287);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(144));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-269, -81, 539.1, 162.6);

  (lib.A1_23 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0022();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_23, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_22 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0021();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_22, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_21 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0020();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_21, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_20 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0019();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_20, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_19 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0018();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_19, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_18 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0017();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_18, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_17 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0016();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_17, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_16 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0015();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_16, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_15 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0014();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_15, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0013();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_14, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0012();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_13, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0011();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_12, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0010();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_11, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0009();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_10, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0008();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_9, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0007();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_8, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0006();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_7, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0005();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_6, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0004();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_5, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0003();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_4, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0002();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_3, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.A1_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFAGEN_0001();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.A1_2, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib._34 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.MFINTROGEN_0033();
    this.instance.setTransform(-960, -540);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib._34, new cjs.Rectangle(-960, -540, 1920, 1080), null);

  (lib.pp1d = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p1c();
    this.instance.setTransform(-79.5, -80);

    this.instance_1 = new lib.Símbolo60();
    this.instance_1.setTransform(0, 0, 1.0981, 1.0981);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-87.3, -87.8, 174.6, 175.7);

  (lib.p1c_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p1d();
    this.instance.setTransform(-79.5, -80);

    this.instance_1 = new lib.Símbolo59();
    this.instance_1.setTransform(0.35, -0.05);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-90, -91, 180.8, 181.9);

  (lib.p1b_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p1b();
    this.instance.setTransform(-79.5, -80);

    this.instance_1 = new lib.Símbolo58();
    this.instance_1.setTransform(0, 0, 1.1175, 1.1175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-88.8, -89.4, 177.7, 178.8);

  (lib.p1a_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.p1a();
    this.instance.setTransform(-79.5, -80);

    this.instance_1 = new lib.Símbolo57();
    this.instance_1.setTransform(0, 0, 1.1375, 1.1375);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-90.4, -91, 180.9, 182);

  (lib.EXP_FLECHA_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.EXP_FLECHA();
    this.instance.setTransform(-79.5, -80);

    this.instance_1 = new lib.EXP_FLECHA_ANIM();

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-86, -86, 171.6, 172.7);

  (lib.ESC_INTRO = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // ESC_INTRO
    this.instance = new lib.ESC_INTRO_1();

    this.instance_1 = new lib.ESC_INTRO_2();

    this.instance_2 = new lib.ESC_INTRO_3();

    this.instance_3 = new lib.ESC_INTRO_4();

    this.instance_4 = new lib.ESC_INTRO_5();

    this.instance_5 = new lib.ESC_INTRO_6();

    this.instance_6 = new lib.ESC_INTRO_7();

    this.instance_7 = new lib.ESC_INTRO_8();

    this.instance_8 = new lib.ESC_INTRO_9();

    this.instance_9 = new lib.ESC_INTRO_10();

    this.instance_10 = new lib.ESC_INTRO_11();

    this.instance_11 = new lib.ESC_INTRO_12();

    this.instance_12 = new lib.ESC_INTRO_13();

    this.instance_13 = new lib.ESC_INTRO_14();

    this.instance_14 = new lib.ESC_INTRO_15();

    this.instance_15 = new lib.ESC_INTRO_16();

    this.instance_16 = new lib.ESC_INTRO_17();

    this.instance_17 = new lib.ESC_INTRO_18();

    this.instance_18 = new lib.ESC_INTRO_19();

    this.instance_19 = new lib.ESC_INTRO_20();

    this.instance_20 = new lib.ESC_INTRO_21();

    this.instance_21 = new lib.ESC_INTRO_22();

    this.instance_22 = new lib.ESC_INTRO_23();

    this.instance_23 = new lib.ESC_INTRO_24();

    this.instance_24 = new lib.ESC_INTRO_25();

    this.instance_25 = new lib.ESC_INTRO_26();

    this.instance_26 = new lib.ESC_INTRO_27();

    this.instance_27 = new lib.ESC_INTRO_28();

    this.instance_28 = new lib.ESC_INTRO_29();

    this.instance_29 = new lib.ESC_INTRO_30();

    this.instance_30 = new lib.ESC_INTRO_31();

    this.instance_31 = new lib.ESC_INTRO_32();

    this.instance_32 = new lib.ESC_INTRO_33();

    this.instance_33 = new lib._34();

    this.instance_34 = new lib.ESC_INTRO_35();

    this.instance_35 = new lib.ESC_INTRO_36();

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .to({ state: [{ t: this.instance_25 }] }, 1)
        .to({ state: [{ t: this.instance_26 }] }, 1)
        .to({ state: [{ t: this.instance_27 }] }, 1)
        .to({ state: [{ t: this.instance_28 }] }, 1)
        .to({ state: [{ t: this.instance_29 }] }, 1)
        .to({ state: [{ t: this.instance_30 }] }, 1)
        .to({ state: [{ t: this.instance_31 }] }, 1)
        .to({ state: [{ t: this.instance_32 }] }, 1)
        .to({ state: [{ t: this.instance_33 }] }, 1)
        .to({ state: [{ t: this.instance_34 }] }, 1)
        .to({ state: [{ t: this.instance_35 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1920, 1080);

  (lib.ESC_EXP = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // texto_exp
    this.instance = new lib.EXP_TEXTO();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.ESC_EXP_1();

    this.instance_2 = new lib.copiaMFEXPGEN_0001();
    this.instance_2.setTransform(-960, -540);

    this.instance_3 = new lib.copiaMFEXPGEN_0002();
    this.instance_3.setTransform(-960, -540);

    this.instance_4 = new lib.copiaMFEXPGEN_0003();
    this.instance_4.setTransform(-960, -540);

    this.instance_5 = new lib.copiaMFEXPGEN_0004();
    this.instance_5.setTransform(-960, -540);

    this.instance_6 = new lib.copiaMFEXPGEN_0005();
    this.instance_6.setTransform(-960, -540);

    this.instance_7 = new lib.copiaMFEXPGEN_0006();
    this.instance_7.setTransform(-960, -540);

    this.instance_8 = new lib.copiaMFEXPGEN_0007();
    this.instance_8.setTransform(-960, -540);

    this.instance_9 = new lib.copiaMFEXPGEN_0008();
    this.instance_9.setTransform(-960, -540);

    this.instance_10 = new lib.copiaMFEXPGEN_0009();
    this.instance_10.setTransform(-960, -540);

    this.instance_11 = new lib.copiaMFEXPGEN_0010();
    this.instance_11.setTransform(-960, -540);

    this.instance_12 = new lib.copiaMFEXPGEN_0011();
    this.instance_12.setTransform(-960, -540);

    this.instance_13 = new lib.copiaMFEXPGEN_0012();
    this.instance_13.setTransform(-960, -540);

    this.instance_14 = new lib.copiaMFEXPGEN_0013();
    this.instance_14.setTransform(-960, -540);

    this.instance_15 = new lib.copiaMFEXPGEN_0014();
    this.instance_15.setTransform(-960, -540);

    this.instance_16 = new lib.copiaMFEXPGEN_0015();
    this.instance_16.setTransform(-960, -540);

    this.instance_17 = new lib.copiaMFEXPGEN_0016();
    this.instance_17.setTransform(-960, -540);

    this.instance_18 = new lib.copiaMFEXPGEN_0017();
    this.instance_18.setTransform(-960, -540);

    this.instance_19 = new lib.copiaMFEXPGEN_0018();
    this.instance_19.setTransform(-960, -540);

    this.instance_20 = new lib.copiaMFEXPGEN_0019();
    this.instance_20.setTransform(-960, -540);

    this.instance_21 = new lib.copiaMFEXPGEN_0020();
    this.instance_21.setTransform(-960, -540);

    this.instance_22 = new lib.copiaMFEXPGEN_0021();
    this.instance_22.setTransform(-960, -540);

    this.instance_23 = new lib.copiaMFEXPGEN_0022();
    this.instance_23.setTransform(-960, -540);

    this.instance_24 = new lib.copiaMFEXPGEN_0023();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.BT_COMENZAR = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_1
    this.instance = new lib.boton();
    this.instance.setTransform(-262, -79);

    this.instance_1 = new lib.BT_COMENZARANIM();

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-269, -81, 539.1, 162.6);

  (lib.A1_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // TEXTO
    this.instance = lib.AP1();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

    // FONDO
    this.instance_1 = new lib.MFAGEN_0000();
    this.instance_1.setTransform(-960, -540);
    this.instance_2 = new lib.A1_2();
    this.instance_3 = new lib.A1_3();
    this.instance_4 = new lib.A1_4();
    this.instance_5 = new lib.A1_5();
    this.instance_6 = new lib.A1_6();
    this.instance_7 = new lib.A1_7();
    this.instance_8 = new lib.A1_8();
    this.instance_9 = new lib.A1_9();
    this.instance_10 = new lib.A1_10();
    this.instance_11 = new lib.A1_11();
    this.instance_12 = new lib.A1_12();
    this.instance_13 = new lib.A1_13();
    this.instance_14 = new lib.A1_14();
    this.instance_15 = new lib.A1_15();
    this.instance_16 = new lib.A1_16();
    this.instance_17 = new lib.A1_17();
    this.instance_18 = new lib.A1_18();
    this.instance_19 = new lib.A1_19();
    this.instance_20 = new lib.A1_20();
    this.instance_21 = new lib.A1_21();
    this.instance_22 = new lib.A1_22();
    this.instance_23 = new lib.A1_23();

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  (lib.AP2_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Capa_2
    this.instance = new lib.AP2();
    this.instance.setTransform(-959, -538);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

    // Capa_1
    this.instance_1 = new lib.copiaMFAGEN_0000();
    this.instance_1.setTransform(-960, -540);
    this.instance_2 = new lib.Símbolo1();
    this.instance_3 = new lib.Símbolo2();
    this.instance_4 = new lib.Símbolo3();
    this.instance_5 = new lib.Símbolo4();
    this.instance_6 = new lib.Símbolo5();
    this.instance_7 = new lib.Símbolo6();
    this.instance_8 = new lib.Símbolo7();
    this.instance_9 = new lib.Símbolo8();
    this.instance_10 = new lib.Símbolo9();
    this.instance_11 = new lib.Símbolo10();
    this.instance_12 = new lib.copiaMFAGEN_0011();
    this.instance_12.setTransform(-960, -540);
    this.instance_13 = new lib.copiaMFAGEN_0012();
    this.instance_13.setTransform(-960, -540);
    this.instance_14 = new lib.copiaMFAGEN_0013();
    this.instance_14.setTransform(-960, -540);
    this.instance_15 = new lib.copiaMFAGEN_0014();
    this.instance_15.setTransform(-960, -540);
    this.instance_16 = new lib.copiaMFAGEN_0015();
    this.instance_16.setTransform(-960, -540);
    this.instance_17 = new lib.copiaMFAGEN_0016();
    this.instance_17.setTransform(-960, -540);
    this.instance_18 = new lib.copiaMFAGEN_0017();
    this.instance_18.setTransform(-960, -540);
    this.instance_19 = new lib.copiaMFAGEN_0018();
    this.instance_19.setTransform(-960, -540);
    this.instance_20 = new lib.copiaMFAGEN_0019();
    this.instance_20.setTransform(-960, -540);
    this.instance_21 = new lib.copiaMFAGEN_0020();
    this.instance_21.setTransform(-960, -540);
    this.instance_22 = new lib.copiaMFAGEN_0021();
    this.instance_22.setTransform(-960, -540);
    this.instance_23 = new lib.copiaMFAGEN_0022();
    this.instance_23.setTransform(-960, -540);
    this.instance_24 = new lib.copiaMFAGEN_0023();
    this.instance_24.setTransform(-960, -540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to({ state: [{ t: this.instance_20 }] }, 1)
        .to({ state: [{ t: this.instance_21 }] }, 1)
        .to({ state: [{ t: this.instance_22 }] }, 1)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-960, -540, 1921, 1082);

  // stage content:
  (lib.proyecto = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {
      intro: 0,
      exp: 36,
      A1: 37,
      A2: 38,
      A3: 39,
      A4: 40,
      A5: 41,
      A6: 42,
      A7: 43,
      A8: 44,
      A9: 45,
      A10: 46,
      A11: 47,
      A12: 48,
      A13: 49,
      A14: 50,
      A15: 51,
      A16: 52,
      A17: 53,
      A18: 54,
      A19: 55,
      A20: 56,
      A21: 57,
      A22: 58,
      A23: 59,
      A24: 60,
      A25: 61,
      A26: 62,
      A27: 63,
      A28: 64,
      A29: 65,
      A30: 66,
      A31: 67,
      A32: 68,
      A33: 69,
      A34: 70,
      A35: 71,
      A36: 72,
      A37: 73,
      A38: 74,
      A39: 75,
      A40: 76,
      A41: 77,
      A42: 78,
      A43: 79,
      A44: 80,
      A45: 81,
      A46: 82,
    };
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [
      0, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
      64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
    ];
    // timeline functions:
    this.frame_0 = function () {
      this.stop();
      this.BT_COMENZAR.addEventListener('click', fl_ClickToGoToAndStopAtFrame_3.bind(this));

      function fl_ClickToGoToAndStopAtFrame_3() {
        this.gotoAndStop('exp');
      }
    };
    this.frame_36 = function () {
      this.exp_bt.addEventListener('click', fl_ClickToGoToAndStopAtFrame_4.bind(this));

      function fl_ClickToGoToAndStopAtFrame_4() {
        this.gotoAndStop('A1');
      }
    };
    this.frame_37 = function () {
      this.button_1.addEventListener('click', fl_ClickToGoToAndStopAtFrame_5.bind(this));

      function fl_ClickToGoToAndStopAtFrame_5() {
        this.gotoAndStop('A2');
      }

      this.button_2.addEventListener('click', fl_ClickToGoToAndStopAtFrame_6.bind(this));

      function fl_ClickToGoToAndStopAtFrame_6() {
        this.gotoAndStop('A2');
      }

      this.button_3.addEventListener('click', fl_ClickToGoToAndStopAtFrame_7.bind(this));

      function fl_ClickToGoToAndStopAtFrame_7() {
        this.gotoAndStop('A2');
      }

      this.button_4.addEventListener('click', fl_ClickToGoToAndStopAtFrame_8.bind(this));

      function fl_ClickToGoToAndStopAtFrame_8() {
        this.gotoAndStop('A2');
      }
    };
    this.frame_38 = function () {
      this.button_6.addEventListener('click', fl_ClickToGoToAndStopAtFrame_10.bind(this));

      function fl_ClickToGoToAndStopAtFrame_10() {
        this.gotoAndStop('A3');
      }

      this.button_7.addEventListener('click', fl_ClickToGoToAndStopAtFrame_11.bind(this));

      function fl_ClickToGoToAndStopAtFrame_11() {
        this.gotoAndStop('A3');
      }
    };
    this.frame_39 = function () {
      this.movieClip_8.addEventListener('click', fl_ClickToGoToAndStopAtFrame_15.bind(this));

      function fl_ClickToGoToAndStopAtFrame_15() {
        this.gotoAndStop('A4');
      }

      this.button_9.addEventListener('click', fl_ClickToGoToAndStopAtFrame_16.bind(this));

      function fl_ClickToGoToAndStopAtFrame_16() {
        this.gotoAndStop('A4');
      }

      this.movieClip_8.addEventListener('click', fl_ClickToGoToAndStopAtFrame_17.bind(this));

      function fl_ClickToGoToAndStopAtFrame_17() {
        this.gotoAndStop('A4');
      }
    };
    this.frame_40 = function () {
      this.button_10.addEventListener('click', fl_ClickToGoToAndStopAtFrame_18.bind(this));

      function fl_ClickToGoToAndStopAtFrame_18() {
        this.gotoAndStop('A5');
      }

      this.button_11.addEventListener('click', fl_ClickToGoToAndStopAtFrame_19.bind(this));

      function fl_ClickToGoToAndStopAtFrame_19() {
        this.gotoAndStop('A5');
      }

      this.button_12.addEventListener('click', fl_ClickToGoToAndStopAtFrame_20.bind(this));

      function fl_ClickToGoToAndStopAtFrame_20() {
        this.gotoAndStop('A5');
      }
    };
    this.frame_41 = function () {
      this.button_13.addEventListener('click', fl_ClickToGoToAndStopAtFrame_22.bind(this));

      function fl_ClickToGoToAndStopAtFrame_22() {
        this.gotoAndStop('A6');
      }

      this.button_14.addEventListener('click', fl_ClickToGoToAndStopAtFrame_23.bind(this));

      function fl_ClickToGoToAndStopAtFrame_23() {
        this.gotoAndStop('A6');
      }

      this.button_15.addEventListener('click', fl_ClickToGoToAndStopAtFrame_24.bind(this));

      function fl_ClickToGoToAndStopAtFrame_24() {
        this.gotoAndStop('A6');
      }

      this.button_16.addEventListener('click', fl_ClickToGoToAndStopAtFrame_25.bind(this));

      function fl_ClickToGoToAndStopAtFrame_25() {
        this.gotoAndStop('A6');
      }
    };
    this.frame_42 = function () {
      this.button_17.addEventListener('click', fl_ClickToGoToAndStopAtFrame_26.bind(this));

      function fl_ClickToGoToAndStopAtFrame_26() {
        this.gotoAndStop('A7');
      }

      this.button_18.addEventListener('click', fl_ClickToGoToAndStopAtFrame_27.bind(this));

      function fl_ClickToGoToAndStopAtFrame_27() {
        this.gotoAndStop('A7');
      }

      this.button_19.addEventListener('click', fl_ClickToGoToAndStopAtFrame_28.bind(this));

      function fl_ClickToGoToAndStopAtFrame_28() {
        this.gotoAndStop('A7');
      }
    };
    this.frame_43 = function () {
      this.button_20.addEventListener('click', fl_ClickToGoToAndStopAtFrame_29.bind(this));

      function fl_ClickToGoToAndStopAtFrame_29() {
        this.gotoAndStop('A8');
      }

      this.button_21.addEventListener('click', fl_ClickToGoToAndStopAtFrame_30.bind(this));

      function fl_ClickToGoToAndStopAtFrame_30() {
        this.gotoAndStop('A8');
      }

      this.button_22.addEventListener('click', fl_ClickToGoToAndStopAtFrame_31.bind(this));

      function fl_ClickToGoToAndStopAtFrame_31() {
        this.gotoAndStop('A8');
      }
    };
    this.frame_44 = function () {
      this.button_23.addEventListener('click', fl_ClickToGoToAndStopAtFrame_32.bind(this));

      function fl_ClickToGoToAndStopAtFrame_32() {
        this.gotoAndStop('A9');
      }

      this.button_24.addEventListener('click', fl_ClickToGoToAndStopAtFrame_33.bind(this));

      function fl_ClickToGoToAndStopAtFrame_33() {
        this.gotoAndStop('A9');
      }

      this.button_25.addEventListener('click', fl_ClickToGoToAndStopAtFrame_34.bind(this));

      function fl_ClickToGoToAndStopAtFrame_34() {
        this.gotoAndStop('A9');
      }

      this.button_26.addEventListener('click', fl_ClickToGoToAndStopAtFrame_35.bind(this));

      function fl_ClickToGoToAndStopAtFrame_35() {
        this.gotoAndStop('A9');
      }
    };
    this.frame_45 = function () {
      this.button_27.addEventListener('click', fl_ClickToGoToAndStopAtFrame_36.bind(this));

      function fl_ClickToGoToAndStopAtFrame_36() {
        this.gotoAndStop('A10');
      }

      this.button_28.addEventListener('click', fl_ClickToGoToAndStopAtFrame_37.bind(this));

      function fl_ClickToGoToAndStopAtFrame_37() {
        this.gotoAndStop('A10');
      }

      this.button_29.addEventListener('click', fl_ClickToGoToAndStopAtFrame_38.bind(this));

      function fl_ClickToGoToAndStopAtFrame_38() {
        this.gotoAndStop('A10');
      }
    };
    this.frame_46 = function () {
      this.button_30.addEventListener('click', fl_ClickToGoToAndStopAtFrame_39.bind(this));

      function fl_ClickToGoToAndStopAtFrame_39() {
        this.gotoAndStop('A11');
      }

      this.button_31.addEventListener('click', fl_ClickToGoToAndStopAtFrame_40.bind(this));

      function fl_ClickToGoToAndStopAtFrame_40() {
        this.gotoAndStop('A11');
      }

      this.button_32.addEventListener('click', fl_ClickToGoToAndStopAtFrame_41.bind(this));

      function fl_ClickToGoToAndStopAtFrame_41() {
        this.gotoAndStop('A11');
      }
    };
    this.frame_47 = function () {
      this.button_33.addEventListener('click', fl_ClickToGoToAndStopAtFrame_42.bind(this));

      function fl_ClickToGoToAndStopAtFrame_42() {
        this.gotoAndStop('A12');
      }

      this.button_34.addEventListener('click', fl_ClickToGoToAndStopAtFrame_43.bind(this));

      function fl_ClickToGoToAndStopAtFrame_43() {
        this.gotoAndStop('A12');
      }

      this.button_35.addEventListener('click', fl_ClickToGoToAndStopAtFrame_44.bind(this));

      function fl_ClickToGoToAndStopAtFrame_44() {
        this.gotoAndStop('A12');
      }

      this.button_36.addEventListener('click', fl_ClickToGoToAndStopAtFrame_45.bind(this));

      function fl_ClickToGoToAndStopAtFrame_45() {
        this.gotoAndStop('A12');
      }
    };
    this.frame_48 = function () {
      this.button_37.addEventListener('click', fl_ClickToGoToAndStopAtFrame_46.bind(this));

      function fl_ClickToGoToAndStopAtFrame_46() {
        this.gotoAndStop('A13');
      }

      this.button_38.addEventListener('click', fl_ClickToGoToAndStopAtFrame_47.bind(this));

      function fl_ClickToGoToAndStopAtFrame_47() {
        this.gotoAndStop('A13');
      }

      this.button_39.addEventListener('click', fl_ClickToGoToAndStopAtFrame_48.bind(this));

      function fl_ClickToGoToAndStopAtFrame_48() {
        this.gotoAndStop('A13');
      }

      this.button_40.addEventListener('click', fl_ClickToGoToAndStopAtFrame_49.bind(this));

      function fl_ClickToGoToAndStopAtFrame_49() {
        this.gotoAndStop('A13');
      }
    };
    this.frame_49 = function () {
      this.button_41.addEventListener('click', fl_ClickToGoToAndStopAtFrame_50.bind(this));

      function fl_ClickToGoToAndStopAtFrame_50() {
        this.gotoAndStop('A14');
      }

      this.button_42.addEventListener('click', fl_ClickToGoToAndStopAtFrame_51.bind(this));

      function fl_ClickToGoToAndStopAtFrame_51() {
        this.gotoAndStop('A14');
      }

      this.button_43.addEventListener('click', fl_ClickToGoToAndStopAtFrame_52.bind(this));

      function fl_ClickToGoToAndStopAtFrame_52() {
        this.gotoAndStop('A14');
      }

      this.button_44.addEventListener('click', fl_ClickToGoToAndStopAtFrame_53.bind(this));

      function fl_ClickToGoToAndStopAtFrame_53() {
        this.gotoAndStop('A14');
      }
    };
    this.frame_50 = function () {
      this.button_45.addEventListener('click', fl_ClickToGoToAndStopAtFrame_54.bind(this));

      function fl_ClickToGoToAndStopAtFrame_54() {
        this.gotoAndStop('A15');
      }
    };
    this.frame_51 = function () {
      this.button_46.addEventListener('click', fl_ClickToGoToAndStopAtFrame_55.bind(this));

      function fl_ClickToGoToAndStopAtFrame_55() {
        this.gotoAndStop('A16');
      }
    };
    this.frame_52 = function () {
      this.button_47.addEventListener('click', fl_ClickToGoToAndStopAtFrame_56.bind(this));

      function fl_ClickToGoToAndStopAtFrame_56() {
        this.gotoAndStop('A17');
      }
    };
    this.frame_53 = function () {
      this.button_48.addEventListener('click', fl_ClickToGoToAndStopAtFrame_57.bind(this));

      function fl_ClickToGoToAndStopAtFrame_57() {
        this.gotoAndStop('A18');
      }

      this.button_49.addEventListener('click', fl_ClickToGoToAndStopAtFrame_58.bind(this));

      function fl_ClickToGoToAndStopAtFrame_58() {
        this.gotoAndStop('A18');
      }

      this.button_50.addEventListener('click', fl_ClickToGoToAndStopAtFrame_59.bind(this));

      function fl_ClickToGoToAndStopAtFrame_59() {
        this.gotoAndStop('A18');
      }

      this.button_51.addEventListener('click', fl_ClickToGoToAndStopAtFrame_60.bind(this));

      function fl_ClickToGoToAndStopAtFrame_60() {
        this.gotoAndStop('A18');
      }
    };
    this.frame_54 = function () {
      this.button_52.addEventListener('click', fl_ClickToGoToAndStopAtFrame_61.bind(this));

      function fl_ClickToGoToAndStopAtFrame_61() {
        this.gotoAndStop('A19');
      }

      this.button_53.addEventListener('click', fl_ClickToGoToAndStopAtFrame_62.bind(this));

      function fl_ClickToGoToAndStopAtFrame_62() {
        this.gotoAndStop('A19');
      }

      this.button_54.addEventListener('click', fl_ClickToGoToAndStopAtFrame_63.bind(this));

      function fl_ClickToGoToAndStopAtFrame_63() {
        this.gotoAndStop('A19');
      }

      this.button_55.addEventListener('click', fl_ClickToGoToAndStopAtFrame_64.bind(this));

      function fl_ClickToGoToAndStopAtFrame_64() {
        this.gotoAndStop('A19');
      }
    };
    this.frame_55 = function () {
      this.button_56.addEventListener('click', fl_ClickToGoToAndStopAtFrame_65.bind(this));

      function fl_ClickToGoToAndStopAtFrame_65() {
        this.gotoAndStop('A20');
      }

      this.button_57.addEventListener('click', fl_ClickToGoToAndStopAtFrame_66.bind(this));

      function fl_ClickToGoToAndStopAtFrame_66() {
        this.gotoAndStop('A20');
      }

      this.button_58.addEventListener('click', fl_ClickToGoToAndStopAtFrame_67.bind(this));

      function fl_ClickToGoToAndStopAtFrame_67() {
        this.gotoAndStop('A20');
      }

      this.button_59.addEventListener('click', fl_ClickToGoToAndStopAtFrame_68.bind(this));

      function fl_ClickToGoToAndStopAtFrame_68() {
        this.gotoAndStop('A20');
      }
    };
    this.frame_56 = function () {
      this.button_60.addEventListener('click', fl_ClickToGoToAndStopAtFrame_69.bind(this));

      function fl_ClickToGoToAndStopAtFrame_69() {
        this.gotoAndStop('A21');
      }

      this.button_61.addEventListener('click', fl_ClickToGoToAndStopAtFrame_70.bind(this));

      function fl_ClickToGoToAndStopAtFrame_70() {
        this.gotoAndStop('A21');
      }

      this.button_62.addEventListener('click', fl_ClickToGoToAndStopAtFrame_71.bind(this));

      function fl_ClickToGoToAndStopAtFrame_71() {
        this.gotoAndStop('A21');
      }

      this.button_63.addEventListener('click', fl_ClickToGoToAndStopAtFrame_72.bind(this));

      function fl_ClickToGoToAndStopAtFrame_72() {
        this.gotoAndStop('A21');
      }
    };
    this.frame_57 = function () {
      this.button_64.addEventListener('click', fl_ClickToGoToAndStopAtFrame_73.bind(this));

      function fl_ClickToGoToAndStopAtFrame_73() {
        this.gotoAndStop('A22');
      }
    };
    this.frame_58 = function () {
      this.button_65.addEventListener('click', fl_ClickToGoToAndStopAtFrame_74.bind(this));

      function fl_ClickToGoToAndStopAtFrame_74() {
        this.gotoAndStop('A23');
      }
    };
    this.frame_59 = function () {
      this.button_66.addEventListener('click', fl_ClickToGoToAndStopAtFrame_75.bind(this));

      function fl_ClickToGoToAndStopAtFrame_75() {
        this.gotoAndStop('A24');
      }

      this.button_67.addEventListener('click', fl_ClickToGoToAndStopAtFrame_76.bind(this));

      function fl_ClickToGoToAndStopAtFrame_76() {
        this.gotoAndStop('A24');
      }

      this.button_68.addEventListener('click', fl_ClickToGoToAndStopAtFrame_77.bind(this));

      function fl_ClickToGoToAndStopAtFrame_77() {
        this.gotoAndStop('A24');
      }
    };
    this.frame_60 = function () {
      this.button_69.addEventListener('click', fl_ClickToGoToAndStopAtFrame_78.bind(this));

      function fl_ClickToGoToAndStopAtFrame_78() {
        this.gotoAndStop('A25');
      }
    };
    this.frame_61 = function () {
      this.button_70.addEventListener('click', fl_ClickToGoToAndStopAtFrame_79.bind(this));

      function fl_ClickToGoToAndStopAtFrame_79() {
        this.gotoAndStop('A26');
      }

      this.button_71.addEventListener('click', fl_ClickToGoToAndStopAtFrame_80.bind(this));

      function fl_ClickToGoToAndStopAtFrame_80() {
        this.gotoAndStop('A26');
      }

      this.button_72.addEventListener('click', fl_ClickToGoToAndStopAtFrame_81.bind(this));

      function fl_ClickToGoToAndStopAtFrame_81() {
        this.gotoAndStop('A26');
      }

      this.button_73.addEventListener('click', fl_ClickToGoToAndStopAtFrame_82.bind(this));

      function fl_ClickToGoToAndStopAtFrame_82() {
        this.gotoAndStop('A26');
      }
    };
    this.frame_62 = function () {
      this.button_74.addEventListener('click', fl_ClickToGoToAndStopAtFrame_83.bind(this));

      function fl_ClickToGoToAndStopAtFrame_83() {
        this.gotoAndStop('A27');
      }
    };
    this.frame_63 = function () {
      this.button_75.addEventListener('click', fl_ClickToGoToAndStopAtFrame_84.bind(this));

      function fl_ClickToGoToAndStopAtFrame_84() {
        this.gotoAndStop('A28');
      }
    };
    this.frame_64 = function () {
      this.button_76.addEventListener('click', fl_ClickToGoToAndStopAtFrame_85.bind(this));

      function fl_ClickToGoToAndStopAtFrame_85() {
        this.gotoAndStop('A29');
      }

      this.button_77.addEventListener('click', fl_ClickToGoToAndStopAtFrame_86.bind(this));

      function fl_ClickToGoToAndStopAtFrame_86() {
        this.gotoAndStop('A29');
      }

      this.button_78.addEventListener('click', fl_ClickToGoToAndStopAtFrame_87.bind(this));

      function fl_ClickToGoToAndStopAtFrame_87() {
        this.gotoAndStop('A29');
      }

      this.button_79.addEventListener('click', fl_ClickToGoToAndStopAtFrame_88.bind(this));

      function fl_ClickToGoToAndStopAtFrame_88() {
        this.gotoAndStop('A29');
      }
    };
    this.frame_65 = function () {
      this.button_80.addEventListener('click', fl_ClickToGoToAndStopAtFrame_89.bind(this));

      function fl_ClickToGoToAndStopAtFrame_89() {
        this.gotoAndStop('A30');
      }

      this.button_81.addEventListener('click', fl_ClickToGoToAndStopAtFrame_90.bind(this));

      function fl_ClickToGoToAndStopAtFrame_90() {
        this.gotoAndStop('A30');
      }

      this.button_82.addEventListener('click', fl_ClickToGoToAndStopAtFrame_91.bind(this));

      function fl_ClickToGoToAndStopAtFrame_91() {
        this.gotoAndStop('A30');
      }

      this.button_83.addEventListener('click', fl_ClickToGoToAndStopAtFrame_92.bind(this));

      function fl_ClickToGoToAndStopAtFrame_92() {
        this.gotoAndStop('A30');
      }
    };
    this.frame_66 = function () {
      this.button_84.addEventListener('click', fl_ClickToGoToAndStopAtFrame_93.bind(this));

      function fl_ClickToGoToAndStopAtFrame_93() {
        this.gotoAndStop('A31');
      }
    };
    this.frame_67 = function () {
      this.button_85.addEventListener('click', fl_ClickToGoToAndStopAtFrame_94.bind(this));

      function fl_ClickToGoToAndStopAtFrame_94() {
        this.gotoAndStop('A32');
      }
    };
    this.frame_68 = function () {
      this.button_86.addEventListener('click', fl_ClickToGoToAndStopAtFrame_95.bind(this));

      function fl_ClickToGoToAndStopAtFrame_95() {
        this.gotoAndStop('A33');
      }

      this.button_87.addEventListener('click', fl_ClickToGoToAndStopAtFrame_96.bind(this));

      function fl_ClickToGoToAndStopAtFrame_96() {
        this.gotoAndStop('A33');
      }

      this.button_88.addEventListener('click', fl_ClickToGoToAndStopAtFrame_97.bind(this));

      function fl_ClickToGoToAndStopAtFrame_97() {
        this.gotoAndStop('A33');
      }

      this.button_89.addEventListener('click', fl_ClickToGoToAndStopAtFrame_98.bind(this));

      function fl_ClickToGoToAndStopAtFrame_98() {
        this.gotoAndStop('A33');
      }
    };
    this.frame_69 = function () {
      this.button_90.addEventListener('click', fl_ClickToGoToAndStopAtFrame_99.bind(this));

      function fl_ClickToGoToAndStopAtFrame_99() {
        this.gotoAndStop('A34');
      }

      this.button_91.addEventListener('click', fl_ClickToGoToAndStopAtFrame_100.bind(this));

      function fl_ClickToGoToAndStopAtFrame_100() {
        this.gotoAndStop('A34');
      }

      this.button_92.addEventListener('click', fl_ClickToGoToAndStopAtFrame_101.bind(this));

      function fl_ClickToGoToAndStopAtFrame_101() {
        this.gotoAndStop('A34');
      }

      this.button_93.addEventListener('click', fl_ClickToGoToAndStopAtFrame_102.bind(this));

      function fl_ClickToGoToAndStopAtFrame_102() {
        this.gotoAndStop('A34');
      }
    };
    this.frame_70 = function () {
      this.button_94.addEventListener('click', fl_ClickToGoToAndStopAtFrame_103.bind(this));

      function fl_ClickToGoToAndStopAtFrame_103() {
        this.gotoAndStop('A35');
      }

      this.button_95.addEventListener('click', fl_ClickToGoToAndStopAtFrame_104.bind(this));

      function fl_ClickToGoToAndStopAtFrame_104() {
        this.gotoAndStop('A35');
      }

      this.button_96.addEventListener('click', fl_ClickToGoToAndStopAtFrame_105.bind(this));

      function fl_ClickToGoToAndStopAtFrame_105() {
        this.gotoAndStop('A35');
      }

      this.button_97.addEventListener('click', fl_ClickToGoToAndStopAtFrame_106.bind(this));

      function fl_ClickToGoToAndStopAtFrame_106() {
        this.gotoAndStop('A35');
      }
    };
    this.frame_71 = function () {
      this.button_98.addEventListener('click', fl_ClickToGoToAndStopAtFrame_107.bind(this));

      function fl_ClickToGoToAndStopAtFrame_107() {
        this.gotoAndStop('A36');
      }
    };
    this.frame_72 = function () {
      this.button_99.addEventListener('click', fl_ClickToGoToAndStopAtFrame_108.bind(this));

      function fl_ClickToGoToAndStopAtFrame_108() {
        this.gotoAndStop('A37');
      }
    };
    this.frame_73 = function () {
      this.button_100.addEventListener('click', fl_ClickToGoToAndStopAtFrame_109.bind(this));

      function fl_ClickToGoToAndStopAtFrame_109() {
        this.gotoAndStop('A38');
      }

      this.button_101.addEventListener('click', fl_ClickToGoToAndStopAtFrame_110.bind(this));

      function fl_ClickToGoToAndStopAtFrame_110() {
        this.gotoAndStop('A38');
      }

      this.button_102.addEventListener('click', fl_ClickToGoToAndStopAtFrame_111.bind(this));

      function fl_ClickToGoToAndStopAtFrame_111() {
        this.gotoAndStop('A38');
      }
    };
    this.frame_74 = function () {
      this.button_103.addEventListener('click', fl_ClickToGoToAndStopAtFrame_112.bind(this));

      function fl_ClickToGoToAndStopAtFrame_112() {
        this.gotoAndStop('A39');
      }
    };
    this.frame_75 = function () {
      this.button_104.addEventListener('click', fl_ClickToGoToAndStopAtFrame_113.bind(this));

      function fl_ClickToGoToAndStopAtFrame_113() {
        this.gotoAndStop('A40');
      }

      this.button_105.addEventListener('click', fl_ClickToGoToAndStopAtFrame_114.bind(this));

      function fl_ClickToGoToAndStopAtFrame_114() {
        this.gotoAndStop('A40');
      }

      this.button_106.addEventListener('click', fl_ClickToGoToAndStopAtFrame_115.bind(this));

      function fl_ClickToGoToAndStopAtFrame_115() {
        this.gotoAndStop('A40');
      }

      this.button_104.addEventListener('click', fl_ClickToGoToAndStopAtFrame_116.bind(this));

      function fl_ClickToGoToAndStopAtFrame_116() {
        this.gotoAndStop('A40');
      }

      this.button_107.addEventListener('click', fl_ClickToGoToAndStopAtFrame_117.bind(this));

      function fl_ClickToGoToAndStopAtFrame_117() {
        this.gotoAndStop('A40');
      }
    };
    this.frame_76 = function () {
      this.button_108.addEventListener('click', fl_ClickToGoToAndStopAtFrame_118.bind(this));

      function fl_ClickToGoToAndStopAtFrame_118() {
        this.gotoAndStop('A41');
      }
    };
    this.frame_77 = function () {
      this.button_109.addEventListener('click', fl_ClickToGoToAndStopAtFrame_119.bind(this));

      function fl_ClickToGoToAndStopAtFrame_119() {
        this.gotoAndStop('A42');
      }

      this.button_110.addEventListener('click', fl_ClickToGoToAndStopAtFrame_120.bind(this));

      function fl_ClickToGoToAndStopAtFrame_120() {
        this.gotoAndStop('A42');
      }

      this.button_111.addEventListener('click', fl_ClickToGoToAndStopAtFrame_121.bind(this));

      function fl_ClickToGoToAndStopAtFrame_121() {
        this.gotoAndStop('A42');
      }

      this.button_112.addEventListener('click', fl_ClickToGoToAndStopAtFrame_122.bind(this));

      function fl_ClickToGoToAndStopAtFrame_122() {
        this.gotoAndStop('A42');
      }
    };
    this.frame_78 = function () {
      this.button_113.addEventListener('click', fl_ClickToGoToAndStopAtFrame_123.bind(this));

      function fl_ClickToGoToAndStopAtFrame_123() {
        this.gotoAndStop('A43');
      }
    };
    this.frame_79 = function () {
      this.button_114.addEventListener('click', fl_ClickToGoToAndStopAtFrame_124.bind(this));

      function fl_ClickToGoToAndStopAtFrame_124() {
        this.gotoAndStop('A44');
      }
    };
    this.frame_80 = function () {
      this.button_115.addEventListener('click', fl_ClickToGoToAndStopAtFrame_125.bind(this));

      function fl_ClickToGoToAndStopAtFrame_125() {
        this.gotoAndStop('A45');
      }
    };
    this.frame_81 = function () {
      this.button_116.addEventListener('click', fl_ClickToGoToAndStopAtFrame_126.bind(this));

      function fl_ClickToGoToAndStopAtFrame_126() {
        this.gotoAndStop('A46');
      }
    };
    this.frame_82 = function () {
      this.button_5.addEventListener('click', fl_ClickToGoToAndStopAtFrame_9.bind(this));

      function fl_ClickToGoToAndStopAtFrame_9() {
        this.gotoAndStop('intro');
      }
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(36)
        .call(this.frame_36)
        .wait(1)
        .call(this.frame_37)
        .wait(1)
        .call(this.frame_38)
        .wait(1)
        .call(this.frame_39)
        .wait(1)
        .call(this.frame_40)
        .wait(1)
        .call(this.frame_41)
        .wait(1)
        .call(this.frame_42)
        .wait(1)
        .call(this.frame_43)
        .wait(1)
        .call(this.frame_44)
        .wait(1)
        .call(this.frame_45)
        .wait(1)
        .call(this.frame_46)
        .wait(1)
        .call(this.frame_47)
        .wait(1)
        .call(this.frame_48)
        .wait(1)
        .call(this.frame_49)
        .wait(1)
        .call(this.frame_50)
        .wait(1)
        .call(this.frame_51)
        .wait(1)
        .call(this.frame_52)
        .wait(1)
        .call(this.frame_53)
        .wait(1)
        .call(this.frame_54)
        .wait(1)
        .call(this.frame_55)
        .wait(1)
        .call(this.frame_56)
        .wait(1)
        .call(this.frame_57)
        .wait(1)
        .call(this.frame_58)
        .wait(1)
        .call(this.frame_59)
        .wait(1)
        .call(this.frame_60)
        .wait(1)
        .call(this.frame_61)
        .wait(1)
        .call(this.frame_62)
        .wait(1)
        .call(this.frame_63)
        .wait(1)
        .call(this.frame_64)
        .wait(1)
        .call(this.frame_65)
        .wait(1)
        .call(this.frame_66)
        .wait(1)
        .call(this.frame_67)
        .wait(1)
        .call(this.frame_68)
        .wait(1)
        .call(this.frame_69)
        .wait(1)
        .call(this.frame_70)
        .wait(1)
        .call(this.frame_71)
        .wait(1)
        .call(this.frame_72)
        .wait(1)
        .call(this.frame_73)
        .wait(1)
        .call(this.frame_74)
        .wait(1)
        .call(this.frame_75)
        .wait(1)
        .call(this.frame_76)
        .wait(1)
        .call(this.frame_77)
        .wait(1)
        .call(this.frame_78)
        .wait(1)
        .call(this.frame_79)
        .wait(1)
        .call(this.frame_80)
        .wait(1)
        .call(this.frame_81)
        .wait(1)
        .call(this.frame_82)
        .wait(1)
    );

    // Botones
    this.BT_COMENZAR = new lib.BT_COMENZAR();
    this.BT_COMENZAR.name = 'BT_COMENZAR';
    this.BT_COMENZAR.setTransform(920, 546);
    new cjs.ButtonHelper(this.BT_COMENZAR, 0, 1, 2, false, new lib.BT_COMENZAR(), 3);

    this.exp_bt = new lib.EXP_FLECHA_1();
    this.exp_bt.name = 'exp_bt';
    this.exp_bt.setTransform(1749.95, 185.3);
    new cjs.ButtonHelper(this.exp_bt, 0, 1, 2, false, new lib.EXP_FLECHA_1(), 3);

    this.button_4 = new lib.pp1d();
    this.button_4.name = 'button_4';
    this.button_4.setTransform(184.5, 189);
    new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.pp1d(), 3);

    this.button_3 = new lib.p1c_1();
    this.button_3.name = 'button_3';
    this.button_3.setTransform(453.5, 189);
    new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.p1c_1(), 3);

    this.button_2 = new lib.p1b_1();
    this.button_2.name = 'button_2';
    this.button_2.setTransform(184.5, 432);
    new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.p1b_1(), 3);

    this.button_1 = new lib.p1a_1();
    this.button_1.name = 'button_1';
    this.button_1.setTransform(453.5, 432);
    new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.p1a_1(), 3);

    this.button_6 = new lib.Símbolo63();
    this.button_6.name = 'button_6';
    this.button_6.setTransform(319.5, 535, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_6, 0, 1, 1);

    this.button_7 = new lib.Símbolo62();
    this.button_7.name = 'button_7';
    this.button_7.setTransform(319.5, 247, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_7, 0, 1, 1);

    this.button_9 = new lib.Símbolo67();
    this.button_9.name = 'button_9';
    this.button_9.setTransform(308.5, 308, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_9, 0, 1, 1);

    this.movieClip_8 = new lib.Símbolo64();
    this.movieClip_8.name = 'movieClip_8';
    this.movieClip_8.setTransform(308.5, 609);

    this.button_10 = new lib.Símbolo71();
    this.button_10.name = 'button_10';
    this.button_10.setTransform(322.5, 228, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_10, 0, 1, 1);

    this.button_11 = new lib.Símbolo70();
    this.button_11.name = 'button_11';
    this.button_11.setTransform(322.5, 447, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_11, 0, 1, 1);

    this.button_12 = new lib.Símbolo69();
    this.button_12.name = 'button_12';
    this.button_12.setTransform(322.5, 669, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_12, 0, 1, 1);

    this.button_13 = new lib.Símbolo75();
    this.button_13.name = 'button_13';
    this.button_13.setTransform(402.5, 164, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_13, 0, 1, 1);

    this.button_14 = new lib.Símbolo74();
    this.button_14.name = 'button_14';
    this.button_14.setTransform(683.5, 164, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_14, 0, 1, 1);

    this.button_15 = new lib.Símbolo73();
    this.button_15.name = 'button_15';
    this.button_15.setTransform(1038.5, 164, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_15, 0, 1, 1);

    this.button_16 = new lib.Símbolo72();
    this.button_16.name = 'button_16';
    this.button_16.setTransform(1395.5, 164, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_16, 0, 1, 1);

    this.button_17 = new lib.Símbolo78();
    this.button_17.name = 'button_17';
    this.button_17.setTransform(693.5, 186, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_17, 0, 1, 1);

    this.button_18 = new lib.Símbolo77();
    this.button_18.name = 'button_18';
    this.button_18.setTransform(968.5, 186, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_18, 0, 1, 1);

    this.button_19 = new lib.Símbolo76();
    this.button_19.name = 'button_19';
    this.button_19.setTransform(1254.5, 186, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_19, 0, 1, 1);

    this.instance = new lib.copiap1d();
    this.instance.setTransform(614, 106);

    this.button_20 = new lib.Símbolo81();
    this.button_20.name = 'button_20';
    this.button_20.setTransform(436.5, 612, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_20, 0, 1, 1);

    this.button_21 = new lib.Símbolo80();
    this.button_21.name = 'button_21';
    this.button_21.setTransform(436.5, 420, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_21, 0, 1, 1);

    this.button_22 = new lib.Símbolo79();
    this.button_22.name = 'button_22';
    this.button_22.setTransform(436.5, 234, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_22, 0, 1, 1);

    this.button_23 = new lib.Símbolo85();
    this.button_23.name = 'button_23';
    this.button_23.setTransform(558.5, 187, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_23, 0, 1, 1);

    this.button_24 = new lib.Símbolo84();
    this.button_24.name = 'button_24';
    this.button_24.setTransform(837.5, 187, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_24, 0, 1, 1);

    this.button_25 = new lib.Símbolo83();
    this.button_25.name = 'button_25';
    this.button_25.setTransform(1155.5, 187, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_25, 0, 1, 1);

    this.button_26 = new lib.Símbolo82();
    this.button_26.name = 'button_26';
    this.button_26.setTransform(1418.5, 187, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_26, 0, 1, 1);

    this.button_29 = new lib.Símbolo88();
    this.button_29.name = 'button_29';
    this.button_29.setTransform(344.5, 154, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_29, 0, 1, 1);

    this.button_28 = new lib.Símbolo87();
    this.button_28.name = 'button_28';
    this.button_28.setTransform(344.5, 391, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_28, 0, 1, 1);

    this.button_27 = new lib.Símbolo86();
    this.button_27.name = 'button_27';
    this.button_27.setTransform(344.5, 667, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_27, 0, 1, 1);

    this.button_32 = new lib.Símbolo91();
    this.button_32.name = 'button_32';
    this.button_32.setTransform(385.5, 215, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_32, 0, 1, 1);

    this.button_30 = new lib.Símbolo90();
    this.button_30.name = 'button_30';
    this.button_30.setTransform(385.5, 645, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_30, 0, 1, 1);

    this.button_31 = new lib.Símbolo89();
    this.button_31.name = 'button_31';
    this.button_31.setTransform(385.5, 425, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_31, 0, 1, 1);

    this.button_36 = new lib.Símbolo95();
    this.button_36.name = 'button_36';
    this.button_36.setTransform(314.5, 231, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_36, 0, 1, 1);

    this.button_35 = new lib.Símbolo94();
    this.button_35.name = 'button_35';
    this.button_35.setTransform(314.5, 455, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_35, 0, 1, 1);

    this.button_34 = new lib.Símbolo93();
    this.button_34.name = 'button_34';
    this.button_34.setTransform(314.5, 672, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_34, 0, 1, 1);

    this.button_33 = new lib.Símbolo92();
    this.button_33.name = 'button_33';
    this.button_33.setTransform(314.5, 889, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_33, 0, 1, 1);

    this.button_40 = new lib.Símbolo99();
    this.button_40.name = 'button_40';
    this.button_40.setTransform(299.5, 204, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_40, 0, 1, 1);

    this.button_39 = new lib.Símbolo98();
    this.button_39.name = 'button_39';
    this.button_39.setTransform(299.5, 416, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_39, 0, 1, 1);

    this.button_38 = new lib.Símbolo97();
    this.button_38.name = 'button_38';
    this.button_38.setTransform(299.5, 651, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_38, 0, 1, 1);

    this.button_37 = new lib.Símbolo96();
    this.button_37.name = 'button_37';
    this.button_37.setTransform(299.5, 889, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_37, 0, 1, 1);

    this.button_41 = new lib.Símbolo103();
    this.button_41.name = 'button_41';
    this.button_41.setTransform(694.5, 351, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_41, 0, 1, 1);

    this.button_42 = new lib.Símbolo102();
    this.button_42.name = 'button_42';
    this.button_42.setTransform(960.5, 351, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_42, 0, 1, 1);

    this.button_43 = new lib.Símbolo101();
    this.button_43.name = 'button_43';
    this.button_43.setTransform(1234.5, 351, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_43, 0, 1, 1);

    this.button_44 = new lib.Símbolo100();
    this.button_44.name = 'button_44';
    this.button_44.setTransform(1513.5, 351, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_44, 0, 1, 1);

    this.button_45 = new lib.Símbolo104();
    this.button_45.name = 'button_45';
    this.button_45.setTransform(1745.5, 173, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_45, 0, 1, 1);

    this.button_46 = new lib.Símbolo105();
    this.button_46.name = 'button_46';
    this.button_46.setTransform(1762.5, 147, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_46, 0, 1, 1);

    this.button_47 = new lib.Símbolo106();
    this.button_47.name = 'button_47';
    this.button_47.setTransform(1750.5, 161, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_47, 0, 1, 1);

    this.button_51 = new lib.Símbolo110();
    this.button_51.name = 'button_51';
    this.button_51.setTransform(1568.5, 219, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_51, 0, 1, 1);

    this.button_50 = new lib.Símbolo109();
    this.button_50.name = 'button_50';
    this.button_50.setTransform(1352.5, 219, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_50, 0, 1, 1);

    this.button_49 = new lib.Símbolo108();
    this.button_49.name = 'button_49';
    this.button_49.setTransform(1119.5, 219, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_49, 0, 1, 1);

    this.button_48 = new lib.Símbolo107();
    this.button_48.name = 'button_48';
    this.button_48.setTransform(905.5, 219, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_48, 0, 1, 1);

    this.button_54 = new lib.Símbolo114();
    this.button_54.name = 'button_54';
    this.button_54.setTransform(280.5, 491, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_54, 0, 1, 1);

    this.button_52 = new lib.Símbolo113();
    this.button_52.name = 'button_52';
    this.button_52.setTransform(524.5, 689, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_52, 0, 1, 1);

    this.button_55 = new lib.Símbolo112();
    this.button_55.name = 'button_55';
    this.button_55.setTransform(524.5, 290, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_55, 0, 1, 1);

    this.button_53 = new lib.Símbolo111();
    this.button_53.name = 'button_53';
    this.button_53.setTransform(524.5, 491, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_53, 0, 1, 1);

    this.button_58 = new lib.Símbolo118();
    this.button_58.name = 'button_58';
    this.button_58.setTransform(258.5, 539, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_58, 0, 1, 1);

    this.button_56 = new lib.Símbolo117();
    this.button_56.name = 'button_56';
    this.button_56.setTransform(514.5, 761, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_56, 0, 1, 1);

    this.button_59 = new lib.Símbolo116();
    this.button_59.name = 'button_59';
    this.button_59.setTransform(514.5, 314, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_59, 0, 1, 1);

    this.button_57 = new lib.Símbolo115();
    this.button_57.name = 'button_57';
    this.button_57.setTransform(514.5, 539, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_57, 0, 1, 1);

    this.button_62 = new lib.Símbolo122();
    this.button_62.name = 'button_62';
    this.button_62.setTransform(258.5, 531, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_62, 0, 1, 1);

    this.button_60 = new lib.Símbolo121();
    this.button_60.name = 'button_60';
    this.button_60.setTransform(527.5, 769, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_60, 0, 1, 1);

    this.button_63 = new lib.Símbolo120();
    this.button_63.name = 'button_63';
    this.button_63.setTransform(527.5, 297, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_63, 0, 1, 1);

    this.button_61 = new lib.Símbolo119();
    this.button_61.name = 'button_61';
    this.button_61.setTransform(527.5, 531, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_61, 0, 1, 1);

    this.button_64 = new lib.Símbolo123();
    this.button_64.name = 'button_64';
    this.button_64.setTransform(1754.5, 162, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_64, 0, 1, 1);

    this.button_65 = new lib.Símbolo124();
    this.button_65.name = 'button_65';
    this.button_65.setTransform(1757.5, 153, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_65, 0, 1, 1);

    this.button_68 = new lib.Símbolo127();
    this.button_68.name = 'button_68';
    this.button_68.setTransform(335.5, 731, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_68, 0, 1, 1);

    this.button_67 = new lib.Símbolo126();
    this.button_67.name = 'button_67';
    this.button_67.setTransform(335.5, 547, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_67, 0, 1, 1);

    this.button_66 = new lib.Símbolo125();
    this.button_66.name = 'button_66';
    this.button_66.setTransform(335.5, 342, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_66, 0, 1, 1);

    this.button_69 = new lib.Símbolo128();
    this.button_69.name = 'button_69';
    this.button_69.setTransform(1750.5, 154, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_69, 0, 1, 1);

    this.button_72 = new lib.Símbolo132();
    this.button_72.name = 'button_72';
    this.button_72.setTransform(296.5, 610, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_72, 0, 1, 1);

    this.button_73 = new lib.Símbolo131();
    this.button_73.name = 'button_73';
    this.button_73.setTransform(296.5, 807, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_73, 0, 1, 1);

    this.button_71 = new lib.Símbolo130();
    this.button_71.name = 'button_71';
    this.button_71.setTransform(296.5, 427, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_71, 0, 1, 1);

    this.button_70 = new lib.Símbolo129();
    this.button_70.name = 'button_70';
    this.button_70.setTransform(296.5, 228, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_70, 0, 1, 1);

    this.button_74 = new lib.Símbolo133();
    this.button_74.name = 'button_74';
    this.button_74.setTransform(1757.5, 164, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_74, 0, 1, 1);

    this.button_75 = new lib.Símbolo134();
    this.button_75.name = 'button_75';
    this.button_75.setTransform(1753.5, 158, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_75, 0, 1, 1);

    this.button_77 = new lib.Símbolo138();
    this.button_77.name = 'button_77';
    this.button_77.setTransform(1712.5, 159, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_77, 0, 1, 1);

    this.button_78 = new lib.Símbolo137();
    this.button_78.name = 'button_78';
    this.button_78.setTransform(1499.5, 364, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_78, 0, 1, 1);

    this.button_79 = new lib.Símbolo136();
    this.button_79.name = 'button_79';
    this.button_79.setTransform(1712.5, 364, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_79, 0, 1, 1);

    this.button_76 = new lib.Símbolo135();
    this.button_76.name = 'button_76';
    this.button_76.setTransform(1499.5, 159, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_76, 0, 1, 1);

    this.button_83 = new lib.Símbolo142();
    this.button_83.name = 'button_83';
    this.button_83.setTransform(1731.5, 414, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_83, 0, 1, 1);

    this.button_82 = new lib.Símbolo141();
    this.button_82.name = 'button_82';
    this.button_82.setTransform(1499.5, 414, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_82, 0, 1, 1);

    this.button_81 = new lib.Símbolo140();
    this.button_81.name = 'button_81';
    this.button_81.setTransform(1731.5, 217, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_81, 0, 1, 1);

    this.button_80 = new lib.Símbolo139();
    this.button_80.name = 'button_80';
    this.button_80.setTransform(1507.5, 217, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_80, 0, 1, 1);

    this.button_84 = new lib.Símbolo143();
    this.button_84.name = 'button_84';
    this.button_84.setTransform(174.5, 936, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_84, 0, 1, 1);

    this.button_85 = new lib.Símbolo144();
    this.button_85.name = 'button_85';
    this.button_85.setTransform(147.5, 953, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_85, 0, 1, 1);

    this.button_89 = new lib.Símbolo148();
    this.button_89.name = 'button_89';
    this.button_89.setTransform(175.5, 253, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_89, 0, 1, 1);

    this.button_88 = new lib.Símbolo147();
    this.button_88.name = 'button_88';
    this.button_88.setTransform(175.5, 478, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_88, 0, 1, 1);

    this.button_87 = new lib.Símbolo146();
    this.button_87.name = 'button_87';
    this.button_87.setTransform(175.5, 699, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_87, 0, 1, 1);

    this.button_86 = new lib.Símbolo145();
    this.button_86.name = 'button_86';
    this.button_86.setTransform(175.9, 922.6, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_86, 0, 1, 1);

    this.button_93 = new lib.Símbolo152();
    this.button_93.name = 'button_93';
    this.button_93.setTransform(225.5, 219, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_93, 0, 1, 1);

    this.button_92 = new lib.Símbolo151();
    this.button_92.name = 'button_92';
    this.button_92.setTransform(225.5, 453, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_92, 0, 1, 1);

    this.button_91 = new lib.Símbolo150();
    this.button_91.name = 'button_91';
    this.button_91.setTransform(225.5, 678, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_91, 0, 1, 1);

    this.button_90 = new lib.Símbolo149();
    this.button_90.name = 'button_90';
    this.button_90.setTransform(225.5, 905, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_90, 0, 1, 1);

    this.button_96 = new lib.Símbolo156();
    this.button_96.name = 'button_96';
    this.button_96.setTransform(1376.5, 464, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_96, 0, 1, 1);

    this.button_97 = new lib.Símbolo155();
    this.button_97.name = 'button_97';
    this.button_97.setTransform(1707.5, 464, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_97, 0, 1, 1);

    this.button_94 = new lib.Símbolo154();
    this.button_94.name = 'button_94';
    this.button_94.setTransform(1376.5, 749, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_94, 0, 1, 1);

    this.button_95 = new lib.Símbolo153();
    this.button_95.name = 'button_95';
    this.button_95.setTransform(1707.5, 755, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_95, 0, 1, 1);

    this.button_98 = new lib.Símbolo157();
    this.button_98.name = 'button_98';
    this.button_98.setTransform(1732.5, 159, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_98, 0, 1, 1);

    this.button_99 = new lib.Símbolo158();
    this.button_99.name = 'button_99';
    this.button_99.setTransform(1764.5, 142, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_99, 0, 1, 1);

    this.button_101 = new lib.Símbolo161();
    this.button_101.name = 'button_101';
    this.button_101.setTransform(1559.5, 566, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_101, 0, 1, 1);

    this.button_102 = new lib.Símbolo160();
    this.button_102.name = 'button_102';
    this.button_102.setTransform(1559.5, 369, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_102, 0, 1, 1);

    this.button_100 = new lib.Símbolo159();
    this.button_100.name = 'button_100';
    this.button_100.setTransform(1559.7, 764.1, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_100, 0, 1, 1);

    this.button_103 = new lib.Símbolo162();
    this.button_103.name = 'button_103';
    this.button_103.setTransform(1764.5, 158, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_103, 0, 1, 1);

    this.button_106 = new lib.Símbolo166();
    this.button_106.name = 'button_106';
    this.button_106.setTransform(912.5, 494, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_106, 0, 1, 1);

    this.button_104 = new lib.Símbolo165();
    this.button_104.name = 'button_104';
    this.button_104.setTransform(715.55, 494, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_104, 0, 1, 1);

    this.button_107 = new lib.Símbolo164();
    this.button_107.name = 'button_107';
    this.button_107.setTransform(1311.15, 494, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_107, 0, 1, 1);

    this.button_105 = new lib.Símbolo163();
    this.button_105.name = 'button_105';
    this.button_105.setTransform(1109.45, 494, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_105, 0, 1, 1);

    this.button_108 = new lib.Símbolo167();
    this.button_108.name = 'button_108';
    this.button_108.setTransform(1768.5, 153, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_108, 0, 1, 1);

    this.button_112 = new lib.Símbolo171();
    this.button_112.name = 'button_112';
    this.button_112.setTransform(1345.5, 527, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_112, 0, 1, 1);

    this.button_109 = new lib.Símbolo170();
    this.button_109.name = 'button_109';
    this.button_109.setTransform(746.5, 527, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_109, 0, 1, 1);

    this.button_110 = new lib.Símbolo169();
    this.button_110.name = 'button_110';
    this.button_110.setTransform(959.5, 527, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_110, 0, 1, 1);

    this.button_111 = new lib.Símbolo168();
    this.button_111.name = 'button_111';
    this.button_111.setTransform(1145.5, 527, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_111, 0, 1, 1);

    this.button_113 = new lib.Símbolo172();
    this.button_113.name = 'button_113';
    this.button_113.setTransform(1754.5, 143, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_113, 0, 1, 1);

    this.button_114 = new lib.Símbolo173();
    this.button_114.name = 'button_114';
    this.button_114.setTransform(1759.5, 137, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_114, 0, 1, 1);

    this.button_115 = new lib.Símbolo174();
    this.button_115.name = 'button_115';
    this.button_115.setTransform(1776.5, 144, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_115, 0, 1, 1);

    this.button_116 = new lib.Símbolo175();
    this.button_116.name = 'button_116';
    this.button_116.setTransform(1789.5, 140, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_116, 0, 1, 1);

    this.button_5 = new lib.Símbolo61();
    this.button_5.name = 'button_5';
    this.button_5.setTransform(1743.5, 156, 1, 1, 0, 0, 0, 79.5, 80);
    new cjs.ButtonHelper(this.button_5, 0, 1, 2, false, new lib.Símbolo61(), 3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.BT_COMENZAR }] })
        .to({ state: [{ t: this.exp_bt }] }, 36)
        .to({ state: [{ t: this.button_1 }, { t: this.button_2 }, { t: this.button_3 }, { t: this.button_4 }] }, 1)
        .to({ state: [{ t: this.button_7 }, { t: this.button_6 }] }, 1)
        .to({ state: [{ t: this.movieClip_8 }, { t: this.button_9 }] }, 1)
        .to({ state: [{ t: this.button_12 }, { t: this.button_11 }, { t: this.button_10 }] }, 1)
        .to({ state: [{ t: this.button_16 }, { t: this.button_15 }, { t: this.button_14 }, { t: this.button_13 }] }, 1)
        .to({ state: [{ t: this.instance }, { t: this.button_19 }, { t: this.button_18 }, { t: this.button_17 }] }, 1)
        .to({ state: [{ t: this.button_22 }, { t: this.button_21 }, { t: this.button_20 }] }, 1)
        .to({ state: [{ t: this.button_26 }, { t: this.button_25 }, { t: this.button_24 }, { t: this.button_23 }] }, 1)
        .to({ state: [{ t: this.button_27 }, { t: this.button_28 }, { t: this.button_29 }] }, 1)
        .to({ state: [{ t: this.button_31 }, { t: this.button_30 }, { t: this.button_32 }] }, 1)
        .to({ state: [{ t: this.button_33 }, { t: this.button_34 }, { t: this.button_35 }, { t: this.button_36 }] }, 1)
        .to({ state: [{ t: this.button_37 }, { t: this.button_38 }, { t: this.button_39 }, { t: this.button_40 }] }, 1)
        .to({ state: [{ t: this.button_44 }, { t: this.button_43 }, { t: this.button_42 }, { t: this.button_41 }] }, 1)
        .to({ state: [{ t: this.button_45 }] }, 1)
        .to({ state: [{ t: this.button_46 }] }, 1)
        .to({ state: [{ t: this.button_47 }] }, 1)
        .to({ state: [{ t: this.button_48 }, { t: this.button_49 }, { t: this.button_50 }, { t: this.button_51 }] }, 1)
        .to({ state: [{ t: this.button_53 }, { t: this.button_55 }, { t: this.button_52 }, { t: this.button_54 }] }, 1)
        .to({ state: [{ t: this.button_57 }, { t: this.button_59 }, { t: this.button_56 }, { t: this.button_58 }] }, 1)
        .to({ state: [{ t: this.button_61 }, { t: this.button_63 }, { t: this.button_60 }, { t: this.button_62 }] }, 1)
        .to({ state: [{ t: this.button_64 }] }, 1)
        .to({ state: [{ t: this.button_65 }] }, 1)
        .to({ state: [{ t: this.button_66 }, { t: this.button_67 }, { t: this.button_68 }] }, 1)
        .to({ state: [{ t: this.button_69 }] }, 1)
        .to({ state: [{ t: this.button_70 }, { t: this.button_71 }, { t: this.button_73 }, { t: this.button_72 }] }, 1)
        .to({ state: [{ t: this.button_74 }] }, 1)
        .to({ state: [{ t: this.button_75 }] }, 1)
        .to({ state: [{ t: this.button_76 }, { t: this.button_79 }, { t: this.button_78 }, { t: this.button_77 }] }, 1)
        .to({ state: [{ t: this.button_80 }, { t: this.button_81 }, { t: this.button_82 }, { t: this.button_83 }] }, 1)
        .to({ state: [{ t: this.button_84 }] }, 1)
        .to({ state: [{ t: this.button_85 }] }, 1)
        .to({ state: [{ t: this.button_86 }, { t: this.button_87 }, { t: this.button_88 }, { t: this.button_89 }] }, 1)
        .to({ state: [{ t: this.button_90 }, { t: this.button_91 }, { t: this.button_92 }, { t: this.button_93 }] }, 1)
        .to({ state: [{ t: this.button_95 }, { t: this.button_94 }, { t: this.button_97 }, { t: this.button_96 }] }, 1)
        .to({ state: [{ t: this.button_98 }] }, 1)
        .to({ state: [{ t: this.button_99 }] }, 1)
        .to({ state: [{ t: this.button_100 }, { t: this.button_102 }, { t: this.button_101 }] }, 1)
        .to({ state: [{ t: this.button_103 }] }, 1)
        .to(
          { state: [{ t: this.button_105 }, { t: this.button_107 }, { t: this.button_104 }, { t: this.button_106 }] },
          1
        )
        .to({ state: [{ t: this.button_108 }] }, 1)
        .to(
          { state: [{ t: this.button_111 }, { t: this.button_110 }, { t: this.button_109 }, { t: this.button_112 }] },
          1
        )
        .to({ state: [{ t: this.button_113 }] }, 1)
        .to({ state: [{ t: this.button_114 }] }, 1)
        .to({ state: [{ t: this.button_115 }] }, 1)
        .to({ state: [{ t: this.button_116 }] }, 1)
        .to({ state: [{ t: this.button_5 }] }, 1)
        .wait(1)
    );

    // Fondo
    this.instance_1 = new lib.ESC_INTRO();
    this.instance_1.setTransform(960, 540);

    this.instance_2 = new lib.ESC_EXP();
    this.instance_2.setTransform(960, 540);

    this.instance_3 = new lib.A1_1();
    this.instance_3.setTransform(960, 540);

    this.instance_4 = new lib.AP2_1();
    this.instance_4.setTransform(960, 540);

    this.instance_5 = new lib.Símbolo11();
    this.instance_5.setTransform(960, 540);

    this.instance_6 = new lib.Símbolo12();
    this.instance_6.setTransform(960, 540);

    this.instance_7 = new lib.Símbolo13();
    this.instance_7.setTransform(960, 540);

    this.instance_8 = new lib.Símbolo14();
    this.instance_8.setTransform(960, 540);

    this.instance_9 = new lib.Símbolo15();
    this.instance_9.setTransform(960, 540);

    this.instance_10 = new lib.Símbolo16();
    this.instance_10.setTransform(960, 540);

    this.instance_11 = new lib.Símbolo17();
    this.instance_11.setTransform(960, 0);

    this.instance_12 = new lib.Símbolo18();
    this.instance_12.setTransform(960, 0);

    this.instance_13 = new lib.Símbolo19();
    this.instance_13.setTransform(960, 0);

    this.instance_14 = new lib.Símbolo20();
    this.instance_14.setTransform(960, 0);

    this.instance_15 = new lib.Símbolo21();
    this.instance_15.setTransform(960, 540);

    this.instance_16 = new lib.Símbolo22();
    this.instance_16.setTransform(960, 540);

    this.instance_17 = new lib.Símbolo23();
    this.instance_17.setTransform(960, 540);

    this.instance_18 = new lib.Símbolo24();
    this.instance_18.setTransform(960, 540);

    this.instance_19 = new lib.Símbolo25();
    this.instance_19.setTransform(960, 540);

    this.instance_20 = new lib.Símbolo26();
    this.instance_20.setTransform(960, 540);

    this.instance_21 = new lib.MFB2_0002();

    this.instance_22 = new lib.MFB2_0001();

    this.instance_23 = new lib.MFB2_0000();

    this.instance_24 = new lib.Símbolo27();
    this.instance_24.setTransform(960, 540);

    this.instance_25 = new lib.Símbolo28();
    this.instance_25.setTransform(960, 540);

    this.instance_26 = new lib.Símbolo29();
    this.instance_26.setTransform(960, 540);

    this.instance_27 = new lib.Símbolo33();
    this.instance_27.setTransform(960, 540);

    this.instance_28 = new lib.Símbolo32();
    this.instance_28.setTransform(960, 540);

    this.instance_29 = new lib.Símbolo31();
    this.instance_29.setTransform(960, 540);

    this.instance_30 = new lib.Símbolo30();
    this.instance_30.setTransform(960, 540);

    this.instance_31 = new lib.Símbolo34();
    this.instance_31.setTransform(960, 540);

    this.instance_32 = new lib.Símbolo35();
    this.instance_32.setTransform(960, 540);

    this.instance_33 = new lib.Símbolo36();
    this.instance_33.setTransform(960, 540);

    this.instance_34 = new lib.Símbolo37();
    this.instance_34.setTransform(960, 540);

    this.instance_35 = new lib.Símbolo38();
    this.instance_35.setTransform(960, 540);

    this.instance_36 = new lib.Símbolo39();
    this.instance_36.setTransform(960, 540);

    this.instance_37 = new lib.Símbolo40();
    this.instance_37.setTransform(960, 540);

    this.instance_38 = new lib.Símbolo41();
    this.instance_38.setTransform(960, 540);

    this.instance_39 = new lib.Símbolo42();
    this.instance_39.setTransform(960, 540);

    this.instance_40 = new lib.Símbolo43();
    this.instance_40.setTransform(960, 540);

    this.instance_41 = new lib.Símbolo44();
    this.instance_41.setTransform(960, 540);

    this.instance_42 = new lib.Símbolo45();
    this.instance_42.setTransform(960, 540);

    this.instance_43 = new lib.Símbolo46();
    this.instance_43.setTransform(960, 540);

    this.instance_44 = new lib.Símbolo47();
    this.instance_44.setTransform(960, 540);

    this.instance_45 = new lib.Símbolo48();
    this.instance_45.setTransform(960, 540);

    this.instance_46 = new lib.Símbolo49();
    this.instance_46.setTransform(960, 540);

    this.instance_47 = new lib.Símbolo50();
    this.instance_47.setTransform(960, 540);

    this.instance_48 = new lib.Símbolo51();
    this.instance_48.setTransform(960, 540);

    this.instance_49 = new lib.Símbolo52();
    this.instance_49.setTransform(960, 540);

    this.instance_50 = new lib.Símbolo53();
    this.instance_50.setTransform(960, 540);

    this.instance_51 = new lib.Símbolo56();
    this.instance_51.setTransform(960, 540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_1 }, { t: this.instance_2 }] }, 36)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .to({ state: [{ t: this.instance_13 }] }, 1)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 1)
        .to({ state: [{ t: this.instance_17 }] }, 1)
        .to({ state: [{ t: this.instance_18 }] }, 1)
        .to({ state: [{ t: this.instance_19 }] }, 1)
        .to(
          {
            state: [{ t: this.instance_23 }, { t: this.instance_22 }, { t: this.instance_21 }, { t: this.instance_20 }],
          },
          1
        )
        .to({ state: [{ t: this.instance_24 }] }, 1)
        .to({ state: [{ t: this.instance_25 }] }, 1)
        .to({ state: [{ t: this.instance_26 }] }, 1)
        .to({ state: [{ t: this.instance_27 }] }, 1)
        .to({ state: [{ t: this.instance_28 }] }, 1)
        .to({ state: [{ t: this.instance_29 }] }, 1)
        .to({ state: [{ t: this.instance_30 }] }, 1)
        .to({ state: [{ t: this.instance_31 }] }, 1)
        .to({ state: [{ t: this.instance_32 }] }, 1)
        .to({ state: [{ t: this.instance_33 }] }, 1)
        .to({ state: [{ t: this.instance_34 }] }, 1)
        .to({ state: [{ t: this.instance_35 }] }, 1)
        .to({ state: [{ t: this.instance_36 }] }, 1)
        .to({ state: [{ t: this.instance_37 }] }, 1)
        .to({ state: [{ t: this.instance_38 }] }, 1)
        .to({ state: [{ t: this.instance_39 }] }, 1)
        .to({ state: [{ t: this.instance_40 }] }, 1)
        .to({ state: [{ t: this.instance_41 }] }, 1)
        .to({ state: [{ t: this.instance_42 }] }, 1)
        .to({ state: [{ t: this.instance_43 }] }, 1)
        .to({ state: [{ t: this.instance_44 }] }, 1)
        .to({ state: [{ t: this.instance_45 }] }, 1)
        .to({ state: [{ t: this.instance_46 }] }, 1)
        .to({ state: [{ t: this.instance_47 }] }, 1)
        .to({ state: [{ t: this.instance_48 }] }, 1)
        .to({ state: [{ t: this.instance_49 }] }, 1)
        .to({ state: [{ t: this.instance_50 }] }, 1)
        .to({ state: [{ t: this.instance_51 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = lib.AnMovieClip;

  console.dir(lib.proyecto);

  p.nominalBounds = new cjs.Rectangle(960, -540, 961, 1622);
  // library properties:
  lib.properties = propiedades;

  // bootstrap callback support:

  (lib.Stage = function (lienzo) {
    createjs.Stage.call(this, lienzo);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };

  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };

  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = (fnCallback) => {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['C88404EB63C09F4384FA986490E1C8D7'] = {
    getStage: () => exportRoot.stage,
    getLibrary: () => lib,
    getSpriteSheet: () => ss,
    getImages: () => img,
  };

  an.compositionLoaded = (id) => {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = (id) => an.compositions[id];

  an.makeResponsive = (isResp, respDim, isScale, scaleType, domContainers) => {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach((container) => {
        container.style.width = w * sRatio + 'px';
        container.style.height = h * sRatio + 'px';
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };

  an.handleSoundStreamOnTick = (event) => {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };

  an.handleFilterCache = (event) => {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (cacheInst.startFrame <= target.currentFrame && target.currentFrame <= cacheInst.endFrame) {
              cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
            }
          }
        }
      }
    }
  };
})(createjs, (AdobeAn = AdobeAn || {}));

var stage, exportRoot, fnStartAnimation;
const contenedor = document.getElementById('contenedorAnimacion');
const lienzo = document.getElementById('lienzo');
const dom_overlay_container = document.getElementById('dom_overlay_container');

function handleFileLoad(evt, comp) {
  console.log('imagen caragada');
  var images = comp.getImages();
  if (evt && evt.item.type == 'image') {
    images[evt.item.id] = evt.result;
  }
}
function handleComplete(evt, comp) {
  console.log('y yo que?');
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;

  for (let i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames,
    });
  }

  exportRoot = new lib.proyecto();
  stage = new lib.Stage(lienzo);
  stage.enableMouseOver();

  fnStartAnimation = () => {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);
  };

  AdobeAn.makeResponsive(false, 'both', false, 1, [lienzo, contenedor, dom_overlay_container]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}

const comp = AdobeAn.getComposition('C88404EB63C09F4384FA986490E1C8D7');
const loader = new createjs.LoadQueue(false);
const lib = comp.getLibrary();

loader.loadManifest(lib.properties.manifest);

loader.addEventListener('fileload', (evt) => {
  console.log('archivo cargado', evt);
  handleFileLoad(evt, comp);
});

loader.addEventListener('complete', (evt) => {
  console.log('cargado', evt);
  handleComplete(evt, comp);
});

loader.on(
  'complete',
  () => {
    console.log('completo');
  },
  this,
  true
);

loader.on(
  'fileload',
  () => {
    console.log('archivo');
  },
  this
);

loader.on(
  'progress',
  () => {
    console.log('proceso');
  },
  this
);

loader.on(
  'error',
  () => {
    console.log('error');
  },
  this,
  true
);

const prueba = new Image();
prueba.onload = () => {
  console.log(prueba);
};
prueba.src = '/imagenes/copiaMFA3GEN_0000.png';

console.log('..:: EnFlujo ::..');
