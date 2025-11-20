# CoCoHub - CollabFlow

CoCoHub (CollabFlow) is an advanced project management tool that combines standard Kanban boards with AI-powered merge conflict detection, helping development teams reduce conflicts by 80% before they happen.

## 🚀 Quick Start

```bash
# 1. Start Backend
cd backend
mvn spring-boot:run

# 2. Start Frontend
cd frontend-vite
npm run dev
```

Open: http://localhost:5173

## 📚 Documentation

All documentation is organized in the **[mdFiles/](mdFiles/)** folder.

**Start here**: [mdFiles/INDEX.md](mdFiles/INDEX.md)

### Quick Links
- 🎯 [Quick Start Guide](mdFiles/START_HERE.md)
- 🧪 [Testing Guide](mdFiles/QUICK_TEST_GUIDE.md)
- 🔧 [Troubleshooting](mdFiles/TROUBLESHOOTING_SIGNUP.md)
- 📖 [Complete Documentation Index](mdFiles/INDEX.md)

## 🛠️ Tech Stack

**Backend:**
- Java 17+ with Spring Boot
- MySQL Database
- JPA/Hibernate
- Spring Security

**Frontend:**
- React 18 with Vite
- Redux Toolkit
- TailwindCSS
- Axios

## 🗄️ Database

Database: `pmt` on MySQL (localhost:3306)

See [Database Structure](mdFiles/DATABASE_STRUCTURE.md) for complete schema.

## 🔐 Authentication

Currently using simple localStorage-based authentication.
JWT implementation planned for future.

## 📝 API Endpoints

Base URL: `http://localhost:8080/api/v1`

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/test` - Health check

See [Endpoint Mapping](mdFiles/ENDPOINT_MAPPING.md) for details.

## 🧪 Testing

Use the test files in the root directory:
- `test-registration.html` - Browser-based testing
- `test-api.bat` - Windows command line testing
- `verify-backend.js` - Node.js testing

## 📦 Project Structure

```
CoCoHub/
├── backend/              # Spring Boot backend
├── frontend-vite/        # React + Vite frontend
├── mdFiles/             # All documentation
├── test-*.html/js/bat   # Testing utilities
└── README.md            # This file
```

## 🤝 Contributing

1. Check documentation in `mdFiles/`
2. Follow existing code structure
3. Test before committing

## 📄 License

[Add your license here]

---

For detailed setup and troubleshooting, see the [documentation index](mdFiles/INDEX.md).
