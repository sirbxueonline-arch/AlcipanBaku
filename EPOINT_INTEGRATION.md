# EPOINT Payment Gateway Integration Guide

> **Author**: Senior Backend Engineer  
> **Date**: January 26, 2026  
> **Version**: 1.0.0 (Production Ready)  
> **Source of Truth**: EPOINT API Documentation v1.0.3

## 1. Architecture Overview

This integration is built as a **Middleware Layer** within the Next.js backend (`/api` routes). It acts as a secure bridge between the frontend (client) and the EPOINT banking system.

### Core Components:
1.  **Payment Initiation** (`/api/payment/create-order`):
    *   Receives minimal data (amount, items) from the client.
    *   Injects secure credentials (using server-side environment variables).
    *   Encodes and Signs the payload using SHA1 binary hashing.
    *   Requests a redirect URL from EPOINT and returns it to the client.

2.  **Callback Processing** (`/api/payment/result`):
    *   Public webhook endpoint that EPOINT POSTs to after a transaction.
    *   **Crucial Security Step**: Re-generates the signature independently using the local `PRIVATE_KEY` and compares it with the incoming signature.
    *   Authenticates legitimate bank responses and rejects spoofed requests.

3.  **Status Check** (`/api/payment/status`):
    *   On-demand verification endpoint to query the status of a specific order or transaction ID directly from EPOINT's ledger.

---

## 2. Implementation Reference

### A. Payment Request Creation
**File:** `src/app/api/payment/create-order/route.ts`

This module strictly adheres to the "Formation of data and signature" section of the documentation.

**Key Logic:**
```typescript
// 1. Prepare JSON Payload
const requestParams = {
    public_key: process.env.EPOINT_PUBLIC_KEY,
    amount: amount,
    currency: 'AZN',
    language: 'az',
    order_id: uniqueOrderId,
    description: description,
    success_redirect_url: successUrl,
    error_redirect_url: errorUrl,
};

// 2. Base64 Encode JSON
const jsonString = JSON.stringify(requestParams);
const data = Buffer.from(jsonString).toString('base64');

// 3. Generate Signature (SHA1 Binary -> Base64)
// Formula: base64_encode( sha1( private_key + data + private_key, 1) )
const signString = PRIVATE_KEY + data + PRIVATE_KEY;
const signature = crypto.createHash('sha1').update(signString).digest('base64');
```

---

### B. Callback Validation
**File:** `src/app/api/payment/result/route.ts`

This module implements the security gate described in "Callback function processing".

**Validation Logic:**
```typescript
const { data, signature } = incomingFormData;

// 1. Re-construct the signature locally
const signString = PRIVATE_KEY + data + PRIVATE_KEY;
const mySignature = crypto.createHash('sha1').update(signString).digest('base64');

// 2. Strict Equality Check
if (mySignature !== signature) {
    throw new Error("Security Alert: Signature mismatch!");
}

// 3. Decode Data only if verification passes
const decodedData = JSON.parse(Buffer.from(data, 'base64').toString());
```

---

### C. Payment Status Check
**File:** `src/app/api/payment/status/route.ts`

Implements the `/api/1/get-status` endpoint logic.

---

## 3. Bank Response Codes (Reference)

| Code | Description | Action Required |
| :--- | :--- | :--- |
| `000` | **Confirmed** | Mark order as paid. |
| `116` | Insufficient funds | Prompt user to check balance. |
| `100` | Rejected (General) | Generic failure, ask to try another card. |
| `500` | Error | System error. |

## 4. Security Checklist

- [x] **Raw Card Data**: Never touches our server. User enters it only on EPOINT's secure page.
- [x] **Credentials**: `EPOINT_PRIVATE_KEY` is stored in environment variables, never committed to git.
- [x] **Signature Verification**: Implemented on all callbacks.
- [x] **HTTPS**: Production URL `https://alcipanbaku.com` uses SSL.

---

## 5. Usage Example

**Initiate Payment (Frontend):**
```javascript
const response = await fetch('/api/payment/create-order', {
  method: 'POST',
    body: JSON.stringify({ 
    amount: 50.00, 
    items: [{ id: 1, name: "Gypsum Board" }] 
  })
});
const { url } = await response.json();
window.location.href = url; // Redirect user to Bank
```
