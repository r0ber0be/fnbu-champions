import { WinnersTable } from "@/components/winnerTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Edições',
}

type Partida = {
  id: number,
  modo: number,
  vencedor?: string,
  premio: number
}

type Edicao = {
  id: string,
  edicao: string,
  partidas: [Partida]
}

export default async function EdicoesFNBU() {
  const edicoes = await fetch('http://localhost:5000/api/fnbu/edicoes', {
    cache: "no-cache"
  }).then(data => { return data.json() }).catch((err) => console.log('error', err))
  
  if(!edicoes) {
    return <div className="text-center text-2xl sm:text-4xl mt-56 align-middle">Nenhuma edição encontrada</div>
  }

  return (
    <div className="edicoes-bg">
      {edicoes.map((fnbuEdicao: Edicao) => (
        <div key={fnbuEdicao.id}>
          <div className="text-center bg-black p-2 pt-4 text-white leading-3">
            <h6 className="mb-2 tracking-widest text-lg uppercase">Edição de { fnbuEdicao.edicao }</h6>
          </div>
          <WinnersTable edicao={fnbuEdicao.edicao} partidas={fnbuEdicao.partidas} />
          <div className="mb-6"></div>
        </div>
      ))}
    </div>
  )
}