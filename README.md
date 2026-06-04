# Сайт «Монетний Двір» — Фаза 1 (статичний лендинг + легальні сторінки)

Статичний сайт для піддомену (напр. `info.monetnyidvir.com`). Містить лендинг,
Політику конфіденційності, Умови використання та сторінку підтримки — три мови
(uk/ru/en) з перемикачем. Закриває вимогу Apple щодо публічного URL Політики.

Файли:
- `index.html` — лендинг
- `privacy.html` — Політика конфіденційності
- `terms.html` — Умови використання
- `support.html` — Підтримка
- `styles.css`, `lang.js`, `assets/` — стилі/скрипт/лого
- `CNAME` — для GitHub Pages (вкажи свій піддомен). Для Cloudflare Pages не потрібен.

URL для App Store Connect (після деплою):
- Privacy Policy URL: `https://info.monetnyidvir.com/privacy.html`
- Support URL: `https://info.monetnyidvir.com/support.html`
- Marketing URL: `https://info.monetnyidvir.com/`

---

## Варіант A — Cloudflare Pages (рекомендовано, домен уже в Cloudflare)
1. Залий цю теку `website/` у GitHub-репозиторій (напр. `monetnyidvir-site`),
   щоб HTML були в КОРЕНІ репо (або вкажи `website` як корінь у налаштуваннях).
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git** →
   обери репо. Build command: ЗАЛИШ ПОРОЖНІМ. Output directory: `/` (або `website`,
   якщо файли в підтеці). Deploy.
3. Pages → твій проєкт → **Custom domains → Set up a custom domain** →
   введи `info.monetnyidvir.com`. Cloudflare сам додасть CNAME у DNS і випустить SSL.
4. Готово: `https://info.monetnyidvir.com`. (Окремий CNAME-файл не потрібен.)

## Варіант B — GitHub Pages
1. Залий теку у репо (HTML у корені гілки, напр. `main`).
2. Repo → **Settings → Pages** → Source: Deploy from a branch → `main` / `/root`.
3. Постав свій піддомен у файл `CNAME` (вже є, заміни значення).
4. У Cloudflare DNS додай запис:
   - Type **CNAME**, Name `info`, Target `<твій-логін>.github.io`, Proxy **DNS only** (сіра хмара) — щоб GitHub видав SSL. (Можна Proxied + SSL/TLS «Full», але DNS-only простіше.)
5. У GitHub Pages увімкни **Enforce HTTPS** (після випуску сертифіката).

---

## Як змінювати тексти
Тексти Політики/Умов мають збігатися з тими, що в застосунку
(`lib/features/legal/screens/static_info_screen.dart`). Якщо правиш одне — онови й інше.
Редакцію (дату) став однакову.
