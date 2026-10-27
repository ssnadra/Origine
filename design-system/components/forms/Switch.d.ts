import * as React from 'react';
export interface SwitchProps { label: string; description?: string; checked?: boolean; onChange?: (v: boolean) => void; disabled?: boolean; style?: React.CSSProperties; }
export declare function Switch(props: SwitchProps): React.JSX.Element | null;
