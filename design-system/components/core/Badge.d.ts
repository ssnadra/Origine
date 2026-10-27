import * as React from 'react';
export interface BadgeProps { tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info'; children?: React.ReactNode; style?: React.CSSProperties; }
export declare function Badge(props: BadgeProps): React.JSX.Element | null;
