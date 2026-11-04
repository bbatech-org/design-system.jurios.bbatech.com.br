import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./button-DlhVWcgl.js";import{n as i,t as a}from"./input-STO3fbUU.js";import{o,t as s,u as c}from"./field-Bg8ctQzG.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./sheet-D_ESzADV.js";import{r as y,t as b}from"./radio-group-0s_6q8fn.js";import{n as x,t as S}from"./radio-card-BKREK9DL.js";function C({side:e=`right`,title:t=`Detalhes do prazo`,description:n=`Contestação`,showCloseButton:i,...c}){let{defaultOpen:v}=c;return(0,T.jsxs)(_,{...c,children:[(0,T.jsx)(f,{asChild:!0,children:(0,T.jsx)(r,{variant:`outline`,size:`sm`,children:`Detalhes do prazo`})}),(0,T.jsxs)(d,{side:e,showCloseButton:i,onOpenAutoFocus:v?e=>e.preventDefault():void 0,children:[(0,T.jsxs)(g,{children:[(0,T.jsx)(u,{children:t}),(0,T.jsxs)(l,{children:[n,` · `,(0,T.jsx)(`span`,{className:`text-data`,children:`1002345-67.2026.8.26.0100`})]})]}),(0,T.jsxs)(p,{children:[(0,T.jsxs)(s,{children:[(0,T.jsx)(o,{htmlFor:`sheet-responsavel-${e}`,required:!0,children:`Responsável`}),(0,T.jsx)(a,{id:`sheet-responsavel-${e}`,defaultValue:`Ana Lima`})]}),(0,T.jsxs)(s,{children:[(0,T.jsx)(o,{htmlFor:`sheet-data-${e}`,required:!0,children:`Data final`}),(0,T.jsx)(a,{id:`sheet-data-${e}`,defaultValue:`30/09/2026`})]})]}),(0,T.jsxs)(m,{children:[(0,T.jsx)(h,{asChild:!0,children:(0,T.jsx)(r,{variant:`outline`,size:`sm`,children:`Fechar`})}),(0,T.jsx)(r,{size:`sm`,children:`Salvar alterações`})]})]})]})}function w({side:e,defaultOpen:t}){return(0,T.jsxs)(_,{defaultOpen:t,children:[(0,T.jsx)(f,{asChild:!0,children:(0,T.jsxs)(r,{variant:`outline`,size:`sm`,children:[`Filtros (`,e,`)`]})}),(0,T.jsxs)(d,{side:e,onOpenAutoFocus:t?e=>e.preventDefault():void 0,children:[(0,T.jsxs)(g,{children:[(0,T.jsx)(u,{children:`Filtros`}),(0,T.jsx)(l,{children:`Refine a listagem de processos.`})]}),(0,T.jsxs)(p,{className:`grid grid-cols-1 sm:grid-cols-3`,children:[(0,T.jsxs)(s,{children:[(0,T.jsx)(o,{htmlFor:`sheet-area-${e}`,required:!0,children:`Área`}),(0,T.jsx)(a,{id:`sheet-area-${e}`,defaultValue:`Cível`})]}),(0,T.jsxs)(s,{children:[(0,T.jsx)(o,{htmlFor:`sheet-resp-${e}`,required:!0,children:`Responsável`}),(0,T.jsx)(a,{id:`sheet-resp-${e}`,defaultValue:`Ana Lima`})]}),(0,T.jsxs)(s,{children:[(0,T.jsx)(o,{htmlFor:`sheet-status-${e}`,required:!0,children:`Status`}),(0,T.jsx)(a,{id:`sheet-status-${e}`,defaultValue:`Em andamento`})]})]}),(0,T.jsxs)(m,{children:[(0,T.jsx)(h,{asChild:!0,children:(0,T.jsx)(r,{variant:`outline`,size:`sm`,children:`Fechar`})}),(0,T.jsx)(r,{size:`sm`,children:`Salvar alterações`})]})]})]})}var T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),c(),i(),x(),y(),v(),T=t(),{fn:E}=__STORYBOOK_MODULE_TEST__,D={title:`Componentes/Sobreposições/Sheet`,component:_,args:{title:`Detalhes do prazo`,description:`Contestação`,side:`right`,showCloseButton:!0,defaultOpen:!1,modal:!0,onOpenChange:E()},argTypes:{title:{control:`text`,description:"Conteúdo do `SheetTitle` (nome acessível)."},description:{control:`text`,description:"Texto do `SheetDescription`, antes do nº do processo."},side:{control:`inline-radio`,options:[`right`,`left`,`top`,`bottom`],description:`Borda da tela em que o painel encosta.`},showCloseButton:{control:`boolean`,description:'Mostra o botão "X" no `SheetContent`.'},defaultOpen:{control:`boolean`,description:`Abre o painel ao montar (não controlado).`},modal:{control:`boolean`,description:`Bloqueia a interação com o fundo enquanto aberto.`},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},children:{table:{disable:!0}}},parameters:{docs:{description:{component:'Painel modal (Radix Dialog) ancorado na borda da tela, para ver detalhes ou editar um registro sem perder o contexto da tela principal: detalhe de um prazo, dados de um andamento, filtros avançados da listagem de processos.\n\n### Dialog, Alert Dialog, Sheet ou Drawer?\n- **Dialog**: tarefa curta e focada que interrompe o fluxo (formulário de poucos campos, confirmação com dados). Modal, bloqueia o fundo e fecha com Esc, clique no overlay ou no "X".\n- **Alert Dialog**: confirmação de ação destrutiva ou irreversível (excluir processo, arquivar, cancelar protocolo). Não fecha clicando fora e não tem "X"; exige escolha explícita, com foco inicial na ação segura (Cancelar).\n- **Sheet**: painel lateral para detalhes ou edição mais longa mantendo o contexto da tela (detalhe de prazo, filtros avançados). Pensado para desktop.\n- **Drawer**: painel que sobe da borda inferior com gesto de arrastar (vaul); preferido em mobile e telas de toque. Padrão responsivo comum: Dialog no desktop, Drawer no mobile.\n\n**Anatomia**\n- `Sheet`, `SheetTrigger` e `SheetClose`: raiz, gatilho e fechamento.\n- `SheetContent`: painel com overlay. `side` (`right` padrão, `left`, `top`, `bottom`); `showCloseButton` (padrão `true`) mostra o "X". Encosta na borda, sem raio.\n- `SheetHeader` com `SheetTitle` e `SheetDescription`.\n- `SheetBody`: área rolável do conteúdo (parte própria do JuriOS; o cabeçalho e o rodapé ficam fixos).\n- `SheetFooter`: ações; nas laterais os botões dividem a largura.\n\n```tsx\n<Sheet>\n  <SheetTrigger asChild><Button variant="outline">Detalhes do prazo</Button></SheetTrigger>\n  <SheetContent>\n    <SheetHeader>\n      <SheetTitle>Detalhes do prazo</SheetTitle>\n      <SheetDescription>Contestação · 1002345-67.2026.8.26.0100</SheetDescription>\n    </SheetHeader>\n    <SheetBody>{/* campos */}</SheetBody>\n    <SheetFooter>\n      <SheetClose asChild><Button variant="outline">Fechar</Button></SheetClose>\n      <Button>Salvar alterações</Button>\n    </SheetFooter>\n  </SheetContent>\n</Sheet>\n```\n\n**Acessibilidade**: `SheetTitle` é obrigatório (nome acessível). O foco fica preso no painel e volta ao gatilho ao fechar; Esc e clique no overlay fecham. Em mobile, prefira Drawer.'}}}},O={render:e=>(0,T.jsx)(C,{...e},String(e.defaultOpen))},k={tags:[`!autodocs`],parameters:{layout:`fullscreen`},render:()=>(0,T.jsx)(`div`,{className:`min-h-[900px]`,children:(0,T.jsx)(C,{defaultOpen:!0})})},A={tags:[`!autodocs`],parameters:{layout:`fullscreen`},render:()=>(0,T.jsx)(`div`,{className:`min-h-[900px]`,children:(0,T.jsx)(w,{side:`top`,defaultOpen:!0})})},j={parameters:{docs:{description:{story:"Os quatro lados. `left`/`right` para detalhe e edição; `top`/`bottom` para filtros em faixa horizontal."}}},render:()=>(0,T.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,T.jsx)(C,{side:`left`}),(0,T.jsx)(w,{side:`top`}),(0,T.jsx)(C,{side:`right`}),(0,T.jsx)(w,{side:`bottom`})]})},M={render:()=>(0,T.jsxs)(_,{defaultOpen:!0,children:[(0,T.jsx)(f,{asChild:!0,children:(0,T.jsx)(r,{children:`Convidar`})}),(0,T.jsxs)(d,{variant:`floating`,children:[(0,T.jsxs)(g,{children:[(0,T.jsx)(u,{className:`text-heading-3 font-normal`,children:`Convidar para a equipe`}),(0,T.jsx)(l,{children:`A pessoa recebe um e-mail e entra com a conta Google da BBA Tech.`})]}),(0,T.jsxs)(p,{className:`gap-6`,children:[(0,T.jsxs)(s,{children:[(0,T.jsx)(o,{htmlFor:`invite-email`,children:`E-mail`}),(0,T.jsx)(a,{id:`invite-email`,variant:`filled`,placeholder:`nome@bbatech.com.br`})]}),(0,T.jsxs)(b,{defaultValue:`support`,"aria-label":`Papel`,className:`gap-2`,children:[(0,T.jsx)(S,{value:`admin`,title:`Administrador`,description:`Tudo no Admin, inclusive a equipe e a segurança.`}),(0,T.jsx)(S,{value:`support`,title:`Suporte`,description:`Vê todas as organizações.`}),(0,T.jsx)(S,{value:`read`,title:`Leitura`,description:`Só consulta.`})]})]}),(0,T.jsxs)(m,{children:[(0,T.jsx)(h,{asChild:!0,children:(0,T.jsx)(r,{variant:`ghost`,children:`Cancelar`})}),(0,T.jsx)(r,{children:`Enviar convite`})]})]})]})},N=[`Default`,`Open`,`TopOpen`,`Sides`,`Floating`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <DeadlineSheet key={String(args.defaultOpen)} {...args} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="min-h-[900px]">
      <DeadlineSheet defaultOpen />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="min-h-[900px]">
      <FiltersSheet side="top" defaultOpen />
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Os quatro lados. \`left\`/\`right\` para detalhe e edição; \`top\`/\`bottom\` para filtros em faixa horizontal."
      }
    }
  },
  render: () => <div className="flex items-center gap-4">
      <DeadlineSheet side="left" />
      <FiltersSheet side="top" />
      <DeadlineSheet side="right" />
      <FiltersSheet side="bottom" />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button>Convidar</Button>
      </SheetTrigger>
      <SheetContent variant="floating">
        <SheetHeader>
          <SheetTitle className="text-heading-3 font-normal">Convidar para a equipe</SheetTitle>
          <SheetDescription>A pessoa recebe um e-mail e entra com a conta Google da BBA Tech.</SheetDescription>
        </SheetHeader>
        <SheetBody className="gap-6">
          <Field>
            <FieldLabel htmlFor="invite-email">E-mail</FieldLabel>
            <Input id="invite-email" variant="filled" placeholder="nome@bbatech.com.br" />
          </Field>
          <RadioGroup defaultValue="support" aria-label="Papel" className="gap-2">
            <RadioCard value="admin" title="Administrador" description="Tudo no Admin, inclusive a equipe e a segurança." />
            <RadioCard value="support" title="Suporte" description="Vê todas as organizações." />
            <RadioCard value="read" title="Leitura" description="Só consulta." />
          </RadioGroup>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </SheetClose>
          <Button>Enviar convite</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...M.parameters?.docs?.source},description:{story:"`floating`: solto 16 da borda, raio 32; convite com papéis em `RadioCard`.",...M.parameters?.docs?.description}}}})))()}P();export{O as Default,M as Floating,k as Open,j as Sides,A as TopOpen,N as __namedExportsOrder,D as default};