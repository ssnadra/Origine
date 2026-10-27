import * as React from 'react';
export interface RadioProps { label: string; description?: string; name: string; value: string; checked?: boolean; onChange?: (v: string) => void; disabled?: boolean; style?: React.CSSProperties; }
export declare function Radio(props: RadioProps): React.JSX.Element | null;
