import * as React from 'react';
export interface SelectProps { label?: string; hint?: string; options: (string | { value: string; label: string })[]; value?: string; onChange?: (v: string) => void; placeholder?: string; style?: React.CSSProperties; }
export declare function Select(props: SelectProps): React.JSX.Element | null;
