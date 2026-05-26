import React from 'react';

const Typewriter = ({ text, speed = 50 }: TypewriterProps) => {
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
    <h2 className="text-lg font-display h-15 laptop:text-lg font-bold leading-6 text-primary-600 mt-4 ml-1 laptop:mt-7">
      {displayedText}
    </h2>
  )
}

export default Typewriter