---
date: 2025-01-11
date_modified: 2025-02-26
highlight: Resources/Concepts
publish: true
---

> Cross Site Scripting (XSS) is a web security vulnerability allowing attackers to execute malicious scripts in user browsers, potentially compromising sensitive data and interactions.

## Types of XSS

1. **Reflected XSS**:
   - User input immediately returned in web application responses without sanitization.
   - Typically exploited through error messages or search results.
2. **Stored XSS (Persistent)**:
   - Malicious script stored on a web application's server (e.g., in comments), executed when accessed by users.
3. **DOM-Based XSS**:
   - Attack payload executed in the browser by modifying the DOM environment without altering the HTTP response.

## Possible Attacks

- **Cookie Theft**: Access session cookies to hijack accounts.
- **Keylogging**: Record keystrokes to capture sensitive data.
- **Phishing**: Embed fake forms to steal credentials.

## Countermeasures

1. **Encoding**:
   - Escape user input to prevent browsers from interpreting it as code (e.g., replacing `<` with `&lt;`).
2. **Validation**:
   - Filter malicious input using blacklisting or whitelisting techniques.
3. **Input Handling Contexts**:
   - Ensure user input is processed securely in all contexts (HTML, attributes, JavaScript).
4. **Secure Input Handling**:
   - Perform sanitization both server-side (to protect against XSS) and client-side (to protect against DOM-based XSS).
