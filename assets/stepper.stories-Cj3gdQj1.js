import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r,t as i}from"./stepper-BTOaVkDq.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a=t(),o=(e,t)=>e<t?`complete`:e===t?`current`:`upcoming`,s={title:`Componentes/Navegação/Stepper`,component:i,parameters:{docs:{description:{component:'Mostra em que etapa de um fluxo linear a pessoa está (Escritório › Responsável › Plano) e quantas faltam.\n\n**Quando usar**\n- Cadastros e assistentes com três a cinco etapas em sequência, como o cadastro do escritório ou a abertura de um processo.\n\n**Quando não usar**\n- Navegação livre entre seções: use Tabs.\n- Hierarquia de páginas: use Breadcrumb.\n- Progresso de uma tarefa em andamento (upload, importação): use Progress.\n\n**Anatomia**\n- `Stepper`: lista ordenada (`ol`). Dê um `aria-label` (ex.: "Etapas do cadastro").\n- `StepperItem`: cada etapa (`li`), com `step` (número), `state` (`complete`, `current` ou `upcoming`), `description` opcional (orientação vertical) e `connector` (filete até a próxima etapa; some na última).\n- `orientation` do `Stepper`: `horizontal` (topo de formulários) ou `vertical` (painel lateral de onboarding). `tone`: `default` ou `inverse` para painéis escuros (tokens `sidebar-*`).\n\n```tsx\n<Stepper aria-label="Etapas do cadastro">\n  <StepperItem step={1} state="complete">Escritório</StepperItem>\n  <StepperItem step={2} state="current">Responsável</StepperItem>\n  <StepperItem step={3}>Plano</StepperItem>\n</Stepper>\n```\n\n**Acessibilidade**\n- A etapa atual tem `aria-current="step"`; as concluídas anunciam "Concluída:" antes do rótulo.\n- É só indicador: as etapas não são links. Se o fluxo permitir voltar, coloque o botão "Voltar" no formulário.\n\n**Responsividade:** a lista quebra linha em telas estreitas; mantenha rótulos curtos (uma palavra).'}}},args:{"aria-label":`Etapas do cadastro`,current:1,steps:`Escritório, Responsável, Plano`},argTypes:{current:{control:{type:`range`,min:0,max:5,step:1},description:"Índice da etapa atual: as anteriores ficam `complete`, as seguintes `upcoming` (além do total, todas concluídas)."},steps:{control:`text`,description:"Rótulos das etapas, separados por vírgula (um `StepperItem` por rótulo)."},"aria-label":{control:`text`,description:`Nome acessível da lista de etapas.`},className:{table:{disable:!0}},children:{table:{disable:!0}}},render:({current:e=1,steps:t=``,...r})=>(0,a.jsx)(i,{...r,children:t.split(`,`).map(e=>e.trim()).filter(Boolean).map((t,r)=>(0,a.jsx)(n,{step:r+1,state:o(r,e),children:t},t))})},c={},l={parameters:{docs:{description:{story:`Início, meio e fim do fluxo: todas as etapas nos três estados.`}}},render:({current:e,steps:t,...r})=>(0,a.jsx)(`div`,{className:`flex flex-col gap-6`,children:[0,2,3].map(e=>(0,a.jsx)(i,{...r,children:[`Escritório`,`Responsável`,`Plano`].map((t,r)=>(0,a.jsx)(n,{step:r+1,state:o(r,e),children:t},t))},e))})},u={parameters:{docs:{description:{story:`Abertura de processo em cinco etapas, na quarta.`}}},args:{"aria-label":`Etapas da abertura do processo`},render:({current:e,steps:t,...r})=>(0,a.jsx)(i,{...r,children:[`Cliente`,`Partes`,`Pedidos`,`Documentos`,`Revisão`].map((e,t)=>(0,a.jsx)(n,{step:t+1,state:o(t,3),children:e},e))})},d=[{label:`Organização`,description:`Nome e endereço do cliente`},{label:`Master`,description:`Quem recebe o convite`},{label:`Revisão`,description:`Confira antes de criar`}],f={parameters:{docs:{description:{story:`Orientação vertical com descrição, para o painel lateral de um assistente.`}}},args:{"aria-label":`Etapas da implantação`},render:({current:e,steps:t,...r})=>(0,a.jsx)(i,{...r,orientation:`vertical`,className:`w-72`,children:d.map(({label:e,description:t},r)=>(0,a.jsx)(n,{step:r+1,state:o(r,1),description:t,children:e},e))})},p={parameters:{docs:{description:{story:"Tom `inverse` sobre painel escuro, nas duas orientações."}}},args:{"aria-label":`Etapas da implantação`},render:({current:e,steps:t,...r})=>(0,a.jsxs)(`div`,{className:`flex flex-col gap-8 rounded-lg bg-sidebar p-6`,children:[(0,a.jsx)(i,{...r,orientation:`vertical`,tone:`inverse`,className:`w-72`,children:d.map(({label:e,description:t},r)=>(0,a.jsx)(n,{step:r+1,state:o(r,1),description:t,children:e},e))}),(0,a.jsx)(i,{...r,tone:`inverse`,children:d.map(({label:e},t)=>(0,a.jsx)(n,{step:t+1,state:o(t,1),children:e},e))})]})},m=[`Default`,`States`,`FiveSteps`,`Vertical`,`OnDarkBackground`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Início, meio e fim do fluxo: todas as etapas nos três estados."
      }
    }
  },
  render: ({
    current,
    steps,
    ...args
  }) => <div className="flex flex-col gap-6">
      {[0, 2, 3].map(current => <Stepper key={current} {...args}>
          {["Escritório", "Responsável", "Plano"].map((label, index) => <StepperItem key={label} step={index + 1} state={stateOf(index, current)}>
              {label}
            </StepperItem>)}
        </Stepper>)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Abertura de processo em cinco etapas, na quarta."
      }
    }
  },
  args: {
    "aria-label": "Etapas da abertura do processo"
  },
  render: ({
    current,
    steps,
    ...args
  }) => <Stepper {...args}>
      {["Cliente", "Partes", "Pedidos", "Documentos", "Revisão"].map((label, index) => <StepperItem key={label} step={index + 1} state={stateOf(index, 3)}>
          {label}
        </StepperItem>)}
    </Stepper>
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Orientação vertical com descrição, para o painel lateral de um assistente."
      }
    }
  },
  args: {
    "aria-label": "Etapas da implantação"
  },
  render: ({
    current,
    steps,
    ...args
  }) => <Stepper {...args} orientation="vertical" className="w-72">
      {verticalSteps.map(({
      label,
      description
    }, index) => <StepperItem key={label} step={index + 1} state={stateOf(index, 1)} description={description}>
          {label}
        </StepperItem>)}
    </Stepper>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tom \`inverse\` sobre painel escuro, nas duas orientações."
      }
    }
  },
  args: {
    "aria-label": "Etapas da implantação"
  },
  render: ({
    current,
    steps,
    ...args
  }) => <div className="flex flex-col gap-8 rounded-lg bg-sidebar p-6">
      <Stepper {...args} orientation="vertical" tone="inverse" className="w-72">
        {verticalSteps.map(({
        label,
        description
      }, index) => <StepperItem key={label} step={index + 1} state={stateOf(index, 1)} description={description}>
            {label}
          </StepperItem>)}
      </Stepper>
      <Stepper {...args} tone="inverse">
        {verticalSteps.map(({
        label
      }, index) => <StepperItem key={label} step={index + 1} state={stateOf(index, 1)}>
            {label}
          </StepperItem>)}
      </Stepper>
    </div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{c as Default,u as FiveSteps,p as OnDarkBackground,l as States,f as Vertical,m as __namedExportsOrder,s as default};