tmp = tools.js2xml({input}, {
  compact: true});
console.log(tmp);

console.log(
  tools.xml2js(tmp, { compact: true })
);
