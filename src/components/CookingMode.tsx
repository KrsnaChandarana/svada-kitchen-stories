import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CookingAnimation } from './CookingAnimation';
import { StepProgress } from './cooking/StepProgress';
import { TimerDisplay } from './cooking/TimerDisplay';
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

  const goToStep = useCallback((index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStep(index);
      setTimeRemaining(null);
      setIsTimerRunning(false);
      setIsTimerComplete(false);
    }
  }, [steps.length]);

  const goToNextStep = useCallback(() => {
    goToStep(currentStep + 1);
  }, [currentStep, goToStep]);

  const goToPrevStep = useCallback(() => {
    goToStep(currentStep - 1);
  }, [currentStep, goToStep]);

  const toggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };

  const skipTimer = () => {
    setTimeRemaining(0);
    setIsTimerRunning(false);
    setIsTimerComplete(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-cream flex flex-col h-screen overflow-hidden">
      {/* Compact Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/90 backdrop-blur-sm flex-shrink-0">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Close cooking mode"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <h1 className="font-display text-lg font-bold text-foreground">{recipeName}</h1>
        </div>
        
        <div className="w-9" />
      </header>

      {/* Step Progress Bar */}
      <div className="border-b border-border bg-background/50 px-2 flex-shrink-0">
        <StepProgress 
          steps={steps} 
          currentStep={currentStep} 
          onStepClick={goToStep}
        />
      </div>

      {/* Main content - Compact single view */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 min-h-0">
        <div className="w-full max-w-xl flex flex-col items-center gap-4" key={currentStep}>
          {/* Row 1: Step indicator + Title */}
          <div className="text-center">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-2">
              {step.id}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {step.title}
            </h2>
          </div>

          {/* Row 2: Animation (compact) */}
          <div className="flex-shrink-0">
            <CookingAnimation type={step.animation} />
          </div>

          {/* Row 3: Instruction */}
          <p className="text-base md:text-lg text-muted-foreground text-center leading-relaxed max-w-md">
            {step.instruction}
          </p>

          {/* Row 4: Timer (if applicable) - Inline compact */}
          {hasTimer && (
            <div className="flex items-center justify-center mt-2">
              <TimerDisplay
                timeRemaining={timeRemaining}
                duration={step.duration!}
                isTimerRunning={isTimerRunning}
                isTimerComplete={isTimerComplete}
                onToggle={toggleTimer}
                onSkip={skipTimer}
              />
            </div>
          )}
        </div>
      </main>

      {/* Compact Navigation Footer */}
      <footer className="px-4 py-3 border-t border-border bg-background/90 backdrop-blur-sm flex-shrink-0">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
          <Button
            variant="outline"
            size="default"
            onClick={goToPrevStep}
            disabled={currentStep === 0}
            className="gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </Button>

          {currentStep === steps.length - 1 ? (
            <Button
              size="default"
              onClick={onClose}
              className="btn-warm flex-1 max-w-[200px]"
            >
              🎉 Finish
            </Button>
          ) : (
            <Button
              size="default"
              onClick={goToNextStep}
              className="btn-warm flex-1 max-w-[200px] gap-1.5"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}

          <div className="text-sm text-muted-foreground font-medium">
            {currentStep + 1}/{steps.length}
          </div>
        </div>
      </footer>
    </div>
  );
};
