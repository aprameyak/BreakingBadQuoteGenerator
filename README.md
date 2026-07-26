# BreakingBadQuoteGenerator

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)

## About

**BreakingBadQuoteGenerator** is a single-page web app that surfaces random quotes from Breaking Bad on demand. Built with **React** and **TypeScript**, it fetches from a public Breaking Bad quote API and displays the quote alongside the character who said it, updating instantly on each button press without a page reload.

## Features

- Fetches random quotes from the Breaking Bad API on each request
- Displays the quote text and character attribution together
- Generate button triggers a new quote fetch with no page reload
- Custom React hook (`useQuote`) encapsulates all fetching and state logic
- Dedicated service layer (`quoteService`) separates API calls from UI components
- Typed with TypeScript throughout — props, API responses, and state all have explicit types

## Technology Stack

- **Frontend**: React, TypeScript
- **API**: Breaking Bad Quotes API

## Deployment

Visit the live site at [https://breakingbadquotes-puce.vercel.app](https://breakingbadquotes-puce.vercel.app)
