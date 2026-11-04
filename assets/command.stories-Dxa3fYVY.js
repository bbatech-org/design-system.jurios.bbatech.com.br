import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./calendar-clock-D0j_PpHZ.js";import{t as i}from"./file-text-BIUmgn_r.js";import{t as a}from"./scale-BO0v2wOS.js";import{t as o}from"./settings-9LDTiira.js";import{t as s}from"./user-C-USvdz7.js";import{n as c,r as l,t as u}from"./kbd-DOA7V2t7.js";import{a as d,c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./command-CwSVlme4.js";import{r as x}from"./icons.stories-CefJYQUg.js";function S(){return(0,w.jsxs)(c,{"aria-hidden":!0,children:[(0,w.jsx)(u,{children:`Ctrl`}),`+`,(0,w.jsx)(u,{children:`K`})]})}var C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{C=t(),x(),l(),b(),w=n(),{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Componentes/Menus/Command`,component:y,args:{search:`silva`,placeholder:`Buscar processos, clientes, prazos...`,emptyText:`Nenhum resultado encontrado.`,label:`Busca global`,shouldFilter:!0,loop:!1,showShortcut:!0,disabledItem:!1,onValueChange:T()},argTypes:{search:{control:`text`,description:"Texto digitado na busca (`CommandInput` `value`)."},placeholder:{control:`text`,description:"Placeholder do `CommandInput`."},emptyText:{control:`text`,description:"Conteúdo do `CommandEmpty`, exibido quando nada corresponde."},label:{control:`text`,description:`Rótulo acessível do Command.`},shouldFilter:{control:`boolean`,description:`Filtra e ordena os itens pelo texto digitado. Desligue para filtrar no servidor.`},loop:{control:`boolean`,description:`Setas voltam ao início ao passar do último item.`},showShortcut:{control:`boolean`,description:"Mostra o atalho Ctrl+K à direita do campo (`trailing`)."},disabledItem:{control:`boolean`,description:"Desabilita o primeiro cliente (exemplo de `disabled` no `CommandItem`)."},onValueChange:{table:{disable:!0}},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},filter:{table:{disable:!0}},vimBindings:{table:{disable:!0}},disablePointerSelection:{table:{disable:!0}},asChild:{table:{disable:!0}},className:{table:{disable:!0}},children:{table:{disable:!0}}},parameters:{docs:{description:{component:'Paleta de comandos com busca (cmdk): o usuário digita e a lista filtra processos, clientes, prazos e ações em tempo real, navegando só pelo teclado. É a base da busca global Ctrl+K do JuriOS.\n\n### Qual menu usar?\n- **Command**: paleta de comandos e busca pelo teclado (Ctrl+K), com filtragem enquanto se digita.\n- **Dropdown Menu**: lista de ações aberta a partir de um botão (ações da linha, menu da conta).\n- **Context Menu**: ações no clique direito sobre uma área. Sempre ofereça as mesmas ações por outro caminho visível.\n- **Menubar**: barra de menus estilo aplicativo desktop (Arquivo, Editar, Exibir), para ferramentas densas como o editor de peças.\n\nPara escolher um valor em um formulário (cliente, comarca, vara), use Combobox; para uma lista curta e fixa, Select.\n\n**Anatomia**\n- `Command`: raiz com o filtro. Props do cmdk como `filter`, `shouldFilter`, `value` e `loop`.\n- `CommandInput`: campo com lupa; `trailing` exibe conteúdo à direita, como o atalho `Ctrl + K`.\n- `CommandList`: lista rolável.\n- `CommandEmpty`: mensagem quando nada corresponde à busca.\n- `CommandGroup` (`heading`) e `CommandSeparator`: organizam os resultados.\n- `CommandItem`: resultado selecionável (`onSelect`, `value`, `keywords`, `disabled`). Use `keywords` para achar o item por termos que não aparecem no texto (as partes de um processo, por exemplo).\n- `CommandShortcut`: atalho exibido à direita.\n- `CommandDialog`: o Command dentro de um modal, para a busca global. Aceita `open`/`onOpenChange`, `title` e `description` (lidos só por leitor de tela) e `commandProps` para repassar props ao Command interno.\n\n```tsx\n<CommandDialog open={open} onOpenChange={setOpen}>\n  <CommandInput placeholder="Buscar processos, clientes, prazos..." />\n  <CommandList>\n    <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>\n    <CommandGroup heading="Processos">\n      <CommandItem value="1002345-67.2026.8.26.0100" keywords={["Silva", "Banco X"]} onSelect={abrir}>\n        <Scale /> 1002345-67.2026.8.26.0100\n      </CommandItem>\n    </CommandGroup>\n  </CommandList>\n</CommandDialog>\n```\n\nO atalho Ctrl+K (ou Cmd+K) não vem embutido: registre o listener de teclado na aplicação, como na story Dialog.\n\n**Acessibilidade**: setas navegam, Enter seleciona e Esc fecha o `CommandDialog`. Dê ao `CommandInput` um `placeholder` que diga o que pode ser buscado.'}}},decorators:[e=>(0,w.jsx)(`div`,{className:`w-[400px]`,children:(0,w.jsx)(e,{})})]},D=[{cnj:`1002345-67.2026.8.26.0100`,partes:`Silva × Banco X`},{cnj:`0004567-12.2025.5.02.0001`,partes:`Silva Ltda`}],O=[`Maria da Silva`,`Silva & Filhos Comércio`],k={parameters:{docs:{description:{story:"Busca filtrando processos (por número CNJ ou partes, via `keywords`) e clientes."}}},render:function({search:e=``,placeholder:t,emptyText:n,showShortcut:r,disabledItem:i,...o}){let[c,l]=(0,C.useState)(e);return(0,C.useEffect)(()=>l(e),[e]),(0,w.jsxs)(y,{className:`shadow-level-2`,...o,children:[(0,w.jsx)(d,{placeholder:t,value:c,onValueChange:l,trailing:r?(0,w.jsx)(S,{}):void 0}),(0,w.jsxs)(v,{children:[(0,w.jsx)(_,{children:n}),(0,w.jsx)(p,{heading:`Processos`,children:D.map(e=>(0,w.jsxs)(g,{value:e.cnj,keywords:[e.partes],children:[(0,w.jsx)(a,{className:`text-foreground`}),(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`font-mono text-[13px]`,children:e.cnj}),` ·`,` `,e.partes]})]},e.cnj))}),(0,w.jsx)(f,{alwaysRender:!0}),(0,w.jsx)(p,{heading:`Clientes`,children:O.map((e,t)=>(0,w.jsxs)(g,{disabled:i&&t===0,children:[(0,w.jsx)(s,{}),e]},e))})]})]})}},A={parameters:{docs:{description:{story:"`CommandEmpty` aparece quando nenhum item corresponde ao termo digitado."}}},render:()=>(0,w.jsxs)(y,{className:`shadow-level-2`,children:[(0,w.jsx)(d,{placeholder:`Buscar processos, clientes, prazos...`,value:`contrato de locação`,trailing:(0,w.jsx)(S,{})}),(0,w.jsxs)(v,{children:[(0,w.jsx)(_,{children:`Nenhum resultado encontrado.`}),(0,w.jsx)(p,{heading:`Clientes`,children:O.map(e=>(0,w.jsx)(g,{children:e},e))})]})]})},j={parameters:{docs:{description:{story:"Lista de ações com `CommandShortcut`; item `disabled` para ações indisponíveis."}}},render:()=>(0,w.jsxs)(y,{className:`shadow-level-2`,children:[(0,w.jsx)(d,{placeholder:`Digite um comando...`}),(0,w.jsxs)(v,{children:[(0,w.jsxs)(p,{heading:`Ações`,children:[(0,w.jsxs)(g,{children:[(0,w.jsx)(i,{}),` Nova petição `,(0,w.jsx)(m,{children:`Ctrl N`})]}),(0,w.jsxs)(g,{children:[(0,w.jsx)(r,{}),` Agendar prazo`,` `,(0,w.jsx)(m,{children:`Ctrl P`})]}),(0,w.jsxs)(g,{disabled:!0,children:[(0,w.jsx)(a,{}),` Protocolar no PJe`,` `,(0,w.jsx)(m,{children:`Ctrl E`})]})]}),(0,w.jsx)(f,{}),(0,w.jsx)(p,{heading:`Conta`,children:(0,w.jsxs)(g,{children:[(0,w.jsx)(o,{}),` Configurações `,(0,w.jsx)(m,{children:`Ctrl ,`})]})})]})]})},M={parameters:{docs:{description:{story:"`CommandDialog` com o atalho Ctrl+K registrado pela própria tela."}}},render:function(){let[e,t]=(0,C.useState)(!0);return(0,C.useEffect)(()=>{let e=e=>{e.key.toLowerCase()===`k`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t(e=>!e))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{className:`text-body-sm text-muted-foreground`,children:[`Pressione `,(0,w.jsx)(S,{}),` para abrir a busca global.`]}),(0,w.jsxs)(h,{open:e,onOpenChange:t,children:[(0,w.jsx)(d,{placeholder:`Buscar processos, clientes, prazos...`,trailing:(0,w.jsx)(S,{})}),(0,w.jsxs)(v,{children:[(0,w.jsx)(_,{children:`Nenhum resultado encontrado.`}),(0,w.jsx)(p,{heading:`Processos`,children:D.map(e=>(0,w.jsxs)(g,{value:e.cnj,keywords:[e.partes],children:[(0,w.jsx)(a,{}),` `,e.cnj,` · `,e.partes]},e.cnj))}),(0,w.jsx)(f,{}),(0,w.jsx)(p,{heading:`Clientes`,children:O.map(e=>(0,w.jsxs)(g,{children:[(0,w.jsx)(s,{}),` `,e]},e))})]})]})]})}},N=[`Default`,`Empty`,`WithShortcuts`,`Dialog`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Busca filtrando processos (por número CNJ ou partes, via \`keywords\`) e clientes."
      }
    }
  },
  render: function Render({
    search: initialSearch = "",
    placeholder,
    emptyText,
    showShortcut,
    disabledItem,
    ...args
  }) {
    const [search, setSearch] = useState(initialSearch);
    useEffect(() => setSearch(initialSearch), [initialSearch]);
    return <Command className="shadow-level-2" {...args}>
        <CommandInput placeholder={placeholder} value={search} onValueChange={setSearch} trailing={showShortcut ? <CtrlK /> : undefined} />
        <CommandList>
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup heading="Processos">
            {processos.map(p => <CommandItem key={p.cnj} value={p.cnj} keywords={[p.partes]}>
                <Scale className="text-foreground" />
                <span>
                  <span className="font-mono text-[13px]">{p.cnj}</span> ·{" "}
                  {p.partes}
                </span>
              </CommandItem>)}
          </CommandGroup>
          <CommandSeparator alwaysRender />
          <CommandGroup heading="Clientes">
            {clientes.map((c, i) => <CommandItem key={c} disabled={disabledItem && i === 0}>
                <User />
                {c}
              </CommandItem>)}
          </CommandGroup>
        </CommandList>
      </Command>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`CommandEmpty\` aparece quando nenhum item corresponde ao termo digitado."
      }
    }
  },
  render: () => <Command className="shadow-level-2">
      <CommandInput placeholder="Buscar processos, clientes, prazos..." value="contrato de locação" trailing={<CtrlK />} />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup heading="Clientes">
          {clientes.map(c => <CommandItem key={c}>{c}</CommandItem>)}
        </CommandGroup>
      </CommandList>
    </Command>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Lista de ações com \`CommandShortcut\`; item \`disabled\` para ações indisponíveis."
      }
    }
  },
  render: () => <Command className="shadow-level-2">
      <CommandInput placeholder="Digite um comando..." />
      <CommandList>
        <CommandGroup heading="Ações">
          <CommandItem>
            <FileText /> Nova petição <CommandShortcut>Ctrl N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CalendarClock /> Agendar prazo{" "}
            <CommandShortcut>Ctrl P</CommandShortcut>
          </CommandItem>
          <CommandItem disabled>
            <Scale /> Protocolar no PJe{" "}
            <CommandShortcut>Ctrl E</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Conta">
          <CommandItem>
            <Settings /> Configurações <CommandShortcut>Ctrl ,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`CommandDialog\` com o atalho Ctrl+K registrado pela própria tela."
      }
    }
  },
  render: function Render() {
    const [open, setOpen] = useState(true);
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          setOpen(o => !o);
        }
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, []);
    return <>
        <p className="text-body-sm text-muted-foreground">
          Pressione <CtrlK /> para abrir a busca global.
        </p>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Buscar processos, clientes, prazos..." trailing={<CtrlK />} />
          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
            <CommandGroup heading="Processos">
              {processos.map(p => <CommandItem key={p.cnj} value={p.cnj} keywords={[p.partes]}>
                  <Scale /> {p.cnj} · {p.partes}
                </CommandItem>)}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Clientes">
              {clientes.map(c => <CommandItem key={c}>
                  <User /> {c}
                </CommandItem>)}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>;
  }
}`,...M.parameters?.docs?.source}}}})))()}P();export{k as Default,M as Dialog,A as Empty,j as WithShortcuts,N as __namedExportsOrder,E as default};