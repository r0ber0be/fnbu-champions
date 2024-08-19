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
export default function Admin() {
  return (
    <div className="justify-center">
      <Table className="max-w-screen-2xl shadow-lg">
        <TableHeader>
          <TableRow className="text-xl tracking-wide">
            <TableHead className="text-center w-[70px] sm:w-[90px] md:w-[130px]">Partida</TableHead>
            <TableHead className="text-center w-[90px] sm:w-[110px] md:w-[130px]">Modo</TableHead>
            <TableHead className="text-center">Vencedor</TableHead>
            <TableHead className="text-center w-[150px] sm:w-[200px] md:w-[250px]">Prêmio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-extrabold text-center text-xl sm:text-2xl md:text-4xl">
          <TableRow>
            <TableCell className="bg-black text-white">#{1}</TableCell>
            <TableCell>Solo, Duo</TableCell>
            <TableCell className="font-semibold uppercase transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-300 via-amber-500 to-red-700 duration-150">
              ???
            </TableCell>
            <TableCell>
              00,00
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ) 
}