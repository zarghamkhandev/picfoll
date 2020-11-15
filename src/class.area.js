class Area {
  /**
   *
   * @param {string} shape the type of area
   * @param {int[]} coords the list of coordinates
   * @param {string} href the link this area is going to point to
   */
  constructor(shape = 'rect', coords = [], href = '') {
    this.shape = shape;
    this.coords = coords;
    this.href = href;
  }

  addCoord(x, y) {
    this.coords.push([x, y]);
  }

  sethref(url) {
    this.href = url;
  }

  setshape(type) {
    this.shape = type;
  }
}
