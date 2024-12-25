export const assets = (url) => {
  return `/assets/${url}`;
};

export const urlize = (name) =>{
  return name.toLowerCase().replace(/\s+/g, "-");
}
