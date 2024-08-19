export enum Modo {
  Solo = 'Solo',
  Duo = 'Duo',
}

export function converteModo(modo: number) {
  if(modo === 1) return Modo.Solo
  return Modo.Duo
}