# Project Overview

This is a full-stack web application built with modern technologies, featuring a React frontend with TypeScript, an Express.js backend, and PostgreSQL database with Drizzle ORM. The application appears to be a portfolio website showcasing professional experience and achievements.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Deployment**: Static files served from Express backend

### Backend Architecture
- **Runtime**: Node.js with TypeScript (ESM modules)
- **Framework**: Express.js for REST API
- **Build Tool**: esbuild for server bundling
- **Development**: tsx for TypeScript execution
- **Session Storage**: PostgreSQL-based sessions with connect-pg-simple

### Database Architecture
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Zod integration for schema validation

## Key Components

### Frontend Components
- **Portfolio Sections**: Hero, Experience, Projects, Skills, Contact
- **UI Components**: Complete shadcn/ui component library implementation
- **Navigation**: Responsive navigation with smooth scrolling
- **Theme System**: Dark theme with custom CSS variables
- **Form Handling**: React Hook Form with Zod validation

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route system for API endpoints
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom logging middleware for API requests

### Shared Resources
- **Database Schema**: Centralized schema definitions with Drizzle
- **Type Safety**: Shared types between frontend and backend
- **Validation**: Zod schemas for runtime validation

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Storage interface abstracts database operations using Drizzle ORM
4. **Response Handling**: Type-safe responses flow back through the stack
5. **UI Updates**: React components re-render based on server state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for Neon
- **drizzle-orm**: Type-safe SQL ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **TypeScript**: Static type checking
- **esbuild**: Fast JavaScript bundler for backend
- **Drizzle Kit**: Database schema management

### UI/UX Libraries
- **class-variance-authority**: Component variant utilities
- **clsx**: Conditional className utility
- **lucide-react**: Icon library
- **wouter**: Lightweight router

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution
- **Database**: Environment-based connection string
- **Error Overlay**: Replit-specific error handling

### Production
- **Frontend**: Static build served by Express
- **Backend**: Compiled JavaScript with esbuild
- **Database**: PostgreSQL with connection pooling
- **Session Storage**: PostgreSQL-based session store

### Environment Configuration
- **DATABASE_URL**: Required for database connection
- **NODE_ENV**: Environment detection for development/production
- **REPL_ID**: Replit-specific environment detection

## Changelog
```
Changelog:
- July 07, 2025. Initial portfolio website setup with Apex template design
- July 07, 2025. Added profile picture and resume download functionality
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```