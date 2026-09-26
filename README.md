# 🏋️ Fitness Tracker - Microservices Application

A microservice-based fitness tracking app built with Spring Boot and Google Gemini AI. Log your activities and get intelligent insights powered by Gemini API.

---

**Services:**
- **Gateway** - Entry point with Keycloak authentication
- **User Service** - User management
- **Activity Service** - Activity logging, publishes to Kafka
- **AI Service** - Consumes Kafka events, generates insights via Gemini
- **Keycloak** - OAuth2/JWT authentication
- **Config Server** - Centralized configuration
- **Eureka** - Service discovery
- **Kafka** - Event streaming
<img width="1402" height="738" alt="Screenshot 2026-01-25 at 2 24 38 PM" src="https://github.com/user-attachments/assets/e0ced1c1-0ae9-4866-8a6f-a02f01ece21c" />


---

## ⚙️ Tech Stack

- **Spring Boot 3.x** - Microservices framework
- **Spring Cloud** - Gateway, Config, Eureka
- **Apache Kafka** - Event-driven messaging
- **Keycloak** - Authentication & authorization
- **Google Gemini API** - AI-powered insights
- **PostgreSQL** - Database
- **Maven** - Build tool
- **Docker** - Containerization

---

## 🧠 How It Works

### 1. Login
<img width="1375" height="624" alt="Screenshot 2025-11-09 at 6 32 15 PM" src="https://github.com/user-attachments/assets/84b4adee-0022-4996-bb27-2f12b01ef9ac" />


User authenticates via Keycloak and receives JWT token.

### 2. Log Activity
<img width="1400" height="606" alt="Screenshot 2025-11-09 at 6 32 27 PM" src="https://github.com/user-attachments/assets/42c6d6b3-0be3-47be-adb4-9909f0859130" />


User logs fitness activities:
- **Activity Type:** Running, Cycling, Gym, etc.
- **Duration:** Minutes
- **Calories Burned**

### 3. Get AI Insights
```
Activity Service → Kafka → AI Service → Gemini API → Insights
```
AI analyzes the activity and provides:
- Performance feedback
- Training recommendations
- Calorie optimization tips
- Progress tracking

---

# 🔐 Security and Authentication

Fitness AI uses **Keycloak, OAuth 2.0, and JWT-based authentication** to
secure communication between clients, the API Gateway, and backend
microservices.

## How the Security Architecture Works

``` text
                         1. Login
                    +----------------+
                    |     Client     |
                    +----------------+
                            |
                            | Credentials
                            v
                    +----------------+
                    |    Keycloak    |
                    | Identity /     |
                    | Authorization  |
                    |    Server      |
                    +----------------+
                            |
                            | 2. JWT Access Token
                            v
                    +----------------+
                    |     Client     |
                    +----------------+
                            |
                            | 3. API Request
                            | Authorization:
                            | Bearer <JWT>
                            v
                    +----------------+
                    |  API Gateway   |
                    +----------------+
                            |
                            | 4. Validate JWT
                            |
                  +---------+---------+
                  |                   |
             Valid Token         Invalid Token
                  |                   |
                  v                   v
          Route Request          Reject Request
                  |
                  v
        +---------------------+
        | Backend Microservice |
        +---------------------+
```

## 🔑 Keycloak

**Keycloak** acts as the centralized identity and access management
system.

Instead of implementing login and authentication separately inside every
microservice, Keycloak handles the authentication process and issues
access tokens to authenticated users.

This provides a centralized security layer:

``` text
Client
   |
   v
Keycloak
   |
   | JWT Access Token
   v
API Gateway
   |
   +------> User Service
   |
   +------> Activity Service
   |
   +------> AI Service
```

## 🔐 OAuth 2.0

**OAuth 2.0** provides the authorization framework used for obtaining
and using access tokens.

A simplified flow is:

1.  The user authenticates through Keycloak.
2.  Keycloak issues an access token.
3.  The client includes the access token with API requests.
4.  The API Gateway validates the token.
5.  If the token is valid and the required permissions are present, the
    request is routed to the appropriate microservice.

OAuth 2.0 primarily addresses the authorization question:

> **Is this client authorized to access this protected resource?**

Authentication and authorization are related but different concepts:

-   **Authentication:** Who are you?
-   **Authorization:** What are you allowed to access or do?

## 🎟️ JWT Access Token

The access token issued by Keycloak is represented as a **JSON Web Token
(JWT)**.

The client sends the JWT with every protected API request using the HTTP
`Authorization` header:

``` http
Authorization: Bearer <JWT>
```

A JWT contains signed claims that can identify the user and provide
information such as roles and token expiration.

Conceptually:

``` json
{
  "sub": "user-id",
  "roles": ["USER"],
  "exp": "expiration-time"
}
```

The API Gateway verifies the JWT before allowing the request to
continue.

The gateway can verify:

-   The token was issued by the trusted Keycloak server
-   The JWT signature is valid
-   The token has not expired
-   Required roles or permissions are present

## 🚪 API Gateway Security

All protected API requests pass through the API Gateway.

``` text
Client
   |
   | Authorization: Bearer <JWT>
   v
API Gateway
   |
   +---- Invalid / expired token ----> 401 / 403
   |
   +---- Valid token ---------------> Microservice
```

This prevents unauthenticated or unauthorized requests from reaching
protected backend services.

The Gateway therefore acts as the first security boundary for the
microservices architecture.

## 🧩 How OAuth 2.0, JWT, and Keycloak Work Together

These technologies have different responsibilities:

  -----------------------------------------------------------------------
  Component                           Responsibility
  ----------------------------------- -----------------------------------
  **Keycloak**                        Centralized identity and access
                                      management

  **OAuth 2.0**                       Authorization framework and
                                      token-based authorization flow

  **JWT**                             Signed token format used to carry
                                      authentication and authorization
                                      claims

  **API Gateway**                     Validates incoming tokens and
                                      protects backend services
  -----------------------------------------------------------------------

In simple terms:

``` text
Keycloak
   |
   | Authenticates user and issues token
   v
OAuth 2.0
   |
   | Defines authorization/token flow
   v
JWT
   |
   | Carries signed user and authorization information
   v
API Gateway
   |
   | Validates JWT
   v
Microservices
```

This provides a **centralized, token-based security model** for the
distributed microservices architecture while avoiding the need for each
service to implement its own login mechanism.

------------------------------------------------------------------------

## 🎯 Features

✅ Activity logging (multiple types)  
✅ AI-powered insights via Gemini  
✅ Event-driven architecture (Kafka)  
✅ Secure authentication (Keycloak)  
✅ Microservices architecture  
✅ Service discovery (Eureka)  
✅ Centralized config management

---

## 👨‍💻 Author

**Abdullah Jamil**  
Backend & AI Enthusiast

🔗 [LinkedIn](https://www.linkedin.com/in/abdullah-jamill/)

---

**⭐ Star this repo if you find it helpful!**
