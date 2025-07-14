# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `bun dev` - Start Vite development server
- **Build**: `bun build` - Build TypeScript files to dist/ using Bun's bundler with minification
- **Code formatting/linting**: `bun check` - Run Biome formatter and linter with auto-fix
- **Preview**: `bun preview` - Preview built application

## Project Architecture

This is a React + TypeScript business card application using:

- **Framework**: React 19 with TypeScript, built with Vite and SWC
- **Styling**: Tailwind CSS v4 with dark mode support
- **Build tool**: Bun for bundling, Vite for development
- **Code quality**: Biome for formatting and linting (tab indentation, double quotes)

### Key Architecture Patterns

- **Data Loading**: Uses `useBusinessCardData` hook to fetch card data from `/public/data/info.json`
- **Component Structure**: Split into logical sections (HeaderSection, ContactInfoSection, BottomAccent)
- **Type Safety**: Strong TypeScript typing with `BusinessCardData` interface in `src/types/index.ts`
- **Responsive Design**: Mobile-first responsive card with hover effects and smooth transitions

### File Structure

- `src/BusinessCard.tsx` - Main card component that composes all sections
- `src/hooks/useBusinessCardData.ts` - Data fetching logic with error handling
- `src/components/` - Individual card sections (Header, ContactInfo, BottomAccent, Icons)
- `src/types/index.ts` - TypeScript interface definitions
- `public/data/info.json` - Business card data source

### Development Notes

- Uses Bun as package manager and bundler (not npm)
- Biome replaces ESLint/Prettier for code quality
- Application expects Japanese text for loading/error states
- Card data can be either an object or array (takes first element if array)