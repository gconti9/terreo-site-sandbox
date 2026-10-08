# Térreo Mini-Market

Site de pré-lançamento do Térreo Mini-Market, mercado de autoatendimento 24h dentro do condomínio. Ilhéus, Bahia.

> O mercado do seu prédio. Aberto toda vez que você desce.

## Estrutura

- `index.html`: o site inteiro (HTML, CSS e JavaScript em um arquivo só). As fontes vêm do Google Fonts.
- `assets/logos/`: logos oficiais em SVG (assinatura, Madrugada, em linha, uma cor, símbolo e favicon).
- `assets/img/`: imagem de compartilhamento (`og.png`, 1200×630) e ícones.
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `site.webmanifest`: ícones do navegador e do celular.
- `robots.txt` e `sitemap.xml`: arquivos para os buscadores.

## Publicar no Vercel

1. Em vercel.com, clique em **Add New → Project** e importe este repositório.
2. Em **Framework Preset**, escolha **Other**. Deixe o comando de build vazio e o diretório de saída como está (raiz).
3. Clique em **Deploy**. Cada novo envio para a branch `main` publica de novo automaticamente.

## Ao ligar um domínio próprio

Troque `https://terreominimarket.com.br` pelo domínio novo em `index.html` (link canônico, Open Graph e dados estruturados), em `robots.txt` e em `sitemap.xml`.

## Testar localmente

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000.
