const flattenDemosObject = types => {
  const variants = [];

  if (!types) {
    return variants;
  }

  Object.keys(types).forEach(type => {
    if (typeof types[type] === 'object') {
      Object.keys(types[type]).forEach(variant => {
        if (typeof types[type][variant] === 'object' && !types[type][variant].name) {
          Object.keys(types[type][variant]).forEach(modifier => {
            if (typeof types[type][variant][modifier] === 'object' && types[type][variant][modifier].name) {
              variants.push(types[type][variant][modifier]);
            }
          });
        } else if (typeof types[type][variant] === 'object' && types[type][variant].name) {
          variants.push(types[type][variant]);
        }
      });
    }
  });

  return variants;
};

module.exports = {
  flattenDemosObject,
};
