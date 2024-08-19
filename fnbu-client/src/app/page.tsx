import { WinnersTable } from "@/components/winnerTable";

export default async function Home() {
  const edicaorecente = await fetch('http://localhost:5000/api/fnbu/edicao-recente', {
    cache: 'no-cache'
  }).then(data => { 
    return data.json() 
  }).catch((err) => console.log('erro aqui:', err))

  if(!edicaorecente) {
    return <div className="text-center text-2xl sm:text-4xl mt-56 align-middle">Nenhuma nova edição</div>
  }

  const { id, ano, edicao, partidas } = edicaorecente

  return (
    <>
      <div className="flex flex-col">
        <div className="text-center bg-black p-2 pt-4 text-white leading-3">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase">VENCEDORES DA FNBU {ano}</h1>
          <h6 className="mb-2 tracking-widest text-base sm:text-lg uppercase">Edição de {edicao}</h6>
        </div>
        <WinnersTable edicao={edicao} partidas={partidas} key={id} />
      </div>
    </>
  )
}
