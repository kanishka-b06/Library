# 📚 Smart Library Book Availability System

> A smart web-based solution that helps users check book availability before visiting the library.

## Overview

The **Smart Library Book Availability System** is designed to simplify the process of finding and tracking books in a library. Users can search for books, check individual copy availability, view expected return dates, and receive notifications when a book becomes available.

The system helps reduce unnecessary library visits and improves the overall book-searching experience.

## Features

### User Features

- 🔐 User login
- 🔍 Book search and filtering
- 📚 Category-based browsing
- 📦 Multiple physical copy tracking
- 🟢 Available, Issued, and Overdue status
- 📅 Expected return dates
- 🔔 Availability notifications
- 💬 Borrower contact/request option
- 📱 WhatsApp pre-filled messaging
- ❤️ Wishlist and saved books
- 📖 Borrowing history
- Support for textbooks, novels, and story books

### Admin Features

- 📊 Admin dashboard
- ➕ Add and manage books
- 📦 Manage physical copies
- 🆔 Assign unique Copy IDs
- 📤 Issue books
- 📥 Record returns
- ⚠️ Track overdue books
- 👥 Manage users
- 🔔 Manage notification requests
- View library statistics and reports

## System Workflow

```text
Login
  ↓
Dashboard
  ↓
Search Book
  ↓
Check Availability
  ↓
Available ──────→ View Details → Visit Library
  │
  └── Unavailable → View Due Date
                         ↓
                  Notify / Request
                         ↓
                    Book Returned
                         ↓
                  Status Updated
                         ↓
                    User Notified
