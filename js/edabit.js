function comp(str1, str2) {
  return true;
}

const results = [];
results[0] = comp('AB', 'CD'); // ➞ true

results[1] = comp('ABC', 'DE'); // ➞ false

results[2] = comp('hello', 'edabit'); // ➞ false

console.log('results ===', results);
