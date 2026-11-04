import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./ellipsis-DnbAV_rk.js";import{t as r}from"./plus-DR-VRBqS.js";import{c as i,i as a,l as o,n as s,s as c,t as l}from"./select-CNZmadAh.js";import{r as u,t as d}from"./button-DlhVWcgl.js";import{r as f,t as p}from"./badge-DFbJyUGg.js";import{n as m,t as h}from"./input-STO3fbUU.js";import{n as g,t as _}from"./textarea-CSbaXe7J.js";import{a as v,i as y,o as b,r as x,t as S,u as C}from"./field-Bg8ctQzG.js";import{n as w,t as T}from"./section-card-BgvEV0hQ.js";import{r as E}from"./icons.stories-CefJYQUg.js";var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{E(),u(),f(),C(),m(),o(),g(),w(),D=t(),O={title:`Componentes/Layout/Section Card`,component:T,args:{title:`Dados do escritório`,description:`Aparecem nas petições geradas e no cabeçalho dos relatórios.`,headingLevel:`h2`,divided:!1},argTypes:{title:{control:`text`,description:`Título da seção (heading e nome acessível da região).`},description:{control:`text`,description:`Texto de apoio abaixo do título.`},actions:{control:!1,description:`Ações no canto direito do cabeçalho.`},headingLevel:{control:`inline-radio`,options:[`h2`,`h3`,`h4`],description:`Nível do heading.`},divided:{control:`boolean`,description:`Divisória entre cabeçalho e conteúdo.`},className:{table:{disable:!0}},contentClassName:{table:{disable:!0}}},parameters:{layout:`fullscreen`,docs:{description:{component:'Bloco de seção de página: um Card com título, descrição opcional, ações à direita e conteúdo. Monta sobre `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction` e `CardContent`, com raio `card` (28) e respiro de 32 (24 em contêiner estreito).\n\nReferência de hierarquia: jota.ai (cartão do formulário Enterprise). Título forte e curto, descrição em muted logo abaixo, conteúdo afastado do cabeçalho; em formulários longos, uma divisória (`divided`) separa cabeçalho e campos.\n\n**Quando usar**\n- Seções de telas de configuração e detalhe: "Dados do escritório", "Equipe", "Integrações".\n- Formulários divididos em blocos, cada um com sua ação (Salvar, Adicionar).\n\n**Quando não usar**\n- Indicadores: MetricCard. Linhas repetidas: ListRow ou Item.\n- Card com rodapé, mídia ou layout livre: use `Card` e suas partes diretamente.\n\n**Acessibilidade**\n- A raiz é uma região (`role="region"`) nomeada pelo título. Ajuste `headingLevel` à hierarquia da página (`h2` logo abaixo do `h1` do PageHeader).\n\n```tsx\n<SectionCard\n  title="Equipe"\n  description="Quem acessa os processos deste escritório."\n  actions={<Button size="sm"><Plus /> Convidar</Button>}\n>\n  …\n</SectionCard>\n```\n'}}},decorators:[e=>(0,D.jsx)(`div`,{className:`min-h-screen bg-canvas p-8`,children:(0,D.jsx)(e,{})})]},k=[e=>(0,D.jsx)(`div`,{className:`w-[720px] max-w-full`,children:(0,D.jsx)(e,{})})],A=()=>(0,D.jsxs)(v,{className:`grid grid-cols-1 gap-4 @md/section-card:grid-cols-2`,children:[(0,D.jsxs)(S,{children:[(0,D.jsx)(b,{htmlFor:`office-name`,children:`Razão social`}),(0,D.jsx)(h,{id:`office-name`,defaultValue:`Souza & Lima Sociedade de Advogados`})]}),(0,D.jsxs)(S,{children:[(0,D.jsx)(b,{htmlFor:`office-cnpj`,children:`CNPJ`}),(0,D.jsx)(h,{id:`office-cnpj`,defaultValue:`12.345.678/0001-90`,inputMode:`numeric`,className:`text-code`})]}),(0,D.jsxs)(S,{children:[(0,D.jsx)(b,{htmlFor:`office-oab`,children:`Registro na OAB`}),(0,D.jsx)(h,{id:`office-oab`,placeholder:`OAB/SP 12.345`}),(0,D.jsx)(x,{children:`Número de inscrição da sociedade na seccional.`})]}),(0,D.jsxs)(S,{children:[(0,D.jsx)(b,{htmlFor:`office-uf`,children:`Seccional`}),(0,D.jsxs)(l,{defaultValue:`SP`,children:[(0,D.jsx)(c,{id:`office-uf`,children:(0,D.jsx)(i,{})}),(0,D.jsx)(s,{children:[`SP`,`RJ`,`MG`,`RS`,`PR`].map(e=>(0,D.jsx)(a,{value:e,children:e},e))})]})]})]}),j={decorators:k,args:{actions:(0,D.jsx)(d,{size:`sm`,children:`Salvar alterações`})},render:e=>(0,D.jsx)(T,{...e,children:(0,D.jsx)(A,{})})},M={decorators:k,name:`Sem ações`,args:{title:`Endereço de correspondência`,description:void 0},render:e=>(0,D.jsx)(T,{...e,children:(0,D.jsx)(`p`,{className:`text-body-sm text-muted-foreground`,children:`Av. Paulista, 1.000, 12º andar, Bela Vista, São Paulo/SP, 01310-100`})})},N={decorators:k,name:`Com descrição e várias ações`,args:{title:`Equipe`,description:`Quem acessa os processos e prazos deste escritório.`,actions:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(d,{size:`sm`,variant:`ghost`,"aria-label":`Mais opções`,children:(0,D.jsx)(n,{})}),(0,D.jsxs)(d,{size:`sm`,children:[(0,D.jsx)(r,{}),` Convidar`]})]})},render:e=>(0,D.jsx)(T,{...e,children:(0,D.jsx)(`ul`,{className:`flex flex-col divide-y divide-border`,children:[[`Ana Souza`,`Sócia · OAB/SP 123.456`,`Administradora`],[`Bruno Lima`,`Associado · OAB/SP 234.567`,`Advogado`],[`Carla Dias`,`Paralegal`,`Assistente`]].map(([e,t,n])=>(0,D.jsxs)(`li`,{className:`flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0`,children:[(0,D.jsxs)(`div`,{className:`flex flex-col`,children:[(0,D.jsx)(`span`,{className:`text-body-md-strong text-foreground`,children:e}),(0,D.jsx)(`span`,{className:`text-body-sm text-muted-foreground`,children:t})]}),(0,D.jsx)(p,{variant:`secondary`,children:n})]},e))})})},P={decorators:k,name:`Formulário com divisória`,parameters:{docs:{description:{story:`Formulário longo no ritmo do jota.ai: cabeçalho, divisória e campos preenchidos em duas colunas, com erro e ajuda.`}}},args:{title:`Contato comercial`,description:`Conte um pouco sobre o escritório. A equipe da BBA Tech entra em contato para montar a proposta.`,divided:!0,actions:void 0},render:e=>(0,D.jsxs)(T,{...e,children:[(0,D.jsxs)(v,{className:`grid grid-cols-1 gap-4 @md/section-card:grid-cols-2`,children:[(0,D.jsxs)(S,{children:[(0,D.jsx)(b,{htmlFor:`lead-name`,children:`Nome completo`}),(0,D.jsx)(h,{id:`lead-name`,defaultValue:`Ana Souza`,autoComplete:`name`})]}),(0,D.jsxs)(S,{"data-invalid":!0,children:[(0,D.jsx)(b,{htmlFor:`lead-email`,children:`E-mail`}),(0,D.jsx)(h,{id:`lead-email`,type:`email`,defaultValue:`ana@souzalima`,"aria-invalid":!0}),(0,D.jsx)(y,{children:`E-mail incompleto. Ex.: nome@escritorio.com.br`})]}),(0,D.jsxs)(S,{children:[(0,D.jsx)(b,{htmlFor:`lead-phone`,children:`Telefone com DDD`}),(0,D.jsx)(h,{id:`lead-phone`,type:`tel`,placeholder:`(11) 91234-5678`})]}),(0,D.jsxs)(S,{"data-disabled":!0,children:[(0,D.jsx)(b,{htmlFor:`lead-plan`,children:`Plano`}),(0,D.jsx)(h,{id:`lead-plan`,defaultValue:`Enterprise`,disabled:!0}),(0,D.jsx)(x,{children:`Definido pela proposta.`})]}),(0,D.jsxs)(S,{className:`@md/section-card:col-span-2`,children:[(0,D.jsx)(b,{htmlFor:`lead-notes`,children:`O que o escritório busca?`}),(0,D.jsx)(_,{id:`lead-notes`,placeholder:`Ex.: controle de prazos de 3 mil processos e integração com o PJe.`})]})]}),(0,D.jsx)(`div`,{className:`mt-8 flex justify-end`,children:(0,D.jsx)(d,{children:`Enviar`})})]})},F={name:`Responsivo (contêiner estreito)`,parameters:{docs:{description:{story:`Em contêiner com menos de 448px, o respiro cai para 24, as ações descem para baixo do título e os campos ficam em uma coluna.`}}},decorators:[e=>(0,D.jsx)(`div`,{className:`w-[360px]`,children:(0,D.jsx)(e,{})})],args:{title:`Dados do escritório`,actions:(0,D.jsx)(d,{size:`sm`,children:`Salvar alterações`})},render:e=>(0,D.jsx)(T,{...e,children:(0,D.jsx)(A,{})})},I={name:`Na página`,render:()=>(0,D.jsxs)(`div`,{className:`mx-auto flex max-w-[960px] flex-col gap-6`,children:[(0,D.jsx)(`h1`,{className:`text-heading-3 text-foreground`,children:`Configurações do escritório`}),(0,D.jsx)(T,{title:`Dados do escritório`,description:`Aparecem nas petições geradas e no cabeçalho dos relatórios.`,actions:(0,D.jsx)(d,{size:`sm`,children:`Salvar alterações`}),children:(0,D.jsx)(A,{})}),(0,D.jsx)(T,{title:`Equipe`,description:`Quem acessa os processos e prazos deste escritório.`,actions:(0,D.jsxs)(d,{size:`sm`,variant:`outline`,children:[(0,D.jsx)(r,{}),` Convidar`]}),children:(0,D.jsx)(`p`,{className:`text-body-sm text-muted-foreground`,children:`3 pessoas com acesso · 1 convite pendente`})})]})},L=[`Default`,`WithoutActions`,`WithDescription`,`DividedForm`,`Responsive`,`Page`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: wide,
  args: {
    actions: <Button size="sm">Salvar alterações</Button>
  },
  render: args => <SectionCard {...args}>
      <OfficeFields />
    </SectionCard>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  decorators: wide,
  name: "Sem ações",
  args: {
    title: "Endereço de correspondência",
    description: undefined
  },
  render: args => <SectionCard {...args}>
      <p className="text-body-sm text-muted-foreground">Av. Paulista, 1.000, 12º andar, Bela Vista, São Paulo/SP, 01310-100</p>
    </SectionCard>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  decorators: wide,
  name: "Com descrição e várias ações",
  args: {
    title: "Equipe",
    description: "Quem acessa os processos e prazos deste escritório.",
    actions: <>
        <Button size="sm" variant="ghost" aria-label="Mais opções"><Ellipsis /></Button>
        <Button size="sm"><Plus /> Convidar</Button>
      </>
  },
  render: args => <SectionCard {...args}>
      <ul className="flex flex-col divide-y divide-border">
        {[["Ana Souza", "Sócia · OAB/SP 123.456", "Administradora"], ["Bruno Lima", "Associado · OAB/SP 234.567", "Advogado"], ["Carla Dias", "Paralegal", "Assistente"]].map(([name, role, profile]) => <li key={name} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
            <div className="flex flex-col">
              <span className="text-body-md-strong text-foreground">{name}</span>
              <span className="text-body-sm text-muted-foreground">{role}</span>
            </div>
            <Badge variant="secondary">{profile}</Badge>
          </li>)}
      </ul>
    </SectionCard>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  decorators: wide,
  name: "Formulário com divisória",
  parameters: {
    docs: {
      description: {
        story: "Formulário longo no ritmo do jota.ai: cabeçalho, divisória e campos preenchidos em duas colunas, com erro e ajuda."
      }
    }
  },
  args: {
    title: "Contato comercial",
    description: "Conte um pouco sobre o escritório. A equipe da BBA Tech entra em contato para montar a proposta.",
    divided: true,
    actions: undefined
  },
  render: args => <SectionCard {...args}>
      <FieldGroup className="grid grid-cols-1 gap-4 @md/section-card:grid-cols-2">
        <Field>
          <FieldLabel htmlFor="lead-name">Nome completo</FieldLabel>
          <Input id="lead-name" defaultValue="Ana Souza" autoComplete="name" />
        </Field>
        <Field data-invalid>
          <FieldLabel htmlFor="lead-email">E-mail</FieldLabel>
          <Input id="lead-email" type="email" defaultValue="ana@souzalima" aria-invalid />
          <FieldError>E-mail incompleto. Ex.: nome@escritorio.com.br</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="lead-phone">Telefone com DDD</FieldLabel>
          <Input id="lead-phone" type="tel" placeholder="(11) 91234-5678" />
        </Field>
        <Field data-disabled>
          <FieldLabel htmlFor="lead-plan">Plano</FieldLabel>
          <Input id="lead-plan" defaultValue="Enterprise" disabled />
          <FieldDescription>Definido pela proposta.</FieldDescription>
        </Field>
        <Field className="@md/section-card:col-span-2">
          <FieldLabel htmlFor="lead-notes">O que o escritório busca?</FieldLabel>
          <Textarea id="lead-notes" placeholder="Ex.: controle de prazos de 3 mil processos e integração com o PJe." />
        </Field>
      </FieldGroup>
      <div className="mt-8 flex justify-end">
        <Button>Enviar</Button>
      </div>
    </SectionCard>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Responsivo (contêiner estreito)",
  parameters: {
    docs: {
      description: {
        story: "Em contêiner com menos de 448px, o respiro cai para 24, as ações descem para baixo do título e os campos ficam em uma coluna."
      }
    }
  },
  decorators: [Story => <div className="w-[360px]"><Story /></div>],
  args: {
    title: "Dados do escritório",
    actions: <Button size="sm">Salvar alterações</Button>
  },
  render: args => <SectionCard {...args}>
      <OfficeFields />
    </SectionCard>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Na página",
  render: () => <div className="mx-auto flex max-w-[960px] flex-col gap-6">
      <h1 className="text-heading-3 text-foreground">Configurações do escritório</h1>
      <SectionCard title="Dados do escritório" description="Aparecem nas petições geradas e no cabeçalho dos relatórios." actions={<Button size="sm">Salvar alterações</Button>}>
        <OfficeFields />
      </SectionCard>
      <SectionCard title="Equipe" description="Quem acessa os processos e prazos deste escritório." actions={<Button size="sm" variant="outline"><Plus /> Convidar</Button>}>
        <p className="text-body-sm text-muted-foreground">3 pessoas com acesso · 1 convite pendente</p>
      </SectionCard>
    </div>
}`,...I.parameters?.docs?.source}}}})))()}R();export{j as Default,P as DividedForm,I as Page,F as Responsive,N as WithDescription,M as WithoutActions,L as __namedExportsOrder,O as default};