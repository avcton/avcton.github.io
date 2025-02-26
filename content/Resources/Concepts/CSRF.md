---
date: 2025-01-11
date_modified: 2025-02-26
highlight: Resources/Concepts
publish: true
---

> Cross Site Request Forgery (CSRF) is an attack that exploits authenticated users to execute unauthorized actions on a web application.

- **Mechanism**:
	- Victims unknowingly send malicious requests to trusted sites via their browser, often using session cookies.
- **Impact**:
    - Varies by user privileges:
        - Regular users: Funds transfers, password changes.
        - Admin users: Full system compromise.
- **Examples**:
	- ING Direct: Illicit money transfers.
	- McAfee: System configuration changes.
	- Netflix (2006): Altered accounts, added DVDs.
	- YouTube (2008): User actions exploited.

## CSRF Techniques

- **Exploitation**:
	- **POST Requests**: HTML forms with hidden inputs submitted automatically or deceiving users (e.g., "Click to see cat photos").
	- **GET Requests**: URLs manipulated to include malicious parameters (e.g., transferring funds).
- **Browser Security and Same-Origin Policy (SOP)**:
	- Ensures JavaScript from one origin cannot access data from another.
	- Determines origin by protocol, domain, and port.

## CSRF Countermeasures

- **Synchronizer Token Pattern (STP)**:
	- Embed a unique, unpredictable token in each form.
	- Server validates the token with every request.
	- Variants include:
	- Session-independent or dependent tokens.
	- HMAC of session identifiers.
- **Source Headers**:
	- **Origin Header**:
		- Indicates request origin (scheme, hostname, port).
		- Introduced to prevent CSRF and cross-domain attacks.
	- **Referer Header**:
		- Shows the URL of the referring page.
		- Useful for memory-limited systems but may leak sensitive data.
