'use client';

import { GiCoffeeBeans } from 'react-icons/gi';

interface BeanDividerProps {
    color?: string;
    margin?: string;
}

export default function BeanDivider({ color = 'var(--c-orange)', margin = '12px 0' }: BeanDividerProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin }}>
            {[0.5, 0.8, 1, 0.8, 0.5].map((op, i) => (
                <GiCoffeeBeans 
                    key={i} 
                    style={{ 
                        color: color, 
                        opacity: op, 
                        fontSize: i === 2 ? '18px' : '13px' 
                    }} 
                />
            ))}
        </div>
    );
}
