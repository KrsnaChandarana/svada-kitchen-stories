import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Timer, Pause, Play, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CookingAnimation } from './CookingAnimation';
import type { CookingStep } from '@/data/recipes';

interface CookingModeProps {
  recipeName: string;
  steps: CookingStep[];
  onClose: () => void;
}

export const CookingMode = ({ recipeName, steps, onClose }: CookingModeProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const navigate = useNavigate();

  const step = steps[currentStep];
  const hasTimer = step.duration && step.duration > 0;

  // Timer logic
  useEffect(() => {
    if (hasTimer && timeRemaining === null) {
      setTimeRemaining(step.duration!);
      setIsTimerRunning(true);
      setIsTimerComplete(false);
    }
  }, [currentStep, hasTimer, step.duration, timeRemaining]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isTimerRunning && timeRemaining !== null && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev === null || prev <= 1) {
            setIsTimerRunning(false);
            setIsTimerComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const goToNextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      setTimeRemaining(null);
      setIsTimerRunning(false);
      setIsTimerComplete(false);
    }
  }, [currentStep, steps.length]);

  const goToPrevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setTimeRemaining(null);
      setIsTimerRunning(false);
      setIsTimerComplete(false);
    }
  }, [currentStep]);

  const toggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };

  const skipTimer = () => {
    setTimeRemaining(0);
    setIsTimerRunning(false);
    setIsTimerComplete(true);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-cream flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border bg-background/80 backdrop-blur-sm">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h1 className="font-display text-xl font-bold text-foreground">{recipeName}</h1>
          <p className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>
        
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Progress bar */}
      <div className="h-1 bg-muted">
        <div 
          className="h-full bg-gradient-warm transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in" key={currentStep}>
          {/* Step indicator */}
          <div className="step-indicator mx-auto">
            {step.id}
          </div>

          {/* Step title */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {step.title}
          </h2>

          {/* Animation */}
          <div className="flex justify-center">
            <CookingAnimation type={step.animation} />
          </div>

          {/* Instruction */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            {step.instruction}
          </p>

          {/* Timer */}
          {hasTimer && (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Timer className="w-5 h-5" />
                <span className="text-sm">Timed Step</span>
              </div>
              
              <div className={`text-5xl font-display font-bold ${isTimerComplete ? 'text-secondary animate-glow' : 'text-primary'}`}>
                {timeRemaining !== null ? formatTime(timeRemaining) : formatTime(step.duration!)}
              </div>

              {isTimerComplete ? (
                <p className="text-secondary font-medium animate-pulse">
                  ✓ Timer complete! Ready for next step
                </p>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={toggleTimer}
                    className="gap-2"
                  >
                    {isTimerRunning ? (
                      <>
                        <Pause className="w-4 h-4" /> Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" /> Resume
                      </>
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={skipTimer}
                    className="gap-2 text-muted-foreground"
                  >
                    <SkipForward className="w-4 h-4" /> Skip
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Navigation */}
      <footer className="p-6 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={goToPrevStep}
            disabled={currentStep === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          {currentStep === steps.length - 1 ? (
            <Button
              size="lg"
              onClick={onClose}
              className="btn-warm flex-1 max-w-xs"
            >
              🎉 Finish Cooking
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={goToNextStep}
              className="btn-warm flex-1 max-w-xs gap-2"
            >
              Next Step
              <ChevronRight className="w-5 h-5" />
            </Button>
          )}

          <Button
            variant="ghost"
            size="lg"
            onClick={goToNextStep}
            disabled={currentStep === steps.length - 1}
            className="gap-2 opacity-0 pointer-events-none"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
};
