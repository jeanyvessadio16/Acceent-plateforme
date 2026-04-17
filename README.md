# Acceent Website

[![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000)](https://ui.shadcn.com/)

Site web officiel de l'Association Acceent (Action pour la Contribution Collective pour l'Éducation, l'Entrepreneuriat et le Numérique des Territoires), une association sénégalaise dédiée au développement local et à l'accompagnement des jeunes.

## 🌟 Fonctionnalités

- **Page d'accueil interactive** avec animations fluides et design moderne
- **Section À propos** présentant la mission et les valeurs de l'association
- **Programmes éducatifs** : Éducation, Entrepreneuriat et Numérique
- **Galerie de partenaires** avec slider animé et effets hover
- **Section contact** pour les demandes d'information
- **Design responsive** adapté à tous les appareils
- **Animations CSS** pour une expérience utilisateur enrichie

## 🚀 Technologies utilisées

### Framework & Langage

- **Next.js 16.2.3** - Framework React pour la production
- **React 19.2.4** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript 5** - JavaScript typé pour plus de robustesse

### Styling & UI

- **Tailwind CSS 4** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI accessibles et personnalisables
- **Radix UI** - Primitives UI headless
- **Lucide React** - Bibliothèque d'icônes

### État & Données

- **Zustand** - Gestion d'état légère et simple

### Outils de développement

- **ESLint** - Linting du code JavaScript/TypeScript
- **PostCSS** - Outil de transformation CSS

## 📁 Structure du projet

```
acceent-website/
├── public/                    # Assets statiques
│   ├── image/                # Images du site
│   └── logo/                 # Logos et médias sociaux
│       └── partenaires/      # Logos des partenaires
├── src/
│   ├── app/                  # Pages Next.js (App Router)
│   │   ├── globals.css       # Styles globaux
│   │   ├── layout.tsx        # Layout principal
│   │   ├── page.tsx          # Page d'accueil
│   │   └── (programmes)/     # Routes dynamiques des programmes
│   ├── components/           # Composants réutilisables
│   │   ├── layout/          # Composants de layout (Header, Footer)
│   │   ├── shared/          # Composants partagés (About, Contact, Partenaires)
│   │   └── ui/              # Composants UI (Button, Card, etc.)
│   ├── data/                # Données statiques
│   │   ├── partenaires.ts   # Liste des partenaires
│   │   └── programmeAcceent.ts # Programmes de l'association
│   ├── hooks/               # Hooks personnalisés React
│   ├── lib/                 # Utilitaires et configurations
│   └── types/               # Définitions TypeScript
│       ├── partenaires.ts   # Interface Partenaire
│       ├── programme.ts     # Interface Programme
│       └── section.ts       # Types de sections
└── package.json             # Dépendances et scripts
```

## 🛠️ Installation et configuration

### Prérequis

- **Node.js** (version 18 ou supérieure)
- **pnpm** (recommandé) ou npm

### Installation

1. **Cloner le repository**

   ```bash
   git clone <url-du-repository>
   cd acceent-website
   ```

2. **Installer les dépendances**

   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

4. **Ouvrir l'application**
   - Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📜 Scripts disponibles

- `pnpm run dev` - Lance le serveur de développement
- `pnpm run build` - Construit l'application pour la production
- `pnpm run start` - Lance l'application en mode production
- `pnpm run lint` - Vérifie le code avec ESLint

## 🎨 Fonctionnalités techniques

### Animations

- **Hero section** : Animation d'entrée en cascade avec délais progressifs
- **Slider partenaires** : Carrousel horizontal continu avec pause au survol
- **Effets hover** : Transitions fluides sur les cartes et boutons

### Responsive Design

- Design adaptatif pour mobile, tablette et desktop
- Utilisation de Tailwind CSS pour une approche mobile-first

### Performance

- Optimisation des images avec Next.js Image component
- Code splitting automatique
- CSS optimisé avec Tailwind

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

**Association Acceent**

- Site web : [www.acceent.org](https://www.acceent.org)
- Email : contact@acceent.org

---

_Développé avec ❤️ pour le développement local et l'accompagnement des jeunes au Sénégal._
