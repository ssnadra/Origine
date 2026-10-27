import * as React from 'react';
export interface CheckboxProps { label: string; description?: string; checked?: boolean; onChange?: (v: boolean) => void; disabled?: boolean; style?: React.CSSProperties; }
export declare function Checkbox(props: CheckboxProps): React.JSX.Element | null;
