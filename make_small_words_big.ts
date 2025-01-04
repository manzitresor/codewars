function processText(text:string) {
    const vowels = "aeiouAEIOU";
    const words = text.split(' ');
    const processedWords: string[] = [];

    for (let word of words) {
        if (word.length <= 3) {
            processedWords.push(word.toUpperCase());
        } else {
            let processedWord = '';
            for (let char of word) {
                if (!vowels.includes(char)) {
                    processedWord += char;
                }
            }
            processedWords.push(processedWord);
        }
    }

    return processedWords.join(' ');
}

// Example usage
const inputText = "The quick brown fox jumps over the lazy dog";
const outputText = processText(inputText);
console.log(outputText);
