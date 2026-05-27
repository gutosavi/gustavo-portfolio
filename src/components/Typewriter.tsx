import React from 'react';

const Typewriter = ({ text, className, speed = 50 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = React.useState('');

  React.useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <h2 className={className}>
      {displayedText}
    </h2>
  )
}

export default Typewriter