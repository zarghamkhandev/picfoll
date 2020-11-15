const mappedImageGen = (p) => {
  const testArea = new Area('rect');
  testArea.addCoord(10, 10);
  testArea.addCoord(50, 50);

  const map = new MappedImage([testArea]);
  p.setup = () => {
    p.createCanvas(400, 300);
  };

  p.draw = () => {
    p.background(200);
    p.fill(0);
    map.areas.forEach((area) => {
      p.rect(
        area.coords[0][0],
        area.coords[0][1],
        area.coords[1][0],
        area.coords[1][1]
      );
    });
  };

  p.mousePressed = () => {
    p.rect(10, 10, p.mouseX, p.mouseY);
  };
};
