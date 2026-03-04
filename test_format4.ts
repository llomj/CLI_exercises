export const formatCodeSnippet = (text: string): string => {
  if (!text) return '';
  
  const isSimpleExpression = !text.includes('\n') && 
                             !/\b(def|class|if|for|while|with|try|except|finally|else|elif)\b/.test(text);
  
  if (isSimpleExpression) return text;
  if (text.includes('\n')) return text;
  
  let inString: string | null = null;
  let bracketDepth = 0;
  let currentLine = '';
  const initialLines: string[] = [];
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (!inString && (char === "'" || char === '"')) {
      inString = char;
      currentLine += char;
    } else if (inString === char && text[i-1] !== '\\') {
      inString = null;
      currentLine += char;
    } else if (!inString && (char === '[' || char === '(' || char === '{')) {
      bracketDepth++;
      currentLine += char;
    } else if (!inString && (char === ']' || char === ')' || char === '}')) {
      bracketDepth--;
      currentLine += char;
    } else if (!inString && bracketDepth === 0 && char === ':') {
      currentLine += char;
      initialLines.push(currentLine.trim());
      currentLine = '';
    } else if (!inString && bracketDepth === 0 && char === ';') {
      if (currentLine.trim()) initialLines.push(currentLine.trim());
      currentLine = '';
    } else {
      currentLine += char;
    }
  }
  if (currentLine.trim()) initialLines.push(currentLine.trim());

  let currentIndent = 0;
  const formattedLines: string[] = [];
  
  for (let i = 0; i < initialLines.length; i++) {
    let line = initialLines[i];
    
    // dedent before line
    if (/^(else|elif|except|finally)\b/.test(line)) {
      currentIndent = Math.max(0, currentIndent - 1);
    }
    
    if (currentIndent > 0) {
      if (/^(print|assert|obj\s*=|f\s*=|x\s*=|y\s*=|g\s*=|next\([^)]*\)|[a-z_]\w*\s*=\s*[A-Z])/.test(line) && !line.startsWith('self.')) {
         currentIndent = 0;
      }
      if (/^(class|import|from)\b/.test(line)) {
         currentIndent = 0;
      }
      if (line.match(/^[a-z_]\w*\(/) && !line.startsWith('self.')) {
        // Function calls often signify end of definition in one-liners
        if (!initialLines.slice(0, i).some(l => l.includes('def ' + line.split('(')[0]))) {
           currentIndent = 0;
        }
      }
    }
    
    formattedLines.push(' '.repeat(currentIndent * 4) + line);
    
    // indent after line
    if (line.endsWith(':')) {
      currentIndent++;
    } else if (/^(return|pass|break|continue)\b/.test(line)) {
      currentIndent = Math.max(0, currentIndent - 1);
    }
  }
  
  return formattedLines.join('\n');
};

console.log(formatCodeSnippet("def outer(): x = 1; def inner(): return x; return inner(); outer()"));
