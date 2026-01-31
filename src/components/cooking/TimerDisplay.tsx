import { Timer, Pause, Play, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TimerDisplayProps {
  timeRemaining: number | null;
  duration: number;
  isTimerRunning: boolean;
  isTimerComplete: boolean;
  onToggle: () => void;
  onSkip: () => void;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const TimerDisplay = ({ 
  timeRemaining, 
  duration, 
  isTimerRunning, 
  isTimerComplete,
  onToggle,
  onSkip 
}: TimerDisplayProps) => {
  const displayTime = timeRemaining !== null ? timeRemaining : duration;
  const progress = timeRemaining !== null ? ((duration - timeRemaining) / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-4">
      {/* Circular progress timer */}
      <div className="relative w-20 h-20 flex-shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-muted/50"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
            className={isTimerComplete ? "text-secondary" : "text-primary"}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg font-bold font-display ${isTimerComplete ? 'text-secondary' : 'text-foreground'}`}>
            {formatTime(displayTime)}
          </span>
        </div>
      </div>

      {/* Controls */}
      {isTimerComplete ? (
        <span className="text-secondary font-medium text-sm">✓ Done!</span>
      ) : (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggle}
            className="gap-1.5"
          >
            {isTimerRunning ? (
              <><Pause className="w-3 h-3" /></>
            ) : (
              <><Play className="w-3 h-3" /></>
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onSkip}
            className="text-muted-foreground"
          >
            <SkipForward className="w-3 h-3" />
          </Button>
        </div>
      )}
    </div>
  );
};
