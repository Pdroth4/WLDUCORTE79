# WLDUCORTE79 - Site Frontend React

Projeto frontend mobile first para a barbearia **WLDUCORTE79**, criado com:

- React.js
- Vite
- TailwindCSS
- React Router DOM
- Framer Motion
- Lucide React Icons

## Como rodar

```bash
npm install
npm run dev
```

## Logo

Coloque a logo enviada no caminho:

```bash
public/logo.png
```

O site já está buscando a logo nesse local.

## Fotos do carrossel

O carrossel está preparado para 7 fotos. Para usar imagens reais, coloque os arquivos:

```bash
public/gallery/foto-1.jpg
public/gallery/foto-2.jpg
public/gallery/foto-3.jpg
public/gallery/foto-4.jpg
public/gallery/foto-5.jpg
public/gallery/foto-6.jpg
public/gallery/foto-7.jpg
```

Depois, no arquivo `src/data/siteData.js`, troque `src: null` por:

```js
src: "/gallery/foto-1.jpg"
```

## WhatsApp

No arquivo `src/data/siteData.js`, substitua:

```js
whatsappNumber: ""
```

pelo número com DDI e DDD, somente números.

Exemplo:

```js
whatsappNumber: "5579999999999"
```

Se deixar vazio, o botão abre o WhatsApp apenas com a mensagem pronta.
