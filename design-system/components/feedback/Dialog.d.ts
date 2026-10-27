import * as React from 'react';
export interface DialogProps { open: boolean; title: string; description?: string; children?: React.ReactNode; actions?: React.ReactNode; onClose?: () => void; sheet?: boolean; width?: number; }
export declare function Dialog(props: DialogProps): React.JSX.Element | null;
