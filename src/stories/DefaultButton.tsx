import React from 'react';

type Props = { label: string };
export default function DefaultButton(p: Props) {
    return <button>{p.label}</button>
}
