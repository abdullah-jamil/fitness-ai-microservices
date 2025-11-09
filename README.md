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

## 🔐 Security

- **OAuth2/JWT** authentication via Keycloak
- All API requests require Bearer token
- Gateway validates tokens before routing

---

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
