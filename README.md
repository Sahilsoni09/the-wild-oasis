# 🏨 Wild Oasis – Hotel Management Dashboard

A fully functional hotel management dashboard for managing cabins, bookings, guests, and sales – built using **React**, **Supabase*

---

## Test Login Credentials
Email address - sahiltest@test.com
password - 123456789


---

## 🧠 Project Overview

Wild Oasis is a full-stack hotel admin panel designed for hotel employees to manage bookings, check-ins, cabins, and guest data. It simulates a real-world SaaS dashboard with role-based authentication and dynamic features.

---

## 📦 Tech Stack

- **Frontend:** React, React Router,styled component , React Query, React Hook Form, Recharts  
- **Backend:** Supabase 
- **Dev Tools:** Vite, ESLint, Prettier, Vercel

---

## ✅ Key Features

### 🔐 Authentication
- Hotel employees only
- Sign up restricted to inside the app
- Profile editing with avatar upload

### 🛏️ Cabins
- Table view of all cabins with photo, capacity, price, and discount
- Create, update, and delete cabins
- Upload cabin photos to Supabase storage

### 📆 Bookings
- View all bookings with arrival/departure dates, status, guest info
- Status: `unconfirmed`, `checked-in`, `checked-out`
- Track paid amount, breakfast status, number of nights/guests

### 🧾 Check-In / Check-Out
- Check-in and out bookings with a single click
- Accept payments on guest arrival
- Add breakfast during check-in if not already included

### 👤 Guests
- Guest details include full name, email, national ID, nationality, and country flag

### 📊 Dashboard
- Summary stats for last 7/30/90 days
- View guest check-ins for today
- Charts for:
  - Total vs extras (breakfast) sales
  - Booking duration trends

### ⚙️ App Settings
- Admins can update:
  - Breakfast price
  - Minimum/maximum nights per booking
  - Maximum guests per cabin

### 🌙 Dark Mode
- Fully responsive dark mode toggle

---


