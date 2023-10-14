import React, { useState } from 'react';
const WordCounter = () => {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
  
    const handleTextChange = (event) => {
      const inputText = event.target.value;
      setText(inputText);
  
      const words = inputText.trim().split(/\s+/);
      setWordCount(words.length);
    };

    return ( 
        <div className='box'>
           <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Enter your paragraph here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
        </div>
     );
}
 
export default WordCounter;

// echo "# task1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/vsaisha1712/task1.git
// git push -u origin main