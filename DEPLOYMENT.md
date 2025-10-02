# Deployment Guide för Portfolio React

## 🚀 Deploy till Netlify

### Steg 1: Miljövariabler i produktion

**VIKTIGT!** Din API-nyckel måste läggas till i din hosting-plattforms miljövariabler.

#### För Netlify:

1. Gå till **Site settings** → **Environment variables**
2. Lägg till:
   - **Key:** `NEXT_PUBLIC_DATOCMS_API_TOKEN`
   - **Value:** Din DatoCMS API-nyckel (hela nyckeln, inte bara början)

### Steg 2: Build-kommandon

```bash
# Build command
npm run build

# Start command (för server-deployment)
npm run start
```

### Steg 3: Verifiera deployment

Efter deployment, öppna developer tools (F12) i din browser och kolla:

1. **Console-fliken** - Leta efter:

   - `🔑 DATO CMS Token Status:` - Ska visa `hasToken: true`
   - Om du ser `SAKNAS!` betyder det att miljövariabeln inte laddades

2. **Network-fliken** - Leta efter:
   - Request till `graphql.datocms.com`
   - Kolla att den har en `Authorization` header med din Bearer token

### Vanliga problem:

#### 401 INVALID_AUTHORIZATION_HEADER

- **Orsak:** API-nyckeln saknas eller är felaktig
- **Lösning:**
  1. Verifiera att miljövariabeln är korrekt stavad: `NEXT_PUBLIC_DATOCMS_API_TOKEN`
  2. Kontrollera att värdet är din fullständiga API-nyckel från DatoCMS
  3. Rebuild din site efter att ha lagt till miljövariabeln

#### Accordion visar inga projekt

- **Orsak:** Data laddas inte från API:et
- **Lösning:** Kolla console för felmeddelanden och följ instruktionerna ovan

### 🔐 Säkerhetsinformation

- Använd alltid `NEXT_PUBLIC_` prefix för variabler som behövs i klienten
- Håll din `.env.local` fil i `.gitignore` (ska aldrig commitas)
- Rotera din API-nyckel om den har exponerats

### 📊 DatoCMS API-nyckel

Din nuvarande API-nyckel börjar med: `2393384e22d706e9...`

Om du behöver hitta eller skapa en ny nyckel:

1. Logga in på [DatoCMS Dashboard](https://www.datocms.com/)
2. Gå till **Settings** → **API tokens**
3. Använd en befintlig nyckel eller skapa en ny med läsbehörigheter
