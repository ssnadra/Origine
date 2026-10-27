import * as React from 'react';
export interface Person { id?: string; name: string; born?: string; died?: string; living?: boolean; src?: string; father?: Person | null; mother?: Person | null; }
export interface PersonRowProps { person: Person; relation?: string; onClick?: () => void; trailing?: React.ReactNode; style?: React.CSSProperties; }
export declare function PersonRow(props: PersonRowProps): React.JSX.Element | null;
