# Design Patterns em TypeScript 🎯

Uma coleção completa de exemplos práticos de **Padrões de Projeto (Design Patterns)** implementados em TypeScript, demonstrando as melhores práticas para resolver problemas comuns de desenvolvimento de software.

## Sobre o projeto

Este repositório contém implementações práticas dos principais padrões de projeto (Design Patterns) descritos no livro "Design Patterns: Elements of Reusable Object-Oriented Software" (Gang of Four), adaptados para TypeScript com exemplos claros e bem documentados.

Os padrões de projeto são soluções reutilizáveis para problemas comuns no desenvolvimento de software, oferecendo uma linguagem comum entre desenvolvedores e promovendo código mais limpo, flexível e maintível.

## 🛠 Tecnologias utilizadas

- **TypeScript** - Linguagem principal
- **Node.js** - Runtime para execução
- **JavaScript** - Código transpilado para compatibilidade

## ⚙️ Como executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Executando os exemplos

1. Clone o repositório:
```bash
git clone https://github.com/lucasrodriguescunha/design-patterns-in-typescript.git
cd design-patterns-in-typescript
```

2. Para executar um exemplo específico em TypeScript:
```bash
npx ts-node Creational/abstract_factory/main.ts
```

3. Ou execute a versão JavaScript já transpilada:
```bash
node Creational/abstract_factory/main.js
```

## 📚 Padrões Implementados

### 🏗️ Padrões Criacionais

Os padrões criacionais fornecem vários mecanismos de criação de objetos, aumentando a flexibilidade e reutilização de código existente.

#### 🏭 [Abstract Factory](./Creational/abstract_factory/)
**Propósito:** Fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas.

**Quando usar:**
- Quando o sistema precisa ser independente de como seus objetos são criados
- Quando você precisa trabalhar com famílias de produtos relacionados

#### 🔨 [Builder](./Creational/builder/)
**Propósito:** Permite construir objetos complexos passo a passo, permitindo criar diferentes tipos e representações de um objeto usando o mesmo código de construção.

**Quando usar:**
- Para criar objetos complexos com muitos parâmetros opcionais
- Quando você quer evitar construtores "telescópicos"

#### 🏭 [Factory Method](./Creational/factory_method/)
**Propósito:** Fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

**Quando usar:**
- Quando você não souber de antemão os tipos exatos de objetos que seu código deve trabalhar
- Quando você quer fornecer aos usuários da sua biblioteca uma forma de estender seus componentes internos

#### 🐑 [Prototype](./Creational/prototype/)
**Propósito:** Permite copiar objetos existentes sem fazer seu código depender de suas classes.

**Quando usar:**
- Quando o código não deve depender das classes concretas de objetos que precisa copiar
- Quando você quer reduzir o número de subclasses que só diferem na forma como inicializam seus objetos

#### 👑 [Singleton](./Creational/singleton/)
**Propósito:** Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global para ela.

**Quando usar:**
- Quando uma classe deve ter apenas uma instância disponível para todos os clientes
- Quando você precisa de controle mais rigoroso sobre variáveis globais

## 📁 Estrutura do Projeto

```
design-patterns-in-typescript/
├── README.md
└── Creational/
    ├── abstract_factory/
    │   ├── main.ts          # Implementação em TypeScript
    │   └── main.js          # Versão transpilada
    ├── builder/
    │   ├── main.ts
    │   └── main.js
    ├── factory_method/
    │   ├── main.ts
    │   └── main.js
    ├── prototype/
    │   └── main.ts
    └── singleton/
        ├── main.ts
        └── main.js
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Diretrizes para Contribuição

- Mantenha o código limpo e bem documentado
- Adicione comentários explicativos em português
- Inclua exemplos práticos de uso
- Siga as convenções de nomenclatura do TypeScript

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

**Desenvolvido com ❤️ por [Lucas Rodrigues Cunha](https://github.com/lucasrodriguescunha)**
