# FormMaster

**FormMaster** is a Spring Boot–based form management application designed to create, manage, and organize dynamic forms, questions, answer types, users, modules, recurrence settings, and related master data.

The project follows a structured backend architecture using **Spring Boot, Spring Data JPA, Spring Security, JWT authentication, PostgreSQL, and REST APIs**, with a JSP/jQuery-based frontend.

---

## 🚀 Features

### 🔐 Authentication & Security

* User login and authentication
* JWT-based authentication
* JWT authentication filter
* Role-based authorization
* Secure password storage using BCrypt
* Stateless Spring Security configuration
* Session/token validation
* HTTP-only cookie support for JWT
* Protected REST APIs

### 👤 User Management

* Create users
* Update users
* View users
* Delete users
* Role assignment
* User activation/deactivation
* User validity period
* Profile image support
* Password generation
* Email notification for newly created users

### 📝 Form Management

* Create forms
* Edit forms
* View forms
* Delete forms
* Configure form recurrence
* Assign modules to forms
* Manage questions inside forms

### ❓ Question Management

* Create and manage questions
* Associate questions with forms
* Assign answer types to questions
* Configure validation-related properties
* Manage question characteristics

### 🔤 Answer Type Management

* Create answer types
* Update answer types
* View answer types
* Delete answer types
* Configure validation fields for answer types
* Support different types of form responses

### 📦 Master Data Management

The application contains multiple master modules such as:

* Module Master
* Category Master
* Subcategory Master
* Product Master
* User Master
* Role Master
* Answer Type Master
* Question Master
* Recurrence Master

### 📧 Email Service

* SMTP-based email sending
* User account notification
* Automatically generated credentials
* Email service integration using `JavaMailSender`

### 🖼️ File & Image Management

* User profile image upload
* Product image upload
* Static resource configuration
* Uploaded image display in frontend

### 📊 Data Management

* REST APIs for CRUD operations
* Search functionality
* Pagination support where applicable
* DataTables integration
* Excel export functionality

---

## 🏗️ Technology Stack

| Layer           | Technology                 |
| --------------- | -------------------------- |
| Backend         | Java, Spring Boot          |
| Web             | Spring MVC, REST API       |
| Security        | Spring Security, JWT       |
| ORM             | Spring Data JPA, Hibernate |
| Database        | PostgreSQL                 |
| Frontend        | JSP, HTML, CSS, JavaScript |
| UI              | Bootstrap, jQuery          |
| AJAX            | jQuery AJAX                |
| Tables          | DataTables                 |
| Email           | JavaMailSender / SMTP      |
| Build Tool      | Maven                      |
| API Testing     | Postman                    |
| Version Control | Git / GitHub               |

---

## 📁 Project Structure

```text
FormMaster
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── in.fm.formmaster
│   │   │       │
│   │   │       ├── AnswerType
│   │   │       ├── Category
│   │   │       ├── Form
│   │   │       ├── Module
│   │   │       ├── Product
│   │   │       ├── Question
│   │   │       ├── Recurrance
│   │   │       ├── Role
│   │   │       ├── User
│   │   │       ├── Security
│   │   │       ├── Mail
│   │   │       ├── Exception
│   │   │       ├── Utility
│   │   │       └── constants
│   │   │
│   │   ├── resources
│   │   │   ├── application.properties
│   │   │   └── static
│   │   │
│   │   └── webapp
│   │       └── WEB-INF
│   │           └── views
│   │
│   └── test
│
├── pom.xml
└── README.md
```

---

## 🔄 Authentication Flow

```text
             ┌───────────────┐
             │     Login     │
             │  Email + Pass │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ Auth Service  │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ Validate User │
             │  & Password   │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ Generate JWT  │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ Store / Return│
             │ Authentication│
             │    Token      │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ Protected API │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ JWT Filter    │
             │ Validates JWT │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ Security      │
             │ Context       │
             └───────────────┘
```

---

## 📝 Form Management Flow

```text
Module
   │
   ▼
Form
   │
   ├──────────────► Recurrence
   │
   ▼
Question
   │
   ▼
Answer Type
   │
   ▼
Validation / Characteristics
```

A form can contain multiple questions, and each question can be associated with an appropriate answer type and validation configuration.

---

## 🔐 JWT Security Architecture

The application uses JWT-based authentication with Spring Security.

### Login

```text
Client
  │
  │ POST /auth/login
  ▼
Authentication Controller
  │
  ▼
Authentication Service
  │
  ▼
UserRepository
  │
  ▼
Password Verification
  │
  ▼
JWT Generation
  │
  ▼
Client
```

### API Request

```text
Client
  │
  │ Authorization: Bearer <JWT>
  ▼
JwtAuthenticationFilter
  │
  ▼
Extract JWT
  │
  ▼
Extract Username / Email
  │
  ▼
Load UserDetails
  │
  ▼
Validate JWT
  │
  ▼
SecurityContextHolder
  │
  ▼
Protected Controller
```

---

## 🗄️ Database

The application uses **PostgreSQL** as the primary relational database.

Major entities include:

```text
User
 │
 ├── Role
 │
 └── UserSession

Form
 │
 ├── Module
 │
 ├── Recurrence
 │
 └── Question
       │
       └── AnswerType
```

JPA/Hibernate is used for entity mapping and database operations.

---

## 📧 Email Flow

When a new user is created, the application can generate login credentials and send them through the configured SMTP service.

```text
Admin
  │
  ▼
Create User
  │
  ▼
Save User in Database
  │
  ▼
Generate Password
  │
  ▼
Email Service
  │
  ▼
SMTP Server
  │
  ▼
User Email
```

---

## ⚙️ Configuration

Before running the application, configure the required database, JWT, and mail properties.

Example:

```properties
spring.application.name=formmaster

# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/formmaster
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# JWT
jwt.secret=YOUR_JWT_SECRET
jwt.expiration=YOUR_EXPIRATION_TIME

# Mail
spring.mail.host=YOUR_SMTP_HOST
spring.mail.port=YOUR_SMTP_PORT
spring.mail.username=YOUR_EMAIL
spring.mail.password=YOUR_EMAIL_PASSWORD
```

> **Important:** Never commit real database passwords, JWT secrets, SMTP passwords, API keys, or other credentials to GitHub.

Use environment variables or a local configuration file for sensitive values.

---

## ▶️ Running the Application

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

### 2. Navigate to the project

```bash
cd FormMaster
```

### 3. Configure PostgreSQL

Create a PostgreSQL database and update the database configuration in your application properties.


```
run the main Spring Boot application class directly from your IDE.

---

## 🧪 API Testing

The REST APIs can be tested using **Postman**.

Typical API flow:

```text
1. Login
      ↓
2. Receive JWT
      ↓
3. Send JWT with protected requests
      ↓
4. Test CRUD APIs
      ↓
5. Verify database changes
```

Example authentication header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## 📌 Example API Categories

### Authentication

```text
POST /auth/login
GET  /auth/me
```

### Users

```text
GET    /api/users
POST   /api/users/create
PUT    /api/users/{id}
DELETE /api/users/{id}
```

### Modules

```text
GET    /api/module/getAll
POST   /api/module/create
PUT    /api/module/{id}
DELETE /api/module/{id}
```

Additional endpoints are available for Forms, Questions, Answer Types, Recurrence, Products, Categories, and other master modules.

---

## 🔒 Security Best Practices

* Passwords are stored using BCrypt hashing.
* Protected APIs require authentication.
* JWT validation is handled through Spring Security.
* Sensitive credentials should not be committed to Git.
* Database credentials should be stored outside source control.
* SMTP credentials should be protected using environment variables.
* JWT secrets should be sufficiently long and securely stored.

---

## 🛠️ Development Tools

Recommended tools for development and testing:

* IntelliJ IDEA / Eclipse / Spring Tool Suite
* PostgreSQL / pgAdmin
* Postman
* Git
* GitHub
* Maven
* Docker Desktop *(optional)*

---

## 📈 Future Enhancements

Possible future improvements include:

* Redis-based token/session management
* Kafka event integration
* Improved role and permission management
* Advanced form builder
* Dynamic question rendering
* Form submission and response management
* Audit logging
* Advanced reporting and analytics
* Docker containerization
* CI/CD pipeline
* Automated unit and integration testing

---

## 👩‍💻 Project Purpose

FormMaster is developed as a backend-focused application to provide a structured platform for managing forms and their supporting master data while applying practical enterprise development concepts such as:

* REST API development
* Spring Boot architecture
* Database relationships
* JPA/Hibernate
* Authentication and authorization
* JWT security
* Email integration
* File uploads
* CRUD operations
* API testing
* Exception handling
* Frontend-backend integration

---

## 📄 License

This project is intended for educational, development, and project purposes.

---

## ⭐ Acknowledgement

Built using **Java + Spring Boot + PostgreSQL + Spring Security + JWT + JSP/jQuery**.

If you find this project useful, feel free to ⭐ the repository.
