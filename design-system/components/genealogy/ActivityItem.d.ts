import * as React from 'react';
export interface ActivityItemProps { who: { name: string; src?: string }; action: string; target?: string; time: string; preview?: React.ReactNode; onClick?: () => void; style?: React.CSSProperties; }
export declare function ActivityItem(props: ActivityItemProps): React.JSX.Element | null;
