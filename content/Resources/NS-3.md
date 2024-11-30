---
date: 2024-11-11
description: A comprehensive guide to installing and running NS-3, a network simulator, using manual methods or Docker containers.
---

NS-3 is a discrete-event network simulator used for research and education in networking. It is the successor to NS-2, providing a more modular and efficient framework for simulating networks. NS-3 offers better support for wireless networks, IPv6, and improved performance compared to NS-2.

There are two options to install ns-3:

1. Build it manually on a Linux machine of choice
2. Use my pre-built docker image to run it with just two commands on any OS (Win / Mac / Linux).

---

## Manual Installation

### Pre-requisites

- CMAKE is essential for building from source
  - Configure it to path
- Python should be configured to path
- If using a fresh Ubuntu or any Debian-based Linux distro, then the following command will install everything:

```bash
sudo apt install g++ python3 cmake ninja-build git gir1.2-goocanvas-2.0 python3-gi python3-gi-cairo python3-pygraphviz gir1.2-gtk-3.0 ipython3 tcpdump wireshark sqlite sqlite3 libsqlite3-dev qtbase5-dev qtchooser qt5-qmake qtbase5-dev-tools openmpi-bin openmpi-common openmpi-doc libopenmpi-dev doxygen graphviz imagemagick python3-sphinx dia imagemagick texlive dvipng latexmk texlive-extra-utils texlive-latex-extra texlive-font-utils libeigen3-dev gsl-bin libgsl-dev libgslcblas0 libxml2 libxml2-dev libgtk-3-dev lxc-utils lxc-templates vtun uml-utilities ebtables bridge-utils libxml2 libxml2-dev libboost-all-dev
```

> [!NOTE]
> It is not essential to install all of these packages, but installing them ensures the smooth working of ns-3.

### Installation / Setup

[Tutorial](https://www.nsnam.org/docs/release/3.43/tutorial/singlehtml/index.html#downloading-ns-3)

Download the latest release from [https://www.nsnam.org/releases/latest](https://www.nsnam.org/releases/latest)

Unpack it in a working directory of your choice

```bash
tar xjf ns-allinone-3.43.tar.bz2
```

> [!TIP] > `tar` is available by default on Linux and macOS systems. Windows users need to find an alternative.

Change into the `ns-3.*` directory which is inside the directory just extracted

```bash
cd ns-allinone-3.43/ns-3.43
```

Configure to enable examples and tests

```bash
./ns3 configure --enable-examples --enable-tests
```

Use `ns3` to build ns-3

```bash
./ns3 build
```

Run your first sample program

```bash
./ns3 run first
```

### Python Configuration

[3.8. Using Python to Run ns-3 — Manual](https://www.nsnam.org/docs/manual/html/python.html)

`cppyy` is required. Install it

```bash
pip install cppyy==3.1.2
# or
pip install cppyy==2.4.2
```

> [!NOTE]
> Installing `cppyy==3.1.2` also runs fine, but I was getting some materialize symbols warnings. Turns out using `cppyy==2.4.2` solves this issue.

Configure ns-3 to support python-bindings

```bash
./ns3 configure --enable-python-bindings
```

To run programs, there are two ways:

1. One is to run a ns-3 shell 1. `./ns3 shell` 2. `python3 examples/wireless/mixed-wired-wireless.py`
2. Other is to use the ‘run’ option to ns-3 1. `./ns3 run examples/wireless/mixed-wired-wireless.py`

Use the `--no-build` option to run the program without invoking a project rebuild. This option may be useful to improve execution time when running the same program repeatedly but with different arguments, such as from scripts

```bash
./ns3 run --no-build examples/wireless/mixed-wired-wireless.py
```

#### Usage

1. Put any Python file which uses ns-3 modules in the `scratch` folder inside `ns-3.*` folder
2. Then run the following command: `./ns3 run [scratch/YOUR_FILE_NAME.py]`

#### Install Pip Wheel (Optional)

If you seek intellisense and code completions from VS-Code or your editor of choice, you must install the `ns3` package.

Just use `pip install ns3==[YOUR NS-3 VERSION]` to install it.

You can find the exact version for your case here: [https://pypi.org/project/ns3/#history](https://pypi.org/project/ns3/#history)

Example: `pip install ns3==3.43.post9`

---

## Docker Container Installation

### Pre-requisites

- Docker correctly configured installed and added to path

### Docker Image Pulling

Pull my ns-3 docker image from the following resource:

[https://hub.docker.com/repository/docker/avcton/ns-3.43-ubuntu](https://hub.docker.com/repository/docker/avcton/ns-3.43-ubuntu)

```bash
docker pull avcton/ns-3.43-ubuntu:latest
```

### Usage / Container Launching

Open terminal and navigate to your working directory (i.e, where you will keeping your code files)

```bash
cd [YOUR PATH TO WORKING DIR]
```

Next, just run the docker container from my ns-3 docker image

#### **For Linux Users:**

```bash
docker run -it --rm --name ns-3.43-ubuntu -v "$(pwd):/ns-allinone-3.43/ns-3.43/code" avcton/ns-3.43-ubuntu
```

#### **For Windows Users:**

Command Prompt:

```bash
docker run -it --rm --name ns-3.43-ubuntu -v "%cd%:/ns-allinone-3.43/ns-3.43/code" avcton/ns-3.43-ubuntu
```

PowerShell / VSCode Terminal:

```bash
docker run -it --rm --name ns-3.43-ubuntu -v "${PWD}:/ns-allinone-3.43/ns-3.43/code" avcton/ns-3.43-ubuntu
```

> [!INFO]
> The above docker command will run the container, attach it to your current terminal session and mount the current directory opened in your terminal to the code directory in the root ns-3 build folder.

Now, any file or folder inside your current directory will be mapped to the `code` directory in the ns-3 container. Also, you will now see the linux shell attached to your terminal. This is the inside of ns-3 container.

You can run `ls` to see the contents of the ns-3 package. Also the `code` folder inside it is mapped to the directory from where you ran `docker run`.

To run your program, simply place it in the directory from where you ran the `docker run` command and run the following command in docker attached terminal:

```bash
./ns3 run code/[YOUR FILE NAME.py or YOUR FILE NAME.cc]
```

![CleanShot 2024-11-09 at 2.27.38@2x.png](https://res.craft.do/user/full/4e82ab31-e413-c084-6038-2cc92ac90342/doc/984D04A3-F743-44CA-BAF6-2A7AD99C7381/B1C0C442-6BCB-4B80-A738-3F3E13A1F387_2/hmM7XRfD1pyRGrWkTxxz4yO9SLZy7a7bNdxdWFKRp08z/CleanShot%202024-11-09%20at%202.27.382x.png)

> [!NOTE]
> If you get any `Failed to materialize symbols` error, then it's totally fine to ignore it for now.

That’s it. You now have a working ns-3 container mounted to your working directory.

Cheers 🥂

---

## Python Testing Simulation

You can use the following python code to test your ns-3 simulation:

```python
from ns import ns

ns.cppyy.cppdef("""
                        using namespace ns3;

                        Callback<void,Ptr<const Packet>,const Address&,const Address&>
                        make_sinktrace_callback(void(*func)(Ptr<const Packet>, const Address&,const Address&))
                        {
                                return MakeCallback(func);
                        }
                """)

# Define the trace callback
def SinkTracer(packet: ns.Packet, src_address: ns.Address, dst_address: ns.Address) -> None:
        print(f"At {ns.Simulator.Now().GetSeconds():.0f}s, '{dst_address}' received packet"
                    f" with {packet.__deref__().GetSerializedSize()} bytes from '{src_address}'")

# Create two nodes
csmaNodes = ns.NodeContainer()
csmaNodes.Create(2)

# Connect the two nodes
csma = ns.CsmaHelper()
csma.SetChannelAttribute("DataRate", ns.StringValue("100Mbps"))
csma.SetChannelAttribute("Delay", ns.TimeValue(ns.NanoSeconds(6560)))
csmaDevices = csma.Install(csmaNodes)

# Install the internet stack
stack = ns.InternetStackHelper()
stack.Install(csmaNodes)

# Assign Ipv4 addresses
address = ns.Ipv4AddressHelper()
address.SetBase(ns.Ipv4Address("10.1.2.0"), ns.Ipv4Mask("255.255.255.0"))
csmaInterfaces = address.Assign(csmaDevices)

# Setup applications
echoServer = ns.UdpEchoServerHelper(9)

serverApps = echoServer.Install(csmaNodes.Get(0))
serverApps.Start(ns.Seconds(1))
serverApps.Stop(ns.Seconds(10))

echoClient = ns.UdpEchoClientHelper(csmaInterfaces.GetAddress(0).ConvertTo(), 9)
echoClient.SetAttribute("MaxPackets", ns.UintegerValue(10))
echoClient.SetAttribute("Interval", ns.TimeValue(ns.Seconds(1)))
echoClient.SetAttribute("PacketSize", ns.UintegerValue(1024))

clientApps = echoClient.Install(csmaNodes.Get(1))
clientApps.Start(ns.Seconds(2))
clientApps.Stop(ns.Seconds(10))

# Populate routing tables
ns.Ipv4GlobalRoutingHelper.PopulateRoutingTables()

# Setup the trace callback
sinkTraceCallback = ns.cppyy.gbl.make_sinktrace_callback(SinkTracer)
serverApps.Get(0).__deref__().TraceConnectWithoutContext("RxWithAddresses", sinkTraceCallback);

# Set the simulation duration to 11 seconds
ns.Simulator.Stop(ns.Seconds(11))

# Run the simulator
ns.Simulator.Run()
ns.Simulator.Destroy()
```

This should print out the following output:

![CleanShot 2024-11-09 at 2.37.12@2x.png](https://res.craft.do/user/full/4e82ab31-e413-c084-6038-2cc92ac90342/doc/984D04A3-F743-44CA-BAF6-2A7AD99C7381/9184C43D-F3C5-49DE-A028-2AE07774C381_2/72IjxVRmwhStEIJTy25peDX1DjbDYdlDA1TWqFRJepcz/CleanShot%202024-11-09%20at%202.37.122x.png)
