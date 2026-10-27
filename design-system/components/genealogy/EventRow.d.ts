import * as React from 'react';
export interface EventRowProps { year: string; title: string; place?: string; detail?: string; icon?: string; last?: boolean; style?: React.CSSProperties; }
export declare function EventRow(props: EventRowProps): React.JSX.Element | null;
