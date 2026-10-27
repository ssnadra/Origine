import * as React from 'react';
export interface TabsProps { items: { id: string; label: string; count?: number }[]; value: string; onChange?: (id: string) => void; style?: React.CSSProperties; }
export declare function Tabs(props: TabsProps): React.JSX.Element | null;
