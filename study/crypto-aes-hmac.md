# AES-256-CBC & HMAC-SHA256

Portfolio claim (Emergency Mesh): family check-ins encrypted client-side; SOS beacons integrity-checked.

---

## Say this (60 seconds)

> “On the mesh, **private family messages** are encrypted on the phone before they hop — **AES-256-CBC**, with a key derived from a shared secret using **PBKDF2**. Relay phones only see ciphertext; they can’t read the message. **Public SOS beacons** aren’t secret (neighbors must see ‘help’), but we attach an **HMAC-SHA256** so nodes can tell a real beacon from a forged panic spam.”

---

## Plain English

### AES-256-CBC — “lock the letter in a box”

| Piece | Meaning |
|---|---|
| **AES** | Standard cipher almost everyone uses for “make this blob unreadable.” |
| **256** | Key length = 256 bits. Longer key → harder to brute-force. Industry default for “serious.” |
| **CBC** | *Cipher Block Chaining* — mode of operation. Each block of plaintext is mixed with the previous ciphertext block before encrypting. Needs an **IV** (initialization vector) so the same message doesn’t always look identical on the wire. |

**Mental model:** You and your family share a password/secret → derive a key → encrypt on device → mesh forwards opaque bytes → only someone with the key decrypts.

**PBKDF2 (10,000 iterations)** (also on your mesh section): turns a human password into a stronger key by hashing it many times with salt. Slows guessing attacks.

**What CBC is *not*:** modern apps often prefer **AES-GCM** (encrypt + authenticate in one). CBC alone does **not** prove the ciphertext wasn’t tampered with — that’s why people pair it with HMAC or use GCM. Your portfolio pairs AES-CBC (privacy) with HMAC (integrity) for different message types.

### HMAC-SHA256 — “wax seal on the envelope”

| Piece | Meaning |
|---|---|
| **Hash** | Fingerprint of data (SHA-256). Change one bit → fingerprint changes. |
| **HMAC** | Hash with a **secret key** baked in. Attacker without the key can’t forge a valid fingerprint. |
| **SHA-256** | The hash function inside. |

**Mental model:** SOS text is public. Anyone can *see* it. HMAC answers: “was this produced by someone who knows our beacon key, or is it junk/spoof?”

**Encrypt vs sign (interview trap):**
- **Encrypt (AES)** → confidentiality (hide content).
- **HMAC** → integrity + authenticity (detect tampering / forgery).  
  Not the same as a full public-key digital signature (RSA/ECDSA), but same *job* in a shared-secret mesh: “this wasn’t forged by a random peer.”

---

## How it maps to *your* product story

From your Emergency Mesh copy:
1. Family check-in → encrypt with AES-256-CBC (+ PBKDF2) → hops are blind.
2. Public SOS → visible alert + HMAC-SHA256 so the mesh can drop forged panic.

If asked “did you invent AES?” → **No.** You **applied** standard crypto correctly for offline P2P constraints.

---

## Quick quiz (answer out loud)

1. Why encrypt family messages but only HMAC the SOS?  
2. What does an IV do in CBC?  
3. Difference between a hash and an HMAC?

*(Answers: 1 privacy vs public alert+anti-forge · 2 same plaintext ≠ same ciphertext · 3 HMAC needs a secret key)*

---

## Watch later (search YouTube)

- “AES explained simply”
- “CBC vs GCM encryption”
- “HMAC vs digital signature”
- “PBKDF2 password hashing”
