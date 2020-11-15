class MappedImage {
  /**
   *
   *
   * @param {string} image
   * @param {Area[]} areas
   */
  constructor(id, image, areas) {
    this.id = id;
    this.image = image;
    this.areas = areas;
    this.tempA = null;
  }

  addArea() {
    this.areas.push(area);
  }
  drawArea(x, y) {
    if (this.tempA === null) this.tempA = new Area('rect', [x, y]);
    else this.tempA.addCoord(x, y);
  }

  setEvents() {
    const html = document.getElementById(this.id);
    const self = this;
    html.onmousedown = (e) => {
      self.drawArea(e.offsetX, e.offsetY);
    };
  }
}
