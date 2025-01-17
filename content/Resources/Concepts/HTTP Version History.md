---
name: HTTP Version History
date: 2024-12-25
date_modified: 2025-01-13
highlight: Resources/Concepts
publish: true
---

| **Feature**                | **HTTP/1.0**               | **HTTP/1.1**                                   | **HTTP/2**                               | **HTTP/3**                                        |
| -------------------------- | -------------------------- | ---------------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| **Introduction Year**      | 1996                       | 1997                                           | 2015                                     | 2022                                              |
| **Connection Handling**    | One request per connection | Persistent connections (keep-alive by default) | Multiplexing over a single connection    | Multiplexing over QUIC (UDP-based)                |
| **Header Compression**     | None                       | None                                           | HPACK (binary header compression)        | QPACK (optimized for QUIC)                        |
| **Multiplexing**           | No                         | No                                             | Yes (over a single TCP connection)       | Yes (over QUIC, eliminates head-of-line blocking) |
| **Head-of-Line Blocking**  | Severe                     | Severe                                         | Reduced (still present at TCP layer)     | Eliminated (QUIC-based transport)                 |
| **Security**               | No native support          | No native support                              | TLS 1.2 or higher (optional)             | TLS 1.3 (mandatory with QUIC)                     |
| **Request/Response Model** | Text-based, synchronous    | Text-based, synchronous                        | Binary framing, asynchronous             | Binary framing, asynchronous                      |
| **Performance**            | Limited                    | Improved via pipelining and caching            | Faster (multiplexing, fewer connections) | Fastest (QUIC-based improvements)                 |
| **Error Recovery**         | Basic                      | Basic                                          | Limited to TCP retries                   | Better (QUIC's built-in retransmissions)          |
| **Connection Type**        | TCP                        | TCP                                            | TCP                                      | QUIC (UDP-based)                                  |
| **Caching**                | Basic headers (Expires)    | Enhanced headers (Cache-Control, ETag)         | Same as HTTP/1.1                         | Same as HTTP/1.1                                  |
| **Upgrade Path**           | New connections required   | New connections required                       | Uses ALPN to negotiate upgrade           | Native protocol, no need for upgrade              |
