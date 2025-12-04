# 🚀 Teaching Kids App - Startup Guide

## ✅ Port Configuration

| Application | Port | URL |
|------------|------|-----|
| **NestJS Server** | 3000 | http://localhost:3000 |
| **Next.js Web** | 4000 | http://localhost:4000 |
| **Expo Mobile** | 8081 | Metro bundler (auto) |

---

## 📱 Starting All Applications

### **Terminal 1: Backend Server (NestJS)**
```bash
cd packages/server
pnpm start:dev
```
**Status:** ✅ Server running on **http://localhost:3000**

---

### **Terminal 2: Web App (Next.js)**
```bash
cd apps/web
pnpm dev
```
**Status:** ✅ Web app running on **http://localhost:4000**

---

### **Terminal 3: Mobile App (Expo)**

#### **Option A: Start Expo Dev Server**
```bash
cd apps/mobile
pnpm start
```

Then choose your platform:
- Press **`a`** - Run on Android device/emulator
- Press **`i`** - Run on iOS simulator
- Press **`w`** - Run in web browser
- Scan QR code with Expo Go app on your phone

#### **Option B: Direct Platform Launch**

**For Android (Real Device or Emulator):**
```bash
cd apps/mobile
pnpm android
```
> **Requirements:**
> - Android Studio installed
> - Android emulator running OR
> - Physical Android device connected via USB with USB debugging enabled

**For iOS (Simulator):**
```bash
cd apps/mobile
pnpm ios
```
> **Requirements:**
> - macOS only
> - Xcode installed
> - iOS Simulator

**For Web Browser:**
```bash
cd apps/mobile
pnpm web
```

---

## 📱 Testing on Real Device

### **Android Real Device:**

1. **Enable Developer Options:**
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
   - Go back to Settings → Developer Options
   - Enable "USB Debugging"

2. **Connect Device:**
   ```bash
   # Check if device is connected
   adb devices
   ```

3. **Run App:**
   ```bash
   cd apps/mobile
   pnpm android
   ```

### **iOS Real Device:**

1. **Install Expo Go App** from App Store
2. **Start Expo:**
   ```bash
   cd apps/mobile
   pnpm start
   ```
3. **Scan QR Code** with your iPhone camera
4. App will open in Expo Go

### **Using Expo Go (Easiest for Real Devices):**

1. **Install Expo Go:**
   - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Start Dev Server:**
   ```bash
   cd apps/mobile
   pnpm start
   ```

3. **Connect:**
   - **Android:** Scan QR code with Expo Go app
   - **iOS:** Scan QR code with Camera app → Opens in Expo Go

---

## 🔧 Quick Commands Reference

### **Check What's Running on Ports:**
```bash
lsof -i :3000  # Check server
lsof -i :4000  # Check web
lsof -i :8081  # Check Expo metro bundler
```

### **Kill Process on Port:**
```bash
lsof -ti:3000 | xargs kill -9  # Kill port 3000
lsof -ti:4000 | xargs kill -9  # Kill port 4000
```

### **Check Android Devices:**
```bash
adb devices
```

### **Check iOS Simulators:**
```bash
xcrun simctl list devices
```

---

## 🐛 Troubleshooting

### **Web App Port Already in Use:**
If you see "Port 4000 is in use":
```bash
lsof -ti:4000 | xargs kill -9
pnpm dev
```

### **Server Port Already in Use:**
If you see "Port 3000 is in use":
```bash
lsof -ti:3000 | xargs kill -9
pnpm start:dev
```

### **Mobile App Not Connecting:**
1. Ensure phone and computer are on the same WiFi network
2. Check firewall settings
3. Try tunnel mode:
   ```bash
   pnpm start --tunnel
   ```

### **Android Emulator Not Starting:**
```bash
# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd <emulator_name>
```

---

## 📋 Pre-flight Checklist

Before starting development:

- [ ] Node.js v20+ installed (`node -v`)
- [ ] pnpm installed (`pnpm -v`)
- [ ] Dependencies installed (`pnpm install` from root)
- [ ] For Android: Android Studio + SDK installed
- [ ] For iOS: Xcode installed (macOS only)
- [ ] For Real Device: Expo Go app installed

---

## 🎯 Development Workflow

**Typical startup sequence:**

1. **Start Backend Server** (Terminal 1)
2. **Start Web App** (Terminal 2)
3. **Start Mobile App** (Terminal 3)
4. **Open in Browser/Device**

**URLs to bookmark:**
- 🌐 Web: http://localhost:4000
- 🔧 Server: http://localhost:3000
- 📱 Mobile: Expo Dev Tools (opens automatically)

---

## 🔄 Hot Reload

All apps support hot reload:
- **Web:** Changes auto-refresh in browser
- **Mobile:** Shake device → "Reload" or auto-reloads
- **Server:** Auto-restarts on file changes (watch mode)

---

## 📦 Building for Production

### **Web App:**
```bash
cd apps/web
pnpm build
pnpm start  # Runs on port 4000
```

### **Mobile App:**
```bash
cd apps/mobile
# For Android APK
eas build --platform android

# For iOS IPA
eas build --platform ios
```

### **Server:**
```bash
cd packages/server
pnpm build
pnpm start:prod
```
