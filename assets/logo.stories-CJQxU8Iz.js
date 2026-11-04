import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./logo-DcisiT-r.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={title:`Fundamentos/Marca`,component:r,parameters:{docs:{description:{component:'Logo do JuriOS (Logo 3a do Branding): símbolo "J" e o nome "JURIOS", em vetor, só em preto ou branco: preta (`logo`) sobre fundo claro e branca (`logo-inverse`) sobre fundo escuro, no tema escuro e dentro da sidebar navy. A cor primária (#021421) é das superfícies e botões, nunca da logo. Tamanhos pela altura: `sm` 24px, `md` 32px (padrão) e `lg` 44px. Use `tone="inverse"` sobre fundos escuros, `primary` ou `brand`.\n\n**Compacto é a versão para tamanhos reduzidos: headers, barras, sidebar e e-mail** (símbolo 1,35× a altura das letras, horizontal, para o nome continuar legível). Sem `variant`, `sm` e `md` já usam o compacto e `lg` usa o lockup completo (`variant="full"`), reservado a capas e ao painel do login. Abaixo de 20px, só o símbolo: `variant="mark"` (menu lateral recolhido, avatar, favicon).\n\nFora do React (favicon, ícone do app, e-mail, documentos), use os arquivos do pacote em `@bbatech-org/design-system/brand/`: `jurios-logo.svg`, `jurios-logo-inverse.svg`, `jurios-symbol.svg`, `jurios-symbol-inverse.svg`, `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` e `icon-512.png`.\n\nNão recrie o logo com texto solto nem use outra cor além de preto ou branco. O Logo é exposto como `role="img"` com nome "JuriOS" (`data-slot="logo"`). Quando o logo for link para a página inicial, dê ao link um rótulo acessível (`aria-label="JuriOS, página inicial"`).'}}}},o={parameters:{docs:{description:{story:`variant="full": lockup completo, para capas e o painel do login.`}}},args:{variant:`full`,size:`lg`}},s={parameters:{docs:{description:{story:`Sem variant: sm e md usam o compacto; lg usa o completo.`}}},render:()=>(0,i.jsxs)(`div`,{className:`flex items-baseline gap-8`,children:[(0,i.jsx)(r,{size:`sm`}),(0,i.jsx)(r,{size:`md`}),(0,i.jsx)(r,{size:`lg`})]})},c={parameters:{docs:{description:{story:`tone="inverse" sobre fundo brand.`}}},render:()=>(0,i.jsx)(`div`,{className:`rounded-surface bg-brand px-10 py-8`,children:(0,i.jsx)(r,{tone:`inverse`,size:`lg`})})},l={parameters:{docs:{description:{story:`variant="compact": a versão para tamanhos reduzidos (header, barras, sidebar, e-mail), com o símbolo proporcional às letras.`}}},render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,i.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,i.jsx)(r,{variant:`compact`,size:`sm`}),(0,i.jsx)(r,{variant:`compact`,size:`md`}),(0,i.jsx)(r,{variant:`compact`,size:`lg`})]}),(0,i.jsx)(`div`,{className:`w-fit rounded-surface bg-sidebar px-6 py-4`,"data-slot":`sidebar`,children:(0,i.jsx)(r,{variant:`compact`,size:`sm`})})]})},u={parameters:{docs:{description:{story:`variant="mark": só o símbolo.`}}},render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,i.jsx)(r,{variant:`mark`,size:`sm`}),(0,i.jsx)(r,{variant:`mark`,size:`md`}),(0,i.jsx)(r,{variant:`mark`,size:`lg`})]})},d=[`Full`,`Sizes`,`Inverse`,`Compact`,`Mark`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "variant=\\"full\\": lockup completo, para capas e o painel do login."
      }
    }
  },
  args: {
    variant: "full",
    size: "lg"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sem variant: sm e md usam o compacto; lg usa o completo."
      }
    }
  },
  render: () => <div className="flex items-baseline gap-8">
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "tone=\\"inverse\\" sobre fundo brand."
      }
    }
  },
  render: () => <div className="rounded-surface bg-brand px-10 py-8">
      <Logo tone="inverse" size="lg" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "variant=\\"compact\\": a versão para tamanhos reduzidos (header, barras, sidebar, e-mail), com o símbolo proporcional às letras."
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex items-center gap-8">
        <Logo variant="compact" size="sm" />
        <Logo variant="compact" size="md" />
        <Logo variant="compact" size="lg" />
      </div>
      <div className="w-fit rounded-surface bg-sidebar px-6 py-4" data-slot="sidebar">
        <Logo variant="compact" size="sm" />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "variant=\\"mark\\": só o símbolo."
      }
    }
  },
  render: () => <div className="flex items-center gap-8">
      <Logo variant="mark" size="sm" />
      <Logo variant="mark" size="md" />
      <Logo variant="mark" size="lg" />
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Compact,o as Full,c as Inverse,u as Mark,s as Sizes,d as __namedExportsOrder,a as default};