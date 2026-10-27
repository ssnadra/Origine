import * as React from 'react';
export interface BottomNavProps { items: { id: string; label: string; icon: string }[]; value: string; onChange?: (id: string) => void; style?: React.CSSProperties; }
export declare function BottomNav(props: BottomNavProps): React.JSX.Element | null;
