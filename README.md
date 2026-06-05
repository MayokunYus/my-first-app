# My First App 🚀

A simple Next.js app — perfect for learning how to deploy with GitHub + Vercel.

---

## 🛠 What's in this project

```
my-first-app/
├── app/
│   ├── layout.tsx      ← wraps every page (like a template)
│   ├── page.tsx        ← the homepage (edit this!)
│   ├── page.module.css ← styles for the homepage
│   └── globals.css     ← styles that apply everywhere
├── next.config.js      ← Next.js settings
├── package.json        ← lists the packages this app needs
└── tsconfig.json       ← TypeScript settings
```

---

## 🚀 How to deploy (step by step)

### Step 1 — Put this on GitHub

1. Go to [github.com](https://github.com) and create a free account if you don't have one
2. Click the **+** icon → **New repository**
3. Name it `my-first-app`, keep it Public, click **Create repository**
4. Follow the instructions GitHub shows you to push your code up
   - If you're new to git, the commands will look like:
     ```bash
     git init
     git add .
     git commit -m "my first commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/my-first-app.git
     git push -u origin main
     ```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **Add New → Project**
3. Find your `my-first-app` repo and click **Import**
4. Leave all the settings as-is — Vercel detects Next.js automatically
5. Click **Deploy** and wait ~1 minute
6. 🎉 You'll get a live URL like `my-first-app.vercel.app`

### Step 3 — Make a change and watch it auto-deploy

1. Edit `app/page.tsx` — change any text you like
2. Save the file
3. Run these commands:
   ```bash
   git add .
   git commit -m "updated my app"
   git push
   ```
4. Go to your Vercel dashboard — it's already re-deploying!

---

## 💻 Run it locally (on your computer)

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 Key concepts

| Term | What it means |
|------|--------------|
| **Repository (repo)** | A folder for your code on GitHub |
| **Commit** | A saved snapshot of your changes |
| **Push** | Sending your commits to GitHub |
| **Deploy** | Making your app live on the internet |
| **Vercel** | A platform that hosts your Next.js app for free |

---

Built with ❤️ using Next.js 14
