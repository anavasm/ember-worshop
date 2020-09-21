import Mixin from '@ember/object/mixin';

const serializeName = (name) => {
  const result = name.replace(' ', '+');
  return result;
}

const getUrl = (query) => {
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export default Mixin.create({
  actions: {
    openMap(name) {
      const serializedName = serializeName(name);
      const url = getUrl(serializedName);

      window.open(url, '_blank');
    }
  }
});
