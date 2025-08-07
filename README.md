# 🌱 PlantCare - Website Moderno sobre Cuidados com Plantas

Uma página web moderna e totalmente interativa sobre cuidados com plantas, criada com HTML5, CSS3 e JavaScript puro. Perfeita para aprender desenvolvimento web e criar um portfólio impressionante!

![PlantCare](https://img.shields.io/badge/PlantCare-🌱%20Website-22c55e?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

## 🚀 Demo Ao Vivo

👉 **[Ver Website Funcionando](https://6892938f1e2ba65bd16b4709--plantcare-page.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/6892938f-1e2b-a65b-d16b-4709/deploy-status)](https://app.netlify.com/sites/plantcare-page/deploys)

## ✨ Funcionalidades Incríveis

### 🧮 **Calculadora de Rega Inteligente**
- Calcula frequência e quantidade de água baseado no tipo de planta
- Considera tamanho do vaso e ambiente (interno/externo)
- Recomendações personalizadas em tempo real
- Interface intuitiva com feedback visual

### 🔍 **Galeria de Plantas Interativa**
- Filtros dinâmicos por nível de dificuldade
- Animações suaves de transição
- 6 espécies diferentes com informações detalhadas
- Cards responsivos com hover effects

### 📱 **Sistema de Modal Avançado**
- Detalhes completos de cada planta
- Lista de cuidados específicos
- Navegação por teclado (ESC para fechar)
- Animações de entrada e saída

### 🎠 **Carousel de Dicas Automático**
- 5 dicas profissionais de cuidados
- Navegação manual com botões
- Indicadores visuais ativos
- Auto-play configurável
- Controles responsivos

### 📱 **Design 100% Responsivo**
- Mobile-first approach
- Breakpoints otimizados
- Touch-friendly para dispositivos móveis
- Compatível com todos os navegadores modernos

## 🌐 Tecnologias e Deploy

| Tecnologia | Uso | Recursos Avançados |
|------------|-----|-------------------|
| **HTML5** | Estrutura semântica | Web Components, Accessibility |
| **CSS3** | Estilização moderna | Grid, Flexbox, Animations, Variables |
| **JavaScript** | Interatividade | ES6+, DOM Manipulation, Event Handling |
| **Netlify** | Hospedagem e Deploy | CI/CD automático, CDN global |
| **Google Fonts** | Tipografia | Poppins Font Family |

## 🎨 Recursos de Design

- **🎨 Paleta de Cores Moderna**: Verde natural com gradientes suaves
- **✨ Animações CSS**: Hover effects, loading states, micro-interactions
- **🌟 Glassmorphism**: Efeitos de vidro no header e elementos
- **📐 Grid Layout**: Sistema responsivo avançado
- **🎯 UX/UI Profissional**: Interface intuitiva e acessível

## 📂 Estrutura do Projeto

```
plantcare-website/
├── 📄 index.html          # Página principal (1 arquivo único!)
├── 📄 README.md          # Esta documentação
├── 📄 .gitignore         # Arquivos ignorados pelo Git
└── 🎨 Estilos e Scripts   # Tudo integrado no HTML
    ├── CSS3 (interno)     # ~400 linhas de CSS moderno
    └── JavaScript (interno) # ~300 linhas de JS funcional
```

## 🚀 Acesso Rápido

### **🌐 Site Online**
**[🌱 PlantCare - Acesse Agora](https://6892938f1e2ba65bd16b4709--plantcare-page.netlify.app/)**

### **⚡ Performance**
- ⚡ **Carregamento**: < 2 segundos
- 📱 **Mobile**: 100% responsivo
- 🌍 **CDN Global**: Netlify
- 🚀 **Deploy**: Automático via Git

## 🛠️ Instalação e Deploy

### **Instalação Local**
```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/plantcare-website.git

# 2. Entre na pasta
cd plantcare-website

# 3. Abra no navegador
# Método 1: Duplo clique no index.html
# Método 2: Use Live Server no VS Code
# Método 3: Python -m http.server 8000
```

### **Deploy no Netlify (Recomendado)**
1. Acesse [netlify.com](https://netlify.com)
2. Conecte seu repositório GitHub
3. Deploy automático a cada push
4. **Seu site**: [PlantCare no Netlify](https://6892938f1e2ba65bd16b4709--plantcare-page.netlify.app/)

### **Ou GitHub Pages**
1. Vá em **Settings** do repositório
2. Clique em **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**
5. Clique **Save**
6. Aguarde 2-5 minutos

## 🎯 Como Funciona

### **Calculadora de Rega**
```javascript
// Exemplo da lógica inteligente
switch(tipo) {
    case 'suculenta':
        frequencia = ambiente === 'externo' ? '10-14 dias' : '14-21 dias';
        quantidade = tamanho < 15 ? '50ml' : '100ml';
        break;
    // ... mais lógicas
}
```

### **Sistema de Filtros**
```javascript
// Filtragem dinâmica das plantas
function filtrarPlantas(filtro) {
    plantas_filtradas = filtro === 'todas' 
        ? [...plantas] 
        : plantas.filter(planta => planta.dificuldade === filtro);
}
```

### **Carousel Responsivo**
```javascript
// Navegação suave entre dicas
function atualizarCarousel() {
    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
}
```

## 🎨 Personalização

### **Mudar Cores**
```css
:root {
    --verde-principal: #22c55e;  /* Sua cor principal */
    --verde-escuro: #16a34a;     /* Hover states */
    --verde-claro: #dcfce7;      /* Backgrounds */
}
```

### **Adicionar Plantas**
```javascript
const novaPlanta = {
    nome: "Rosa do Deserto",
    emoji: "🌹",
    dificuldade: "medio",
    agua: "💧💧",
    luz: "☀️☀️",
    descricao: "Suculenta com flores exóticas...",
    cuidados: [
        "💧 Regue moderadamente",
        "☀️ Sol direto pela manhã",
        "🌡️ Proteja do frio extremo"
    ]
};
```

### **Personalizar Dicas**
```javascript
const novaDica = {
    titulo: "🌿 Sua Dica Personalizada",
    conteudo: "Conteúdo da sua dica especial..."
};
```

## 📱 Responsividade

| Dispositivo | Breakpoint | Otimizações |
|-------------|------------|-------------|
| **Mobile** | < 768px | Menu simplificado, cards empilhados |
| **Tablet** | 768px - 1024px | Grid adaptável, botões maiores |
| **Desktop** | > 1024px | Layout completo, hover effects |

## 🎮 Easter Eggs & Recursos Ocultos

- **🎮 Konami Code**: Digite ↑↑↓↓←→←→BA para ativar modo especial
- **🔍 Console Logs**: Abra F12 para ver mensagens divertidas
- **⌨️ Navegação por Teclado**: ESC fecha modais, Tab navega
- **🌙 Modo Noturno**: Easter egg temporário com filtro visual

## 🧪 Recursos Técnicos Avançados

### **Performance**
- ✅ CSS Variables para mudanças dinâmicas
- ✅ Will-change para animações otimizadas
- ✅ Lazy loading de componentes
- ✅ Event delegation para melhor performance

### **Acessibilidade**
- ✅ Navegação por teclado
- ✅ Cores com contraste adequado
- ✅ Labels semânticos
- ✅ Focus indicators visíveis

### **SEO**
- ✅ HTML semântico
- ✅ Meta tags otimizadas
- ✅ Structured data ready
- ✅ Performance optimized

## 🐛 Troubleshooting

### **Carousel não funciona?**
1. Abra o console (F12)
2. Procure por erros em vermelho
3. Verifique se todos os IDs existem
4. Teste os logs de debug

### **Calculadora não responde?**
1. Verifique se todos os campos estão preenchidos
2. Confirme os IDs dos elementos
3. Veja mensagens no console

### **Modal não abre?**
1. Teste clique em plantas diferentes
2. Verifique erros no console
3. Confirme estrutura HTML do modal

## 📊 Estatísticas do Projeto

- **📄 Linhas de Código**: ~800 linhas
- **🎨 Regras CSS**: ~150 regras
- **⚡ Funções JS**: ~15 funções
- **🌱 Plantas**: 6 espécies
- **💡 Dicas**: 5 dicas profissionais
- **📱 Breakpoints**: 3 responsivos

## 🚀 Melhorias Futuras

### **Versão 2.0 (Ideias)**
- [ ] 📸 Upload de fotos de plantas
- [ ] 🌡️ Integração com APIs de clima
- [ ] 📅 Calendário de cuidados
- [ ] 🏪 Marketplace de plantas
- [ ] 👥 Sistema de usuários
- [ ] 📊 Dashboard de estatísticas
- [ ] 🔔 Notificações push
- [ ] 🌍 Localização automática

## 📄 Licença

Este projeto é **open source** e está disponível sob a licença MIT. Sinta-se livre para:

- ✅ Usar em projetos pessoais
- ✅ Modificar e adaptar
- ✅ Distribuir e compartilhar
- ✅ Usar em portfólio profissional

## 👨‍💻 Sobre o Desenvolvedor

**[Seu Nome]**
- 🌐 **GitHub**: [@seu-usuario](https://github.com/seu-usuario)
- 💼 **LinkedIn**: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- 📧 **Email**: seu.email@gmail.com
- 🌍 **Localização**: Sua Cidade, Brasil

### **Skills Demonstradas**
- ✅ HTML5 Semântico
- ✅ CSS3 Avançado (Grid, Flexbox, Animations)
- ✅ JavaScript ES6+ (DOM, Events, Functions)
- ✅ Responsive Design
- ✅ UX/UI Design
- ✅ Git & GitHub
- ✅ Performance Optimization

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se livre para:

1. **🍴 Fork** o projeto
2. **🌿 Crie** uma branch (`git checkout -b feature/MinhaFeature`)
3. **💾 Commit** suas mudanças (`git commit -m 'feat: add amazing feature'`)
4. **🚀 Push** para a branch (`git push origin feature/MinhaFeature`)
5. **📬 Abra** um Pull Request

### **Como Contribuir**
- 🐛 Reporte bugs
- 💡 Sugira melhorias
- 📝 Melhore a documentação
- 🌟 Adicione novas plantas
- 🎨 Aprimore o design

## ⭐ Apoie o Projeto

Se este projeto te ajudou ou inspirou, considere:

- ⭐ **Dar uma estrela** no repositório
- 🔄 **Compartilhar** com outros desenvolvedores
- 🐛 **Reportar bugs** encontrados
- 💡 **Sugerir melhorias**
- 🤝 **Contribuir** com código

## 📈 Estatísticas do Repositório

![GitHub stars](https://img.shields.io/github/stars/seu-usuario/plantcare-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/plantcare-website?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/seu-usuario/plantcare-website?style=social)

---

<div align="center">

**🌱 Feito com ❤️ e muito ☕ para a comunidade dev brasileira**

*Transformando código em jardins digitais, uma linha por vez.*

**⭐ Se curtiu, deixa uma estrela aí em cima! ⭐**

</div>
