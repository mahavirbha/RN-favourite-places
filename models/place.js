class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat:0.15141, lng:129.98}
    this.id = new Date().toString() + Math.random().toString();
  }
}
