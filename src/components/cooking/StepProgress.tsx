import type { CookingStep } from '@/data/recipes';
import { cn } from '@/lib/utils';

interface StepProgressProps {
  steps: CookingStep[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

export const StepProgress = ({ steps, currentStep, onStepClick }: StepProgressProps) => {
  return (
    <div className="flex items-center gap-1 overflow-x-auto py-2 px-1 scrollbar-hide">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        
        return (
          <button
            key={step.id}
            onClick={() => onStepClick(index)}
            className={cn(
              "flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full transition-all text-sm font-medium",
              isActive && "bg-primary text-primary-foreground shadow-md scale-105",
              isCompleted && "bg-secondary/30 text-secondary",
              !isActive && !isCompleted && "bg-muted/50 text-muted-foreground hover:bg-muted"
            )}
          >
            <span className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold",
              isActive && "bg-primary-foreground text-primary",
              isCompleted && "bg-secondary text-secondary-foreground",
              !isActive && !isCompleted && "bg-muted-foreground/30 text-muted-foreground"
            )}>
              {isCompleted ? '✓' : step.id}
            </span>
            <span className="hidden sm:inline truncate max-w-[80px]">
              {step.title.split(' ').slice(0, 2).join(' ')}
            </span>
          </button>
        );
      })}
    </div>
  );
};
