function problem4(word: string): string {
  var answer: string = "";
  const toLower: number = "a".charCodeAt(0) - "A".charCodeAt(0);

  for (const txt of word) {
    if (!txt.match(/[a-z|A-Z]$/)) {
      answer += txt;
      continue;
    }
    const upper: string = txt.toUpperCase();
    const ascii: number = getNewAscii(upper);

    if (upper === txt) answer += String.fromCharCode(ascii);
    else answer += String.fromCharCode(ascii + toLower);
  }
  return answer;
}

function getNewAscii(upper: string): number {
  return -upper.charCodeAt(0) + "A".charCodeAt(0) + "Z".charCodeAt(0);
}

module.exports = problem4;
