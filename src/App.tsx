import { Check } from "lucide-react";

const steps = [
  ["Pague a Taxa Necessária", "Recebemos o seu PIX com sucesso."],
  ["Preparamos o envio", "Sua caixa é separada e embalada com cuidado."],
  ["A caminho de você", "Assim que sair para entrega, mandamos o rastreio."],
];

export default function Index() {
  return (
    <div className="min-h-screen bg-page font-body text-foreground">
      <div className="mx-auto max-w-[480px]">
        <header className="hero-bg flex flex-col items-center px-4 pb-10 pt-4 text-center text-primary-foreground">
          <img src="/logo.png" alt="Deveu Perdeu" className="h-9" />
          <div className="mt-2 rounded-full bg-background/10 p-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red">
              <Check className="h-7 w-7" strokeWidth={4} />
            </div>
          </div>
          <span className="mt-3 rounded-full border border-background/30 bg-background/10 px-3 py-1 font-display text-xs tracking-widest">
            PEDIDO CONFIRMADO
          </span>
          <h1 className="mt-2 font-display text-3xl">Sua caixa foi Premiada!</h1>
          <p className="mt-1 text-sm">
            Sua caixa foi premiada com um <b className="underline">celular!</b>
          </p>
        </header>

        <main className="px-4 pb-8">
          <div className="relative flex flex-col items-center pt-4">
            <img src="/caixa.webp" alt="Caixa premiada" className="relative z-10 w-52 animate-box-bounce" />
            <div className="-mt-3 h-4 w-32 rounded-full bg-foreground blur-md animate-shadow-pulse" />
          </div>

          <h2 className="mt-4 text-center font-display text-3xl">PAGAMENTO PARA ENVIO</h2>

          <section className="mt-3 space-y-5 rounded-3xl bg-card p-5 text-center text-[15px] leading-relaxed shadow-sm">
            <p><b>Devido ao valor do celular,</b> é necessário realizar o <b>pagamento do seguro</b> de transporte para garantir a proteção do produto durante a entrega.</p>
            <p>✅ <b>Após a confirmação do pagamento</b> do seguro, seu pedido <b>será liberado para envio!</b></p>
            <p className="font-bold">⚠️ O valor será estornado assim que o pedido chegar no destino!</p>
          </section>

          <section className="mt-4 rounded-3xl bg-card p-5 shadow-sm">
            <h3 className="font-display text-lg">O que acontece agora</h3>
            <ul className="mt-3 space-y-4">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red/15 font-bold text-brand-red">{i + 1}</span>
                  <div>
                    <p className="font-display">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-4 rounded-3xl border-2 border-brand-red bg-card p-5">
            <a
              href="https://pay.checkoutpagamentosseguros.online/c/0cd1334e-1624-4fdd-95f8-1db8a2598567"
              className="block w-full rounded-2xl bg-brand-red py-4 text-center font-display tracking-wide text-primary-foreground shadow-lg transition-transform active:scale-95"
            >
              PAGAR TAXA NECESSÁRIA
            </a>
          </div>

          <div className="mt-4 space-y-5 rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4 text-center text-sm">
            <p>⚠️ ATENÇÃO: O envio do celular ficará pendente até a confirmação do pagamento do seguro de transporte.</p>
            <p>📦 Sem essa confirmação, o celular não poderá ser despachado.</p>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">Deveu Perdeu © Todos os direitos reservados.</p>
        </main>
      </div>
    </div>
  );
}
