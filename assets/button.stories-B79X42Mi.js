import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./arrow-right-DzAblbI-.js";import{t as r}from"./chevron-right-CqpFEcDi.js";import{t as i}from"./plus-DR-VRBqS.js";import{t as a}from"./refresh-cw-CPvG97Fn.js";import{t as o}from"./trash-0C4gm3qt.js";import{r as s,t as c}from"./button-DlhVWcgl.js";import{r as l}from"./icons.stories-CefJYQUg.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{l(),s(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Componentes/Ações/Button`,component:c,parameters:{docs:{description:{component:'Dispara uma ação: salvar, enviar, abrir um fluxo. Pílula nas alturas 36 (`sm`), 44 (`default`) e 52 (`lg`), com versões quadradas só de ícone (`icon-sm`, `icon`, `icon-lg`).\n\n**Quando usar cada variante**\n- `default`: a ação principal da tela ou do bloco. Uma por área visível (ex.: "Novo processo").\n- `secondary` e `outline`: ações de apoio ao lado da principal (Cancelar, Ver processo).\n- `ghost`: baixa ênfase, em barras de ferramentas, linhas de tabela e cabeçalhos de card.\n- `destructive`: ação que apaga ou encerra algo. Confirme com Alert Dialog quando for irreversível.\n- `link`: ação com aparência de texto, dentro de parágrafos.\n\n**Quando não usar**\n- Navegar para outra página: use `asChild` com `<a>` (ou o link do roteador) para manter a semântica de link.\n- Ligar e desligar um estado: use Toggle. Várias ações relacionadas coladas: use Button Group.\n\n**Props próprias**\n- `loading`: mostra o spinner, desabilita o botão e define `aria-busy`. Mantenha um rótulo que descreva o que acontece ("Salvando").\n- `asChild`: renderiza o filho como raiz, com os mesmos estilos. Nesse modo, `disabled` e o spinner de `loading` não são aplicados.\n\n**Acessibilidade**\n- Botão só de ícone exige `aria-label` com a ação ("Excluir prazo", não "Lixeira").\n- Ícones `lucide-react` recebem 16px automaticamente; não é preciso definir `size-4`.'}}},args:{children:`Button`,variant:`default`,size:`default`,loading:!1,disabled:!1,onClick:d()},argTypes:{children:{control:`text`,description:`Rótulo do botão.`},variant:{control:`inline-radio`,options:[`default`,`destructive`,`outline`,`secondary`,`ghost`,`link`],description:`Ênfase visual.`},size:{control:`inline-radio`,options:[`sm`,`default`,`lg`,`icon-sm`,`icon`,`icon-lg`],description:`Altura (36/44/52) ou quadrado só de ícone.`},loading:{control:`boolean`,description:`Mostra o spinner, desabilita e define aria-busy.`},disabled:{control:`boolean`,description:`Desabilita o botão.`},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],description:`Tipo nativo do botão.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}},onClick:{table:{category:`Eventos`}}}},p={},m={parameters:{docs:{description:{story:`Da maior para a menor ênfase. Use uma só variante default por área da tela.`}}},render:e=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,u.jsx)(c,{...e,children:`Default`}),(0,u.jsx)(c,{...e,variant:`destructive`,children:`Destructive`}),(0,u.jsx)(c,{...e,variant:`outline`,children:`Outline`}),(0,u.jsx)(c,{...e,variant:`secondary`,children:`Secondary`}),(0,u.jsx)(c,{...e,variant:`ghost`,children:`Ghost`}),(0,u.jsx)(c,{...e,variant:`link`,children:`Link`})]})},h={render:e=>(0,u.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,u.jsx)(c,{...e,size:`sm`,children:`Small`}),(0,u.jsx)(c,{...e,children:`Default`}),(0,u.jsx)(c,{...e,size:`lg`,children:`Large`})]})},g={render:e=>(0,u.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(i,{}),` Novo processo`]}),(0,u.jsxs)(c,{...e,variant:`outline`,children:[`Continuar `,(0,u.jsx)(n,{})]})]})},_={parameters:{docs:{description:{story:`Tamanhos quadrados icon-sm, icon e icon-lg. Sempre com aria-label.`}}},render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,u.jsx)(c,{size:`icon-sm`,"aria-label":`Adicionar`,children:(0,u.jsx)(i,{})}),(0,u.jsx)(c,{size:`icon`,variant:`outline`,"aria-label":`Adicionar`,children:(0,u.jsx)(i,{})}),(0,u.jsx)(c,{size:`icon-lg`,variant:`secondary`,"aria-label":`Excluir`,children:(0,u.jsx)(o,{})})]})},v={parameters:{docs:{description:{story:`Durante o envio: spinner, botão desabilitado e aria-busy.`}}},args:{loading:!0,children:`Salvando`}},y={args:{disabled:!0}},b={parameters:{docs:{description:{story:`Com asChild, o Button renderiza o <a> filho: semântica de link com o visual de botão.`}}},render:()=>(0,u.jsx)(c,{asChild:!0,variant:`outline`,children:(0,u.jsx)(`a`,{href:`#processos`,children:`Ver processos`})})},x={render:()=>(0,u.jsxs)(`div`,{className:`flex gap-2`,children:[(0,u.jsx)(c,{variant:`secondary`,shape:`round`,size:`icon-md`,"aria-label":`Atualizar`,children:(0,u.jsx)(a,{})}),(0,u.jsx)(c,{variant:`secondary`,shape:`round`,size:`icon-md`,"aria-label":`Abrir`,children:(0,u.jsx)(r,{})})]})},S=[`Default`,`Variants`,`Sizes`,`WithIcon`,`IconOnly`,`Loading`,`Disabled`,`AsLink`,`Round`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Da maior para a menor ênfase. Use uma só variante default por área da tela."
      }
    }
  },
  render: args => <div className="flex flex-wrap items-center gap-4">
      <Button {...args}>Default</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Button {...args} size="sm">Small</Button>
      <Button {...args}>Default</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Button {...args}><Plus /> Novo processo</Button>
      <Button {...args} variant="outline">Continuar <ArrowRight /></Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tamanhos quadrados icon-sm, icon e icon-lg. Sempre com aria-label."
      }
    }
  },
  render: () => <div className="flex items-center gap-4">
      <Button size="icon-sm" aria-label="Adicionar"><Plus /></Button>
      <Button size="icon" variant="outline" aria-label="Adicionar"><Plus /></Button>
      <Button size="icon-lg" variant="secondary" aria-label="Excluir"><Trash2 /></Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Durante o envio: spinner, botão desabilitado e aria-busy."
      }
    }
  },
  args: {
    loading: true,
    children: "Salvando"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Com asChild, o Button renderiza o <a> filho: semântica de link com o visual de botão."
      }
    }
  },
  render: () => <Button asChild variant="outline">
      <a href="#processos">Ver processos</a>
    </Button>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Button variant="secondary" shape="round" size="icon-md" aria-label="Atualizar">
        <RefreshCw />
      </Button>
      <Button variant="secondary" shape="round" size="icon-md" aria-label="Abrir">
        <ChevronRight />
      </Button>
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Só ícone, redondo, sobre fundo neutro: ações dos cartões de métrica e da barra do topo.`,...x.parameters?.docs?.description}}}})))()}C();export{b as AsLink,p as Default,y as Disabled,_ as IconOnly,v as Loading,x as Round,h as Sizes,m as Variants,g as WithIcon,S as __namedExportsOrder,f as default};