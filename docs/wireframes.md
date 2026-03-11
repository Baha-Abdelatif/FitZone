### Wireframes Version "Moderne"

<aside>
⚡

**Direction artistique** : Tons sombres dominants (#0e2640 Bleu nuit, #101010 Noir profond), accents chauds (#ff5c31 Orange vif, #aa491b Orange brûlé), textures industrielles (métal, brique, bois). Typo display : A4 SPEED Bold. Ambiance premium, brute et motivante.

</aside>

---

## Page 1 — Accueil

```
╔══════════════════════════════════════════════════════════════════╗
║  HEADER — sticky, fond #101010, texte #ffffff                   ║
║  ┌──────────────────────────────────────────────────────────┐    ║
║  │ [⚡ LOGO FIT ZONE]   Accueil  Cours  Tarifs  KidZone     │    ║
║  │                      Bien-être  Le club  Contact         │    ║
║  │                                       [☰ Menu mobile]   │    ║
║  └──────────────────────────────────────────────────────────┘    ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — Plein écran (100vh), vidéo/photo immersive en fond      ║
║  Overlay gradient : #101010 → transparent (60% opacité)         ║
║  ┌──────────────────────────────────────────────────────────┐    ║
║  │                                                          │    ║
║  │        ⚡ FIT ZONE ⚡                                     │    ║
║  │        (Logo grande taille, A4 SPEED Bold)                │    ║
║  │                                                          │    ║
║  │        « VOTRE ZONE.                                     │    ║
║  │          VOTRE PUISSANCE.                                │    ║
║  │          VOTRE FUTUR. »                                  │    ║
║  │        (A4 SPEED Bold, #ffffff, lettres espacées)        │    ║
║  │                                                          │    ║
║  │   [🔥 COMMENCER MAINTENANT]   [VOIR LES COURS →]        │    ║
║  │    (#ff5c31, bold, large)      (outline #ffffff)         │    ║
║  │                                                          │    ║
║  │        ↓ scroll indicator animé                          │    ║
║  └──────────────────────────────────────────────────────────┘    ║
╠══════════════════════════════════════════════════════════════════╣
║  BARRE DE RÉASSURANCE — fond #0e2640, chiffres en #ff5c31      ║
║  ┌────────────┬────────────┬────────────┬────────────┐          ║
║  │   500+     │    40+     │    10+     │    98%     │          ║
║  │  MEMBRES   │ COURS/SEM  │   ANNÉES   │ SATISFAITS │          ║
║  │  (#ff5c31) │  (#ff5c31) │  (#ff5c31) │  (#ff5c31) │          ║
║  │  (légende  │  (légende  │  (légende  │  (légende  │          ║
║  │  #b7ada4)  │  #b7ada4)  │  #b7ada4)  │  #b7ada4)  │          ║
║  └────────────┴────────────┴────────────┴────────────┘          ║
╠══════════════════════════════════════════════════════════════════╣
║  NOS ESPACES — fond #ffffff, titres #0e2640                    ║
║  Titre section : « ENTRE DANS LA ZONE » (A4 SPEED Bold)       ║
║  Sous-titre : « Tout ce qu'il te faut, sous un même toit »    ║
║  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       ║
║  │ [Photo]  │  │ [Photo]  │  │ [Photo]  │  │ [Photo]  │       ║
║  │ overlay  │  │ overlay  │  │ overlay  │  │ overlay  │       ║
║  │ gradient │  │ gradient │  │ gradient │  │ gradient │       ║
║  │──────────│  │──────────│  │──────────│  │──────────│       ║
║  │ 🏋️ MUSCU │  │ 💥 COURS │  │ 🧒 KID  │  │ 💆 MASSA │       ║
║  │ Plateau  │  │ Collect. │  │  ZONE    │  │  GES     │       ║
║  │ complet  │  │ 4 famil- │  │ Garderie │  │ Récup.   │       ║
║  │ haltères │  │ les de   │  │ pendant  │  │ 1h, 80€  │       ║
║  │ rack...  │  │ cours    │  │ l'effort │  │ sportif  │       ║
║  │          │  │          │  │          │  │          │       ║
║  │ [→]      │  │ [→]      │  │ [→]      │  │ [→]      │       ║
║  └──────────┘  └──────────┘  └──────────┘  └──────────┘       ║
║  Hover : scale 1.03 + bordure basse #ff5c31                   ║
╠══════════════════════════════════════════════════════════════════╣
║  COURS COLLECTIFS — fond #101010, texte #ffffff                ║
║  Titre : « DES COURS POUR CHAQUE OBJECTIF »                   ║
║  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       ║
║  │[img] │ │[img] │ │[img] │ │[img] │ │[img] │ │[img] │       ║
║  │ RPM  │ │ZUMBA │ │ YOGA │ │BODY  │ │CROSS │ │SURF  │       ║
║  │45min │ │60min │ │60min │ │PUMP  │ │TRAIN.│ │EXPLO.│       ║
║  │      │ │      │ │      │ │45min │ │45min │ │30min │       ║
║  │badge │ │badge │ │badge │ │badge │ │badge │ │badge │       ║
║  │CARDIO│ │CARDIO│ │SOUPLE│ │RENFO.│ │RENFO.│ │SURF │       ║
║  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘       ║
║  Badges catégorie : couleur par famille                        ║
║  Cardio=#ff5c31  Renfo=#aa491b  Souplesse=#b7ada4  Surf=#0e2640║
║                                                                ║
║            [VOIR TOUT LE PLANNING →] (#ff5c31)                 ║
╠══════════════════════════════════════════════════════════════════╣
║  TARIFS (APERÇU) — fond #0e2640, texte #ffffff                 ║
║  Titre : « TROUVE TA FORMULE »                                 ║
║  Sous-titre : « Toutes les formules incluent le FULL ACCESS »  ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          ║
║  │  ENGAGEMENT  │  │ SANS ENGAGE. │  │ PASS & UNITÉ │          ║
║  │──────────────│  │──────────────│  │──────────────│          ║
║  │              │  │  ★ POPULAIRE │  │              │          ║
║  │   40€/mois   │  │   50€/mois   │  │  dès 15€     │          ║
║  │   (#ff5c31   │  │   (#ff5c31   │  │  (#ff5c31    │          ║
║  │    XXL)      │  │    XXL)      │  │   XXL)       │          ║
║  │              │  │              │  │              │          ║
║  │ ✓ Muscu      │  │ ✓ Muscu      │  │ ✓ Muscu      │          ║
║  │ ✓ Cours co   │  │ ✓ Cours co   │  │ ✓ Cours co   │          ║
║  │ ✓ RPM        │  │ ✓ RPM        │  │ ✓ RPM        │          ║
║  │ ✓ Cross-T    │  │ ✓ Cross-T    │  │ ✓ Cross-T    │          ║
║  │ ✓ Cardio     │  │ ✓ Cardio     │  │ ✓ Cardio     │          ║
║  │              │  │              │  │              │          ║
║  │ Frais: 50€   │  │ Frais: 50€   │  │ Sans frais   │          ║
║  │              │  │              │  │              │          ║
║  │[JE CHOISIS]  │  │[JE CHOISIS]  │  │[JE CHOISIS]  │          ║
║  │(outline      │  │(#ff5c31 plein│  │(outline      │          ║
║  │ #ffffff)     │  │ mis en avant)│  │ #ffffff)     │          ║
║  └──────────────┘  └──────────────┘  └──────────────┘          ║
║                                                                ║
║  Lien discret : « Tarifs jeunes & étudiants dès 30€/mois → »  ║
║  Lien discret : « Options garderie et massage → »              ║
╠══════════════════════════════════════════════════════════════════╣
║  SECTION SURF — fond photo surf pleine largeur + overlay       ║
║  Différenciant clé, ciblant les surfeurs (Capbreton)           ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │  [Photo : surfeur en action, vague Capbreton]            │   ║
║  │  Overlay #101010 50%                                     │   ║
║  │                                                          │   ║
║  │     « ENTRAÎNE-TOI POUR L'OCÉAN »                       │   ║
║  │     (A4 SPEED Bold, #ffffff)                             │   ║
║  │                                                          │   ║
║  │     Explosivité pour les manœuvres.                      │   ║
║  │     Endurance pour le line-up.                           │   ║
║  │     Programmes conçus par des passionnés.                │   ║
║  │                                                          │   ║
║  │     [DÉCOUVRIR LE PROGRAMME SURF] (#ff5c31)              │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  KIDZONE TEASER — fond #ffffff, accents doux                   ║
║  ┌──────────────────────┬───────────────────────────────┐      ║
║  │                      │  🧒 KID ZONE                  │      ║
║  │   [Photo enfants     │  « Vous entraînez pendant     │      ║
║  │    espace garderie]  │    que vos enfants s'amusent » │      ║
║  │                      │                               │      ║
║  │   (coins arrondis,   │  • Encadrement qualifié       │      ║
║  │    ton plus doux,    │  • Espace sécurisé & ludique  │      ║
║  │    couleurs chaudes) │  • Dès 10€ / séance           │      ║
║  │                      │  • Inclus dans certains abo.  │      ║
║  │                      │                               │      ║
║  │                      │  [EN SAVOIR PLUS] (#aa491b)   │      ║
║  └──────────────────────┴───────────────────────────────┘      ║
║  Note : ton plus accueillant, logo KidZone coloré              ║
╠══════════════════════════════════════════════════════════════════╣
║  TÉMOIGNAGES — fond #47403a, texte #ffffff                     ║
║  Titre : « ILS ONT REJOINT LA ZONE »                          ║
║  ┌────────────┐  ┌────────────┐  ┌────────────┐               ║
║  │  « ... »   │  │  « ... »   │  │  « ... »   │               ║
║  │            │  │            │  │            │               ║
║  │  [Photo]   │  │  [Photo]   │  │  [Photo]   │               ║
║  │  Prénom    │  │  Prénom    │  │  Prénom    │               ║
║  │  ⭐⭐⭐⭐⭐    │  │  ⭐⭐⭐⭐⭐    │  │  ⭐⭐⭐⭐⭐    │               ║
║  │  Profil :  │  │  Profil :  │  │  Profil :  │               ║
║  │  Surfeur   │  │  Parent    │  │  Étudiant  │               ║
║  └────────────┘  └────────────┘  └────────────┘               ║
║  Carrousel auto-scroll, dots de navigation                     ║
║  Note : 1 témoignage par cible pour la preuve sociale          ║
╠══════════════════════════════════════════════════════════════════╣
║  LOCALISATION — fond #ffffff                                   ║
║  ┌──────────────────────┬───────────────────────────────┐      ║
║  │                      │  📍 254 Chemin du Bayonnais   │      ║
║  │   [Google Maps       │     40230 Bénesse-Maremne     │      ║
║  │    interactive]      │                               │      ║
║  │                      │  🚗 Parking gratuit            │      ║
║  │   Marqueur ⚡ FZ     │  📍 5 min de Capbreton         │      ║
║  │                      │  📍 10 min d'Hossegor          │      ║
║  │                      │                               │      ║
║  │                      │  🕐 Horaires :                 │      ║
║  │                      │  Lun-Ven 6h-22h               │      ║
║  │                      │  Sam-Dim 8h-20h               │      ║
║  └──────────────────────┴───────────────────────────────┘      ║
╠══════════════════════════════════════════════════════════════════╣
║  CTA FINAL — fond #101010, pleine largeur                      ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │                                                          │   ║
║  │    ⚡ « PRÊT À ENTRER DANS LA ZONE ? » ⚡                │   ║
║  │    (A4 SPEED Bold, #ffffff, grande taille)                │   ║
║  │                                                          │   ║
║  │    [JE PRENDS MON ABONNEMENT] (#ff5c31, XL)              │   ║
║  │    ou « Essayer une séance → 15€ » (#b7ada4, lien)       │   ║
║  │                                                          │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  FOOTER — fond #101010, texte #b7ada4                          ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ ⚡ FIT ZONE          Navigation    Services    Contact   │   ║
║  │ Votre zone,          Accueil       Muscu       Tél.     │   ║
║  │ votre puissance,     Cours         Cours co    Email    │   ║
║  │ votre futur.         Tarifs        KidZone     Adresse  │   ║
║  │                      Le club       Massage              │   ║
║  │ [FB] [IG] [TT]       Blog                               │   ║
║  │                      Contact                            │   ║
║  │──────────────────────────────────────────────────────────│   ║
║  │ © 2026 Fit Zone · Mentions légales · CGV · Confidential.│   ║
║  └──────────────────────────────────────────────────────────┘   ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 2 — Le club (À propos)

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER identique à l'accueil]                                ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — 60vh, photo intérieur salle (ambiance industrielle)    ║
║  Overlay #101010 50%                                           ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │                                                          │   ║
║  │     « BIENVENUE DANS VOTRE ZONE »                       │   ║
║  │     (A4 SPEED Bold, #ffffff)                             │   ║
║  │                                                          │   ║
║  │     Plus qu'une salle. Un état d'esprit.                 │   ║
║  │     (#b7ada4)                                            │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  NOTRE HISTOIRE — fond #ffffff                                 ║
║  ┌──────────────────────┬───────────────────────────────┐      ║
║  │                      │  « DE LA PASSION              │      ║
║  │  [Photo fondateur    │    À LA ZONE »                │      ║
║  │   ou salle vide      │                               │      ║
║  │   avant ouverture]   │  Texte narratif : création    │      ║
║  │                      │  du club, zone artisanale de  │      ║
║  │                      │  Bénesse-Maremne, proximité   │      ║
║  │                      │  océan, vision…               │      ║
║  │                      │                               │      ║
║  │                      │  Ambiance brute et élégante : │      ║
║  │                      │  briques, métal, bois, cuir.  │      ║
║  └──────────────────────┴───────────────────────────────┘      ║
╠══════════════════════════════════════════════════════════════════╣
║  NOS VALEURS — fond #0e2640, texte #ffffff                     ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          ║
║  │   ⚡         │  │   🤝         │  │   👥         │          ║
║  │ PERFORMANCE  │  │ ACCESSIBILITÉ│  │  COMMUNAUTÉ  │          ║
║  │──────────────│  │──────────────│  │──────────────│          ║
║  │ Se dépasser  │  │ Des tarifs   │  │ Un club où   │          ║
║  │ à chaque     │  │ pour tous :  │  │ chacun a     │          ║
║  │ séance.      │  │ jeunes,      │  │ sa place :   │          ║
║  │ Programmes   │  │ étudiants,   │  │ surfeurs,    │          ║
║  │ exigeants,   │  │ familles.    │  │ parents,     │          ║
║  │ résultats    │  │ Flexibilité  │  │ athlètes.    │          ║
║  │ concrets.    │  │ maximale.    │  │              │          ║
║  │  (#ff5c31    │  │  (#ff5c31    │  │  (#ff5c31    │          ║
║  │   icône)     │  │   icône)     │  │   icône)     │          ║
║  └──────────────┘  └──────────────┘  └──────────────┘          ║
╠══════════════════════════════════════════════════════════════════╣
║  NOS COACHS — fond #ffffff                                     ║
║  Titre : « L'ÉQUIPE QUI VOUS POUSSE »                         ║
║  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐               ║
║  │ [Photo │  │ [Photo │  │ [Photo │  │ [Photo │               ║
║  │  rond] │  │  rond] │  │  rond] │  │  rond] │               ║
║  │        │  │        │  │        │  │        │               ║
║  │ Prénom │  │ Prénom │  │ Prénom │  │ Prénom │               ║
║  │ Spéc.  │  │ Spéc.  │  │ Spéc.  │  │ Spéc.  │               ║
║  │(#aa491b│  │(#aa491b│  │(#aa491b│  │(#aa491b│               ║
║  │ badge) │  │ badge) │  │ badge) │  │ badge) │               ║
║  │        │  │        │  │        │  │        │               ║
║  │ « Cita-│  │ « Cita-│  │ « Cita-│  │ « Cita-│               ║
║  │  tion »│  │  tion »│  │  tion »│  │  tion »│               ║
║  └────────┘  └────────┘  └────────┘  └────────┘               ║
╠══════════════════════════════════════════════════════════════════╣
║  NOS ESPACES (GALERIE) — fond #101010                          ║
║  Titre : « DÉCOUVRE TON TERRAIN DE JEU »                      ║
║  Grid masonry ou slider horizontal :                           ║
║  ┌────────────────┐ ┌──────────┐ ┌──────────┐                 ║
║  │ PLATEAU MUSCU  │ │  CARDIO  │ │  COURS   │                 ║
║  │ (grande photo) │ │ (photo)  │ │COLLECTIFS│                 ║
║  │                │ │          │ │ (photo)  │                 ║
║  └────────────────┘ └──────────┘ └──────────┘                 ║
║  ┌──────────┐ ┌────────────────┐ ┌──────────┐                 ║
║  │ KIDZONE  │ │  BIEN-ÊTRE /   │ │ ACCUEIL  │                 ║
║  │ (photo)  │ │  MASSAGE       │ │(photo)   │                 ║
║  │          │ │ (grande photo) │ │          │                 ║
║  └──────────┘ └────────────────┘ └──────────┘                 ║
║  Hover : nom de l'espace en overlay + lien                    ║
╠══════════════════════════════════════════════════════════════════╣
║  NOS ENGAGEMENTS — fond #ffffff                                ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ ✓ Tarifs jeunes dès 30€/mois                             │   ║
║  │ ✓ 4 familles de cours, du HIIT au Yoga                   │   ║
║  │ ✓ Garderie intégrée pour les parents                     │   ║
║  │ ✓ Programmes Spécial Surf                                │   ║
║  │ ✓ Massage récupération 1h                                │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║  [REJOINDRE LA COMMUNAUTÉ FIT ZONE] (#ff5c31)                  ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER identique]                                            ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 3 — Abonnements & tarifs

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — 50vh, fond #0e2640, texture métal subtle               ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │     « TROUVE TA FORMULE »                               │   ║
║  │     (A4 SPEED Bold, #ffffff)                             │   ║
║  │                                                          │   ║
║  │     Toutes nos offres incluent le FULL ACCESS :          │   ║
║  │     plateau muscu · cours co · RPM · cross-training ·    │   ║
║  │     cardio                                               │   ║
║  │     (#b7ada4)                                            │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  ABONNEMENTS MENSUELS — fond #ffffff                           ║
║  Titre : « ABONNEMENTS »                                      ║
║                                                                ║
║  Toggle switch : [Avec engagement ←→ Sans engagement]          ║
║                                                                ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          ║
║  │   STANDARD   │  │   STANDARD   │  │   JEUNE /    │          ║
║  │              │  │  + GARDERIE  │  │  ÉTUDIANT    │          ║
║  │──────────────│  │──────────────│  │──────────────│          ║
║  │              │  │  👶 KIDZONE  │  │  🎓 16-18 ans│          ║
║  │   40€/mois   │  │   60€/mois   │  │   30€/mois   │          ║
║  │   (avec eng.)│  │   (avec eng.)│  │   (avec eng.)│          ║
║  │              │  │              │  │              │          ║
║  │ ✓ Full Access│  │ ✓ Full Access│  │ ✓ Full Access│          ║
║  │ ✓ Tous cours │  │ ✓ Tous cours │  │ ✓ Tous cours │          ║
║  │              │  │ ✓ Garderie   │  │              │          ║
║  │              │  │   incluse    │  │              │          ║
║  │              │  │              │  │              │          ║
║  │ Frais dossier│  │ Frais dossier│  │ Frais dossier│          ║
║  │ 50€ (1 fois) │  │ 50€ (1 fois) │  │ 50€ (1 fois) │          ║
║  │              │  │              │  │              │          ║
║  │ Total annuel │  │ Total annuel │  │ Total annuel │          ║
║  │ 530€         │  │ 770€         │  │ 410€         │          ║
║  │              │  │              │  │              │          ║
║  │ [CHOISIR]    │  │ [CHOISIR]    │  │ [CHOISIR]    │          ║
║  │ (#ff5c31)    │  │ (#ff5c31)    │  │ (#ff5c31)    │          ║
║  └──────────────┘  └──────────────┘  └──────────────┘          ║
║                                                                ║
║  Note sous les cards :                                         ║
║  « Sans engagement : +10€/mois · Résiliation libre »          ║
╠══════════════════════════════════════════════════════════════════╣
║  PASS PONCTUELS — fond #101010, texte #ffffff                  ║
║  Titre : « ENVIE DE TESTER ? »                                 ║
║  Sous-titre : « Des formules flexibles, sans engagement. »     ║
║                                                                ║
║  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       ║
║  │6 MOIS  │ │3 MOIS  │ │1 MOIS  │ │1 SEMAINE│ │SÉANCE  │       ║
║  │        │ │        │ │        │ │        │ │UNITÉ   │       ║
║  │ 350€   │ │ 210€   │ │  80€   │ │  50€   │ │  15€   │       ║
║  │        │ │        │ │        │ │        │ │        │       ║
║  │en 1x   │ │en 1x   │ │en 1x   │ │en 1x   │ │en 1x   │       ║
║  │        │ │        │ │        │ │        │ │ ★ BEST │       ║
║  │[ACHETER]│ │[ACHETER]│ │[ACHETER]│ │[ACHETER]│ │[ESSAYER]│       ║
║  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       ║
║  Note : La séance à l'unité est mise en avant comme porte      ║
║  d'entrée (acquisition de prospects)                           ║
╠══════════════════════════════════════════════════════════════════╣
║  SERVICES À L'UNITÉ — fond #47403a, texte #ffffff              ║
║  ┌────────────────────────────┬────────────────────────────┐   ║
║  │  🧒 GARDERIE À L'UNITÉ    │  💆 MASSAGE 1H             │   ║
║  │     10€ / séance           │     80€ / séance           │   ║
║  │  [RÉSERVER]                │  [RÉSERVER]                │   ║
║  └────────────────────────────┴────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  FAQ TARIFS — fond #ffffff                                     ║
║  Titre : « QUESTIONS FRÉQUENTES »                              ║
║  (Accordéons, bordure gauche #ff5c31)                          ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ ▼ Les frais de dossier sont-ils obligatoires ?           │   ║
║  │ ▼ Puis-je résilier mon abonnement avec engagement ?      │   ║
║  │ ▼ Le pass inclut-il la garderie ?                        │   ║
║  │ ▼ Y a-t-il une période d'essai ?                         │   ║
║  │ ▼ La séance à l'unité permet d'accéder à quoi ?          │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  CTA — fond #101010                                            ║
║  « PRÊT ? » [S'ABONNER EN LIGNE] (#ff5c31)                    ║
║  ou « Tester avec une séance à 15€ → »                         ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 4 — Nos cours & planning

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — 50vh, fond photo cours en action + overlay             ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │     « DES COURS POUR CHAQUE OBJECTIF »                  │   ║
║  │     (A4 SPEED Bold, #ffffff)                             │   ║
║  │                                                          │   ║
║  │     De 30 à 60 min · 4 familles · Tous niveaux          │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  FILTRES — sticky sous le header, fond #ffffff                 ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ [TOUS] [🔥CARDIO] [💪RENFO.] [🧘SOUPLESSE] [🏄SURF]    │   ║
║  │  Actif = fond #ff5c31, texte #fff                        │   ║
║  │  Inactif = fond transparent, texte #47403a               │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  FICHES COURS — fond #ffffff, grid 2 ou 3 colonnes            ║
║                                                                ║
║  ── CARDIO ──────────────────────────────── badge #ff5c31 ──   ║
║  ┌─────────────────────┐  ┌─────────────────────┐              ║
║  │ [Photo ambiance]    │  │ [Photo ambiance]    │              ║
║  │ ───────────────     │  │ ───────────────     │              ║
║  │ STEP                │  │ BODY ATTACK / HIIT  │              ║
║  │ 45-60 min           │  │ 30-45 min           │              ║
║  │ Enchaînements sur   │  │ Haute intensité     │              ║
║  │ plateforme          │  │                     │              ║
║  │ [RÉSERVER →]        │  │ [RÉSERVER →]        │              ║
║  └─────────────────────┘  └─────────────────────┘              ║
║  ┌─────────────────────┐  ┌─────────────────────┐              ║
║  │ ZUMBA               │  │ RPM                 │              ║
║  │ 60 min              │  │ 45 min              │              ║
║  │ Danse rythmée       │  │ Vélo en groupe      │              ║
║  │ et cardio           │  │ avec musique        │              ║
║  │ [RÉSERVER →]        │  │ [RÉSERVER →]        │              ║
║  └─────────────────────┘  └─────────────────────┘              ║
║                                                                ║
║  ── RENFORCEMENT ────────────────────────── badge #aa491b ──   ║
║  ┌─────────────────────┐  ┌─────────────────────┐              ║
║  │ BODY PUMP           │  │ CIRCUIT TRAINING    │              ║
║  │ 45 min · Barre +    │  │ 45 min · Ateliers   │              ║
║  │ poids, tout le corps│  │ variés              │              ║
║  └─────────────────────┘  └─────────────────────┘              ║
║  ┌─────────────────────┐                                       ║
║  │ ABDO / CORE         │                                       ║
║  │ 45 min · Focus      │                                       ║
║  │ abdos, centre corps │                                       ║
║  └─────────────────────┘                                       ║
║                                                                ║
║  ── SOUPLESSE & RELAXATION ──────────────── badge #b7ada4 ──  ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            ║
║  │ YOGA         │ │ PILATES      │ │ STRETCHING   │            ║
║  │ 60 min       │ │ 45-60 min    │ │ 45 min       │            ║
║  └──────────────┘ └──────────────┘ └──────────────┘            ║
║                                                                ║
║  ── SPÉCIAL SURF 🏄 ────────────────────── badge #0e2640 ──   ║
║  (section mise en avant, fond photo océan)                     ║
║  ┌──────────────────────────┐ ┌──────────────────────────┐     ║
║  │ EXPLOSIVITÉ & PUISSANCE  │ │ ENDURANCE RAME &         │     ║
║  │ 30 min                   │ │ HAUT DU CORPS            │     ║
║  │ Objectif : améliorer     │ │ 45 min                   │     ║
║  │ les manœuvres            │ │ Objectif : tenir plus    │     ║
║  │                          │ │ longtemps au line-up     │     ║
║  │ [RÉSERVER →]             │ │ [RÉSERVER →]             │     ║
║  └──────────────────────────┘ └──────────────────────────┘     ║
╠══════════════════════════════════════════════════════════════════╣
║  PLANNING HEBDO — fond #101010, texte #ffffff                  ║
║  Titre : « PLANNING DE LA SEMAINE »                            ║
║  ┌──────┬──────┬──────┬──────┬──────┬──────┬──────┐            ║
║  │ LUN  │ MAR  │ MER  │ JEU  │ VEN  │ SAM  │ DIM  │            ║
║  ├──────┼──────┼──────┼──────┼──────┼──────┼──────┤            ║
║  │ 9h   │ 9h30 │ 9h   │ 10h  │ 9h   │ 9h   │ 10h  │            ║
║  │ RPM  │ YOGA │ZUMBA │BODY  │ STEP │PILAT.│ YOGA │            ║
║  │ Coach│ Coach│ Coach│PUMP  │ Coach│ Coach│ Coach│            ║
║  │ 3pl  │ 5pl  │ 2pl  │Coach │ 8pl  │ 4pl  │ 6pl  │            ║
║  │[Rés.]│[Rés.]│[Rés.]│ 1pl  │[Rés.]│[Rés.]│[Rés.]│            ║
║  │      │      │      │[Rés.]│      │      │      │            ║
║  ├──────┼──────┼──────┼──────┼──────┼──────┼──────┤            ║
║  │ 18h  │ 18h  │ 14h  │ 18h  │ 18h  │ 11h  │      │            ║
║  │CROSS │ HIIT │SURF  │ RPM  │BODY  │CROSS │      │            ║
║  │TRAIN.│      │EXPLO.│      │PUMP  │TRAIN.│      │            ║
║  │[Rés.]│[Rés.]│[Rés.]│[Rés.]│[Rés.]│[Rés.]│      │            ║
║  └──────┴──────┴──────┴──────┴──────┴──────┴──────┘            ║
║  Créneaux colorés par catégorie (même code couleur badges)     ║
║  Bouton [Rés.] = réservation directe via Wix Bookings          ║
╠══════════════════════════════════════════════════════════════════╣
║  CTA — fond #0e2640                                            ║
║  [RÉSERVER MON PREMIER COURS] (#ff5c31)                        ║
║  « Première séance à 15€ – sans engagement »                   ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 5 — KidZone (garderie)

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — 50vh, visuels colorés et chaleureux                    ║
║  Ton différent : plus doux, accueillant, rassurant             ║
║  Fond dégradé #ffffff → #b7ada4 léger                          ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │                                                          │   ║
║  │     🧒 [Logo KidZone coloré]                              │   ║
║  │                                                          │   ║
║  │     « VOUS ENTRAÎNEZ,                                    │   ║
║  │       VOS ENFANTS S'AMUSENT »                            │   ║
║  │     (Typo plus ronde, #4d3120)                           │   ║
║  │                                                          │   ║
║  │     La garderie intégrée à votre salle de sport.         │   ║
║  │     (#47403a)                                            │   ║
║  │                                                          │   ║
║  │     [RÉSERVER UNE SÉANCE] (#aa491b, plus doux)           │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  PRÉSENTATION — fond #ffffff                                   ║
║  ┌──────────────────────┬───────────────────────────────┐      ║
║  │                      │  « UN ESPACE PENSÉ            │      ║
║  │  [Photos enfants     │    POUR LES PETITS »          │      ║
║  │   qui jouent,        │                               │      ║
║  │   espace coloré,     │  Personnel diplômé petite     │      ║
║  │   matériel ludique]  │  enfance.                     │      ║
║  │                      │  Activités adaptées à         │      ║
║  │  (Carrousel photos)  │  chaque tranche d'âge.        │      ║
║  │                      │  Espace sécurisé, lumineux    │      ║
║  │                      │  et stimulant.                │      ║
║  │                      │                               │      ║
║  │                      │  Capacité : XX enfants max.   │      ║
║  └──────────────────────┴───────────────────────────────┘      ║
╠══════════════════════════════════════════════════════════════════╣
║  RÉASSURANCE — fond #b7ada4 léger (10% opacité)                ║
║  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       ║
║  │ ✓        │  │ ✓        │  │ ✓        │  │ ✓        │       ║
║  │Personnel │  │ Espace   │  │ Matériel │  │Protocole │       ║
║  │qualifié  │  │sécurisé  │  │ adapté   │  │sanitaire │       ║
║  │& diplômé │  │& surveillé│  │& ludique │  │ strict   │       ║
║  └──────────┘  └──────────┘  └──────────┘  └──────────┘       ║
╠══════════════════════════════════════════════════════════════════╣
║  HORAIRES — fond #ffffff                                       ║
║  Titre : « QUAND NOUS SOMMES LÀ POUR EUX »                   ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ Lundi      9h-12h  |  16h-20h                            │   ║
║  │ Mardi      9h-12h  |  16h-20h                            │   ║
║  │ Mercredi   9h-12h  |  14h-18h                            │   ║
║  │ Jeudi      9h-12h  |  16h-20h                            │   ║
║  │ Vendredi   9h-12h  |  16h-20h                            │   ║
║  │ Samedi     9h-13h                                        │   ║
║  │ Dimanche   Fermé                                         │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║  Note : « Horaires alignés sur les créneaux de cours »         ║
╠══════════════════════════════════════════════════════════════════╣
║  TARIFS — fond #4d3120, texte #ffffff                          ║
║  ┌────────────────────────────┬────────────────────────────┐   ║
║  │  GARDERIE À L'UNITÉ       │  INCLUSE DANS ABONNEMENT   │   ║
║  │                            │                            │   ║
║  │      10€ / séance          │  +20€/mois sur votre       │   ║
║  │                            │  abonnement mensuel        │   ║
║  │  Parfait pour tester.      │                            │   ║
║  │                            │  Accès illimité à la       │   ║
║  │  [RÉSERVER]                │  garderie.                 │   ║
║  │  (outline #ffffff)         │                            │   ║
║  │                            │  [AJOUTER À MON ABO.]     │   ║
║  │                            │  (#ff5c31)                 │   ║
║  └────────────────────────────┴────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  CTA — fond #ffffff, accent doux                               ║
║  « Entraînez-vous l'esprit tranquille. »                       ║
║  [RÉSERVER UNE SÉANCE GARDERIE] (#aa491b)                      ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 6 — Massages & bien-être

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — 50vh, photo ambiance zen/récupération                  ║
║  Overlay #0e2640 40%                                           ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │                                                          │   ║
║  │     « RÉCUPÉREZ MIEUX.                                  │   ║
║  │       PERFORMEZ PLUS. »                                 │   ║
║  │     (A4 SPEED Bold, #ffffff)                             │   ║
║  │                                                          │   ║
║  │     Le bien-être au service de la performance.           │   ║
║  │     (#b7ada4)                                            │   ║
║  │                                                          │   ║
║  │     [RÉSERVER MON MASSAGE] (#ff5c31)                     │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  SERVICE — fond #ffffff                                        ║
║  ┌──────────────────────┬───────────────────────────────┐      ║
║  │                      │  💆 MASSAGE SPORTIF            │      ║
║  │  [Photo cabine       │                               │      ║
║  │   massage,           │  1 heure de récupération      │      ║
║  │   ambiance            │  profonde.                    │      ║
║  │   tamisée]           │                               │      ║
║  │                      │  Bénéfices :                  │      ║
║  │                      │  • Récupération musculaire    │      ║
║  │                      │  • Réduction des courbatures  │      ║
║  │                      │  • Prévention des blessures   │      ║
║  │                      │  • Détente profonde           │      ║
║  │                      │                               │      ║
║  │                      │  ┌────────────────────────┐   │      ║
║  │                      │  │ 80€ / séance (1h)      │   │      ║
║  │                      │  │ (#ff5c31, grande       │   │      ║
║  │                      │  │  taille)               │   │      ║
║  │                      │  └────────────────────────┘   │      ║
║  └──────────────────────┴───────────────────────────────┘      ║
╠══════════════════════════════════════════════════════════════════╣
║  PRATICIEN·NE — fond #47403a, texte #ffffff                    ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │  [Photo portrait]    Prénom Nom                          │   ║
║  │                      Formation / Diplôme                 │   ║
║  │                      Spécialité : massage sportif        │   ║
║  │                                                          │   ║
║  │                      « Citation ou philosophie           │   ║
║  │                        du praticien... »                  │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  RÉSERVATION — fond #ffffff                                    ║
║  Titre : « RÉSERVEZ VOTRE CRÉNEAU »                           ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │  [Wix Bookings — calendrier interactif intégré]          │   ║
║  │                                                          │   ║
║  │  Sélection date → Créneaux disponibles → Confirmation   │   ║
║  │                                                          │   ║
║  │  [RÉSERVER MAINTENANT] (#ff5c31)                         │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 7 — Galerie / L'espace

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — 40vh, fond #101010                                     ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │     « DÉCOUVRE TON FUTUR                                │   ║
║  │       TERRAIN DE JEU »                                  │   ║
║  │     (A4 SPEED Bold, #ffffff)                             │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  GALERIE MASONRY — fond #ffffff                                ║
║  Filtres : [TOUT] [MUSCU] [COURS] [CARDIO] [KIDZONE]          ║
║            [BIEN-ÊTRE] [AMBIANCE]                              ║
║                                                                ║
║  ┌────────────────────┐ ┌──────────┐ ┌──────────┐              ║
║  │                    │ │          │ │          │              ║
║  │  PLATEAU MUSCU     │ │  CARDIO  │ │  COURS   │              ║
║  │  (grande)          │ │          │ │COLLECTIFS│              ║
║  │                    │ │          │ │          │              ║
║  │                    │ └──────────┘ └──────────┘              ║
║  └────────────────────┘ ┌──────────────────────┐               ║
║  ┌──────────┐ ┌────────┐│    KIDZONE            │               ║
║  │  CROSS   │ │AMBIANCE││    (grande)           │               ║
║  │ TRAINING │ │VESTIAIR││                       │               ║
║  │          │ │        ││                       │               ║
║  └──────────┘ └────────┘└──────────────────────┘               ║
║  ┌──────────────────────┐ ┌──────────┐ ┌────────┐              ║
║  │    BIEN-ÊTRE /       │ │ ACCUEIL  │ │DÉTAIL  │              ║
║  │    MASSAGE           │ │          │ │MATÉRIEL│              ║
║  │    (grande)          │ │          │ │        │              ║
║  └──────────────────────┘ └──────────┘ └────────┘              ║
║                                                                ║
║  Hover : zoom léger + overlay avec nom de l'espace             ║
║  Click : lightbox plein écran avec navigation                  ║
╠══════════════════════════════════════════════════════════════════╣
║  VIDÉO D'AMBIANCE — fond #101010                               ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │                                                          │   ║
║  │     [Vidéo 30-60 sec — pleine largeur]                  │   ║
║  │     Ambiance salle, membres en action,                   │   ║
║  │     musique motivante, montage dynamique                 │   ║
║  │                  ▶️                                      │   ║
║  │                                                          │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  CTA — fond #0e2640                                            ║
║  « Envie de voir en vrai ? »                                   ║
║  [NOUS CONTACTER] (#ff5c31)                                    ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 8 — Blog / actualités

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — 30vh, fond #0e2640                                     ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │     « CONSEILS, ACTUS & INSPIRATION »                   │   ║
║  │     (A4 SPEED Bold, #ffffff)                             │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  FILTRES CATÉGORIES — fond #ffffff                              ║
║  [TOUS] [💪 ENTRAÎNEMENT] [🥗 NUTRITION] [📣 NEWS]             ║
║  [📅 ÉVÉNEMENTS] [🏄 SURF]                                     ║
╠══════════════════════════════════════════════════════════════════╣
║  ARTICLE MIS EN AVANT — fond #ffffff                           ║
║  ┌──────────────────────┬───────────────────────────────┐      ║
║  │                      │  📣 NEWS                       │      ║
║  │  [Grande image       │  12 mars 2026                  │      ║
║  │   article vedette]   │                               │      ║
║  │                      │  « Titre de l'article         │      ║
║  │                      │    mis en avant »              │      ║
║  │                      │                               │      ║
║  │                      │  Extrait du contenu...         │      ║
║  │                      │                               │      ║
║  │                      │  [LIRE L'ARTICLE →]            │      ║
║  └──────────────────────┴───────────────────────────────┘      ║
╠══════════════════════════════════════════════════════════════════╣
║  GRILLE D'ARTICLES — fond #ffffff                              ║
║  ┌──────────┐  ┌──────────┐  ┌──────────┐                     ║
║  │ [Image]  │  │ [Image]  │  │ [Image]  │                     ║
║  │ BADGE    │  │ BADGE    │  │ BADGE    │                     ║
║  │ ──────── │  │ ──────── │  │ ──────── │                     ║
║  │ Titre    │  │ Titre    │  │ Titre    │                     ║
║  │ Date     │  │ Date     │  │ Date     │                     ║
║  │ Extrait  │  │ Extrait  │  │ Extrait  │                     ║
║  │ [Lire →] │  │ [Lire →] │  │ [Lire →] │                     ║
║  └──────────┘  └──────────┘  └──────────┘                     ║
║  ┌──────────┐  ┌──────────┐  ┌──────────┐                     ║
║  │  ...     │  │  ...     │  │  ...     │                     ║
║  └──────────┘  └──────────┘  └──────────┘                     ║
║                                                                ║
║  [CHARGER PLUS D'ARTICLES] (outline #0e2640)                   ║
╠══════════════════════════════════════════════════════════════════╣
║  NEWSLETTER — fond #101010, texte #ffffff                      ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │  ⚡ « RESTE DANS LA ZONE »                               │   ║
║  │  Reçois nos conseils fitness chaque semaine.              │   ║
║  │                                                          │   ║
║  │  ┌─────────────────────────┐  [S'INSCRIRE]               │   ║
║  │  │ Ton email...            │  (#ff5c31)                   │   ║
║  │  └─────────────────────────┘                              │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 9 — Contact & accès

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO — 30vh, fond #0e2640                                     ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │     « ON T'ATTEND DANS LA ZONE »                        │   ║
║  │     (A4 SPEED Bold, #ffffff)                             │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  CONTACT + INFOS — fond #ffffff, layout 2 colonnes            ║
║  ┌───────────────────────────┬──────────────────────────────┐  ║
║  │  FORMULAIRE DE CONTACT    │  INFORMATIONS PRATIQUES     │  ║
║  │                           │                             │  ║
║  │  Nom*                     │  📍 ADRESSE                 │  ║
║  │  ┌─────────────────────┐  │  254 Chemin du Bayonnais    │  ║
║  │  │                     │  │  40230 Bénesse-Maremne      │  ║
║  │  └─────────────────────┘  │                             │  ║
║  │  Prénom*                  │  📞 TÉLÉPHONE               │  ║
║  │  ┌─────────────────────┐  │  05 XX XX XX XX             │  ║
║  │  │                     │  │                             │  ║
║  │  └─────────────────────┘  │  ✉️ EMAIL                   │  ║
║  │  Email*                   │  contact@fitzone.fr         │  ║
║  │  ┌─────────────────────┐  │                             │  ║
║  │  │                     │  │  🕐 HORAIRES                │  ║
║  │  └─────────────────────┘  │  Lun-Ven : 6h-22h          │  ║
║  │  Téléphone                │  Sam-Dim : 8h-20h          │  ║
║  │  ┌─────────────────────┐  │                             │  ║
║  │  │                     │  │  🌐 RÉSEAUX SOCIAUX         │  ║
║  │  └─────────────────────┘  │  [Facebook] [Instagram]     │  ║
║  │  Objet* (dropdown)        │  [TikTok]                   │  ║
║  │  ┌─────────────────────┐  │                             │  ║
║  │  │▼ Abonnement        │  │                             │  ║
║  │  │  Cours             │  │                             │  ║
║  │  │  Garderie          │  │                             │  ║
║  │  │  Massage           │  │                             │  ║
║  │  │  Autre             │  │                             │  ║
║  │  └─────────────────────┘  │                             │  ║
║  │  Message*                 │                             │  ║
║  │  ┌─────────────────────┐  │                             │  ║
║  │  │                     │  │                             │  ║
║  │  │                     │  │                             │  ║
║  │  └─────────────────────┘  │                             │  ║
║  │                           │                             │  ║
║  │  [ENVOYER] (#ff5c31)      │                             │  ║
║  └───────────────────────────┴──────────────────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║  GOOGLE MAPS — fond #ffffff, carte pleine largeur              ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │                                                          │   ║
║  │     [Carte Google Maps interactive — pleine largeur]     │   ║
║  │                                                          │   ║
║  │                    📍 ⚡ FIT ZONE                         │   ║
║  │                                                          │   ║
║  │     Marqueur personnalisé avec logo                      │   ║
║  │                                                          │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  ACCÈS — fond #101010, texte #ffffff                           ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          ║
║  │ 🚗 PARKING   │  │ 📍 CAPBRETON │  │ 📍 HOSSEGOR  │          ║
║  │   GRATUIT    │  │    5 min     │  │    10 min    │          ║
║  │   sur place  │  │              │  │              │          ║
║  └──────────────┘  └──────────────┘  └──────────────┘          ║
║  ┌──────────────┐                                              ║
║  │ 📍 BAYONNE   │                                              ║
║  │    20 min    │                                              ║
║  └──────────────┘                                              ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 10 — Espace membre *(Wix native)*

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  CONNEXION — fond #0e2640, centré                              ║
║  ┌──────────────────────────────────┐                           ║
║  │  ⚡ FIT ZONE — MON ESPACE        │                           ║
║  │                                  │                           ║
║  │  ┌────────────────────────────┐  │                           ║
║  │  │ Email                      │  │                           ║
║  │  └────────────────────────────┘  │                           ║
║  │  ┌────────────────────────────┐  │                           ║
║  │  │ Mot de passe               │  │                           ║
║  │  └────────────────────────────┘  │                           ║
║  │                                  │                           ║
║  │  [SE CONNECTER] (#ff5c31)        │                           ║
║  │                                  │                           ║
║  │  ou continuer avec :             │                           ║
║  │  [Google] [Apple]                │                           ║
║  │                                  │                           ║
║  │  Pas encore membre ?             │                           ║
║  │  [Créer mon compte →]            │                           ║
║  └──────────────────────────────────┘                           ║
╠══════════════════════════════════════════════════════════════════╣
║  DASHBOARD (après connexion) — fond #ffffff                    ║
║  ┌────────────┐ ┌───────────────────────────────────────┐      ║
║  │ MENU       │ │  Bienvenue, [Prénom] ⚡               │      ║
║  │ ──────     │ │                                       │      ║
║  │ Accueil    │ │  ┌──────────┐ ┌──────────┐ ┌────────┐│      ║
║  │ Mon profil │ │  │ ABONNEM. │ │ PROCHAIN │ │SÉANCES ││      ║
║  │ Abonnement │ │  │ ──────── │ │ COURS    │ │CE MOIS ││      ║
║  │ Réservat.  │ │  │ Mensuel  │ │ ──────── │ │────────││      ║
║  │ Historique │ │  │ sans eng.│ │ RPM      │ │  12    ││      ║
║  │ Factures   │ │  │          │ │ Lun 10h  │ │séances ││      ║
║  │            │ │  │ Expire : │ │          │ │        ││      ║
║  │ [Déconnex.]│ │  │ XX/XX/XX │ │ Yoga     │ │        ││      ║
║  │            │ │  │          │ │ Mer 18h  │ │        ││      ║
║  │            │ │  │ [Gérer]  │ │          │ │        ││      ║
║  │            │ │  │          │ │[Voir +]  │ │        ││      ║
║  │            │ │  └──────────┘ └──────────┘ └────────┘│      ║
║  │            │ │                                       │      ║
║  │            │ │  Dernières factures                    │      ║
║  │            │ │  Mars 2026 — 50€ [Télécharger]        │      ║
║  │            │ │  Fév. 2026 — 50€ [Télécharger]        │      ║
║  └────────────┘ └───────────────────────────────────────┘      ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Page 11 — Mentions légales / Confidentialité / CGV

```
╔══════════════════════════════════════════════════════════════════╗
║  [HEADER]                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  NAVIGATION ONGLETS — fond #ffffff                             ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ [MENTIONS LÉGALES]  [CONFIDENTIALITÉ]  [CGV]             │   ║
║  │  Actif = bordure basse #ff5c31                           │   ║
║  └──────────────────────────────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════╣
║  CONTENU — fond #ffffff, texte #47403a                         ║
║  Largeur max : 800px centré                                    ║
║                                                                ║
║  MENTIONS LÉGALES                                              ║
║  ──────────────────                                            ║
║  1. Éditeur du site                                            ║
║     NOVASIDE — SIRET : XXXXXXXXXXXXX                           ║
║     254 Chemin du Bayonnais, 40230 Bénesse-Maremne             ║
║     Email : contact@fitzone.fr                                 ║
║                                                                ║
║  2. Responsable de publication                                 ║
║     [Nom]                                                      ║
║                                                                ║
║  3. Hébergeur                                                  ║
║     Wix.com Ltd.                                               ║
║                                                                ║
║  POLITIQUE DE CONFIDENTIALITÉ (RGPD)                           ║
║  ──────────────────────────────────                            ║
║  1. Données collectées                                         ║
║  2. Utilisation                                                ║
║  3. Durée de conservation                                      ║
║  4. Droits des utilisateurs                                    ║
║  5. Cookies                                                    ║
║  6. Contact DPO                                                ║
║                                                                ║
║  CGV                                                           ║
║  ───                                                           ║
║  1. Objet                                                      ║
║  2. Abonnements et tarifs                                      ║
║  3. Modalités de souscription                                  ║
║  4. Durée et résiliation                                       ║
║  5. Remboursement                                              ║
║  6. Frais de dossier                                           ║
║  7. Règlement intérieur                                        ║
║  8. Responsabilité                                             ║
║  9. Litiges                                                    ║
╠══════════════════════════════════════════════════════════════════╣
║  [FOOTER]                                                      ║
╚══════════════════════════════════════════════════════════════════╝
```

---

<aside>
📐

**Récapitulatif design system**

- **Fonds alternés** : #101010, #0e2640, #47403a, #ffffff (rythme sombre/clair)
- **Accents CTA** : #ff5c31 (primaire), #aa491b (secondaire, KidZone & liens)
- **Texte sur fond sombre** : #ffffff (titres), #b7ada4 (sous-titres, légendes)
- **Texte sur fond clair** : #0e2640 (titres), #47403a (corps)
- **Typo display** : A4 SPEED Bold (titres hero, slogan, CTA majeurs)
- **Typo titres** : à définir (sans-serif géométrique recommandé)
- **Typo corps** : à définir (lisibilité, moderne)
- **Bordures & accents** : #ff5c31 (hover, underline, badge actif)
- **KidZone** : ton plus doux, #4d3120 brun chocolat, #aa491b orange brûlé, coins arrondis
- **Hover** : scale 1.03, ombre portée, bordure #ff5c31
- **Animations** : fade-in au scroll, parallax léger sur hero, compteurs animés
</aside>
