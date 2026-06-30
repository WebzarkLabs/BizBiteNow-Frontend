# BizBitsNow: Hyper-Local Full-Stack SaaS Platform 🚀

BizBitsNow is an enterprise-grade, multi-tenant hyper-local e-commerce and automated delivery SaaS platform engineered for local merchants/sellers and delivery networks. The system bridges a premium responsive frontend engine with a highly robust **Dual-Protocol Backend Framework (HTTP REST APIs + Real-Time WebSockets Engine)**.

The platform guarantees data integrity via **ACID Database Transactions**, enables secure background payment loops using **Razorpay Webhooks**, handles media routing via **Cloudinary**, pushes live alerts through **Firebase Admin SDK (FCM)**, and optimizes logistics through **Smart Mohalla Hub Clustering**.

---

## 🏗️ Platform System Architecture

The platform architecture coordinates cross-functional execution layers between the client presentation views and cloud infrastructure services:

* **Presentation Layer:** Micro-interaction driven dashboard layouts managed with React, state syncing hooks, and animated Tailwind CSS components.
* **Network Pipeline Layer:** Synchronous HTTP REST Gateways running parallel to a stateful, bi-directional, real-time **Socket.io Isolated Memory Mapping Engine**.
* **Data Processing Layer:** MongoDB Replica Set configurations enabling atomic multi-document rollbacks via isolated Mongoose session blocks to safely guard customer loyalty balances and coupon consumption states.

---

## 🛠️ Technology Stack Ecosystem

### Frontend Engineering Hub
* **Core View Engine:** React (Vite-powered SPA bundling environment)
* **Styling Framework:** Tailwind CSS
* **Routing Strategy:** React Router DOM (Guarded Context Routes)
* **Real-time Pipeline:** Socket.io Client Engine
* **State Management:** React Context API + LocalStorage Hooks
* **Visual Graph Analysis:** Recharts / Chart.js integration

### Backend Infrastructure Engine
* **Runtime Core:** Node.js (v22+) & Express.js
* **Persistence Tier:** MongoDB Atlas (Multi-Node Clusters supporting Native Transactions)
* **Object Data Modeling:** Mongoose ORM
* **Cloud Asset Management:** Cloudinary SDK
* **Payment Settlement Hub:** Razorpay Gateway API & HMAC-SHA256 Webhooks verification
* **Cloud Push Network:** Firebase Admin SDK (FCM Router)
* **Background Scheduler Engine:** Node-Cron Processor

---

## 📁 Repository Directory Blueprints
```text
BizBitsNow/
├── backend/                   # 🚀 Core Enterprise Server Engine
│   ├── src/
│   │   ├── app.js             # API Routing endpoints registration mapping
│   │   ├── config/
│   │   │   ├── cloudinary.js  # Cloudinary dynamic uploads configuration
│   │   │   ├── razorpay.js    # Merchant checkout infrastructure bindings
│   │   │   ├── serviceAccountKey.json # Firebase Admin SDK certificate
│   │   │   └── socket.js      # Isolated socket map engine instance
│   │   ├── controller/
│   │   │   └── order.controller.js # Transaction-protected endpoints logic
│   │   ├── db/
│   │   │   └── db.js          # Mongoose replica connection bootstrapper
│   │   ├── models/            # Document Schemas (Order, Customer, Product, Seller)
│   │   └── utils/
│   │       ├── birthdayCron.js # Cron processor lifecycle loops
│   │       └── fcmDispatcher.js # Decoupled modular Firebase push routing proxy
│   ├── server.js              # Native HTTP bootstrapper entry point script
│   └── .env
│
├── frontend/                  # 💻 Premium Merchant Dashboard Interface
│   ├── src/
│   │   ├── assets/            # Interface vector iconography and identity graphics
│   │   ├── components/        # Shared components (Sidebar, ProtectedLayout, ToastAlert)
│   │   ├── context/
│   │   │   ├── AuthContext.jsx # LocalStorage-backed JWT auth session state hook
│   │   │   └── SocketContext.jsx # Stateful persistent real-time socket listeners
│   │   ├── views/
│   │   │   ├── AuthPortal.jsx # Animated Seller/Delivery Login panel switch
│   │   │   ├── Overview.jsx   # Metrics aggregations layout panels
│   │   │   ├── OrderStream.jsx # Live order life-cycle queue manager
│   │   │   ├── RadarClusters.jsx # Plus Tier regional clustering hub
│   │   │   └── LoyaltyMatrix.jsx # Gamified stamps benchmarking terminal
│   │   ├── App.jsx            # Master Application Router entry-point node
│   │   └── main.jsx
│   └── tailwind.config.js
```
## ./backend/.env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/BizBitsNow?retryWrites=true&w=majority
JWT_SECRET_KEY=your_highly_secured_cryptographic_jwt_token_string

CLOUDINARY_CLOUD_NAME=your_cloudinary_space_identity_name
CLOUDINARY_API_KEY=your_cloudinary_integration_api_key
CLOUDINARY_API_SECRET=your_cloudinary_integration_secret_token_key

RAZORPAY_KEY_ID=rzp_test_your_razorpay_public_key_id
RAZORPAY_KEY_SECRET=your_razorpay_private_secret_key_string
RAZORPAY_WEBHOOK_SECRET=your_razorpay_secure_webhook_handshake_secret

FIREBASE_SERVICE_ACCOUNT_JSON=./src/config/serviceAccountKey.json

## ./frontend/.env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_WS_SERVER_URL=http://localhost:3000


##🚀 Setup & Execution Procedures

1. System Core Installation
** git clone [https://github.com/yourusername/BizBitsNow.git](https://github.com/yourusername/BizBitsNow.git)
** cd BizBitsNow
   
2.Booting Backend Engine
** cd backend 
** npm install
# Place your download serviceAccountKey.json into ./src/config/
** npm run dev

3. Booting Frontend Engine
** cd frontend
** npm install
** npm run dev
