import * as React from 'react';
/**
 * @startingPoint section="Controls" subtitle="Primary, secondary, ghost and accent buttons" viewport="700x200"
 */
export interface ButtonProps { variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger'; size?: 'md' | 'sm'; icon?: string; iconRight?: string; full?: boolean; disabled?: boolean; type?: 'button' | 'submit'; onClick?: () => void; children?: React.ReactNode; style?: React.CSSProperties; }
export declare function Button(props: ButtonProps): React.JSX.Element | null;
