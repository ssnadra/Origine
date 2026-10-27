import * as React from 'react';
export interface Person { id?: string; name: string; born?: string; died?: string; living?: boolean; src?: string; father?: Person | null; mother?: Person | null; }
export interface PersonNodeProps { person?: Person | null; selected?: boolean; size?: 'md' | 'sm'; onClick?: () => void; addLabel?: string; onAdd?: () => void; style?: React.CSSProperties; }
export declare function PersonNode(props: PersonNodeProps): React.JSX.Element | null;
