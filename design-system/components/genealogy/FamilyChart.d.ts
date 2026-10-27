import * as React from 'react';
export interface ChartPerson { id: string; name: string; born?: string; died?: string; living?: boolean; src?: string; father?: string | null; mother?: string | null; spouse?: string | string[]; children?: string[]; }
/**
 * @startingPoint section="Family tree" subtitle="Focus-centred family chart with degrees of separation" viewport="900x560"
 */
export interface FamilyChartProps { people: Record<string, ChartPerson>; focusId?: string; defaultFocusId?: string; onFocus?: (id: string) => void; degree?: number; defaultDegree?: number; onDegreeChange?: (n: number) => void; onAdd?: (focusId: string, role: 'father' | 'mother') => void; minDegree?: number; maxDegree?: number; height?: number | string; style?: React.CSSProperties; }
export declare function FamilyChart(props: FamilyChartProps): React.JSX.Element;
