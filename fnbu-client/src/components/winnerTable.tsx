import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { converteModo } from "@/lib/enumModos"
import { converteValorBRL } from "@/lib/utils"

type Partida = {
  id: number,
  modo: number,
  vencedor?: string,
  premio: number
}

type Edicao = {
  edicao: string,
  partidas: [Partida]
}
export function WinnersTable(props: Edicao) {
  const { edicao, partidas } = props
  return (
    <div className="justify-center">
      <Table className="max-w-screen-2xl shadow-lg">
        {
          partidas[0].vencedor != null
          ? <TableCaption className="tracking-wide md:text-xl">Parabéns a todos os vencedores da edição { edicao } da FNBU!</TableCaption>
          : <TableCaption className="tracking-wide md:text-xl">Boa sorte para os competidores da edição { edicao } da FNBU!</TableCaption>
        }  
        <TableHeader>
          <TableRow className="text-xl tracking-wide">
            <TableHead className="text-center w-[70px] sm:w-[90px] md:w-[130px]">Partida</TableHead>
            <TableHead className="text-center w-[90px] sm:w-[110px] md:w-[130px]">Modo</TableHead>
            <TableHead className="text-center">Vencedor</TableHead>
            <TableHead className="text-center w-[150px] sm:w-[200px] md:w-[250px]">Prêmio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-extrabold text-center text-xl sm:text-2xl md:text-4xl">
          {partidas.map((partida, key: number) => (
            <TableRow key={partida.id}>
              <TableCell className="bg-black text-white">#{key+1}</TableCell>
              <TableCell>{converteModo(partida.modo)}</TableCell>
              <TableCell className="font-semibold uppercase transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-300 via-amber-500 to-red-700 duration-150">
                {partida.vencedor ?? "???"}
              </TableCell>
              <TableCell>
                { converteValorBRL(partida.premio) }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ) 
}