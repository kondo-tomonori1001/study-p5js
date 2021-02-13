import p5, { Color } from 'p5';


const sketch1 = (p:p5) => {
  const color1 = p.color("#fffbe3");
  const color2 = p.color("#24495c");
  let color1amount = 1
  // キャンバスの初期化
  p.setup = () => {
    p.createCanvas(p.windowWidth,p.windowHeight);
    p.angleMode(p.DEGREES);
    p.noStroke;
    p.background('#131821');
    // 要素が重なった時の表示方法
    // LIGHTESTは重ねたときに各RGB値の値が大きい方を新たなRGB値にして表示
    p.blendMode(p.LIGHTEST);
  }
  //描画 
  p.draw = () => {
    p.fill(p.lerpColor(color2,color1,color1amount));
    // 画面中央を原点に
    p.translate(p.width / 2, p.height / 2);
    // フレーム数分（1フレームあたり13度）回転させる
    p.rotate(p.frameCount * 13);
    p.ellipse(p.frameCount / 2, 0,p.frameCount, p.frameCount / 3);
    p.rotate(p.frameCount * 13);
    color1amount *= 0.995;
  }
}

const sketch2 = (p:p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth,p.windowHeight);
  }

  p.draw = () => {
    p.background(220);
    p.ellipse(50,50,80,80);
  }
}


new p5(sketch1,'canvas1');
new p5(sketch2,'canvas2');