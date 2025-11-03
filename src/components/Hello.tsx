import React from 'react'

type Props = {
  name: string
}

export default function Hello({ name }: Props): JSX.Element {
  return (
    <section>
      <p>Hello, {name}! This is a basic React + TypeScript component.</p>
    </section>
  )
}
