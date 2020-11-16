const imageMapCreator = (p) => {
  p.map = new ImageMap();
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
    const allAreas = p.map.areas.concat([tempArea]);
    allAreas.forEach((area) => {
      if (area.isValidShape()) {
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
    if (p.mouseIsHover()) tempArea.initAs('rect', p.mouseX, p.mouseY);
  };

  p.mouseReleased = () => {
    if (tempArea.isValidShape()) p.map.addArea(tempArea);
    tempArea = new Area();
  };

  p.mouseIsHover = () => {
    return (
      p.mouseX <= p.width &&
      p.mouseX >= 0 &&
      p.mouseY <= p.height &&
      p.mouseY >= 0
    );
  };
};
