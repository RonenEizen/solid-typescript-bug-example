/// <reference types="@solidjs/start/env" />

declare module '@solidjs/start/server' {
  interface RequestEventLocals {
    n: number
    s: string
  }
}
