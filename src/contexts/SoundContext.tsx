import React, { createContext, useContext, ReactNode } from 'react';

interface SoundContextType {
  playTapSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSound = (): SoundContextType => {
  const ctx = useContext(SoundContext);
  return ctx ?? { playTapSound: () => {} };
};

interface SoundProviderProps {
  children: ReactNode;
  soundEnabled: boolean;
  onPlay: () => void;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children, soundEnabled, onPlay }) => {
  const playTapSound = () => {
    if (soundEnabled) onPlay();
  };

  return (
    <SoundContext.Provider value={{ playTapSound }}>
      {children}
    </SoundContext.Provider>
  );
};
