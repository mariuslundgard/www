const isDefined = (val: any) => typeof val !== "undefined";

// Recursively merge/replace default serializers with user-specified serializers
export function mergeSerializers(defaultSerializers: any, userSerializers: any) {
  return Object.keys(defaultSerializers).reduce((acc: any, key: any) => {
    const type = typeof defaultSerializers[key];
    if (type === "function") {
      acc[key] = isDefined(userSerializers[key]) ? userSerializers[key] : defaultSerializers[key];
    } else if (type === "object") {
      acc[key] = { ...defaultSerializers[key], ...userSerializers[key] };
    } else {
      acc[key] =
        typeof userSerializers[key] === "undefined"
          ? defaultSerializers[key]
          : userSerializers[key];
    }
    return acc;
  }, {});
}
