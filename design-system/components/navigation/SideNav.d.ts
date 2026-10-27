import * as React from 'react';
export interface SideNavProps { items: { id: string; label: string; icon: string; badge?: number | string }[]; value: string; onChange?: (id: string) => void; header?: React.ReactNode; footer?: React.ReactNode; style?: React.CSSProperties; }
export declare function SideNav(props: SideNavProps): React.JSX.Element | null;
