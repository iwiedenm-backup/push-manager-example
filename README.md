# Push Manager Example

## Get Started
### 1. Clone
Clone this repository to your computer via GitHub desktop or command line

### 2. Clone
Create a Firebase project in your firebase console [https://console.firebase.google.com](https://console.firebase.google.com). For example, we'll call our project `push-manager-example`.

### 3. Initialize Firebase
Initialize Firebase
```shell
cd your/push-manager-example/directory/
init firebase
```

### 4. Select Firebase services
Select Firestore, Functions, Hosting, then press `enter`.
```shell
◯ Database: Deploy Firebase Realtime Database Rules
◉ Firestore: Deploy rules and create indexes for Firestore
◉ Functions: Configure and deploy Cloud Functions
◉ Hosting: Configure and deploy Firebase Hosting sites
◯ Storage: Deploy Cloud Storage security rules
```

### 5. Choose your Firebase project
Select our project titled `push-manager-example`.
```shell
? Select a default Firebase project for this directory:
  awesome-project-1 (Awesome Project 1)
❯ push-manager-example (push-manager-example)
  awesome-project-2 (Awesome Project 2)
```

### 6. Continue setting up with defaults
Continue through the setup until you reach the end, use all defaults or configure your own, it doesn't matter!


### 7. Install functions dependencies
Navigate to the functions folder and install.
```shell
cd functions
npm install
```
