# DTN store-and-forward

Portfolio claim (Emergency Mesh): multi-hop TTL flooding, LRU duplicate suppression, epidemic DTN persistence.

---

## Say this (60 seconds)

> “When cell towers and internet are down, phones still talk peer-to-peer. **DTN** means **Delay-Tolerant Networking** — we don’t assume a continuous path. A phone **stores** a message and **forwards** it when it meets another phone later. That’s **store-and-forward**. We flood with a **TTL** so messages die, and **LRU duplicate suppression** so the same SOS isn’t rebroadcast forever.”

---

## Plain English

### Normal internet vs disaster mesh

| Normal app | Your mesh |
|---|---|
| Server always reachable | No server / no tower |
| TCP retries while online | Device may be offline for hours |
| One path to destination | Opportunistic: whoever is nearby |

**DTN** = networking designed for long delays and broken links (think satellites, rural, disaster). Your civilian mesh is the same idea on phones.

### Store-and-forward

1. **Store** — keep the packet on device (disk/memory).  
2. **Forward** — when you meet a peer (Bluetooth/Wi‑Fi Direct/etc.), hand them a copy.  
3. They store and forward again → **multi-hop**.

“Epidemic” style: message spreads like a rumor until TTL expires or enough witnesses seen.

### Words on your portfolio (decode)

| Term | Meaning |
|---|---|
| **Multi-hop** | A → B → C; not only direct neighbors. |
| **TTL** | Time-to-live / hop budget — stop infinite loops. |
| **LRU duplicate suppression** | Remember recently seen message IDs; drop repeats (Least Recently Used cache). |
| **3-witness quorum** (your copy) | Require multiple independent sightings before treating a panic as confirmed — cuts false alarms. |

---

## Interview trap

**Q:** Is this the same as offline-first apps (WhatsApp queue)?  
**A:** Related idea (queue until online), but WhatsApp eventually hits a **server**. DTN mesh assumes **no internet ever** for that mission — peers are the network.

**Q:** Did you implement the full IETF DTN stack (BP/Bundle Protocol)?  
**A:** Be honest: you built a **DTN-style** store-and-forward mesh for the app (epidemic relay + persistence), not necessarily a standards-complete Bundle Protocol stack — unless you actually did. Don’t claim RFC compliance you can’t demo.

---

## Quick quiz

1. What problem does store-and-forward solve that TCP doesn’t?  
2. Why TTL + duplicate suppression?  
3. Why might SOS need a witness quorum?

*(Answers: 1 long partitions / no end-to-end path · 2 stop floods & loops · 3 reduce panic spam / false SOS)*

---

## Watch later

- “Delay Tolerant Networking explained”
- “Epidemic routing / store and forward”
- “Bluetooth mesh vs ad hoc disaster apps” (context, not identical to your stack)
