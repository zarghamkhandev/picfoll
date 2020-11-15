class MappedImage {
  /**
   * @param {Area[]} areas
   * @param {string} image
   */
  constructor(areas, image) {
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
}
