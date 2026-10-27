import * as React from 'react';
/**
 * @startingPoint section="Forms" subtitle="Labelled inputs, select, checkbox, radio, switch" viewport="700x360"
 */
export interface InputProps { label?: string; hint?: string; error?: string; icon?: string; multiline?: boolean; rows?: number; value?: string; placeholder?: string; onChange?: (e: any) => void; type?: string; style?: React.CSSProperties; }
export declare function Input(props: InputProps): React.JSX.Element | null;
