import { Title } from '@solidjs/meta'
import Counter from '~/components/Counter'
import { cache } from '@solidjs/router'
import { getRequestEvent } from 'solid-js/web'

const getSomething = cache(async () => {
  'use server'
  const event = getRequestEvent()
  // try accessing event.local

  return null
}, 'message')

export const route = {
  load: () => getSomething(),
}

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{' '}
        <a href='https://start.solidjs.com' target='_blank'>
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  )
}
