import * as React from 'react';
export interface StepperProps { value: number; min?: number; max?: number; step?: number; onChange?: (v: number) => void; label?: string; decLabel?: string; incLabel?: string; style?: React.CSSProperties; }
export declare function Stepper(props: StepperProps): React.JSX.Element;
