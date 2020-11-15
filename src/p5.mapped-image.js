const mappedImageGen = (p) => {
  const map = new MappedImage();
  let tempArea = new Area();

  p.setup = () => {
    p.createCanvas(400, 300);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      tempArea.updateLastCoord(p.mouseX, p.mouseY);
    }
    p.background(200);
    p.fill(0);
    const allAreas = map.areas.concat([tempArea]);
    allAreas.forEach((area) => {
      if (area.shapeExists()) {
        p.rect(
          area.coords[0].x,
          area.coords[0].y,
          area.coords[1].x,
          area.coords[1].y
        );
      }
    });
  };

  p.mousePressed = () => {
    tempArea.initAs('rect', p.mouseX, p.mouseY);
  };

  p.mouseReleased = () => {
    map.addArea(tempArea);
    tempArea = new Area();
  };
};
