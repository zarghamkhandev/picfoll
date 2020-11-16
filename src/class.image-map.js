class ImageMap {
  /**
   * @param {Area[]} areas
   * @param {string} image
   */
  constructor(areas = [], image) {
    this.image = image;
    this.areas = areas;
  }

  addArea(area) {
    this.areas.push(area);
  }
}
