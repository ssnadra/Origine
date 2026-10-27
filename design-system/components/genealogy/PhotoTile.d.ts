import * as React from 'react';
export interface PhotoTileProps { src?: string; caption?: string; meta?: string; aspect?: string; people?: number; onClick?: () => void; style?: React.CSSProperties; }
export declare function PhotoTile(props: PhotoTileProps): React.JSX.Element | null;
