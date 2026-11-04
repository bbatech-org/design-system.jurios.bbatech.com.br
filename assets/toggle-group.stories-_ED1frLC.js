import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./italic-CijlcNc8.js";import{t as i}from"./calendar-days-C8LeW3ef.js";import{a,r as o,t as s}from"./underline-DmVIr9pF.js";import{n as c,r as l,t as u}from"./toggle-group-B54T2gby.js";import{r as d}from"./icons.stories-CefJYQUg.js";function f(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{value:`bold`,"aria-label":`Negrito`,children:(0,p.jsx)(n,{})}),(0,p.jsx)(c,{value:`italic`,"aria-label":`Itálico`,children:(0,p.jsx)(r,{})}),(0,p.jsx)(c,{value:`underline`,"aria-label":`Sublinhado`,children:(0,p.jsx)(s,{})})]})}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{d(),l(),p=t(),m={title:`Componentes/Ações/Toggle Group`,component:u,parameters:{docs:{description:{component:'Conjunto de toggles que controla um parâmetro da mesma área: um valor (`type="single"`) ou vários (`type="multiple"`). Com `variant="outline"`, vira controle segmentado em pílula.\n\n**Toggle Group ou Tabs**\n- Toggle Group: escolher um (`type="single"`) ou vários (`type="multiple"`) valores que filtram ou alteram a visualização do mesmo conteúdo (lista ou quadro, filtros de status).\n- Tabs: alternar entre painéis de conteúdo diferentes, cada um com seu `TabsContent` (Resumo, Andamentos, Documentos).\n- Regra prática: se muda o conteúdo mostrado em painéis distintos, Tabs; se muda um parâmetro do mesmo conteúdo, Toggle Group.\n\n**Quando não usar**\n- Escolha que vale ao enviar um formulário: use Radio Group (uma opção) ou Checkbox (várias).\n- Ações que não guardam estado: use Button Group.\n- Um único liga/desliga: use Toggle.\n\n**Anatomia**\n- `ToggleGroup`: raiz. `type` é obrigatório. Valor em `defaultValue` ou `value` com `onValueChange` (`string` em `single`, `string[]` em `multiple`). `variant`, `size` e `disabled` valem para todos os itens.\n- `ToggleGroupItem`: cada opção, com `value` único. Herda `variant` e `size` do grupo e pode sobrescrever.\n\n```tsx\n<ToggleGroup\n  type="single"\n  variant="outline"\n  value={view}\n  onValueChange={(value) => value && setView(value)}\n  aria-label="Visualização de processos"\n>\n  <ToggleGroupItem value="lista"><List /> Lista</ToggleGroupItem>\n  <ToggleGroupItem value="kanban"><KanbanSquare /> Kanban</ToggleGroupItem>\n</ToggleGroup>\n```\n\nEm `type="single"`, clicar no item ativo o desmarca e envia `""`. Se a tela precisa sempre de um valor (como a visualização), ignore o valor vazio, como no exemplo.\n\n**Acessibilidade**\n- Dê `aria-label` ao grupo e a cada item só de ícone.\n- Teclado: Tab entra no grupo, as setas movem entre os itens e Espaço ou Enter alternam o item focado.'}}},args:{type:`multiple`,variant:`default`,size:`default`,disabled:!1,"aria-label":`Formatação`},argTypes:{type:{control:`inline-radio`,options:[`single`,`multiple`],description:`Um valor (single) ou vários (multiple).`},variant:{control:`inline-radio`,options:[`default`,`outline`],description:`Transparente ou segmentado com borda.`},size:{control:`inline-radio`,options:[`sm`,`default`,`lg`],description:`Altura dos itens: 36, 44 ou 52.`},disabled:{control:`boolean`,description:`Desabilita todos os itens.`},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`],description:`Direção das setas do teclado.`},"aria-label":{control:`text`,description:`Nome acessível do grupo.`},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},onValueChange:{table:{disable:!0}},asChild:{table:{disable:!0}},className:{table:{disable:!0}}}},h={parameters:{docs:{description:{story:`Seleção múltipla para formatação: vários itens podem ficar ativos ao mesmo tempo. Troque type para single nos controles.`}}},render:({type:e,value:t,defaultValue:n,onValueChange:r,...i})=>e===`single`?(0,p.jsx)(u,{...i,type:`single`,defaultValue:`bold`,children:(0,p.jsx)(f,{})},`single`):(0,p.jsx)(u,{...i,type:`multiple`,defaultValue:[`bold`],children:(0,p.jsx)(f,{})},`multiple`)},g={parameters:{docs:{description:{story:`Variante outline: itens colados em um controle segmentado.`}}},render:()=>(0,p.jsx)(u,{type:`multiple`,variant:`outline`,defaultValue:[`bold`],"aria-label":`Formatação`,children:(0,p.jsx)(f,{})})},_=[`sm`,`default`,`lg`],v={render:()=>(0,p.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(3,auto)] items-center gap-x-10 gap-y-6 rounded-surface bg-card p-8`,children:[(0,p.jsx)(`span`,{}),_.map(e=>(0,p.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:e},e)),[`default`,`outline`].map(e=>(0,p.jsxs)(`div`,{className:`contents`,children:[(0,p.jsx)(`span`,{className:`text-right text-caption text-muted-foreground`,children:e}),_.map(t=>(0,p.jsx)(u,{type:`multiple`,variant:e,size:t,defaultValue:[`bold`],"aria-label":`Formatação`,children:(0,p.jsx)(f,{})},t))]},e))]})},y={parameters:{docs:{description:{story:`Uma visualização por vez (type="single") para a mesma lista de processos. Não é Tabs: o conteúdo é o mesmo, só muda a forma de exibir.`}}},name:`Visualização (single)`,render:()=>(0,p.jsxs)(u,{type:`single`,variant:`outline`,defaultValue:`lista`,"aria-label":`Visualização de processos`,children:[(0,p.jsxs)(c,{value:`lista`,className:`px-4`,children:[(0,p.jsx)(a,{}),` Lista`]}),(0,p.jsxs)(c,{value:`kanban`,className:`px-4`,children:[(0,p.jsx)(o,{}),` Kanban`]}),(0,p.jsxs)(c,{value:`calendario`,className:`px-4`,children:[(0,p.jsx)(i,{}),` Calendário`]})]})},b={parameters:{docs:{description:{story:`Filtros combináveis (type="multiple") por tipo de publicação.`}}},name:`Filtros (multiple)`,render:()=>(0,p.jsxs)(u,{type:`multiple`,defaultValue:[`intimacao`,`citacao`],"aria-label":`Tipos de publicação`,children:[(0,p.jsx)(c,{value:`intimacao`,className:`px-4`,children:`Intimação`}),(0,p.jsx)(c,{value:`citacao`,className:`px-4`,children:`Citação`}),(0,p.jsx)(c,{value:`despacho`,className:`px-4`,children:`Despacho`}),(0,p.jsx)(c,{value:`sentenca`,className:`px-4`,children:`Sentença`})]})},x={parameters:{docs:{description:{story:`disabled no grupo desabilita todos os itens.`}}},render:()=>(0,p.jsx)(u,{type:`multiple`,variant:`outline`,disabled:!0,defaultValue:[`bold`],"aria-label":`Formatação`,children:(0,p.jsx)(f,{})})},S={render:()=>(0,p.jsx)(`div`,{className:`bg-canvas p-6`,children:(0,p.jsxs)(u,{type:`single`,variant:`chips`,defaultValue:`today`,"aria-label":`Período`,children:[(0,p.jsx)(c,{value:`today`,children:`Hoje`}),(0,p.jsx)(c,{value:`7d`,children:`7 dias`}),(0,p.jsx)(c,{value:`30d`,children:`30 dias`})]})})},C=[`Default`,`Outline`,`Variants`,`SingleView`,`MultipleFilters`,`Disabled`,`Chips`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Seleção múltipla para formatação: vários itens podem ficar ativos ao mesmo tempo. Troque type para single nos controles."
      }
    }
  },
  render: ({
    type,
    value: _value,
    defaultValue: _defaultValue,
    onValueChange: _onValueChange,
    ...args
  }) => type === "single" ? <ToggleGroup key="single" {...args} type="single" defaultValue="bold">
        <FormattingItems />
      </ToggleGroup> : <ToggleGroup key="multiple" {...args} type="multiple" defaultValue={["bold"]}>
        <FormattingItems />
      </ToggleGroup>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Variante outline: itens colados em um controle segmentado."
      }
    }
  },
  render: () => <ToggleGroup type="multiple" variant="outline" defaultValue={["bold"]} aria-label="Formatação">
      <FormattingItems />
    </ToggleGroup>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-[auto_repeat(3,auto)] items-center gap-x-10 gap-y-6 rounded-surface bg-card p-8">
      <span />
      {sizes.map(size => <span key={size} className="text-center text-caption text-muted-foreground">{size}</span>)}
      {(["default", "outline"] as const).map(variant => <div key={variant} className="contents">
          <span className="text-right text-caption text-muted-foreground">{variant}</span>
          {sizes.map(size => <ToggleGroup key={size} type="multiple" variant={variant} size={size} defaultValue={["bold"]} aria-label="Formatação">
              <FormattingItems />
            </ToggleGroup>)}
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uma visualização por vez (type=\\"single\\") para a mesma lista de processos. Não é Tabs: o conteúdo é o mesmo, só muda a forma de exibir."
      }
    }
  },
  name: "Visualização (single)",
  render: () => <ToggleGroup type="single" variant="outline" defaultValue="lista" aria-label="Visualização de processos">
      <ToggleGroupItem value="lista" className="px-4"><List /> Lista</ToggleGroupItem>
      <ToggleGroupItem value="kanban" className="px-4"><KanbanSquare /> Kanban</ToggleGroupItem>
      <ToggleGroupItem value="calendario" className="px-4"><CalendarDays /> Calendário</ToggleGroupItem>
    </ToggleGroup>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Filtros combináveis (type=\\"multiple\\") por tipo de publicação."
      }
    }
  },
  name: "Filtros (multiple)",
  render: () => <ToggleGroup type="multiple" defaultValue={["intimacao", "citacao"]} aria-label="Tipos de publicação">
      <ToggleGroupItem value="intimacao" className="px-4">Intimação</ToggleGroupItem>
      <ToggleGroupItem value="citacao" className="px-4">Citação</ToggleGroupItem>
      <ToggleGroupItem value="despacho" className="px-4">Despacho</ToggleGroupItem>
      <ToggleGroupItem value="sentenca" className="px-4">Sentença</ToggleGroupItem>
    </ToggleGroup>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "disabled no grupo desabilita todos os itens."
      }
    }
  },
  render: () => <ToggleGroup type="multiple" variant="outline" disabled defaultValue={["bold"]} aria-label="Formatação">
      <FormattingItems />
    </ToggleGroup>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-canvas p-6">
      <ToggleGroup type="single" variant="chips" defaultValue="today" aria-label="Período">
        <ToggleGroupItem value="today">Hoje</ToggleGroupItem>
        <ToggleGroupItem value="7d">7 dias</ToggleGroupItem>
        <ToggleGroupItem value="30d">30 dias</ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,...S.parameters?.docs?.source},description:{story:"Chips de período e de filtro do Admin: inativo sobre `muted`, ativo em `card` com sombra leve.",...S.parameters?.docs?.description}}}})))()}w();export{S as Chips,h as Default,x as Disabled,b as MultipleFilters,g as Outline,y as SingleView,v as Variants,C as __namedExportsOrder,m as default};