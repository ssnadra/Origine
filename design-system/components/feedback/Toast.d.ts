import * as React from 'react';
export interface ToastProps { tone?: 'neutral' | 'success' | 'warning' | 'danger'; message: string; actionLabel?: string; onAction?: () => void; onClose?: () => void; style?: React.CSSProperties; }
export declare function Toast(props: ToastProps): React.JSX.Element | null;
