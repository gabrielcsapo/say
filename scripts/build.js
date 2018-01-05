const fs = require('fs');
const path = require('path');
const Symbols = require('./symbols');

const { emoji, alphabet_lower, alphabet_upper, numbers, mathamatical_operators } = Symbols;

let entry = {};

function compare(e, a) {
  let val = a.charCodeAt(0);
  let mapVal = 0;
  for(var i = 0; i < e.length; i++) {
    mapVal += e.charCodeAt(i);
  }

  let diff = Math.floor(mapVal / val).toString();
  // find the value closest to the last three digits
  let closest = parseInt(diff.substr(diff.length - 2, diff.length));
  let baseClosest = parseInt(val.toString().substr(val.toString().length - 2, val.toString().length));

  return { char: a, dev: closest - baseClosest };
}

alphabet_upper.forEach((a) => {
  emoji.forEach((e) => {
    if(!entry[e]) entry[e] = [];
    entry[e].push(compare(e, a));
  });
  mathamatical_operators.forEach((e) => {
    if(!entry[e]) entry[e] = [];
    entry[e].push(compare(e, a));
  });
});
numbers.forEach((a) => {
  emoji.forEach((e) => {
    if(!entry[e]) entry[e] = [];
    entry[e].push(compare(e, a));
  });
  mathamatical_operators.forEach((e) => {
    if(!entry[e]) entry[e] = [];
    entry[e].push(compare(e, a));
  });
});
alphabet_lower.forEach((a) => {
  emoji.forEach((e) => {
    if(!entry[e]) entry[e] = [];
    entry[e].push(compare(e, a));
  });
  mathamatical_operators.forEach((e) => {
    if(!entry[e]) entry[e] = [];
    entry[e].push(compare(e, a));
  });
});

let map = {};

Object.keys(entry).forEach((k) => {
  let winner = entry[k].reduce(function(prev, curr) {
    return (Math.abs(curr.dev - 0) < Math.abs(prev.dev - 0) ? curr : prev);
  });
  if(!map[winner.char]) map[winner.char] = [];
  map[winner.char].push(k);
});

fs.writeFileSync(path.resolve(__dirname, '..', 'map.json'), JSON.stringify(map));
