# PROMARK FLOORING - Project Reference

## CRITICAL RULES
1. **ALWAYS add `unoptimized` to ALL `<Image>` components** - Next.js image optimization is broken
2. **Image paths start with `/assets/`** - NOT `/images/`
3. **Check file exists before using** - many referenced images don't exist
4. **Footer already has CTA** - don't add duplicate "Get Quote" sections to pages
5. **Read files before editing** - never assume structure

---

## BUSINESS INFO
- **Company**: PROMARK FLOORING
- **Owner**: Mark Biernacki (Marek)
- **Phone**: (604) 353-6077
- **Email**: promarkflooring@hotmail.com
- **Address**: 3225 Commercial Dr, Vancouver, BC V5N 4E5
- **Hours**: Mon-Fri 8AM-8PM
- **Experience**: 20+ years

---

## TECH STACK
- **Framework**: Next.js 16.1.1 (App Router)
- **Styling**: Tailwind CSS v4 (config in globals.css @theme block)
- **Language**: TypeScript
- **Email**: Resend API
- **Chatbot**: OpenAI API
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics

---

## COLOR SCHEME (NOT red/white!)
```
Forest (blue-gray):  forest-50 to forest-950   - Primary buttons, headers
Copper (orange):     copper-50 to copper-950   - Accents, badges, icons
Cream (warm white):  cream-50 to cream-950     - Backgrounds
Charcoal (warm black): charcoal-50 to charcoal-950 - Text, dark sections
Walnut (brown):      walnut-50 to walnut-950   - Rarely used
```

---

## PROJECT STRUCTURE

### Pages (app/)
```
app/
├── page.tsx                          # Homepage
├── layout.tsx                        # Root layout (Header, Footer, Chatbot)
├── globals.css                       # All styles + Tailwind v4 theme
├── contact/page.tsx                  # Contact page
├── faq/page.tsx                      # FAQ page
├── gallery/page.tsx                  # Gallery page
├── quote/page.tsx                    # Quote form page
├── resources/page.tsx                # Blog/resources page
├── services/
│   ├── page.tsx                      # Services overview
│   ├── floor-leveling/page.tsx
│   ├── hardwood-installation/page.tsx
│   ├── stairs/page.tsx
│   └── repair-maintenance/page.tsx
├── service-areas/
│   ├── page.tsx                      # Service areas overview
│   ├── vancouver/page.tsx
│   ├── north-vancouver/page.tsx
│   ├── west-vancouver/page.tsx
│   ├── burnaby/page.tsx
│   ├── surrey/page.tsx
│   ├── delta/page.tsx
│   ├── langley/page.tsx
│   ├── port-coquitlam/page.tsx
│   ├── maple-ridge/page.tsx
│   └── mission/page.tsx
└── industries/
    ├── residential/page.tsx
    └── commercial/page.tsx
```

### Components (app/components/)
```
Chatbot.tsx           # Floating chat widget (bottom-right)
ContactForm.tsx       # Contact form component
QuoteForm.tsx         # Detailed quote form
Header.tsx            # Site header with navigation
Footer.tsx            # Site footer WITH CTA section built-in
FAQ.tsx               # FAQ accordion component
ServiceAreaTemplate.tsx # Reusable service area page template
SchemaMarkup.tsx      # JSON-LD schema components
```

### API Routes (app/api/)
```
app/api/chat/route.ts      # OpenAI chatbot endpoint
app/api/contact/route.ts   # Contact form submission (Resend)
app/api/quote/route.ts     # Quote form submission (Resend)
```

### Library Files (lib/)
```
lib/schema-markup.ts   # Schema generators
lib/seo-config.ts      # SEO configuration
lib/schema.ts          # Additional schema helpers
lib/image-manifest.ts  # Image catalog
```

---

## IMAGE ASSETS (public/assets/)

**82 total images** - All in `/public/assets/`

### Naming Patterns:
```
Floor Leveling:
- PROMARK-FLOORING-floor-leveling-Vancouver-{number}.jpg
- floor-leveling-vancouver-Promark-Flooring-{number}.jpg

Hardwood:
- PROMARK-FLOORING-hardwood-flooring-{number}.jpg
- PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-{number}.jpg
- hardwood-flooring-vancouver-Promark-Flooring-{number}.jpg

Stairs:
- PROMARK-FLOORING-stairs-{number}.jpg

Vinyl:
- PROMARK-FLOORING-vinyl-flooring-vancouver-{number}.jpg
- vinyl-flooring-vancouver-Promark-Flooring-{number}.jpg
```

### Verified Working Images:
```jsx
// Hero
/assets/hardwood-flooring-vancouver-Promark-Flooring.jpg

// Floor Leveling
/assets/PROMARK-FLOORING-floor-leveling-Vancouver-13.jpg
/assets/PROMARK-FLOORING-floor-leveling-Vancouver-14.jpg
/assets/PROMARK-FLOORING-floor-leveling-Vancouver-17.jpg

// Hardwood
/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-10.jpg
/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-11.jpg
/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-2.jpg
/assets/PROMARK-FLOORING-hardwood-flooring-13.jpg
/assets/hardwood-flooring-vancouver-Promark-Flooring-2.jpg

// Stairs
/assets/PROMARK-FLOORING-stairs-11.jpg
/assets/PROMARK-FLOORING-stairs-14.jpg

// Vinyl
/assets/PROMARK-FLOORING-vinyl-flooring-vancouver-11.jpg
```

### Image Component Pattern:
```jsx
// ALWAYS use unoptimized prop!
<Image
  src="/assets/PROMARK-FLOORING-floor-leveling-Vancouver-13.jpg"
  alt="Descriptive alt text"
  fill
  className="object-cover"
  unoptimized  // REQUIRED - optimization is broken
/>
```

---

## SERVICES

1. **Floor Leveling** - `/services/floor-leveling`
   - 5-year warranty (industry-leading)
   - Self-leveling compounds
   - Concrete grinding
   - Subfloor correction

2. **Hardwood Installation** - `/services/hardwood-installation`
   - 1-year warranty
   - Solid hardwood
   - Engineered wood
   - Laminate

3. **Staircase Services** - `/services/stairs`
   - Custom treads
   - Refinishing
   - Nosing installation

4. **Repair & Maintenance** - `/services/repair-maintenance`
   - Scratch repair
   - Water damage
   - Refinishing

---

## SERVICE AREAS (10 cities with dedicated pages)

| City | URL Path |
|------|----------|
| Vancouver | `/service-areas/vancouver` |
| North Vancouver | `/service-areas/north-vancouver` |
| West Vancouver | `/service-areas/west-vancouver` |
| Burnaby | `/service-areas/burnaby` |
| Surrey | `/service-areas/surrey` |
| Delta | `/service-areas/delta` |
| Langley | `/service-areas/langley` |
| Port Coquitlam | `/service-areas/port-coquitlam` |
| Maple Ridge | `/service-areas/maple-ridge` |
| Mission | `/service-areas/mission` |

Additional areas mentioned (no dedicated pages):
Richmond, White Rock, New Westminster, Coquitlam, Port Moody, Pitt Meadows, Abbotsford, Chilliwack

---

## KEY MESSAGING
- **20+ years experience** - mention prominently
- **5-year warranty** on floor leveling (industry-leading)
- **Family-owned & local**
- **Free consultation**
- **Serving Greater Vancouver & Fraser Valley**

---

## FORMS

### Contact Form Fields:
- Name* (required)
- Phone* (required)
- Email* (required)
- Address*
- Service type
- Message*

### Quote Form Fields:
- Name*, Phone*, Email*, Address*
- Service type, Property type
- Square footage, Current flooring
- Removal needed?, Subfloor condition
- Timeline, Budget
- Description, Contact preference

---

## COMMON ISSUES & FIXES

### Images Not Loading
```jsx
// BAD - will show gray boxes
<Image src="/images/something.jpg" ... />

// GOOD - correct path + unoptimized
<Image src="/assets/PROMARK-FLOORING-something.jpg" unoptimized ... />
```

### 404 Errors
- Check if page file actually exists in app/ directory
- Check if service area has a dedicated page
- Verify image filename exactly matches (case-sensitive)

### Duplicate CTAs
- Footer.tsx already includes a CTA section
- Don't add "Get Quote" sections at bottom of pages
- Services page, contact page, etc. should NOT have their own CTA

### Chatbot Header
- Must have `rounded-t-2xl sm:rounded-t-3xl` to match container
- Text must be explicitly `text-white`

---

## DEPLOYMENT
- **Host**: Vercel
- **Repo**: github.com/dylanbluestone/PRO-MARK-FLOORING-BUILD-1
- **Branch**: main
- **Auto-deploy**: On push to main

---

## ENVIRONMENT VARIABLES NEEDED
```
RESEND_API_KEY=
OPENAI_API_KEY=
```

---

## DON'T DO
- Don't use `/images/` paths - use `/assets/`
- Don't add CTA sections - footer has one
- Don't forget `unoptimized` on images
- Don't assume files exist - verify first
- Don't use image optimization - it's broken
- Don't create new pages without checking structure first
