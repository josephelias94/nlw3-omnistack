import Images from '../models/Images';

export default {
  render(images: Images) {
    return {
      id: images.id,
      url: `http://10.0.0.110:3333/uploads/${images.path}`,
    };
  },
  renderMany(images: Images[]) {
    return images.map((image) => this.render(image));
  },
};
