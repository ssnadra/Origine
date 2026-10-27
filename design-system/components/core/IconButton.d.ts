import * as React from 'react';
export interface IconButtonProps { icon: string; label: string; variant?: 'ghost' | 'secondary' | 'primary'; size?: 'md' | 'sm'; badge?: number | string; onClick?: () => void; disabled?: boolean; style?: React.CSSProperties; }
export declare function IconButton(props: IconButtonProps): React.JSX.Element | null;
