import { useEffect, useState } from "react"

const AnimateText = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const texts = [
    'I turn ideas into interactive reality',
    'I bring visions to life through code',
    'I build robust and scalable products',
    'I am big on clean reusable code.'
  ]
  const intervalTime = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedText.length < texts[index].length) {
        setDisplayedText((prevText) => prevText + texts[index][displayedText.length]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayedText('');
        });
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [displayedText]);

  return (
    <div>
      {displayedText} _
    </div>
  )
}

export default AnimateText