import React from 'react';

const Typewriter = ({ text, className, speed = 50 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const currentViewPort = React.useRef(null);
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setHasStarted(true);
        observer.disconnect();
      });
    });
    if (currentViewPort.current) {
      observer.observe(currentViewPort.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  React.useEffect(() => {
    if (!hasStarted) return;
    
    setDisplayedText('')
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
      console.log(i);
    }, speed);
    
    return () => clearInterval(typingInterval);
  }, [hasStarted, text, speed]);


  return (
    <h2 ref={currentViewPort} className={className}>
      {displayedText}
      <span className="text-neutral-900/50 animate-blink">|</span>
    </h2>
  )
}

export default Typewriter