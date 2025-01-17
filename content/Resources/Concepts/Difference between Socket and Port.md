---
name: Difference between Socket and Port
date: 2024-12-23
date_modified: 2025-01-13
tags:
  - faq
highlight: Resources/Concepts
publish: true
---

Socket is basically the medium through which application layer communicates with the transport layer. Now, there may be multiple applications running in an operating system, so ==each application will have their own socket==. Whenever they need to send something down the network, they will send the data to their corresponding socket.

> [!analogy]
> Think of socket as a call service. Each app will have a separate call line to communicate with the transport layer. Therefore, when an app needs to talk, it calls and after it feels like its done talking, it cuts the call.

Now, the thing is that a socket is only an understanding between the application and transport layer. Outside world is not aware of its existence. So how will the outside world communicate with this app now?

Well, this is done through a ==PORT==. Think of a port as a `window`. A house (computer) may have multiple windows (ports). Each member (application) of the house (computer) can be reached by the outside world through their window (port), located in their room (socket).
So basically, outside world sends the data for the app to its port and the transport layer then through this port, determines which app to further forward this data.

> [!info]
> A port is bind to a socket. Therefore, each socket will been assigned a unique port.
> Through this assigned port, Transport layer multiplexes and demultiplex data.
