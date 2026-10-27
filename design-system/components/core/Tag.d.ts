import * as React from 'react';
export interface TagProps { icon?: string; selected?: boolean; onClick?: () => void; onRemove?: () => void; children?: React.ReactNode; style?: React.CSSProperties; }
export declare function Tag(props: TagProps): React.JSX.Element | null;
