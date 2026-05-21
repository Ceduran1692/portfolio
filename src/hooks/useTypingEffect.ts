'use client';

import { useEffect, useState } from 'react';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTypingEffect({ text, speed = 50, delay = 0 }: UseTypingEffectOptions) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(false);

    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let index = 0;

      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return { displayedText, isTyping };
}