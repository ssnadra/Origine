import * as React from 'react';
export interface AvatarStackProps { people: { name: string; src?: string }[]; max?: number; size?: number; label?: string; style?: React.CSSProperties; }
export declare function AvatarStack(props: AvatarStackProps): React.JSX.Element | null;
