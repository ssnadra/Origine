import * as React from 'react';
export interface CardProps { variant?: 'outlined' | 'raised' | 'sunken'; padding?: number | string; selected?: boolean; onClick?: () => void; children?: React.ReactNode; style?: React.CSSProperties; }
export declare function Card(props: CardProps): React.JSX.Element | null;
