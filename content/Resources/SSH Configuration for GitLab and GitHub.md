---
date: 2025-01-19
date_modified: 2025-02-25
highlight: Resources
publish: true
---

## 1. Install Git

Download and install Git based on your operating system:

- **Windows**: [Download Git for Windows](https://git-scm.com/)
- **macOS/Linux**: Use your system's package manager.

### macOS/Linux Installation Commands

```bash
# macOS
brew install git

# Linux (Debian/Ubuntu)
sudo apt update && sudo apt install git

# Linux (Fedora)
sudo dnf install git
```

### Confirm Git Installation

```bash
git --version
```

## 2. Generate an SSH Key Pair

Generate a new SSH key pair to securely connect to GitLab or GitHub.

### SSH Key Generation Command

```bash
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
```

- Replace `your.email@example.com` with your email associated with GitLab or GitHub.
- Save the key in the default location:
  - Windows: `C:\Users\<YourUsername>\.ssh\id_rsa`
  - macOS/Linux: `~/.ssh/id_rsa`

### Optional Passphrase Setup

Set a passphrase during key generation for enhanced security.

## 3. Add the SSH Key to the SSH Agent

Start the SSH agent and add your private key.

### Start SSH Agent

Different platforms have different ways to start SSH Agent.

#### SSH Agent on Windows (Git Bash)

```bash
eval "$(ssh-agent -s)"
```

#### SSH Agent on macOS

```bash
eval "$(ssh-agent -s)"
```

For macOS 10.12 and later:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_rsa
```

#### SSH Agent on Linux

```bash
eval "$(ssh-agent -s)"
```

### Add the SSH Key to the Agent

```bash
ssh-add ~/.ssh/id_rsa
```

This code depends on the SSH dependencies installed and correctly configured and might not work on Windows.

## 4. Add the SSH Key to GitLab or GitHub

Copy your public key and add it to your GitLab or GitHub account.

### Copy the Public Key

```bash
cat ~/.ssh/id_rsa.pub
```

### Add Key to GitLab

1. Log in to GitLab.
2. Navigate to **Preferences > SSH Keys**.
3. Paste the public key and click **Add key**.

### Add Key to GitHub

1. Log in to GitHub.
2. Navigate to **Settings > SSH and GPG keys > New SSH key**.
3. Paste the public key and click **Add SSH key**.

## 5. Test the SSH Connection

Verify the SSH connection to ensure everything is configured correctly.

### Test Connection for GitLab

```bash
ssh -T git@gitlab.com
```

Expected output:

```
Welcome to GitLab, <username>!
```

### Test Connection for GitHub

```bash
ssh -T git@github.com
```

Expected output:

```
Hi <username>! You've successfully authenticated.
```

---

## Notes

Some things to consider and keep in mind.

### Default SSH Key Path

Ensure the SSH key is saved in the default location (`~/.ssh/id_rsa`). If using a custom path, specify it when adding the key to the SSH agent or connecting.

### Multiple SSH Keys Configuration

Use an `~/.ssh/config` file to manage multiple SSH keys.

Example configuration:

```plaintext
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_github

Host gitlab.com
  HostName gitlab.com
  User git
  IdentityFile ~/.ssh/id_rsa_gitlab
```
